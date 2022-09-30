const db = firebase.firestore();
const body = document.querySelector('body');
db.collection('product').get().then((snapshot) => {
    snapshot.forEach((el) => {
        const container = document.createElement('div');
        container.classList.add('container', 'mt-3')
        body.append(container);
        
        const product = document.createElement('div');
        product.classList.add('product');

        container.append(product);

        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.style = "background-image: url('https://via.placeholder.com/350')";
        
        const content = document.createElement('div');
        content.classList.add('flex-grow-1', 'p-4')
        product.append(thumbnail, content);
        
        const title = document.createElement('h5');
        title.classList.add('title');
        title.textContent = el.data().name;
        
        const date = new Date();
        const today = document.createElement('p');
        today.classList.add('date');
        today.textContent = date.toLocaleString();
        content.append(today);
        
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = el.data().price;

        const like = document.createElement('p');
        like.classList.add('like', 'float-end');
        like.textContent = "♥️ 0"
        content.append(title, today, price, like);
    })
})