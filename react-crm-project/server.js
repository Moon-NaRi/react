const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mariaDB = require('mariadb/callback');
const conn = mariaDB.createConnection({
  host: conf.host,
  port: conf.port,
  user: conf.user,
  password: conf.password,
  database: conf.database,
  connectionLimit: conf.connectionLimit
});

app.get('/api/customers', (req, res) => {
  conn.query("SELECT * FROM crm.customers",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

/* ejs 사용
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/api/customers', function (req, res){
  let data;
  conn.query("SELECT * FROM CUSTOMERS", (err, res) => {
    console.log(err);
    console.log(res);
    data = JSON.stringify(res);
    console.log(data);
    conn.end();
  });
  // res.render("main", {data : res, title: 'title'});
  res.send(data);
});

app.listen(3000);
*/

/* Server.js에서 JSON 데이터 형식을 갖는 테스트용 코드
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            "id": 1,
            "image": 'https://placeimg.com/64/64/1',
            "name": '문나리',
            "birthday": '981028',
            "gender": '여자',
            "job": '학생',
          },
          {
            "id": 2,
            "image": 'https://placeimg.com/64/64/2',
            "name": '김유진',
            "birthday": '981028',
            "gender": '여자',
            "job": '백수',
          },
          {
            "id": 3,
            "image": 'https://placeimg.com/64/64/3',
            "name": '박샐리',
            "birthday": '981028',
            "gender": '여자',
            "job": '직장인',
          }
    ]);
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));
