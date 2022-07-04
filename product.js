let nCart = localStorage.getItem('num_cart')
    ? parseInt(localStorage.getItem('num_cart'))
    : 0;
const cartCount = document.querySelector('.cart-count');
const cartList = localStorage.getItem('cart_list')
    ? JSON.parse(localStorage.getItem('cart_list'))
    : [];
const productListElement = document.querySelector('.product-list');
const listProduct = [
    {
        id: '1',
        title: 'Title 1',
        description: 'Description 1',
    },
    {
        id: '2',
        title: 'Title 2',
        description: 'Description 2',
    },
    {
        id: '3',
        title: 'Title 3',
        description: 'Description 3',
    },
    {
        id: '4',
        title: 'Title 4',
        description: 'Description 4',
    },
    {
        id: '5',
        title: 'Title 5',
        description: 'Description 5',
    },
    {
        id: '6',
        title: 'Title 6',
        description: 'Description 6',
    },
];

cartCount.innerText = nCart;
productListElement.innerHTML = listProduct
    .map((item) => {
        return `
        <li class="product-item col-3">
            <div class="card ">
                <img src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
                    class="card-img-top" alt="product">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="" data-id="${item.id}" class="btn btn-primary btn-add">Add to cart</a>
                </div>
            </div>
        </li>`;
    })
    .join('');

const addToCarts = document.querySelectorAll('.btn-add');
addToCarts.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        cartList.push(listProduct.find((item) => item.id === id));
        localStorage.setItem('cart_list', JSON.stringify(cartList));
        nCart = cartList.length;
        localStorage.setItem('num_cart', nCart);
        cartCount.innerText = nCart;
    };
});
