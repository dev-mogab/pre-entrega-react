const products = [
  {
    id: "1",
    name: "Samsung Galaxy Z Flip5",
    price: 999,
    category: "Galaxy Z",
    img: "https://image-us.samsung.com/us/smartphones/galaxy-z-flip5/Graphite/1.jpg?$product-details-jpg$",
    stock: 10,
    description: "Z Flip Description",
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    price: 859,
    category: "Galaxy S",
    img: "https://image-us.samsung.com/us/smartphones/galaxy-s23/images/gallery/phantom-black/01-DM1-PhantomBlack-PDP-1600x1200.jpg?$product-details-jpg$",
    stock: 20,
    description: "S23 Description",
  },
  {
    id: "3",
    name: "Samsung Galaxy Tab S9 ",
    price: 799,
    category: "Tablets",
    img: "https://image-us.samsung.com/us/tablets/galaxy-tab-s9/products/tab-s9/gallery-images/graphite/new/1.jpg?$product-details-jpg$",
    stock: 5,
    description: "Tab S9 Description",
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products.find(prod => prod.id === productId))
    }, 500)
  })
};

export const getProductByCategory = (categoryId) =>{
  return new Promise((res) => {
    setTimeout(() => {
      res(products.filter(prod => prod.category === categoryId))
    }, 500)
  })
}