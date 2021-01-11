let database = [
{
    username: 'Marius',
    password: 'supersecret'
},
{
    username: 'Ank',
    password: '123' 
},
{
    username: 'Yannis',
    password: '1234'
},
{
    username: 'Alexis',
    password: '12345'
}
];

let newsFeed = [{
    username: 'Bobby',
    timeline: 'So tired from all that learning!'
},
{
    username: 'Sally',
    timeline: 'Javascript is soo cool'
}
];

let userNamePrompt = prompt('What\'s your user name?');
let passwordPrompt = prompt('What\'s your password?');

let newsFeedDOM = document.querySelector('.news')

/*
function signIn(user, pas) {
    if(user === database[0].username && pas === database[0].password) {
        newsFeedDOM.innerHTML = `The news:<br> ${newsFeed[0].username}<br>${newsFeed[0].timeline}`
    } else {
        alert('Sorry, wrong username and password!')
    }
} */

// create a function to check if username and password is valid and return aboolean to use it in the for loop
function isUserValid(username, password) {
    for( let i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


// using a forloop
function signIn(username, password) {
        if(isUserValid(username, password)){
           return newsFeedDOM.innerHTML = `The news:<br> ${newsFeed[0].username}<br>${newsFeed[0].timeline}` 
        } else {
                 alert('Sorry, wrong username and password!')
        
        }
}

signIn(userNamePrompt, passwordPrompt);