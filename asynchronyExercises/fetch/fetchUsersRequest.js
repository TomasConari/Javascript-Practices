//Unfinished
const getUsers = async () =>{
    const rawData = await fetch('https://reqres.in/api/users?page=1');
    const userData = await rawData.json();
    const userList = await userData.data;
    console.log(userList);
};
getUsers();