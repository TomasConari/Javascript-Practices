/*
A store needs to make a receipt with the purchase data: name, address, product, Quantity and total.
note that the product discount depends on the customer's country of residence 
*/
const productsInfo = [
    {
        name: "Shirt",
        price: 25.99
    },
    {
        name: "Pants",
        price: 55.99
    },
    {
        name: "Jacket",
        price: 80.99
    },
    {
        name: "Shoes",
        price: 60.99
    },
    {
        name: "cap",
        price: 15.99
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
const createBill = (userName, productName, productQuantity) =>{
    const userPosition = customersInfo.findIndex(customer => customer.name === userName);
    const productPosition = productsInfo.findIndex(product => product.name === productName);
    const bill = {
        name: `${customersInfo[userPosition].name} ${customersInfo[userPosition].lastname} `,
        address: `Address: ${customersInfo[userPosition].address.street}, ${customersInfo[userPosition].address.city}`,
        product: productName,
        Quantity: productQuantity,
        total: (productsInfo[productPosition].price * productQuantity)*customersInfo[userPosition].discount
    };

    return bill;
};
console.log(createBill("Peter","Shirt",1));