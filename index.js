import express from "express"; // Hacer npm i express + npm i nodemon

const app = express();
const port = 3000;

app.get('/', (req, res) => { // Endpoint "/", verbo GET
    let mensaje = "Bienvenido a mi servidor"
    res.send(mensaje);
})

app.get('/saludo', (req, res) => { // Endpoint "/", verbo GET
    let saludo = "¡Hola, Mundo!"
    res.send(saludo);
})

app.get('/numero', (req, res) => { // Endpoint "/", verbo GET
    let numero = "42"
    res.send(numero);
})

app.get('/usuario', (req, res) => { // Endpoint "/", verbo GET
    let usuario = { "nombre": "Ana", "edad": 25 }
    res.json(usuario);
})

app.get('/productos', (req, res) => { // Endpoint "/", verbo GET
    let productos = [ "Mouse", "Teclado", "Monitor" ] 
    res.json(productos);
})

app.get('/materias', (req, res) => { // Endpoint "/", verbo GET
    let materias = [ {nombre: "Matematica"}, {nombre: "Lengua"} ]
    res.json(materias);
})

app.listen(port, () => { // inicio el servicio WEB (escuchar)
    console.log(`Listening on https://localhost:${port}`) // Usamos postman HTTP request en localhost:3000/ o localhost:3000/saludo, con un send podemos leer
})