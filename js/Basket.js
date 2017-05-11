function Basket() {
  this.items = [];
}

Basket.prototype.addItem = function(product) {
  if (this.checkIfProductExist(product)){
    this.items.push(product);
  }
};

Basket.prototype.checkIfProductExist = function(product) {
  var flag = true;
  this.items.forEach(function(element) {
    if (element.id === product.id) {
      element.count++;
      flag = false;
    }
  });

  if (flag) {
    return true;
  } else {
    return false;
  }
};

Basket.prototype.getAllItem = function() {
  return this.items;
};

Basket.prototype.getCount = function() {
  return this.items.length;
};

Basket.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  this.items.forEach(function(element) {
    totalPrice += element.price;
  });

  return totalPrice;
};

