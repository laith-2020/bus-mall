"use strict";

var namesOfProduct = [
  "bag.jpg",
  "banana.jpg",
  "bathroom.jpg",
  "boots.jpg",
  "breakfast.jpg",
  "bubblegum.jpg",
  "chair.jpg",
  "cthulhu.jpg",
  "dog-duck.jpg",
  "dragon.jpg",
  "pen.jpg",
  "pet-sweep.jpg",
  "scissors.jpg",
  "shark.jpg",
  "sweep.png",
  "tauntaun.jpg",
  "unicorn.jpg",
  "usb.gif",
  "water-can.jpg",
  "wine-glass.jpg",
];


//global variables

var leftProduct, rightProduct, middleProduct;

var viw = [];
var cli = [];
var totalClicks = 0;
var firstIteration = [];
var secondIteration = [];

var leftImage = document.getElementById("leftImage"); // way to get the element 
var middleImage = document.querySelector("#middleImage");
var rightImage = document.querySelector("#rightImage");
var iamgeSection = document.querySelector("#iamgeSection");

function Product(name) {
  this.productName = name.split(".")[0]; // i used split  just to take the frute name withou the extention ex : banana
  this.imagePath = ` images/${name}`;
  this.clicks = 0;
  this.views = 0;
  Product.all.push(this);
}
Product.all = [];


for (var i = 0; i < namesOfProduct.length; i++) {
  new Product(namesOfProduct[i]);
}


function checkRandomImages(){
         checkRandomNumber();
  //we give the value to the images 
  leftProduct = Product.all[num1];
  rightProduct = Product.all[num2];
  middleProduct = Product.all[num3];

  //check if the firstiteration not empty if not it will check the firstiteration and seconditeration and then if the firstiteration == seconditeration call the checkRandomImages();

  if (firstIteration.length !== 0) {
    secondIteration[0] = leftProduct.productName;
    secondIteration[1] = rightProduct.productName;
    secondIteration[2] = middleProduct.productName;

    for (var i = 0; i < secondIteration.length; i++) {

      for (var j = 0; j < firstIteration.length; j++) {
        if (secondIteration[i] == firstIteration[j]) {
          checkRandomImages();
        }
      }
    }

  }
  else {
    firstIteration[0] = leftProduct.productName;
    firstIteration[1] = rightProduct.productName;
    firstIteration[2] = middleProduct.productName;
  }

}


// function to check 3 deferant number
function checkRandomNumber() {
  num1 = randomNumber(0, Product.all.length - 1);
  num2 = randomNumber(0, Product.all.length - 1);
  num3 = randomNumber(0, Product.all.length - 1);

  if (num1 === num3 || num1 === num2 || num2 === num3) {
    checkRandomNumber();
  }
}


var num1, num2, num3;
function renderImages() {

  checkRandomImages();
  firstIteration[0] = leftProduct.productName;
  firstIteration[1] = rightProduct.productName;
  firstIteration[2] = middleProduct.productName;


  leftImage.src = leftProduct.imagePath;
  leftImage.alt = leftProduct.productName;
  leftImage.title = leftProduct.productName;
  leftProduct.views++;

  middleImage.src = middleProduct.imagePath;
  middleImage.alt = middleProduct.productName;
  middleImage.title = middleProduct.productName;
  middleProduct.views++;

  rightImage.src = rightProduct.imagePath;
  rightImage.alt = rightProduct.productName;
  rightImage.title = rightProduct.productName;
  rightProduct.views++;

}
renderImages();

//store data
function storeData() {
  var store = JSON.stringify(Product.all);
  localStorage.setItem('allProducts', store);
}

// get all the data
function getData() {
  var store = localStorage.getItem('allProducts');
  console.log(store);
  if (store) {
    Product.all = JSON.parse(store);
    renderResults();
  }
}


iamgeSection.addEventListener("click", handleClick);

function handleClick(event) {
  if (totalClicks < 24) {

    if (event.target.id !== "iamgeSection") {
      totalClicks++;

      if (event.target.id === "leftImage") {
        leftProduct.clicks++;
      }
      if (event.target.id === "rightImage") {
        rightProduct.clicks++;
      }
      if (event.target.id === "middleImage") {
        middleProduct.clicks++;
      }
      storeData();
      renderImages();
    }
  } else {
    renderResults();
    iamgeSection.removeEventListener("click", handleClick);
  }

}

// function to get the result in the web page
function renderResults() {
  var ule1 = document.getElementById("finalResult");
  for (var i = 0; i < Product.all.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("id", "list");
    li.textContent = `${Product.all[i].productName} Has Clicked ${Product.all[i].clicks} and has  Viewd ${Product.all[i].views}`;
    ule1.append(li);
  }
  renderChart();
}

//helper function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to push the total of view and click 
function renderChart() {
  for (var i = 0; i < Product.all.length; i++) {
    viw.push(Product.all[i].views);
    cli.push(Product.all[i].clicks);
  }

  // cahrt
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "bag",
        "banana",
        "bathroom",
        "boots",
        "breakfast",
        "bubblegum",
        "chair",
        "cthulhu",
        "dog-duck",
        "dragon",
        "pen",
        "pet-sweep",
        "scissors",
        "shark",
        "sweep",
        "tauntaun",
        "unicorn",
        "usb",
        "water-can",
        "wine-glass",
      ],
      datasets: [
        {
          name: "Proven Oil Reserves (bn)",
          legendText: "Proven Oil Reserves",
          label: "# of Clicks",
          data: cli,

          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "# of Views",
          data: viw,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}


getData();