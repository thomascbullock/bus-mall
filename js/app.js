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

new Item('bag','Bag','img/bag.jpg');
new Item('banana', 'Banana', 'img/banana.jpg');
new Item('bathroom','Bathroom', 'img/bathroom.jpg');
new Item('boots', 'Boots', 'img/boots.jpg');
new Item('breakfast', 'Breakfast', 'img/breakfast.jpg');
new Item('bubblegum','Bubble Gum', 'img/bubblegum.jpg');
new Item('chair', 'Chair', 'img/chair.jpg');
new Item('cthulhu','Cthulhu','img/cthulhu.jpg');
new Item('dog_duck','Dog Duck','img/dog-duck.jpg');
new Item('dragon','Dragon','img/dragon.jpg');
new Item('pen','Pen','img/pen.jpg');
new Item('pet_sweep','Pet Sweep','img/pet-sweep.jpg');
new Item('scissors', 'Scissors','img/scissors.jpg');
new Item('shark','Shark','img/shark.jpg');
new Item('sweep','Sweep','img/sweep.png');
new Item('tauntaun','Tauntaun','img/tauntaun.jpg');
new Item('unicorn','Unicorn','img/unicorn.jpg');
new Item('usb','USB','img/usb.gif');
new Item('water_can','Water Can','img/water-can.jpg');
new Item('wine_glass','Wine Glass','img/wine-glass.jpg');

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

  //then check total, if 25 then remove listeners and display reuslts, otherwise display new items

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
