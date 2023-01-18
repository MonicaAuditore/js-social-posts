const posts = [
  {
    id: 1,
    content: "No, provare no. Fare o non fare. Non c’è provare.",
    media:
      "https://st1.uvnimg.com/dims4/default/6eb31f5/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fy%2Fyoda_entrenado_a_luke_star_wars.jpeg",
    author: {
      name: "Yoda",
      image:
        "https://s1.eestatic.com/2015/12/11/actualidad/actualidad_86001588_298582_1706x1280.jpg",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

//-------------------------------------------------------------------
// creo un array di immagini
immaginiArray = [];

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].author["image"]);
  immaginiArray.push(posts[i].author["image"]);
}
console.log(immaginiArray);

const imgAutore = document.querySelector(".post-meta__icon");

imgAutore.innerHTML += `<img class="profile-pic" src="${immaginiArray[0]}" alt="Phil Mangione"/>`;

//-------------------------------------------------------------------
// creo un array di nomi author
authorArray = [];

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].author["name"]);
  authorArray.push(posts[i].author["name"]);
}
console.log(authorArray);

const nameAutore = document.querySelector(".post-meta__author");
nameAutore.innerHTML += `${authorArray[0]}`;

//-------------------------------------------------------------------
// creo un array di content
contentArray = [];

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].author["name"]);
  contentArray.push(posts[i].content);
}
console.log(contentArray);

const contentPost = document.querySelector(".post__text");
contentPost.innerHTML += `${contentArray[0]}`;

//-------------------------------------------------------------------
// creo un array media

mediaArray = [];

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].author["name"]);
  mediaArray.push(posts[i].media);
}
console.log(mediaArray);

const media = document.querySelector(".post__image");
media.innerHTML += `<img src="${mediaArray[0]}" alt="" />`;

//-------------------------------------------------------------------
// creo un array numero like

likesArray = [];

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].likes);
  likesArray.push(posts[i].likes);
}
console.log(likesArray);

const likes = document.querySelector(".js-likes-counter");
likes.innerHTML += `${likesArray[0]}`;

//-------------------------------------------------------------------
// creo un array di date

createdArray = [];

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].created);
  createdArray.push(posts[i].created);
}
console.log("createdArray", createdArray);

const created = document.querySelector(".post-meta__time");
created.innerHTML += `${createdArray[0]}`;

//-------------------------------------------------------------------
// creo una funzione che calcoli quanto tempo fa è stato scritto il post
/*prendo la data di oggi*/

function myDateFunction() {}
