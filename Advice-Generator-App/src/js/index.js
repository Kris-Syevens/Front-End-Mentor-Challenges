const title = document.getElementById("title");
const content = document.getElementById("content");
const lineDivider = document.getElementById("line-divider");
const btn = document.getElementById("btn");

const apiURL = "https://api.adviceslip.com/advice";

btn.addEventListener("click", async () => {
  title.innerText = "ADVICE #007";
  content.innerText = "Loading...";
  try {
    let response = await fetch(apiURL);
    let data = await response.json();
    title.innerText = `ADVICE #${data.slip.id}`;
    content.innerText = `${data.slip.advice}`;
    console.log(data);
  } catch (error) {
    title.innerText = "OOPS...";
    content.innerText = "Something went wrong! Please try again.";
    console.log(error);
  }
});
