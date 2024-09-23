const url = require("url");
const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Start server : use ${port}`);
  console.log("익스프레스로 라우터 리펙토링하기");
});

app.get("/", (_, res) => {
  // res.set({"Content-type" : "text/html;charset=utf-8"})
  res.end("Home");
});

//router
app.get("/user", user);
app.get("/feed", feed);

//callBack function
function user(req, res){
  const user = url.parse(req.url, true).query;
  res.json(`[user] name : ${user.name}, age : ${user.age}`);
}

function feed(_, res){
  res.json(`<ul>
    <li>pic1</li>
    <li>pic2</li>
    <li>pic3</li>
    </ul>`);
}

