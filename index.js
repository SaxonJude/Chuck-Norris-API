// DOMStrings
const elements = {
    jokeBox: document.querySelector('.joke_section'),
    button: document.querySelector('.roll_again')
};

// Get API Data
async function getResults() {
    try {
        const result = await fetch(`https://api.chucknorris.io/jokes/random`);
        const data = result.json();
        return data;
    } catch(error) {
        console.log(error);
    };
};

// Event Listeners
elements.button.addEventListener('click', () => {
    getJoke();
});

document.addEventListener('keypress', e => {
    if(e.charCode === 114) {
        getJoke();
    };
})

// Joke Function
const getJoke = () => {
    let results;
    getResults().then(data => {
        results = data;
        elements.jokeBox.textContent = `${results.value}`;
    });
};
