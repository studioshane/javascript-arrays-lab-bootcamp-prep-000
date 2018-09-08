// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
 kittens.push(name);
 return kittens;
}

function destructivelyPrependKitten(name) {
 kittens.unshift(name)
 return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens 
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  
}

function prependKitten(name) {
  
}

function removeLastKitten(kittens) {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(kittens) {
  return kittens.slice(1);
}