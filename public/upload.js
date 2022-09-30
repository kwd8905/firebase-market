const db = firebase.firestore();
const storage = firebase.storage();
const title = document.querySelector('#text');
const content = document.querySelector('#content');
const price = document.querySelector('#price');
const file = document.querySelector('#image');
const button = document.querySelector('#send');
const date = new Date()

button.addEventListener('click', () => {
    const file = document.querySelector('#image').files[0];
    const storageRef = storage.ref();
    const path = storageRef.child('image/' + file.name);
    const upload = storageRef.put();

    db.collection('product').add({
        name: title.value,
        price: Number(price.value),
        content: content.value,
        date: date.toLocaleString()
    }).then((result) => {
        console.log(result);
        window.location.href = '/index.html'
    }).catch((error) => {
        console.log(error);
    })
})