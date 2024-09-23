const { User, Post, Hashtag } = require("../models");

exports.renderProfile = (req, res) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
};

exports.renderJoin = (req, res) => {
  res.render("join", { title: "회원가입 - NodeBird" });
};
/*
exports.renderMain = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      order: [["createdAt", "DESC"]],
    });
    res.render("main", {
      title: "NodeBird",
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
*/

exports.renderMain = async (req, res, next) => {
  try {
    // 클라이언트에서 전달된 현재 페이지 번호를 가져옵니다. 기본값은 1입니다.
    const { currentPage = 1 } = req.query;

    // 페이지 크기와 페이지 패딩 사이즈를 환경 변수에서 읽어옵니다.
    // 환경 변수가 없으면 기본값을 사용합니다.
    const pageSize = parseInt(process.env.PAGE_SIZE, 10) || 15;
    const pagePaddingSize = parseInt(process.env.PAGE_PADDING_SIZE, 10) || 2;

    // Post 모델에서 게시물의 총 개수와 현재 페이지에 해당하는 게시물들을 가져옵니다.
    // 'include'를 사용하여 User 모델을 조인하고, 게시물을 생성일 기준으로 내림차순 정렬합니다.
    // 'limit'과 'offset'을 사용하여 페이지네이션을 적용합니다.
    const { count, rows } = await Post.findAndCountAll({
      include: {
        model: User,
        attributes: ["id", "nick"], // User 모델에서 id와 nick 속성만 가져옵니다.
      },
      order: [["createdAt", "DESC"]], // 게시물을 생성일 기준으로 내림차순 정렬합니다.
      limit: pageSize, // 페이지당 게시물 수를 설정합니다.
      offset: (currentPage - 1) * pageSize, // 현재 페이지에 해당하는 게시물의 시작 위치를 계산합니다.
    });

    // 전체 게시물 수(count)와 페이지당 게시물 수(pageSize)를 사용하여 총 페이지 수를 계산합니다.
    const totalSize = Math.ceil(count / pageSize);

    // 페이지네이션과 게시물 데이터를 포함하여 클라이언트에 HTML을 렌더링합니다.
    res.render("main", {
      title: "NodeBird",
      twits: rows, // 현재 페이지에 해당하는 게시물 목록입니다.
      currentPage: parseInt(currentPage, 10), // 현재 페이지 번호입니다.
      pageSize, // 페이지당 게시물 수입니다.
      pagePaddingSize, // 페이지 링크의 패딩 사이즈입니다.
      totalSize, // 총 페이지 수입니다.
    });
  } catch (err) {
    // 오류가 발생하면 오류를 콘솔에 출력하고 다음 미들웨어로 전달합니다.
    console.error(err);
    next(err);
  }
};

exports.renderHashtag = async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/");
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    return res.render("main", {
      title: `${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
