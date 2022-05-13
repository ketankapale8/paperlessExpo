import Cantabil from './OrderList/Data/cantabil1.jpg';
import dmart from './OrderList/Data/dmart1.png';
import reliance from './OrderList/Data/reliance1.png';
import BigB from './OrderList/Data/bigbazaar1.png';


const Data = [
    {
        id:"1",
        image: require('./OrderList/Data/bigbazaar1.png'),
        Vendortitle : "Big Bazaar",
        total : "250",
        purchaseDate : "12/03/2022",
        orders : [
            {   
                id:"1",
                title : "Banana",
                desc : "Fruits",
                qty:1,
                packof : 12,
                amt : 50.30
            },
            {
                id:"2",
                title : "Lemons",
                desc : "Fruits",
                qty:1,
                packof : 5,
                amt : 24.99
            },
            {
                id:"3",
                title : "Garlic",
                desc : "Vegetables",
                qty:1,
                packof : 1,
                amt : 15
            },
            {
                id:"4",
                title : "Biscuits",
                desc : "Eatables",
                qty:1,
                packof : 1,
                amt : 55.50
            }

        ]
    },
    {
        id:"2",
        image: require('./OrderList/Data/dmart1.png'),
        Vendortitle : "DMart",
        total : "4550",
        purchaseDate : "1/02/2022",
        orders : [
            {
                title : "Puma SportsShoes",
                desc : "Sports/Running Shoes",
                qty:1,
                packof : 1,
                amt : 1900
            },
            {
                title : "Utensils",
                desc : "Sports/Running Shoes",
                qty:1,
                packof : 20,
                amt : 459
            },
            {
                title : "Tomatoes",
                desc : "Vegetables",
                qty:1,
                packof : 24,
                amt :75.50
            },
            {
                title : "Wooden Table",
                desc : "Furniture",
                qty:1,
                packof : 1,
                amt : 2155.50
            }

        ]
    },
    {
        id:"3",
        image: require('./OrderList/Data/cantabil1.jpg'),
        Vendortitle : "Cantabil Retail Store",
        total : "5000",
        purchaseDate : "22/04/2022",
        orders : [
            {
                title : "SweatShirt Red Stripes",
                desc : "Tshirt",
                qty:1,
                packof : 12,
                amt : 1499.00
            },
            {
                title : "Body Spray (Lavender)",
                desc : "Spray",
                qty:1,
                packof : 5,
                amt : 600
            },
            {
                title : "Jeans (Black)",
                desc : "Clothes",
                qty:1,
                packof : 1,
                amt : 2000
            },
            {
                title : "Formal Shirt (42)",
                desc : "Full Shirt",
                qty:1,
                packof : 1,
                amt : 1299.50
            }

        ]
    },
    {
        id:"4",
        image: reliance,
        Vendortitle : "Reliance Mart",
        total : "950",
        purchaseDate : "3/05/2022",
        orders : [
            {
                title : "Apples",
                desc : "Fruits",
                qty:1,
                packof : 12,
                amt : 650.30
            },
            {
                title : "Watermelon",
                desc : "Fruits",

                qty:1,
                packof : 1,
                amt : 99.00
            },
            {
                title : "Strawberries",
                desc : "Fruits",
                qty:1,
                packof : 15,
                amt : 200
            },
            {
                title : "Biscuits",
                desc : "Fruits",
                qty:1,
                packof : 1,
                amt : 55.50
            }

        ]
    },
]

export default Data