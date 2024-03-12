const btnEl = document.getElementById("btn")

const jokeEl = document.getElementById("joke")

const apiKey = "qBt1lGNZwuo87bonSjF8Hg==tH2V1msq3ULwJGpT";
const options = {
    method : "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};
 

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1" ;

 async function getJoke(){
        try {
            jokeEl.innerText = "loading...."
            btnEl.disabled = true;
            btnEl.innerText = "Loading..."
            const response = await fetch(apiURL , options)
            const data = await response.json()
            btnEl.disabled = false;
            btnEl.innerText = "Tell me a joke"
            jokeEl.innerText = data[0].joke;
        } catch (error) {
            jokeEl.innerText = "An error happened try again later";
            btnEl.disabled = false;
            btnEl.innerText = "Try again";
            console.log(error)
            
        }


   
}

btnEl.addEventListener("click", getJoke);