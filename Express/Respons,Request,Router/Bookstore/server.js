const express = require('express');
const app = express();
const port = 3000;

const authorRoutes = require('./routes/author');
const bookRoutes = require('./routes/book');

app.use(express.static('public'));

// app.use(express.json());

app.use('/author',authorRoutes);
app.use('/books',bookRoutes);

app.get('/',(req,res) => {
    console.log('GET request to /');
    res.send('📚 Welcome to the Bookstore Home Page!');
}).post('/',(req,res) => {
    console.log('POST request to /');
    res.send('📚 You did a POST to the Home Page!');
    // res.send(req.body);
});
//or you will do this tell express that if user want get then serve get and else want post then serve post
// app.route('/')
// .get((req,res) => {})
// .post((req,res) => {})

app.put('/',(req,res) => {
    console.log('PUT request to /');
    res.send('📚 You did a PUT to the Home Page!');//to see this response you have to open inspect and in the console you can see this response
});

app.get('/home',(req,res) => {
    res.sendFile('home.html',{root: __dirname + '/templates'});
    //or you can write this also
    // res.sendFile(__dirname+'/templates/home.html');
});

app.get('/api/books',(req,res) => {

    res.json({
        books:[
            {
                id: 1,
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien'
            },
            {
                id: 2,
                title: 'Harry Potter',
                author: 'J.K. Rowling'
            }
        ]

    });
});

app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`);
});