function getArticleGenerator(articles) {
    const content = document.querySelector('body div');

    return function () {
        if (articles.length > 0) {
            let article = document.createElement('article');
            article.textContent = articles.shift();
            content.appendChild(article)
        }
    }
}
