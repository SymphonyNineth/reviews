// local reviews data
const reviews = [{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const img = document.querySelector("#person-img"),
  author = document.querySelector("#author"),
  job = document.querySelector("#job"),
  info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn"),
  nextBtn = document.querySelector(".next-btn"),
  randomBtn = document.querySelector(".random-btn");
let value = 0;
img.src = reviews[value].img;
author.innerText = reviews[value].name;
job.innerText = reviews[value].job;
info.innerText = reviews[value].text;


function getPrev() {
  if (value === 0) {
    value = reviews.length;
  }
  img.src = reviews[value - 1].img;
  author.innerText = reviews[value - 1].name;
  job.innerText = reviews[value - 1].job;
  info.innerText = reviews[value - 1].text;
  value = value - 1;
}

function getNext() {
  if (value + 1 < reviews.length) {
    img.src = reviews[value + 1].img;
    author.innerText = reviews[value + 1].name;
    job.innerText = reviews[value + 1].job;
    info.innerText = reviews[value + 1].text;
    value = value + 1;

  } else {
    value = 0;
    img.src = reviews[0].img;
    author.innerText = reviews[0].name;
    job.innerText = reviews[0].job;
    info.innerText = reviews[0].text;
  }
}


function randomReview() {
  function getRandomNumber(){
    return Math.floor(Math.random() * 4);
  }
  value = getRandomNumber();
  console.log(value);
  img.src = reviews[value].img;
  author.innerText = reviews[value].name;
  job.innerText = reviews[value].job;
  info.innerText = reviews[value].text;
}

prevBtn.addEventListener("click", getPrev);
nextBtn.addEventListener("click", getNext);
randomBtn.addEventListener("click", randomReview);