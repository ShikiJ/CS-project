const express = require('express'); 
const app = express(); 
const bodypareser = require('body-parser');

const urlencoded = bodypareser.urlencoded({extended: false});

const handlebars = require('express-handlebars');  
app.engine('handlebars', handlebars({defaultlayout: 'main'}));
// this set up defalut layout  

app.set('port', process.argv[2]);

app.set('view engine','handlebars'); 

app.use('/assets', express.static('assets')); 
//handle all internal static file requests  

app.get('/',(req, res)=>{
    res.render('homepage');
});

app.get('/gallery',(req, res)=>{
    res.render('gallery');
});


app.get('/download',(req, res)=>{
    res.render('download');
});


app.get('/contact',(req, res)=>{
    res.render('contact');
});

app.post('/contact', urlencoded, (req, res)=>{
    res.render('success', {data:req.body});
    console.log(req.data);
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
  });
/*  
app.listen(3000,()=>{
    console.log("server up runing at port 3000 ");
});*/