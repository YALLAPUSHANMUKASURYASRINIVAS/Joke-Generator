let joke=document.getElementById("joke");
let jokeOfDay=document.getElementById("jokeOfDay");
const URL = "https://api.api-ninjas.com/v1/";
let jokepara=document.getElementById("jokepara");
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": "YOUR_API_KEY_HERE"
    }
};

async function getJokeOfTheDay() {
    try {
        const response = await fetch(URL+"jokeoftheday", options);

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();
        console.log(data);

        jokepara.textContent = data[0].joke;

    } catch (error) {
        console.log(error);
    }
}
async function getJoke() {
    try {
        const response = await fetch(URL+"jokes", options);

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();
        console.log(data);

        jokepara.textContent = data[0].joke;

    } catch (error) {
        console.log(error);
    }
}

joke.addEventListener("click", getJoke);
jokeOfDay.addEventListener("click", getJokeOfTheDay);