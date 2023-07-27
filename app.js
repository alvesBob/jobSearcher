const express = require('express');
const app = express();
const db = require('./db/connection');	
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`);
})

// body parser
app.use(bodyParser.urlencoded({extended: false}));


// db connection
db.authenticate()
.then(() => {
    console.log("Conectado com sucesso");
    
})
.catch((err) => {
    console.log(`Erro ao conectar: ${err}`);	
});


// routes
app.get('/', function(req, res){
    res.send('Working');	
})

// jobs routes
app.use('/jobs', require('./routes/jobs'));	