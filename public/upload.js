const db = firebase.firestore();
const title = document.querySelector('#text');
const content = document.querySelector('#content');
const price = document.querySelector('#price');
const file = document.querySelector('#image');
const button = document.querySelector('#send');


title.addEventListener('keyup', () => {
    console.log(title.value)
})
button.addEventListener('click', () => {
    console.log(title.value, price.value, content.value);
    db.collection('product').add({
        name: title.value,
        price: Number(price.value),
        content: content.value
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})