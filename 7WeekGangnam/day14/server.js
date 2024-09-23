// server.js 파일

const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 5000;
const mongoURI = "mongodb://localhost:27017"; // MongoDB 서버 URI

// CORS 설정 (Cross-Origin Resource Sharing)
app.use(cors());

// MongoDB 클라이언트 생성
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB 클라이언트 연결
client.connect((err) => {
  if (err) {
    console.error("MongoDB 서버에 연결할 수 없습니다."); //
    return;
  }
  console.log("MongoDB 서버에 연결되었습니다.");

  const db = client.db("mydb"); // 데이터베이스 선택
  const collection = db.collection("users"); // 컬렉션 선택 (예시로 'users' 컬렉션 사용)

  // GET 요청을 처리하여 모든 사용자 데이터를 반환하는 API 엔드포인트
  app.get("/users", async (req, res) => {
    try {
      const users = await collection.find().toArray(); // 모든 사용자 데이터를 배열로 가져오기
      res.json(users); // JSON 형식으로 클라이언트에 응답
    } catch (err) {
      console.error("사용자 데이터를 가져오는 중 오류 발생:", err);
      res
        .status(500)
        .json({ message: "사용자 데이터를 가져오는 중 오류 발생" });
    }
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});
