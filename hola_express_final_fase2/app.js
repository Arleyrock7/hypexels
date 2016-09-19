//Llamada a librerias-----------------------------------------------------------
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


	//Montar Middlewares----------------------------------------------------------
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	/*Middlewares para archivos estáticos*/
	app.use("/estaticos",express.static('public'));
	app.use(express.static('assets'));


	//Conexión con mongoose-------------------------------------------------------
	mongoose.connect("mongodb://localhost/fotos");
	var userSchemaJSON = {
		email : String,
		password : String
	};
	var user_schema = new Schema(userSchemaJSON);
	/*Mapear la conexión con Schema*/
	var USer = mongoose.model("USer", user_schema);


	//vistas para renderizar en .PUG----------------------------------------------
	app.set('view engine', 'pug');


	//Roiting de las views--------------------------------------------------------
	app.get("/",function(req,res){
		res.render("index");
	});
	app.get("/login",function(req,res){
		/*Con esto, imprimimos en consola los datos del form -IMPORTANT!-*/
		USer.find(function(err,doc){
			console.log(doc);
			res.render("login");
		});
	});
  app.post("/users",function(req,res){
		var user = new USer({email : req.body.email, password : req.body.password});
		    user.save(function(){
					res.send("Bienvenido! Hemos recibido sus datos!")
				});
		/*console.log("Email : " + req.body.email);
		console.log("Contraseña : " + req.body.password); -IMPORTANT!- */
	});
  app.listen(8080);
