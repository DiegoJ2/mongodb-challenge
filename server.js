const express = require('express');
const cors = require('cors'); 

require (dotenv).config();

const app = express();
const PORT = 8080;
//const PORT  = process.env.PORT;

// setting up middleware 
app.use (cors({origin: true, 
    crednetials: true 
}));

app.use(epress.json());
app.use(express.urlencoded({extended: true}));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_URI)
.then (()=>(console.log(`connect to mongodb`)), err =>(console.log(`cannot connect to db ${err}`)));

app.get('/', (req,res)=> res.status(200).send(`server running`));

app.post('/add-blog', (req, res) => {
    const incomingData = req.body;
  
    try {
        const newBlog = new BlogModel(incomingData);
        newBlog.save();
  
        res.status(200).send({
            message: 'saved blog'
        })
    } catch (err) {
        console.log(err);
    }
  });  

app.listen(port,()=>{
    console.log(`server is running and https://localhost:${port}`);
});


