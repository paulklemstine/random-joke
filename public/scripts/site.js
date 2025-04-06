(async () => {
    const jokeBbutton = document.querySelector("#jokeButton")
    jokeButton.addEventListener('click', async () => {
        const jokeDisplay = document.querySelector('#jokeDisplay')
        const url ='/api/v1/random-joke'
        const result = await fetch(url)
        const { joke,punchline } = await result.json()
        jokeDisplay.innerHTML = 'Question:'+joke +'<br>Answer:'+punchline
      });

})()

