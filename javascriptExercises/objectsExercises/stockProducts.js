/*
A store needs to make a receipt with the purchase data: name, address, product, Quantity and total.
Take into account the stock of the product in each of the 3 stores and when making the purchase,
discount the purchased quantity of the product from the stock of the respective store
*/
const productsInfo = [
    {
        name: "Shirt",
        price: 25.99,
        stock: [4, 5, 1]
    },
    {
        name: "Pants",
        price: 55.99,
        stock: [5, 1, 2]
    },
    {
        name: "Jacket",
        price: 80.99,
        stock: [3, 6, 9]
    },
    {
        name: "Shoes",
        price: 60.99,
        stock: [3, 4, 5]
    },
    {
        name: "cap",
        price: 15.99,
        stock: [7, 5, 4]
    }
];
const customersInfo = [
    {
        name: 'John',
        lastname: 'Perez',
        age: 25,
        address: {
            street: 'Av. freedom',
            number: 123,
            city: 'Buenos Aires',
            country: 'ARGENTINA'
        },
        discount: 1
    },
    {
        name: 'Mary',
        lastname: 'Garcia',
        age: 30,
        address: {
            street: 'Calle 10',
            number: 456,
            city: 'Mexico City',
            country: 'MEXICO'
        },
        discount: 0.80
    },
    {
        name: 'Peter',
        lastname: 'Martinez',
        age: 40,
        address: {
            street: 'Rua Augusta',
            number: 789,
            city: 'São Paulo',
            country: 'BRAZIL'
        },
        discount: 0.50
    }
];
console.log(productsInfo);
const createBill = (userName, productName, productQuantity, storeId) =>{
    if((storeId < 3) && (storeId >= 0)){
        const userPosition = customersInfo.findIndex(customer => customer.name === userName);
        const productPosition = productsInfo.findIndex(product => product.name === productName);
        if(productQuantity <= productsInfo[productPosition].stock[storeId]){
            const bill = {
                name: `${customersInfo[userPosition].name} ${customersInfo[userPosition].lastname} `,
                address: `Address: ${customersInfo[userPosition].address.street}, ${customersInfo[userPosition].address.city}`,
                product: productName,
                Quantity: productQuantity,
                total: (productsInfo[productPosition].price * productQuantity)*customersInfo[userPosition].discount
            };
            productsInfo[productPosition].stock[storeId] -= productQuantity;
            return bill;
        }else{
            return "Not enough stock"
        };
    }else{
        return "Store not avaliable"
    };
};
console.log(createBill("John", "Shirt", 4, 1));