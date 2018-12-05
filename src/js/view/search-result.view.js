export class SearchResultView {
    constructor() {
        this.resultConteiner = document.querySelector('#search-result');
    }

    switchLoader() {
        this.resultConteiner.classList.toggle('hidden');
    }

    renderArticles(data) {
        this.resultConteiner.innerHTML = '';
        const ul = document.createElement('ul');
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = this.getArticleTemplate(item);
            ul.appendChild(li);
        });
        this.resultConteiner.appendChild(ul);
    }

    getArticleTemplate(article){
        return `
            <div class="article-img-container">
                <a class="article-img-wrapper" href="${article.url}">
                    <img class="article-img" ${article.urlToImage ? 'src="'+article.urlToImage+'"': ''} />
                    <span class="article-description">${article.description}</span>
                </a>
            </div>
            <div class="article-content-container">
                <h3 class="article-title">
                    <a href="${article.url}">${article.title}</a>
                </h3>
                <p class="article-published">${article.author} - ${new Date(article.publishedAt).toLocaleString()}</p>
            </div>
        `;
    }
}