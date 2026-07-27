
const newsContainer = document.getElementById("news-container");

function loadNews(tag) {
    newsContainer.innerHTML = "<p>Loading...</p>";

    fetch(`https://dev.to/api/articles?tag=${tag}`)
        .then(response => response.json())
        .then(data => {
            newsContainer.innerHTML = "";

            data.forEach(article => {
                newsContainer.innerHTML += `
                    <div class="card">
                        <h3>${article.title}</h3>
                        <p>${article.description || "No description available."}</p>
                        <a href="${article.url}" target="_blank">Read More</a>
                    </div>
                `;
            });
        })
        .catch(() => {
            newsContainer.innerHTML = "<p>Couldn't fetch data.</p>";
        });
}

// Load JavaScript articles when the page opens
loadNews("javascript");