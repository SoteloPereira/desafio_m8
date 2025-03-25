const express = require('express'); 
const app = express(); 
app.use(express.json()); 
const PORT = 3000;

const list = [{id:"1", name:"Emmanuel"},
            {id:"2", name:"Andres"},
            {id:"3", name:"Francisco"}]

app.get('/task', (req, res) => { 

    res.status(200).json({list})
}); 

app.put('/task/:id', (req, res) => {
    const { id }= req.params;  
    const { name } = req.body;           
    const item = list.find(item => item.id == id);
  
    if (!item) {
    res.status(404).send('ID no encontrado');
    }
    else {
    item.name = name;
    res.status(201).json({"message":"Item updated"});
    }
  });
  

 
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`)); 
module.exports = app