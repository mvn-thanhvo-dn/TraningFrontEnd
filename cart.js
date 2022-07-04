let nCart = localStorage.getItem('num_cart')
    ? parseInt(localStorage.getItem('num_cart'))
    : 0;
const cartCount = document.querySelector('.cart-count');
cartCount.innerText = nCart;
const cartList = localStorage.getItem('cart_list')
    ? JSON.parse(localStorage.getItem('cart_list'))
    : [];

function renderListCart() {
    const listProductInCart = localStorage.getItem('cart_list')
        ? JSON.parse(localStorage.getItem('cart_list'))
        : [];
    const tbody = document.querySelector('.table > tbody');
    if (listProductInCart.length > 0) {
        tbody.innerHTML = listProductInCart
            .map((item) => {
                return `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>
                        <a href="" data-id="${item.id}" class="delete-product">
                            <i class="bi bi-trash"></i>
                        </a>
                    </td>
                </tr>`;
            })
            .join('');
        const deleteBtns = document.querySelectorAll('.delete-product');
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].onclick = (e) => {
                e.preventDefault();
                cartList.splice(i, 1);
                localStorage.setItem('cart_list', JSON.stringify(cartList));
                nCart = cartList.length;
                cartCount.innerText = nCart;
                localStorage.setItem('num_cart', nCart);
                renderListCart();
            };
        }
    } else {
        tbody.innerHTML = `
        <tr>
            <td colspan="4" class="text-center">Không có sản phẩm nào trong giỏ hàng!</td>
        </tr>`;
    }
}
renderListCart();
