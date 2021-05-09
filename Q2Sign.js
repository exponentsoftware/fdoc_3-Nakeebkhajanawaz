function signUp(name) {
    for (user of users) {
        if (name.username == name) {
            console.log('user already exists');
        } else {
            users.push({ username: name });
            break;
        }
    }
};
signUp("Alex");
console.log(users);

function signIn(name, password) {
    for(user of users) {
        if(user.username == name && user.password == password) {
            console.log("signed In");
            break;
        }else {
            console.log("User doesn't exist");
            break;
        }
    }
}

signIn('Alex',12345);