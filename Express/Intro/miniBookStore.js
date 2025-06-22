const express = require('express');
const app = express();
const port = 3000;

// use this URL for this http://localhost:3000/info.txt
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.send('📚 Welcome to the Book Store!');
});

app.get('/about',(req,res) => {
    res.send('About our book store');
});

app.get('/contact',(req,res) => {
    res.send('Contact us at contact@bookstore.com');
});

app.get('/books',(req,res) => {
    res.send('List of available books');
});

app.get('/books/:bookId',(req,res) => {

    // use this URL for this http://localhost:3000/books/harry-potter?lang=en&edition=2nd
    const bookId = req.params.bookId;
    const paramsObj = req.params;

    const {lang , edition} = req.query;

    console.log("bookId :",bookId);4
    console.log("bookIdObj :",paramsObj);
    console.log("Query : ",req.query);

    res.send(`Details for book : ${bookId} , Language : ${lang} , Edition : ${edition}`);

});

app.listen(port, () => {
    console.log(`Book store running at http://localhost:${port}`);
});