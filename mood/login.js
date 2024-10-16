// Sign-up function
function signup() {
    const name = document.getElementById('logname-signup').value;
    const email = document.getElementById('logemail-signup').value;
    const password = document.getElementById('logpass-signup').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Check if the email already exists in local storage
    if (localStorage.getItem(email)) {
        alert('User with this email already exists');
        return;
    }

    // Store user details (object) in local storage
    const user = {
        name: name,
        email: email,
        password: password
    };
    
    // Store the object as a string
    localStorage.setItem(email, JSON.stringify(user));
    alert('Sign up successful');
}

// Login function
function login() {
    const email = document.getElementById('logemail-login').value;
    const password = document.getElementById('logpass-login').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Retrieve user details from local storage
    const storedUser = localStorage.getItem(email);

    if (storedUser === null) {
        alert('User does not exist');
        return;
    }

    // Parse the stored user data
    const user = JSON.parse(storedUser);

    // Check if the password matches
    if (user.password === password) {
        alert('Login successful. Welcome ' + user.name);
        window.location.href = "index.html";
        localStorage.setItem('loggedInUser', user.name);
    } else {
        alert('Incorrect password');
    }
}
