var products = [
    {
        name: "Samsung",
        type: "mobile",
        weight: "206.8",
        price: "30000",
        color: "Red",
        Features: [
            "2GB RAM",
            "32GB Storage"
        ]
    },
    {
        name: "Nokia",
        type: "mobile",
        weight: "106.8",
        price: "35000",
        color: "Black",
        Features: [
            "4GB RAM",
            "64GB Storage"
        ]
    }
]

var getAllProducts = () => {

}

var addProduct = (product) => {
    products.push(product);
    console.log(products);

}

module.exports = { getAllProducts, addProduct }