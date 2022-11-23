// const app = require ("express")();

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// app.get("",(req, res) => {
//     res.send("Hello Worlsas");
// });
router.get('/',function(req,res){
    res.sendFile('index.html', { root: "./Html/"});
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.use(express.static('./Html'));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');