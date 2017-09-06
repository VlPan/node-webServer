const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
})

app.get('/', (request, response) => {
   response.render('home', {
       title: 'Home Page'
   })
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page',
    });
})

app.get('/bad', (request,response) => {
    response.send({
        errorMessage: 'It is not correct page!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!');
});