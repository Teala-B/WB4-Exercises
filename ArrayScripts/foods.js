let lunch = [
    {item: "Nuggets", price: "8.50"},
    {item: "Fries", price: "3.50"},
    {item: "Lemonade", price: "2.50"}
]
function getOrderTotal(order) {
      // create total variable
      let orderTotal = 0;

      // loop through the array
      // add price to the total
      for(let i = 0; i < lunch.length; i++) {
          orderTotal = orderTotal + lunch[i].price
      }
  
      // return the total
      return orderTotal;
}
let myTotal = getOrderTotal(lunch);


console.log(`My Total : $ ${myTotal}`);