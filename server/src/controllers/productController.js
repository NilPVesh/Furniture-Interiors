const getProducts = (req, res) => {
    res.json([
        {
            id: 1,
            name: "Luxury Sofa",
            price: 45000
        },
        {
            id: 2,
            name: "Dining Table",
            price: 35000
        }
    ]);
};

module.exports = {getProducts};