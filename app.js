var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); // defino la variable session

let homeRouter = require('./routes/home');
let registrarmeRouter = require('./routes/registrarme');
let loginRouter = require('./routes/login');
let perfilRouter = require('./routes/perfil');
let productoRouter = require('./routes/producto')
let searchResultsRouter = require('./routes/searchResults');
const { nextTick } = require('process');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Session se inicia antes de las rutas
app.use(session(
  {
    secret:'notchanclas',
    saveUninitialized: true,
    resave: false
  }
));

//Pasar datos de session a las vistas. Usaremos un middleware de apolicación.
app.use(function(req, res, next){
  if (req.session.user != undefined){
      res.locals.user = req.session.user
      return next();
    } 
    return next();
  }
)

// app.use(function(res, req, next){
//   //return console.log(req.cookie.InfoUser)
//   if (req.cookies.InfoUser != un,Infodefined && req.session.user == undefined){
//     let idUsuarioEnCookie = req.cookies.InfoUser;

//     db.Usuario.findByPk(idUsuarioEnCookie)
//     .then((user)=>{
//       req.session.user = user.dataValues
//       res.locals.user = user.dataValues
//       return next();
//     }).catch((err)=>{
//       console.log(err)
//     });
//   } else{
//     return next()
//   }
  
// })

app.use('/', homeRouter);
app.use('/registrarme', registrarmeRouter);// <---------------- Esto viene de la etiqueta a de cada producto individual
app.use('/login', loginRouter);
app.use('/perfil', perfilRouter);
app.use('/producto', productoRouter);
app.use('/search-results', searchResultsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
