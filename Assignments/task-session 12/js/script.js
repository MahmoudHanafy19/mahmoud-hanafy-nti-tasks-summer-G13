
// Array to store all users
var users = [];

// 1- Add User
function addUser() {
    var id = prompt("Enter user ID:");
    var name = prompt("Enter user name:");
    var balance = prompt("Enter initial balance:");

    // Check if ID already exists
    if (users.some(user => user.id === id)) {
        alert("Error: This ID already exists!");
        return;
    }

    // Create user object
    var newUser = {
        id: id,
        name: name,
        balance: parseFloat(balance)
    };

    // Add to array
    users.push(newUser);
    alert("User added successfully!");
    console.log(users);
}

// 2- Edit User Balance By ID
function editUserBalanceById() {
    var id = prompt("Enter user ID to edit balance:");
    var newBalance = prompt("Enter new balance:");

    // Find user
    var user = users.find(user => user.id === id);
    if (user) {
        user.balance = parseFloat(newBalance);
        alert("Balance updated successfully!");
    } else {
        alert("Error: User not found!");
    }
    console.log(users);
}

// 3- Delete User By ID
function deleteUserById() {
    var id = prompt("Enter user ID to delete:");

    var index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        alert("User deleted successfully!");
    } else {
        alert("Error: User not found!");
    }
    console.log(users);
}

function showUsers() {
    users.forEach((user) => console.log(user))
}

function test() {
    addUser()
    showUsers()
    addUser()
    showUsers()
    addUser()
    showUsers()
    addUser()
    showUsers()
    editUserBalanceById()
    showUsers()
    deleteUserById()
    showUsers()
}

test()
