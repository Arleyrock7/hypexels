var express = require ("express");
var app = express();


    app.set('view engine', 'pug');
    // Verbos HTTP => GET / POST / PUT / PATCH / DELETE / OPTIONS / HEADERS /, Express por defecto tiene solo GET y POST, pero con extensiones se pueden llegar a utilizar los demás
    // Estos verbos conforman la arquitectura REST
    
    app.get("/",function(req,res){
        res.render("index")
        //req.end();  
    /*app.post("/",function(req,res){
		Otra forma de declarar rutas es utilizando el método post. Naturalmente solo accede cuando la petición sea post
    })*/
    });


    //Obtener datos ESTATICOS desde URL'S escribiendo algo para hacer el Render de la vista FORM
    app.get("/algo",function(req,res){
        res.render("form");
    })
    


    //Obtener datos en las URL'S desde variables de expresion regular, esto significa que cualquier palabra después de la barra inclinada (/), nos llevará a la vista del FORM
    app.get("/:nombre",function(req,res){
        console.log(req.params.nombre); // Con estos parámetros, en la consola, se imprime lo que nosotros pasemos en la URL
        res.render("form",{nombre: req.params.nombre}); // Con este JSON, pasamos el valor en la variable NOMBRE de nuestra vista en form.pug
    });


    //Ṕara mandar una petición POST
    app.post("/",function(req,res){
        res.render("form");
    });





    app.listen(9000);
  