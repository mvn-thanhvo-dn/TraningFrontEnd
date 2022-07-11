const root = document.querySelector('.main-right__content');
const search = document.querySelector('.main-right__input');
const data = getData();
let html;

const renderUI = (data) => {
    if (data.length > 0) {
        html =
            `
        <div class="tbl-header">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã sản phẩm</th>
                        <th colspan="2">Tên sản phẩm</th>
                        <th>Giá</th>
                        <th class="th-img">Hình ảnh</th>
                        <th class="text-center">
                            <a href="/form.html" class="table-header__link">
                                <span>Thêm sản phẩm </span>
                                <i class="fa-solid fa-plus"></i>
                            </a>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table>
                <tbody>` +
            data
                .map(
                    (item) => `
                    <tr>
                        <th>${item.id}</th>
                        <th>${item.product_code}</th>
                        <th colspan="2">${item.name}</th>
                        <th>${item.price}$</th>
                        <th class="th-img">
                            <img 
                                class="table-img" 
                                src="${item.img || './img/img-placeholder.png'}"
                                alt="product">
                        </th>
                        <th class="text-center">
                            <a href="/form.html?id=${
                                item.id
                            }" class="btn-update">
                                <i class="fa-solid fa-pen"></i>
                            </a>
                            <a class="btn-delete">
                                <i class="fa-regular fa-trash-can"></i>
                            </a>
                        </th>
                    </tr>`
                )
                .join('') +
            `
                </tbody>
            </table>
        </div>`;
    } else {
        html = '<p class="text-center">Không có sản phẩm nào!</p>';
    }
    render(root, html);
    const btnsDelete = document.querySelectorAll('.btn-delete');
    for (let i = 0; i < btnsDelete.length; i++) {
        btnsDelete[i].onclick = () => {
            if (confirm('Bạn có chắc muốn xóa sản phẩm này không?') == true) {
                data.splice(i, 1);
                setData(data);
                renderUI(data);
            }
        };
    }
};
renderUI(data);

const handleSearch = (e) => {
    const searchList = Array.from(data).filter((item) =>
        item.name.toUpperCase().includes(search.value.toUpperCase())
    );
    renderUI(searchList);
};

search.oninput = handleSearch;

document.forms['form'].onsubmit = (e) => {
    e.preventDefault();
    handleSearch();
};
