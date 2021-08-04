const people = [
    {
        name: "Karim",
        job: "Dev",
        summary: "Lorem ipsum dolor, sifdsfdsfsdfdsfsdae illo?"
    },
    {
        name: "Dania",
        job: "Stylist",
        summary: "Lorem ipsum bo sequi agnam similique vel aut recusandae illofdsffffffffff?"
    },
    {
        name: "Hadeel",
        job: "Officer",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deleniti minus in sed quis explicabo sequi amet, dolor iste numquam, ducimus animi odio eligendi, magnam similique vel aut recusandae illo?"
    }
];
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const summary = document.querySelector(".summary");
const back = document.querySelector(".back");
const next = document.querySelector(".next");
const random = document.querySelector(".random");

let currentItem = 0;


window.addEventListener("DOMContentLoaded",function () {
        showPerson()
});

function showPerson() {
    const item = people[currentItem];
    name.textContent = item.name;
    job.textContent = item.job;
    summary.textContent = item.summary;
};

// Back and Forth Navigation
next.addEventListener("click", function() {
    currentItem++;
if (currentItem > people.length - 1) {
    currentItem = 0;
}
    showPerson()
});


back.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = people.length-1;
    }
    showPerson()
});

random.addEventListener("click", function () {
    currentItem =  Math.floor(Math.random()*people.length);
    showPerson()
});

