const express = require('express'); // import express
const app = express();  // create an express app    
const port = 3000;      // we will use this later

//code for creating a server
app.get('/', (req, res) => {
    res.send('Hello, wosdfdsrld!');
    console.log(`Server listening at http://localhost:${port}`);
});

//static routing
app.get('/profile', (req, res) => {
    res.send('Hello from profile');
});

//dynamic routing
app.get('/profile/:username', function (req, res) {
    res.send(`hello from ${req.params.username}`);
});

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });


app.set('view engine', 'ejs');

app.render('/index', function (req, res) {
    res.send("index", { title: 'Hey title', message: 'Hello there!' });
});




app.listen(3000); // this is the same as the above line
















