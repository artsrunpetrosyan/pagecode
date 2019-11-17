const sectionWrapper = document.getElementById("article-wrapper");
const asideWrapper = document.getElementById("aside-wrapper");
const onload = function () {
  console.log('Run');
  fetch1(function (data) {
    showArticles(data);
  })
  fetch2(function (data) {
    showBloggers(data);
  })
}

const fetch1 = function (callback) {     
  return fetch(
    
    "https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog",

    {
      method: "GET"
    }
  )
    .then(function (response) {
      return response.json().then(function (data) {
        return callback(data);
      });
    })
}

const fetch2 = function (callback) {
  return fetch(
    "https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users",
    {
      method: "GET"
    }
  )
    .then(function (response) {
      return response.json().then(function (data) {
        return callback(data);
      });
    })
    
}

const showArticles = function (data) {
  for (let i = 0; i < data.length; i++) {
    const article = document.createElement("article");
    const author = document.createElement("div");
    const title = document.createElement("div");
    const header = document.createElement("div");
    const articalBody = document.createElement("div");

    author.innerText = data[i].author;
    title.innerText = data[i].title;
    articalBody.innerHTML = data[i].description;

    header.className = "article-header";
    author.className = "article-author";
    title.className = "article-title";

    header.appendChild(author);
    header.appendChild(title);


    articalBody.className = "article-body";
    article.className = "outline artical-wrapp";

    article.appendChild(header);
    article.appendChild(articalBody);
    sectionWrapper.appendChild(article);
  
  }

}

const showBloggers = function (data) {

  for (let i = 0; i < data.length; i++) {
    const blogger = document.createElement("div");
    const avatar = document.createElement("img");
    const name = document.createElement("div");

    avatar.src = data[i].avatar;
    name.innerText = data[i].name;

    blogger.className = "aside-blogger";
    avatar.className = "aside-avatar";
    name.className = "article-title";

    blogger.appendChild(avatar);
    blogger.appendChild(name);


    asideWrapper.appendChild(blogger);

  }

}

