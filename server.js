const express = require("express"); // load express framework and store it in express var
const app = express(); // initialize express app
const PORT = process.env.PORT || 8000;
const { MongoClient } = require("mongodb");

fetch('/api/articles/ ...')  //buit in api to fetch data



// Initialize middleware
// don't install body parser, it's a built in middleware
// express parses incoming JSON payload
app.use(express.json({extended: false}));

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db("mernblog");
        await operations(db);
        
        client.close();
    } catch (error) {
        res.status(500).json({message:"Error connecting to database", error});   // 500 = internal server error
    }  
};

app.get("/api/articles/:name", async (req, res) => {
    withDB(async (db) => {
    const articlesName = req.params.name;
        
    const articlesInfo = await db
        .collection('articles')
        .findOne({ name: articlesName });
        res.status(200).json(articlesInfo);
    }, res)  
});

app.post('/api/articles/:name/add-comments', (req, res) => {
    const { username, text } = req.body;
    const articlesName = req.params.name;
    
    withDB(async (db) => {
        const articlesInfo = await db
            .collection('articles')
            .findOne({name: articlesName});
            await db.collection('articles').updateOne(
                {name: articlesName},
                {
                    $set : {
                        comments: articlesInfo.comments.concat({username, text}),
                    },
                    
                }
            );
        const updateArticleInfo = await db
            .collection('articles')
            .findOne({name: articlesName});
        res.status(200).json(updateArticleInfo);
    }, res);
});

// // test route
// // use Postman app to test the backend, by sending POST and GET requests
// app.get("/", (req, res) => res.send("Hello, World")); //get request with callback action
// app.post("/", (req, res) => res.send(`Hello, ${req.body.name}!`)); //post request with callback action
// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));