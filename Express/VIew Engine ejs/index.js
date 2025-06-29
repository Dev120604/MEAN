const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    const storeName = 'My Cool Store';
    const featuredProducts = ['Shoes','Hats','Bags'];
    res.render('home',{storeName , featuredProducts});
});

app.get('/product/:id',(req,res) => {
    const productId = req.params.id;

    // In real app, fetch from DB. Here it's hardcoded.
    const product = {
        id : productId,
        name: `Product ${productId}`,
        description: `This is the description of product ${productId}`
    }
    res.render('product', {product});
});

app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
});