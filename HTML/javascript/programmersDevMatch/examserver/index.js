const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

let langArr = [
    'javascript',
    'java',
    'php',
    'typescript',
    'asp',
    'jsp',
    'react',
    'python',
    'nodejs',
    'AngelScript',
    'CobolScript',
    'json',
    'jsonjava'
]
app.use(express.json());
app.use(cors());
app.get('/languages', function(req, res){
    let langArr2 = langArr.filter(r=>r.toLowerCase().includes(req.query.keyword))
    res.send({ langArr: langArr2 })
})
app.listen(port, ()=>{
    console.log('연습용 서버 러닝')
})