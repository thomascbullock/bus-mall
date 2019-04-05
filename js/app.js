'use strict';

Item.allItems = [];

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var resultsList = document.getElementById('results_list');

var allImages = [img1, img2, img3];

function Item(name, displayName, filePath) {
  this.name = name;
  this.displayName = displayName;
  this.filePath = filePath;
  this.showCount = 0;
  this.clickCount = 0;
  this.displayedAs = 'none';
  Item.allItems.push(this);
}

//initialize all the images

var bag = new Item('bag','Bag','img/bag.jpg');
var banana = new Item('banana', 'Banana', 'img/banana.jpg');
var bathroom = new Item('bathroom','Bathroom', 'img/bathroom.jpg');
var boots = new Item('boots', 'Boots', 'img/boots.jpg');
var breakfast = new Item('breakfast', 'Breakfast', 'img/breakfast.jpg');
var bubblegum = new Item('bubblegum','Bubble Gum', 'img/bubblegum.jpg');
var chair = new Item('chair', 'Chair', 'img/chair.jpg');
var cthulhu = new Item('cthulhu','Cthulhu','img/cthulhu.jpg');
var dogDuck = new Item('dog_duck','Dog Duck','img/dog-duck.jpg');
var dragon = new Item('dragon','Dragon','img/dragon.jpg');
var pen = new Item('pen','Pen','img/pen.jpg');
var petSweep = new Item('pet_sweep','Pet Sweep','img/pet-sweep.jpg');
var scissors = new Item('scissors', 'Scissors','img/scissors.jpg');
var shark = new Item('shark','Shark','img/shark.jpg');
var sweep = new Item('sweep','Sweep','img/sweep.png');
var tauntaun = new Item('tauntaun','Tauntaun','img/tauntaun.jpg');
var unicorn = new Item('unicorn','Unicorn','img/unicorn.jpg');
var usb = new Item('usb','USB','img/usb.gif');
var waterCan = new Item('water_can','Water Can','img/water-can.jpg');
var wineGlass = new Item('wine_glass','Wine Glass','img/wine-glass.jpg');

img1.addEventListener('click', function(){
  chooseItem(event.target.id);
});
img2.addEventListener('click', function(){
  chooseItem(event.target.id);
});
img3.addEventListener('click', function(){
  chooseItem(event.target.id);
});

function chooseItem(inTarget){
  console.log(inTarget);
  for (var chooseCounter = 0; chooseCounter < Item.allItems.length; chooseCounter++) {
    if (Item.allItems[chooseCounter].displayedAs === inTarget) {
      Item.allItems[chooseCounter].clickCount++;
      break;
    }
  }
  refreshItems();
}

function displayNewItem(inImg){
  var canDisplay = false;
  while (canDisplay === false) {
    var randomPic = Math.floor(Math.random() * Item.allItems.length);
    if (Item.allItems[randomPic].displayedAs === 'none') {
      canDisplay = true;
      Item.allItems[randomPic].displayedAs = inImg.id;
      Item.allItems[randomPic].showCount++;
      inImg.src = Item.allItems[randomPic].filePath;
      console.log(Item.allItems[randomPic]);
    }
  }
}

function refreshItems() {
  //first set everything to undisplayed
  var totalClicks = 0;
  for (var itemCounter = 0; itemCounter < Item.allItems.length; itemCounter++){
    if (Item.allItems[itemCounter].displayedAs === 'last') {
      Item.allItems[itemCounter].displayedAs = 'none';
    } else if (Item.allItems[itemCounter].displayedAs.slice(0,3) === 'img') {
      Item.allItems[itemCounter].displayedAs = 'last';
    }
    totalClicks = totalClicks + Item.allItems[itemCounter].clickCount;
  }
  for (var imageCounter = 0; imageCounter < allImages.length; imageCounter++) {
    if (totalClicks === 25) {

      allImages[imageCounter].removeEventListener('click', function(){
        chooseItem(event.target.id);
      });
    } else {
      displayNewItem(allImages[imageCounter]);
    }
  }
  if (totalClicks === 25) {
    displayResults();
  }
}

function displayResults(){
  for (var resultsCounter = 0; resultsCounter < Item.allItems.length; resultsCounter++) {
    var resultsText = document.createTextNode(`${Item.allItems[resultsCounter].clickCount} votes for ${Item.allItems[resultsCounter].displayName}`);
    var resultsNode = document.createElement('li');
    resultsNode.appendChild(resultsText);
    resultsList.appendChild(resultsNode);
  }
}

refreshItems();
