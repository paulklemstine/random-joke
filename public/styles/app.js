const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What do you call a fish with no eyes?",
        punchline: "Fsh!"
    },
    {
        id: 4,
        joke: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        id: 5,
        joke: "What do you call a lazy kangaroo?",
        punchline: "Pouch potato."
    },
    {
        id: 6,
        joke: "I told my wife she was drawing her eyebrows too high.",
        punchline: "She looked surprised."
    },
    {
        id: 7,
        joke: "What musical instrument is found in the bathroom?",
        punchline: "A tuba toothpaste."
    },
    {
        id: 8,
        joke: "Why did the invisible man turn down the job offer?",
        punchline: "He couldn't see himself doing it."
    },
    {
        id: 9,
        joke: "What do you call a fake noodle?",
        punchline: "An impasta."
    },
    {
        id: 10,
        joke: "Why was the math book sad?",
        punchline: "Because it had too many problems."
    }
];

const express = require('express')
const app = express()
const port = 3000
// add path module and root of the static files
const path = require('path')
const root = path.join(__dirname, 'public')

// added middleware to serve static files
app.use(express.static('public'))

// updated the root route to serve an html file
app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.use(express.json())
app.get('/api/v1/random-joke', (request, response) => {
    const r = Math.floor(Math.random() * jokes.length)
    response.send(jokes[r])
})
app.listen(port, () => console.log(`http://localhost:${port}`))
