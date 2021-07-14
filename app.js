/**
 * 
 * 1. IMPORTACIONES
 * 
 */

 const express   = require('express')
 const app       = express()
 const hbs       = require('hbs')
 
 
 /**
  * 
  * 2. MIDDLEWARE
  * 
  */
 
 app.use(express.static('public'))
 app.set('view engine', 'hbs')
 
 /**
  * 
  * 3. RUTAS
  * 
  */
 
 app.get("/", (req,res) => {


     res.render("home")
 })
 
 app.get("/about", (req,res) => {

    let data = {
        nombre: "Baobabs",
        creadora: "Ana Ramírez",
        ciudad: "Lima",
        rubro: "alimentos saludables"
    }
     res.render("about",data)
 })
 
 app.get("/works", (req,res) => {
     res.render("works")
 })
 
 app.get("/gallery", (req,res) => {
    res.render("gallery")
})


 /**
  * 
  * 4. SERVIDOR
  * 
  */
 
 app.listen(3005, ()=> {
     console.log("Estoy en el puerto 3005")
 
 })