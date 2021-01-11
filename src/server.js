const express = require('express');

const app = express();

const PORT = 3333;

const pedidos = [
    {
        "cliente":"jose",
        "produto":"peça",
        "quantidade":"3",
        "dataPedido":"11/01/2021"
    }
]


app.get('/', (req, res)=>{
    res.send ();

})
app.get('/pedidos', (req, res) =>{
    // listar os dadoss
    res.send(pedidos)
    
})
app.post('/pedidos', (req, res)=>{
    res.send ();
    res.status(200).send()
})

app.listen(PORT, ()=>{
    console.log(`Deu certo!`);
});