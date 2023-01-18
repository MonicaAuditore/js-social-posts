const posts = [
  {
    id: 1,
    content: "No, provare no. Fare o non fare. Non c’è provare.",
    media:
      "https://st1.uvnimg.com/dims4/default/6eb31f5/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fy%2Fyoda_entrenado_a_luke_star_wars.jpeg",
    author: {
      name: "Yoda",
      image: "../img/yoda.jpg",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Hai mai fatto un sogno tanto realistico da sembrarti vero? E se da un sogno così non dovessi più svegliarti, come potresti distinguere il mondo dei sogni dalla realtà?",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Morpheus",
      image: "../img/morpheus.jpg",
    },
    likes: 120,
    created: "2021-09-03",
  },
  //   {
  //     id: 3,
  //     content:
  //       "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
  //     media: "https://unsplash.it/600/400?image=234",
  //     author: {
  //       name: "Chiara Passaro",
  //       image: "https://unsplash.it/300/300?image=20",
  //     },
  //     likes: 78,
  //     created: "2021-05-15",
  //   },
];

// Arrey di dati

immaginiArray = [];
authorArray = [];
contentArray = [];
mediaArray = [];
likesArray = [];
createdArray = [];

for (let i = 0; i < posts.length; i++) {
  immaginiArray.push(posts[i].author["image"]);
  authorArray.push(posts[i].author["name"]);
  contentArray.push(posts[i].content);
  mediaArray.push(posts[i].media);
  likesArray.push(posts[i].likes);
  createdArray.push(posts[i].created);
}
console.log("immaginiArray", immaginiArray);
console.log("authorArray", authorArray);
console.log("contentArray", contentArray);
console.log("mediaArray", mediaArray);
console.log("likesArray", likesArray);
console.log("createdArray", createdArray);

// click button ----------------------------------

const button = document.getElementById("myButton");
const textButton = document.querySelector(".like-button");

button.addEventListener("click", function () {
  if (button.classList.contains("like-button-newColor")) {
    button.classList.remove("like-button-newColor");
  } else {
    button.classList.add("like-button-newColor");
  }
});

// post uno ---------------------------------------------

const imgAutore = document.querySelector(".post-meta__icon");
imgAutore.innerHTML += `<img class="profile-pic" src="${immaginiArray[0]}" alt=""/>`;

const nameAutore = document.querySelector(".post-meta__author");
nameAutore.innerHTML += `${authorArray[0]}`;

const contentPost = document.querySelector(".post__text");
contentPost.innerHTML += `${contentArray[0]}`;

const media = document.querySelector(".post__image");
media.innerHTML += `<img src="${mediaArray[0]}" alt="" />`;

const likes = document.querySelector(".js-likes-counter");
likes.innerHTML += `${likesArray[0]}`;

const created = document.querySelector(".post-meta__time");
created.innerHTML += `${createdArray[0]}`;

// post 2 ---------------------------------------

const imgAutore2 = document.querySelector(".post-meta__icon2");
imgAutore2.innerHTML += `<img class="profile-pic" src="${immaginiArray[1]}" alt=""/>`;

const nameAutore2 = document.querySelector(".post-meta__author2");
nameAutore2.innerHTML += `${authorArray[1]}`;

const contentPost2 = document.querySelector(".post__text2");
contentPost2.innerHTML += `${contentArray[1]}`;

const media2 = document.querySelector(".post__image2");
media2.innerHTML += `<img src="${mediaArray[1]}" alt="" />`;

const likes2 = document.querySelector(".js-likes-counter2");
likes2.innerHTML += `${likesArray[1]}`;

const created2 = document.querySelector(".post-meta__time2");
created2.innerHTML += `${createdArray[1]}`;
