//require('@google-cloud/debug-agent').start();
let mean =0;
let median =0;
let min =0;
let max =0;
var heartbeatlist=[]
let express = require('express')
let app = express()
let url = require('url')
app.set('view engine', 'ejs')
app.get('/addData', (req, res) => {
console.log(req.query.heartrate);
})
// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route
app.get('/statistic', (req, res) => {
heartbeatlist.push(req.query.heartrate)
min =Math.min(heartbeatlist)
max =Math.max(heartbeatlist)
let half =Math.floor(heartbeatlist.length()/2)
heartbeatlist.sort()
median = heartbeat[half];
let count =heartbeatlist.length()
let sum = 0;
for (let i = 0; i < heartbeatlist.length; i++) {
    sum += heartbeatlist[i]
  }
mean = sum/count
})
app.get('/', (req, res) => {
console.log(req.query.heartrate)
res.render('myview', {max:max, min:min, mean:mean, median:median})
//res.send('GET request to the homepage\n')
})
// POST method route
app.post('/', (req, res) => {
res.send('POST request to the homepage\n')
})
let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))