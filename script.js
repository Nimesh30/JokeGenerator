// script.js
const jokeBtn = document.getElementById("jokeBtn");
const copyBtn = document.getElementById("copyBtn");

jokeBtn.addEventListener("click", async () => {
  const jokeDisplay = document.getElementById("jokeDisplay");
  jokeDisplay.innerHTML = "Loading...";
  jokeBtn.disabled = true;

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();

    if (data.type === "single") {
      jokeDisplay.innerHTML = `<p>${data.joke}</p>`;
    } else {
      jokeDisplay.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
    }
    copyBtn.removeAttribute("hidden");
  } catch (error) {
    jokeDisplay.innerHTML = `<p>Sorry, something went wrong. Please try again later.</p>`;
  } finally {
    jokeBtn.disabled = false;
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(jokeDisplay.innerText);
  alert("Joke copied to clipboard.");
});
