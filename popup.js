var writeUs = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");

var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");

var firstname = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("firstname");
} catch (err) {
    isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        firstname.value = storage;
        email.focus();
    } else {
        firstname.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!firstname.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("firstname", firstname.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});


var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
});


/* Практика по книжці */

var age = 11;
var accompined = true;
var cinemaAge = 12;
var visitCinema = age >= cinemaAge || accompined;

var furryAnimals = ["cat", "dog", "mouse"];
var scalyAnimals = ["dragon", "KingKong"];
var allAnimals = furryAnimals.concat(scalyAnimals);
var randomWords = ["петя", "вася", "коля", "зіна", "зоя"];
var randomWord = randomWords[Math.floor(Math.random() * 4)];

for(var i = 1; i < 100; i++)
{
randomWords = ["петя", "вася", "коля", "зіна", "зоя"];
randomWord = randomWords[Math.floor(Math.random() * 4)];
/* console.log(randomWord) */
}

//об'єкти

var cat = {
    "lenght": 3,
    "name": "Sara",
    "color": "green"
};

var dog = {};
dog.color = "black";
dog.legs = 4;
dog.ears = 2;
dog.bark = "gau gau";

var dogs = [
    { name: "zeus", color: "blue", luckyNumbers: [2, 3, 4, 5] },
    { name: "Klara", color: "pink" }
];

var movies = {
    "Cars": {
        duration: 100,
        format: "DVD",
        releaseDate: 2003
    },
    "Sumerki 2": {
        duration: 120,
        format: "DVD",
        releaseDate: 2012
    }
};

var vikings = {
    duration: 150,
    format: "BluRay",
    releaseDate: 2015
};

movies["Vikings"] = vikings;

var scores = {
    "Petya": 0,
    "Vasya": 2,
    "Andriy": 10,
    "Tanya": 12
};
scores.Tanya += 5;
scores["Vasya"] += 10;
scores.Petya += 5;

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "putanina", numbers: 123 }, 3.3],
    "random animal": "banana shark"
};

// условия

var mouseName = "Zinaida";
console.log("Hi, " + mouseName);
if (mouseName.length > 6) {
    console.log("What a long name!");
} else {
    console.log("What a small name!")
};

var lemonChicken = false;
var beefWithBlackBeen = false;
var sweetAndSourPork = false;

if (lemonChicken) {
    console.log("Nice, I want to eat chicken with lemon");
} else if (beefWithBlackBeen) {
    console.log("I'll eat beef!");
} else if (sweetAndSourPork) {
    console.log("Okay, give me pork!");
} else {
    console.log("You don't have anything, I'll go to another restaurant!!!");
};

var Name = "Vasya";
var dadName = "Valera";
var motherName = "Zina";

if (Name === "Andrew") {
    console.log("Hi to me!");
} else {
    console.log("Hi, someone");
};
if (dadName === "Valera") {
    console.log("Hi, dad!");
} else {
    console.log("Hi, someone");
};
if (motherName === "Tanya") {
    console.log("Hi, mom!");
} else {
    console.log("Hi, madam!");
};

//цикли
var sheepCount = 0;
while (sheepCount < 10) {
    console.log("Counted sheeps: " + sheepCount + "!");
    sheepCount++;
};
console.log("end counting");

var timeToSayHello = 3;
for (var i = 0; i < timeToSayHello; i++) {
    console.log("Hi!");
};

var zooAnimals = ["lion", "tiger", "wolf", "wild cat"];
for (var i = 0; i < zooAnimals.length; i++) {
    console.log("In our zoo we have: " + zooAnimals[i] + ".");
};

for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
};

var randomAnimals = ["cat", "fish", "lemur", "varan"];
for (var i = 0; i < randomAnimals.length; i++) {
    randomAnimals[i] = randomAnimals[i] + " - fantastic animal";
    console.log(randomAnimals[i]);
};

//хз як це зробити
var alphabet = "абвгдеёжзийклмнопрстуфчцчшщъыьэюя";
var randomString = "";

while (randomString.length < 6) {
    var a = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[a];
    console.log(randomString);
};

var input = "javascript is awesome";
var output = "";

for (var b = 0; b < input.length; output += input[b]) {
    b++;
    console.log(output);
};