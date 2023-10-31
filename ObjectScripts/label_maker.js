let myInfo = {
    name : "Teala Bradley",
    address : "1111 Main Street",
    city: "Gotham",
    state: "NY",
    zip: "96072",

    }
    printContact(myInfo)

function printContact(myInfo) {
    
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(myInfo.city + ", " + myInfo.state + " " + myInfo.zip);
}




