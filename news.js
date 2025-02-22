document.addEventListener("DOMContentLoaded", () => {
    const newsData = [
        {
            title: "Ewha and SCHS Collaborate on Music Therapy",
            description: "A groundbreaking collaboration between Ewha Womans University and Sharjah City for Humanitarian Services (SCHS) has made headlines.",
            image: "news1.jpg",
            url: "https://example.com/news1"
        },
        {
            title: "Music Therapy Forum 2021",
            description: "The 2021 Music Therapy Forum featured global experts sharing their research and practices.",
            image: "news2.jpg",
            url: "https://example.com/news2"
        },
        {
            title: "Students Making a Difference Through Music",
            description: "Ewha students share their experiences working as music therapy interns at SCHS.",
            image: "news3.jpg",
            url: "https://example.com/news3"
        }
    ];

    const newsContainer = document.getElementById("news-container");

    // Dynamically load news articles
    newsData.forEach(news => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");

        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <div class="news-content">
                <h3>${news.title}</h3>
                <p>${news.description}</p>
                <a href="${news.url}" target="_blank" class="read-more">Read More</a>
            </div>
        `;

        newsContainer.appendChild(newsCard);
    });
});
