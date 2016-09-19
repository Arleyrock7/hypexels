//Vamos a definir nuestro Schema, *1 Mongoose tiene un atributo que mapea, nos retorna un objeto: Schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema; // *1 Constructor para generar los Schemas

//Conexión con mongoose...
	mongoose.connect("mongodb://localhost/fotos");
	
/*
	TIPOS DE DATOS QUE SE PUEDEN GUARDAR EN LA BASE DE DATOS MONGODB A TRAVÉS DE MONGOOSE Y DEFINIR EN UN DOCUMENTO:
		String
		Number
		Date
		Buffer
		Boolean
		Mixed
		Objectid
		Array
*/
	var user_schema = new Schema({
		name : String,
		username :  String,
		password : String,
		age : Number,
		email : String,
		date_of_birth : Date
	});



	/*
	MODELOS : 
	Son instancias en Mongoose que nos permiten mandar a llamar métodos que nos permiten ejecutar acciones sobre 
	la base de datos sin necesidad de que entendamos que está pasando. Son siempre necesarios para conectarse
	a las bases de datos
	*/
/*--------------------------------------------------------------------------------------------------------------------------*/
	//Cuando mongoose crea el modelo, este mapea a una coleccion en la base de datos, (Equivale a una tabla, por así decirlo).
	//Pero el nombre que busca o asigna de esa colección, en caso de que no exista es el plural de la primera palabra de 
	//los parametros, en este caso "Users".
	var User = mongoose.model("User",user_schema);
	//Las librerias se pueden identificar por aquellos scripts que están exportando alguna funcionalidad
	module.exports.User = User; //Con esto podemos exportar functiones, objetos, atributos, diferentes cosas.
