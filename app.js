// console.log("Hello World");
// for (var i=0;i<=100;i++){
//     console.log(i)
// }
// console.log("Loop Finished");
// console.log("Loop Finished");

// var http=require('http');

// http.createserver(function(req,res){
//     res.end("Hello World");
// }
// ).listen(4000);

import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
let users = [
    {userName: 'haider', rollNumber:'2643'},
    {userName: 'ali', rollNumber:'2644'},
    {userName: 'basit', rollNumber:'BSE-20F-003'},
    {userName: 'souhaib', rollNumber:'BSE-20F-080'},
]
// console.log(users[0].userName)

app.post(`/${users[0].userName}`, (req, res, next) => {
    console.log('inside signup ');
    res.end(`${users[0].rollNumber}`);
    next();
});
app.post(`/${users[1].userName}`, (req, res, next) => {
    console.log('inside signup ');
    res.end(`${users[1].rollNumber}`);
    next();
});
app.post(`/${users[2].userName}`, (req, res, next) => {
    console.log('inside signup ');
    res.end(`${users[2].rollNumber}`);
    next();
});
app.post(`/${users[3].userName}`, (req, res, next) => {
    console.log('inside signup ');
    res.end(`${users[3].rollNumber}`);
});

app.use((req, res) => {
    console.log('inside second middleware 1');
    res.end();
})

app.listen(4000, () => {
    console.log('=================== server started on 3000 ===================');
});
