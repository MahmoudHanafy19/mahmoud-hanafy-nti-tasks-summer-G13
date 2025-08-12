


// ////// task one change color and remove from others //////// 
function changeColor(element) {
    document.querySelectorAll('.list-unstyled li')
            .forEach(el => el.style.color = "");
        element.style.color = "blue";
    }
// /////// ------------------------------------------ ////////

// ////// ------  task Two Get Info From Form  ------ ////////
var users = [];

    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        
        var newUser = {
            name: name,
            email: email,
            password: password
        };
        
        users.push(newUser);
        
        console.log("Users Array:", users);
        
        console.table(users);
        
        document.getElementById("loginForm").reset();
    });
    // /////// ------------------------------------------ ////////
