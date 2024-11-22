// task 4
interface Product {
    name: string;
    price: number;
  }
  function total (products: Product[]){
    return products.reduce((total, product) => total + product.price, 0);
  }
  const cart: Product[] = [
    { name: "gum", price: 10 },
    { name: "juice", price: 60 },
    { name: "chocolate", price: 90 },
    { name: "biscuit", price: 50 }
];
console.log(total(cart));
// Task 5 
const isValidEmail = (email: string): boolean => {
    const emailT = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return emailT.test(email);
};