	var express = require ("express");
	var app = express();
// 1. Intalamos el Middleware body-parser
	var bodyParser = require("body-parser");// 2. Hacemos require de la libreria instalada en consola (npm install body-parser --save) para leer parámetros
	var User = require("./models/user").User;//Hacemos require de la librería en user.js
/*
	var mongoose = require("mongoose");
	var Schema = mongoose.Schema;
- Lo removemos porque ya tenemos nuetro modelo en el archivo user.js exportado - 
*/

	
	//En bases de datos NoSql, un Schema corresponde a una colección y define la forma que tendrán los documentos:
	// Collection => Tablas
	// Documentos => Filas 
	//----------------------------------------------------------------------------------
	/*Conexión con mongoose...
	mongoose.connect("mongodb://localhost/fotos");
		 var userSchemaJSON = {
		 	email: String,
		 	password: String
		 };
    // Establecemos un modelo para la conexión de la base de datos
    var User = mongoose.model("User",user_schema);
	- Lo removemos porque ya tenemos nuetro modelo en el archivo user.js exportado - 
    */



	//Middlewares, usaremos uno para servir archivos estáticos (Imagenes, css's, javascript's, de estos archivos porque no hay compilación de parte del servidor. Todos, suelen ir un una misma carpeta)
	app.use("/estatico",express.static('public')); //"/estatico" se usa como ruta si queremos que nuestros archivos vayan todos a una misma dirección. La nueva ruta desde nuestro navegador deja de ser :9000/css/app.css y ahora sería = :9000/estatico/css/app.css
	


	// 3. Montamos el nuevo Middleware                                               
	app.use(bodyParser.json()); // Para peticiones de tipo application/json
	app.use(bodyParser.urlencoded({extended: true}));
	//Para crear multiples folders para archivos estáticos publicos
	app.use(express.static('assets')); 
    app.set('view engine', 'pug');



    //Definimos rutas de las vistas -----------------------------------------------
    app.get("/",function(req,res){
    	res.render("index");
    });    
    app.get("/login",function(req,res){
    	User.find(function(err,doc){ //Encontrar los datos (RESULTADOS) de la consulta que le estamos ahciendo a MONGODBy mostrarlos en consola.
    		console.log(doc);
    		res.render("login");
    	});
    });



    //Leer parámetros con Body-Parser - Esto busca los archivos (en el body) desde los datos y los estrae. Creamos la ruta /users
    app.post("/users",function(req,res){
    	/* PREVIO A MONGOOSE
    	console.log("Contraseña: " + req.body.password);
    	console.log("Email: " + req.body.email);
    	*///AHORA...
    	//Creamos nuevo usuario para determinar que todo está bien con la conexión MONGOOSE
    	var user = new User({email: req.body.email, password: req.body.password}); //User es el nuevo usuario que se guardará en user
    	  user.save(function(){
    	  	res.send("Hemos recibido sus datos!!!");
    	  });
    });



    app.listen(9000);