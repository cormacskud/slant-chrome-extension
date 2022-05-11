import { extract } from './keywords.js';

const handleResults = (articles) => {
  if (articles.left.length === 0 &&
    articles.center.length === 0 &&
    articles.right.length === 0
    ) {
      console.log('here')
      document.getElementById("left").innerHTML = "";
      document.getElementById("center").innerHTML = `<h5 class="card-title">No results found. Consider trying different keywords.</h5>`;
      document.getElementById("right").innerHTML = "";
      return;
  }
  let html = "";
  articles.left.forEach(article => {
    html = `${html}${formatArticle(article)}`;
  });
  document.getElementById("left").innerHTML = html;

  html = '';
  articles.center.forEach(article => {
    html = `${html}${formatArticle(article)}`;
  });
  document.getElementById("center").innerHTML = html;
  
  html = '';
  articles.right.forEach(article => {
    html = `${html}${formatArticle(article)}`;
  });
  document.getElementById("right").innerHTML = html;
};

const formatArticle = (article) => {
  return `<h5 class="card-title">${article.title}</h5>` +
  `<h6 class="card-subtitle mb-2 text-muted">${article.source.name.toUpperCase()}</h6>` +
  `<p class="card-text">${article.description.slice(0, 256)}...</p>` +
  `<a href="${article.url}" class="card-link" target="_blank">Read Article</a><hr>`;
}

const lookup = (query) => {
  console.log('lookup: '+query);
  // an attempt to remove the source info from the title

  const colonSepIndex = query.indexOf(':');
  if (colonSepIndex > 0) {
    query = query.substring(0, colonSepIndex);
  }

  const dashSepIndex = query.indexOf(' - ');
  if (dashSepIndex > 0) {
    query = query.substring(0, dashSepIndex);
  }

  console.log('after substring '+query);
  query = query.trimEnd();
  console.log('trimend: '+query);
  query = extract(query, {
    language:"english",
    remove_digits: true,
    return_changed_case: true,
    return_chained_words: true,
    remove_duplicates: true
  }).join(' ');
  console.log('keywords: '+query);
  document.getElementById("keywords").value = query;
  query = encodeURI(query);
  console.log('encoded: '+query);
  
  const date = new Date(Date.now());
  date.setDate(date.getDate() - 30);
  const qDate = date.toISOString().substring(0, 10);
  const sourceIndex = [
    "new-york-magazine,msnbc,buzzfeed",
    "axios,associated-press,abc-news",
    "breitbart-news,fox-news,the-american-conservative"
  ];

  // outlook
  const apiKey = '216de427252648be89c5ac8116483b05';

  // gmail
  // const apiKey = '7afaa4e3798c4722beef7494b73d6547';

  Promise.all([
    fetch(`https://newsapi.org/v2/everything?q=${query}&sources=${sourceIndex[0]}&sortBy=relevancy&from=${qDate}&sortBy=publishedAt&apiKey=${apiKey}`),
    fetch(`https://newsapi.org/v2/everything?q=${query}&sources=${sourceIndex[1]}&sortBy=relevancy&from=${qDate}&sortBy=publishedAt&apiKey=${apiKey}`),
    fetch(`https://newsapi.org/v2/everything?q=${query}&sources=${sourceIndex[2]}&sortBy=relevancy&from=${qDate}&sortBy=publishedAt&apiKey=${apiKey}`),
  ]).then(function (responses) {
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function ([left, center, right]) {
    const results = {
      left: left.articles,
      center: center.articles,
      right: right.articles
    };
    console.log(results);
    handleResults(results);
  }).catch(function (error) {
    // if there's an error, log it
    console.log(error);
  });
};

const button = document.getElementById("search");
button.addEventListener('click', event => {
  const query = document.getElementById("keywords").value;
  console.log('query in click handler: '+query);
  lookup(query);
});

const input = document.getElementById("keywords")
// document.addEventListener('keypress', searchKey);

function searchKey(e) {
  if (e.key == 'Enter') {
    lookup(input.value);
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      lookup(request.query);
      sendResponse({});
  }
);
