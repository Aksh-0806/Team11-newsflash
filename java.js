const newsContainer = document.getElementById("news-container");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("error");

// Example API
const API_URL =
  "https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=in&language=en";


// Load saved news first
window.onload = () => {
    const savedNews = localStorage.getItem("news");

    if(savedNews){
        displayNews(JSON.parse(savedNews));
    } 
    else {
        fetchNews();
    }
};


// Fetch API data
async function fetchNews(){

    loading.style.display = "block";
    errorMsg.style.display = "none";

    try{

        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error("Failed to fetch news");
        }

        const data = await response.json();

        const articles = data.results;

        // Save data
        localStorage.setItem(
            "news",
            JSON.stringify(articles)
        );


        displayNews(articles);

    }

    catch(error){

        errorMsg.innerHTML =
        "⚠️ Unable to load news. Check your internet.";

    }

    finally{

        loading.style.display = "none";

    }
}



// Display news cards
function displayNews(news){

    newsContainer.innerHTML = "";

    news.forEach(article => {

        const card = document.createElement("div");

        card.className="news-card";


        card.innerHTML = `

        <h3>${article.title}</h3>

        <p>
        ${article.description || "No description available"}
        </p>

        <a href="${article.link}" target="_blank">
        Read More
        </a>

        `;


        newsContainer.appendChild(card);

    });

}
