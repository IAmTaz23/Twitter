const express = require('express')
const path = require('path')
const app  = express()

app.use(express.static(path.join(__dirname, 'public')))
const tweets = [
    {
        author: "Li",
        tweet: "Hello everyone! 🤠",
        id: "1",
        likes: "10"
    },
    {
        author: "Garfield",
        tweet: "I hate Mondays",
        id: "2",
        likes: "1000"
    },
    {
        author: "Pam",
        tweet: "Where's Jim?",
        id: "3",
        likes: "60"
    },
    {
        author: "Bob",
        tweet: "Its snowing outside!",
        id: "4",
        likes: "100"
    },
    {
        author: "Aaron",
        tweet: "is this twitter or x?",
        id: "5",
        likes: "3"
    },
    {
        author: "Walter",
        tweet: "We gotta cook Jesse!",
        id: "6",
        likes: "1"
    }
]
app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/tweets", (req, res) => {
    res.send("tweets")
})
app.get("/tweets/:id", (req, res) => {
    const userID = req.params.id

    for(let i = 0; i < tweets.length; i++) {
        if(tweets[i].id === userID) {
            res.send(tweets[i])
        }
    }
})










app.listen(9023)
console.log("Express is running on localhost:9023")