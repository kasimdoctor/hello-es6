// fetch is a new keyword in ES6 implemented by most browsers
// It does the same thing as a libary like Axios (which you used while learning node!)
// e.g:
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=1"

fetch(url)
    .then((response) => {
        console.log(response.json());
    })
    .catch((error) => {
        console.log(error);
    })