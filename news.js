document.addEventListener("DOMContentLoaded", () => {
    const newsData = [
        {
            title: "'Sharjah Humanity' hosts the 11th workshop of the music therapy program",
            url: "https://sharjah24.ae/ar/Articles/2025/04/15/kmr200"
        },
        {
            title : "Graduation of the ninth batch of the staff of «Human Services» in music therapy",
            url : "https://www.alkhaleej.ae/2024-01-25/%D8%AA%D8%AE%D8%B1%D9%8A%D8%AC-%D8%A7%D9%84%D8%AF%D9%81%D8%B9%D8%A9-%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%D8%A9-%D9%85%D9%86-%D9%83%D8%A7%D8%AF%D8%B1-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA"

        },
        {
            title : "«Humanitarian Services» graduates a tenth batch of «music therapy»",
            url : "https://www.alkhaleej.ae/2024-07-03/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D8%AA%D8%AE%D8%B1%D8%AC-%D8%AF%D9%81%D8%B9%D8%A9-%D8%B9%D8%A7%D8%B4%D8%B1%D8%A9-%D9%85%D9%86-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA"
        },
        {
            title : "Jamila Al Qasimi: 'Music Therapy' is an addition to services for people with disabilities",
            url: "https://www.alkhaleej.ae/2023-09-26/%D8%AC%D9%85%D9%8A%D9%84%D8%A9-%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85%D9%8A-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D8%A5%D8%B6%D8%A7%D9%81%D8%A9-%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA"
        },
        {
            title : 'Graduation of a ninth batch of "Humanitarian Services" staff in the "Music Therapy Program"',
            url : "https://www.alkhaleej.ae/2023-07-06/%D8%AA%D8%AE%D8%B1%D9%8A%D8%AC-%D8%AF%D9%81%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B3%D8%B9%D8%A9-%D9%85%D9%86-%D9%83%D8%A7%D8%AF%D8%B1-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D9%85%D9%86-%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA"
        },
        {
            title : 'Jameela Al Qasimi: Improving the capabilities of students with disabilities improves their quality of life',
            url : "https://www.alkhaleej.ae/2023-01-18/%D8%AC%D9%85%D9%8A%D9%84%D8%A9-%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85%D9%8A-%D8%A7%D9%84%D8%A7%D8%B1%D8%AA%D9%82%D8%A7%D8%A1-%D8%A8%D9%82%D8%AF%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%B7%D9%84%D8%A8%D8%A9-%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9-%D9%8A%D8%AD%D8%B3%D9%86-%D8%AC%D9%88%D8%AF%D8%A9-%D8%AD%D9%8A%D8%A7%D8%AA%D9%87%D9%85/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA"
        },
        {
            title : "Sharjah Humanitarian Services celebrates the graduation of two batches of people with disabilities",
            url: "https://sharjah24.ae/ar/Articles/2021/01/10/kb30"
        },
        {
            title : "'Sharjah Humanity' graduates the 7th batch of the music therapy program",
            url : "https://sharjah24.ae/ar/Articles/2021/07/06/a3"
        },
        {
            title : "Music therapy. Empowerment tone for people with disabilities",
            url : "https://www.alkhaleej.ae/%D9%85%D9%84%D8%AD%D9%82/%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D9%86%D8%BA%D9%85%D8%A9-%D8%AA%D9%85%D9%83%D9%8A%D9%86-%D9%84%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9"
        },
        {
            title : 'Graduation of the fifth batch of "Human Services" staff in the music therapy program',
            url : "https://www.alkhaleej.ae/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D8%AA%D8%AE%D8%B1%D9%8A%D8%AC-%D8%A7%D9%84%D8%AF%D9%81%D8%B9%D8%A9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%A9-%D9%85%D9%86-%D9%83%D8%A7%D8%AF%D8%B1-%C2%AB%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9%C2%BB-%D9%81%D9%8A-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89"
        },
        {
            title : '«Humanitarian Services» develops the capabilities of people with disabilities with music',
            url : "https://www.alkhaleej.ae/%D9%85%D8%AC%D9%84%D8%A9/%C2%AB%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9%C2%BB-%D8%AA%D9%86%D9%85%D9%8A-%D9%82%D8%AF%D8%B1%D8%A7%D8%AA-%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89"
        },
        {
            title : '«Humanitarian Services» graduates the third batch of «Music Therapy»',
            url : "https://www.alkhaleej.ae/%D9%85%D8%AC%D9%84%D8%A9/%C2%AB%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9%C2%BB-%D8%AA%D8%AE%D8%B1%D8%AC-%D8%A7%D9%84%D8%AF%D9%81%D8%B9%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9-%D9%85%D9%86-%C2%AB%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89%C2%BB"
        },
        {
            title : 'Recreation session for mothers of "Humanitarian Services" students',
            url : "https://www.alkhaleej.ae/2017-03-27/%D8%AC%D9%84%D8%B3%D8%A9-%D8%AA%D8%B1%D9%88%D9%8A%D8%AD%D9%8D-%D8%B9%D9%86-%D8%A7%D9%84%D9%86%D9%81%D8%B3-%D9%84%D8%A3%D9%85%D9%87%D8%A7%D8%AA-%D8%B7%D9%84%D8%A8%D8%A9-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA"
        },
        {
            title : 'Graduation of a new batch of «Music Therapy» in «Humanitarian Services»',
            url : 'https://www.alkhaleej.ae/2017-01-29/%D8%AA%D8%AE%D8%B1%D9%8A%D8%AC-%D8%AF%D9%81%D8%B9%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D9%85%D9%86-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9/%D9%85%D8%AC%D9%84%D8%A9/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA-%D8%A3%D8%B1%D8%B4%D9%8A%D9%81-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA'
        },
        {
            title : "248 Students with Disabilities Benefit from Music Therapy Program",
            url : "https://www.alkhaleej.ae/2016-04-16/248-%D8%B7%D8%A7%D9%84%D8%A8%D8%A7%D9%8B-%D9%85%D9%86-%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9-%D9%8A%D8%B3%D8%AA%D9%81%D9%8A%D8%AF%D9%88%D9%86-%D9%85%D9%86-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89/%D9%85%D8%AC%D9%84%D8%A9/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA-%D8%A3%D8%B1%D8%B4%D9%8A%D9%81-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA"
        },
        {
            title : 'Graduation of the first batch of "Human Services" staff for music therapy',
            url: "https://www.alkhaleej.ae/2016-02-08/%D8%AA%D8%AE%D8%B1%D9%8A%D8%AC-%D8%A7%D9%84%D8%AF%D9%81%D8%B9%D8%A9-%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89-%D9%85%D9%86-%D9%83%D8%A7%D8%AF%D8%B1-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D9%84%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89/%D9%85%D8%AC%D9%84%D8%A9/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA-%D8%A3%D8%B1%D8%B4%D9%8A%D9%81"
        },
        {
            title : 'Korean Students Apply Music Therapy at Human Services',
            url : 'https://www.alkhaleej.ae/2014-11-19/%D8%B7%D8%A7%D9%84%D8%A8%D8%A7%D8%AA-%D9%83%D9%88%D8%B1%D9%8A%D8%A7%D8%AA-%D9%8A%D8%B7%D8%A8%D9%82%D9%86-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9/%D9%85%D8%AC%D9%84%D8%A9/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA-%D8%A3%D8%B1%D8%B4%D9%8A%D9%81-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA'
        },
        {
            title : '"Human Services" concludes "Music Therapy"',
            url : 'https://www.alkhaleej.ae/2014-12-15/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D8%AA%D8%AE%D8%AA%D8%AA%D9%85-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA'
        },
        {
            title : '"Human Services" concludes "Music Therapy"',
            url : 'https://www.alkhaleej.ae/2014-07-07/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D8%AA%D8%AE%D8%AA%D8%AA%D9%85-%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89/%D9%85%D8%AC%D9%84%D8%A9/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA-%D8%A3%D8%B1%D8%B4%D9%8A%D9%81-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA'
        },
        {
            title : 'Music Therapy Training Program at Human Services',
            url : 'https://www.alkhaleej.ae/2014-02-02/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%D9%8A-%D9%84%D9%84%D8%B9%D9%84%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9/%D9%85%D8%AD%D8%B7%D8%A7%D8%AA/%D9%85%D9%86%D9%88%D8%B9%D8%A7%D8%AA '
        }
      
    ];

    const newsContainer = document.getElementById("news-container");

    // Dynamically load news articles
    newsData.forEach(news => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");

        newsCard.innerHTML = `
            <div class="news-content">
                <h3>${news.title}</h3>
                <a href="${news.url}" target="_blank" class="read-more">Read More</a>
            </div>
        `;

        newsContainer.appendChild(newsCard);
    });
});
