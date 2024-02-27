const express = require('express'); // import express
const app = express();  // create an express app    
const port = 3000;      // we will use this later

//code for creating a server
app.get('/', (req, res) => {
    res.send('Hello, World!');
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



app.set('view engine', 'ejs');

app.get("/index", function (req, res) {
    res.render("index", { name: "ujjwal" })
})

app.use(express.static("./public"));  //static file setup

app.get("/error", function (req, res) {
    throw Error("Something went wrong");
})

// error handling
app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
// app.listen(3000); // this is the same as the above line
















