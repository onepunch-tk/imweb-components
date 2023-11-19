const express = require("express");
const app = express();
const port = 3000;

// 정적 파일을 제공하기 위한 디렉토리 설정
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
