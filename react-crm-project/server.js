const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mariaDB = require('mariadb');

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

app.listen(port, () => console.log(`Listening on port ${port}`));