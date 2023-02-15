const express=require('express')
// const exphbs=require('express-handlebars')
const logger=require('./middleware/logger')
const app=express()


//handlebars middleware
// app.engine('handlebars', exphbs({defaultlayout:'main'}));
// app.set('viewengine', 'handlebars');


//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 //members api routes
app.use('/api/members', require('./routes/api/members'))

const PORT=process.env.PORT||5000;
app.listen(PORT, ()=>console.log("server started on port"+ PORT))

//init middleware
//app.use(logger);
