const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/routes');
const cors = require('cors');

app.use(cors(
    {
        origin: "http://127.0.0.1:8080"
    }
));

// Supprimez la ligne suivante, car 'strictQuery' n'est pas une option valide.

app.listen(9992, function(err) {
    if (err) {
        console.log("Error");
    } else {
        console.log("Started");
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/abc")
.then(() => {
    console.log("Connecté à la base de données!");
})
.catch(error => {
    console.log("Erreur de connexion à la base de données : " + error);
});

app.use(express.json());

app.use(routes);