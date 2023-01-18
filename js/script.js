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
console.log(immaginiArray);
console.log(authorArray);
console.log(contentArray);
console.log(mediaArray);
console.log(likesArray);
console.log("createdArray", createdArray);

const imgAutore = document.querySelector(".post-meta__icon");
imgAutore.innerHTML += `<img class="profile-pic" src="${immaginiArray[0]}" alt="Phil Mangione"/>`;

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
