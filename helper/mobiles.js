var search = require('./search');

var products = [
    {
        name: "Samsung",
        id: "001",
        type: "mobile",
        weight: "206.8",
        price: "30000",
        color: "Red",
        features: [
            "2GB RAM",
            "32GB Storage"
        ]
    },
    {
        name: "LG",
        id: "soemid",
        type: "mobile",
        weight: "106.8",
        price: "35000",
        color: "White",
        features: [
            "14GB RAM",
            "640GB Storage"
        ]
    },
    {
        name: "Nokia",
        id: "3k4234",
        type: "mobile",
        weight: "106.8",
        price: "35000",
        color: "Black",
        features: [
            "1GB RAM",
            "6GB Storage"
        ]
    },
    {
        name: "Iphone",
        id: "002",
        type: "mobile",
        weight: "106.8",
        price: "35000",
        color: "Black",
        features: [
            "4TB RAM",
            "64TB Storage"
        ]
    }
]

var getAllProducts = () => {
    return products.slice(0, 5);
}

var getProduct = (id) => {
    return new Promise(async (res, rej) => {
        await products.forEach((item) => {
            if (item.id == id) res(item);
        });
        res(null);
    });
}

var searchProduct = (query) => {
    return search(products, query);
}

var addProduct = (product) => {
    products.push(product);
}

module.exports = { getAllProducts, addProduct, getProduct, searchProduct: searchProduct }