const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/compute', function(req, res) {
    var spawn = require('child_process').spawn,
        py = spawn('python', ['compute_input.py']),
        data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        dataString = '';

    py.stdout.on('data', function(data) {
        dataString += data.toString();
    });
    py.stdout.on('end', function() {});
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
    res.send('hello world');
})

app.listen(5000, function() {
    console.log('Example app listening on port 5000!')
})