const  express = require('express');

//cors moods
const cors = require ('cors');
//express body parser
const bodyParser = require('body-parser');


const  app = express();

app.use(cors());
app.use(bodyParser.json());



const users = ["Rasel" ,'Rajib' ,'koddos' ,'kasem','hasem','nasem','pasem'];



app.get('/',(req,res)=> {
    // res.send('thank you calling me');
const fruit = {
    product :'ada',
    price :220
}
res.send(fruit)

} );
app.get('/fruits/banana',(req,res)=> {
    res.send({fruit:'banana',quantity:1000,price:1000});

});
// daynamik data callect

app.get('/users/:id',(req,res) => {

    const id = req.params.id;
const name = users[id];

res.send({id,name});

//  console.log(req.params.id);

})
     //post //

app.post('/addUser',(req,res) =>{
    // console.log('data recive',req.body);
 // save to database
 const user = req.body;
 user.id= 34;


    res.send(user);
})
app.listen(3000,()=>  console.log('Listing to port 3000'));