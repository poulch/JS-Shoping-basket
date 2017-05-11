(function() {
  var basket = new Basket();
  var product1 = new Product(1,'Samsung Galaxy S8', 3800, 1);
  var product3 = new Product(1,'Samsung Galaxy S8', 3800, 1);
  var product2 = new Product(2, 'Laptop Lenovo Tab S', 1450, 1);
  basket.addItem(product1);
  basket.addItem(product2);
  basket.addItem(product3);

  console.log(basket.items);
})();