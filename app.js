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

var relod = [];
var viw = [];
var cli = [];
var totalClicks = 0;
var firstIteration = [];
var secondIteration = [];

var leftImage = document.getElementById("leftImage");
var middleImage = document.querySelector("#middleImage");
var rightImage = document.querySelector("#rightImage");
var iamgeSection = document.querySelector("#iamgeSection");

function Product(name) {
  this.productName = name.split(".")[0];
  this.imagePath = ` images/${name}`;
  this.clicks = 0;
  this.views = 0;
  Product.all.push(this);
}
Product.all = [];

for (var i = 0; i < namesOfProduct.length; i++) {
  new Product(namesOfProduct[i]);
}

var leftProduct, rightProduct, middleProduct; //global variables

function renderImages() {
  leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
  rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
  middleProduct = Product.all[randomNumber(0, Product.all.length - 1)];


  if (leftProduct === middleProduct || leftProduct === rightProduct || rightProduct === middleProduct) {
  leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
  rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
  middleProduct = Product.all[randomNumber(0, Product.all.length - 1)];
 
  }


  while (
    leftProduct === middleProduct ||
    leftProduct === rightProduct ||
    middleProduct === rightProduct ||
    relod.includes(leftProduct) ||
    relod.includes(rightProduct) ||
    relod.includes(middleProduct)
  ) {
    leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    middleProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    relod = [];
  }

  relod.push(leftProduct);
  relod.push(rightProduct);
  relod.push(middleProduct);

  
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



iamgeSection.addEventListener("click", handleClick);

function handleClick(event) {
  if (totalClicks < 4) {

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
      renderImages();
    }
  } else {
    renderResults();
    iamgeSection.removeEventListener("click", handleClick);
  }
}

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

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderChart() {
  for (var i = 0; i < Product.all.length; i++) {
    viw.push(Product.all[i].views);
    cli.push(Product.all[i].clicks);
  }

  console.log(viw);
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
