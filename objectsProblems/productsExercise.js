const productsInfo = [
    {
        name: "Shirt",
        price: 25.99,
        discount: 0.2
    },
    {
        name: "Pants",
        price: 55.99,
        discount: 0.1
    },
    {
        name: "Jacket",
        price: 80.99,
        discount: 0.15
    },
    {
        name: "Shoes",
        price: 60.99,
        discount: 0.25
    },
    {
        name: "cap",
        price: 15.99,
        discount: 0.05
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
        }
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
        }
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
        }
    }
];
const discount = productsInfo.map((product) => product.price * product.discount);
const createBill = (userName, productName, productQuantity) =>{
    const userPosition = customersInfo.findIndex(customer => customer.name === userName);
    const productPosition = productsInfo.findIndex(product => product.name === productName);
    const bill = {
        name: `${customersInfo[userPosition].name} ${customersInfo[userPosition].lastname} `,
        address: `Address: ${customersInfo[userPosition].address.street}, ${customersInfo[userPosition].address.city}`,
        product: productName,
        Quantity: productQuantity,
        total: (productsInfo[productPosition].price - discount[productPosition]) * productQuantity
    };
    return bill;
};
console.log(createBill("John","Shirt",1));