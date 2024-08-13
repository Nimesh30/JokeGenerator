// script.js
document.getElementById('jokeBtn').addEventListener('click', async () => {
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.innerHTML = "Loading...";

    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        if (data.type === 'single') {
            jokeDisplay.innerHTML = `<p>${data.joke}</p>`;
        } else {
            jokeDisplay.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
        }
        const copyBtn = document.getElementById('copyBtn').addEventListener('click',()=>{ 
            navigator.clipboard.writeText(jokeDisplay.innerText);
        });
    } catch (error) {
        jokeDisplay.innerHTML = `<p>Sorry, something went wrong. Please try again later.</p>`;
    }
});

// if (jokeBtn) {
//    let copyBtn = document.createElement("Button");
//    copyBtn.setAttribute('id','copyBtn');
//    document.body.lastElementChild(copyBtn);
// } else {
    
// }
// const copyBtn = document.getElementById('copyBtn').addEventListener('click',()=>{ 
//     navigator.clipboard.writeText(jokeDisplay.innerText);
// });