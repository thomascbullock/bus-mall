'use strict';

Item.allItems = [];

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

function Item(name, displayName, filePath) {
    this.name = name;
    this.displayName = displayName;
    this.filePath = filePath;
    this.showCount = 0;
    this.clickCount = 0;
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
var cthulu = new Item('cthulu','Cthulu','img/cthulu.jpg');
var dogDuck = new Item('dog_duck','Dog Duck','img/dog-duck.jpg');
var dragon = new Item('dragon','Dragon','img/dragon.jpg');
var pen = new Item('pen','Pen','img/pen.jpg');
var petSweep = new Item('pet_sweep','Pet Sweep','img/pet-sweep.jpg');
var scissors = new Item('scissors', 'Scissors','img/scissors.jpg');
var shark = new Item('shark','Shark','img/shark.jpg');
var sweep = new Item('sweep','Sweep','img/sweep.jpg');
var tauntaun = new Item('tauntaun','Tauntaun','img/tauntaun.jpg');
var unicorn = new Item('unicorn','Unicorn','img/unicorn.jpg');
var usb = new Item('usb','USB','img/usb.gif');
var waterCan = new Item('water_can','Water Can','img/water-can.jpg');
var wineGlass = new Item('wine_glass','Wine Glass','img/wine-glass.jpg');





