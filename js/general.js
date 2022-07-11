const localData = [
    {
        id: 1,
        product_code: 'AN515-57-71VV',
        name: 'Laptop Gaming Acer Nitro 5 Eagle AN515-57-71VV i7-11800H/ 8GB/ 512GB/ RTX 3050 4GB/ Win 11',
        price: 1187,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/laptop-acer-nitro5-eagle-01-500x500_ya3hlFc.jpg',
        description:
            '- CPU: Intel® Core™ i7-11800H (upto 4.60GHz, 24MB)\\n\\n- RAM: 8GB DDR4 khe rời 3200MHz (2 khe, tối đa 32GB)\\n\\n- Ổ cứng: 512GB PCIe NVMe SSD cắm sẵn (nâng cấp tối đa 2TB SSD PCIe Gen3, 8 Gb/s, NVMe và 2TB HDD 2.5-inch 5400 RPM)\\n\\n- VGA: NVIDIA® GeForce RTX™ 3050 4GB GDDR6\\n\\n- Màn hình: 15.6 inch FHD(1920 x 1080) IPS 144Hz slim bezel LCD, Acer ComfyView LED-backlit TFT LCD\\n\\n- Pin: 57.5 Wh, 4-cell\\n\\n- Cân nặng: 2.2 kg\\n\\n- Tính năng: Đèn nền bàn phím\\n\\n- Màu sắc: Shale Black\\n\\n- OS: Windows 11 Home',
        stock: 14,
        created_at: '2022-01-06T17:00:00Z',
        brand: 1,
    },
    {
        id: 2,
        product_code: 'A715-42G-R1SB',
        name: 'Laptop Acer Aspire 7 A715-42G-R1SB R5-5500U/ 8GB/ 256GB/ GTX 1650 4GB/ 15.6 inch FHD/ Win 10',
        price: 989,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/acer-predator-triton-300-pt315-53-71dj-i7-600x600.jpg',
        description:
            '- CPU: AMD Ryzen R5-5500U (8MB, 2.1GHz up to 4.00GHz)\\n- RAM: 8GB(1x8GB) DDR4 3200MHz\\n- Ổ cứng: 256GB PCIe NVMe SSD cắm sẵn (nâng cấp tối đa 1TB SSD)\\n- VGA: NVIDIA GeForce GTX 1650 4GB GDDR6\\n- Màn hình: 15.6 inch FHD(1920 x 1080) 144Hz SlimBezel, Acer ComfyView™ IPS LED LCD\\n- Pin: 48 Wh\\n- Cân nặng: 2.1kg\\n- Màu sắc: Đen\\n- Tính năng: Đèn nền bàn phím\\n- OS: Windows 10 Home',
        stock: 17,
        created_at: '2022-01-06T17:00:00Z',
        brand: 1,
    },
    {
        id: 3,
        product_code: 'GA503QC-HN074T',
        name: 'Laptop Asus ROG Zephyrus G15 GA503QC-HN074T R9-5900HS/ 16GB/ 512GB/ RTX 3050 4GB',
        price: 1298,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/asus-tuf-gaming-fx516pe-i7-hn005t-600x600.jpg',
        description:
            '- CPU: AMD Ryzen 9-5900HS (3.0GHz up to 4.6GHz, 16MB)\\n- RAM: 16GB(8GB + 8GB[On board]) DDR4 3200MHz (1x SO-DIMM slot)\\n- Ổ cứng: 512GB M.2 NVMe™ PCIe® 3.0 SSD\\n- VGA: NVIDIA® GeForce RTX™ 3050 4GB GDDR6\\n- Màn hình: 15.6 inch FHD (1920 x 1080)-144Hz\\n- Pin: 4-cell, 90WHrs Li-ion\\n- Cân nặng: 1.9 KG\\n- HĐH: Windows 10 Home',
        stock: 19,
        created_at: '2022-01-06T17:00:00Z',
        brand: 3,
    },
    {
        id: 4,
        product_code: 'm15-R6-01NS',
        name: 'Laptop Gaming Dell Alienware m15 - R6 - 01NS i7-11800H/16GB/1TB/2K 240Hz/RTX 3060 6GB',
        price: 2447,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/dell-gaming-g15-5515-r5-p105f004cgr-291121-115616-600x600.jpg',
        description:
            '- Vi xử lý: Intel Core i7 11800H, 8 nhân / 16 luồng\\n- Màn hình: 15.6\\" QHD (2560 x 1440) 240Hz chống chói\\n- RAM: 16GB DDR4 bus 3200 MHz (Nâng cấp tối đa 64GB)\\n- Card đồ họa: Nvidia RTX3060 6GB GDDR6\\n- Lưu trữ: 1TB m.2 NVMe (Nâng cấp tối đa 2TB x 2)\\n- Pin: 86Wh\\n- Kết nối chính: 1 x USB-C 3.2 Gen 2 (Hỗ trợ xuất hình DisplayPort 1.4), 3 x USB-A 3.2 Gen 1, 1 x HDMI 2.1, 1 x RJ-45, 1 x jack 3.5mm\\n- Cân nặng: 2.69kg\\n- Hệ điều hành: Windows 10 Home ',
        stock: 4,
        created_at: '2022-01-06T17:00:00Z',
        brand: 4,
    },
    {
        id: 5,
        product_code: 'Z11D000E5',
        name: 'Laptop Apple MacBook Pro M1 2020/16GB/256GB (Z11D000E5)',
        price: 1638,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/macbook-pro-m1-2020-silver-600x600.jpg',
        description:
            '- CPU: Intel® Core™ i3-1115G4 (tối đa 4.10 GHz, 6MB)\\n- RAM: 8GB(8GBx1)DDR4 3200MHz (2 Khe, tối đa 64GB)\\n- Ổ cứng: 256GB M.2 NVMe PCIe SSD\\n- VGA: Intel® UHD Graphics\\n- Màn hình: 14 inch FHD (1920*1080), 60Hz 45%NTSC IPS-Level\\n- Pin: 3 cell , 39Whr\\n- Màu sắc: Gray\\n- Tính năng: Đèn nền bàn phím\\n- Cân nặng: 1.3 kg\\n- OS: Windows 11 Home',
        stock: 7,
        created_at: '2022-01-06T17:00:00Z',
        brand: 2,
    },
    {
        id: 6,
        product_code: 'Z15H',
        name: 'Laptop MacBook Pro 14 M1 Max 2021 10-core CPU/32GB/1TB SSD/32-core GPU (Z15H)',
        price: 2168,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/macbook-pro-14-m1-max-2021-10-core-cpu-32gb-1tb-ssd-32-core-gpu-021221-040129-600x600.jpg',
        description:
            '- CPU: Intel® Core™ i3-1005G1 (1.20GHz upto 3.40GHz, 4MB)\\n- RAM: 4GB DDR4 on board (1 onboard + 1 khe rời)\\n- Ổ cứng: 256GB PCIe NVMe SSD\\n- VGA: Intel® UHD Graphics\\n- Màn hình: 15.6 inch FHD (1920 x 1080), high-brightness Acer ComfyView™ LED-backlit TFT LCD\\n- Pin: 2-cell, 36.7 Wh\\n- Cân nặng: 1.7 kg\\n- OS: Windows 10 SL',
        stock: 1,
        created_at: '2022-01-06T17:00:00Z',
        brand: 2,
    },
    {
        id: 7,
        product_code: '10SCXK-093VN',
        name: 'LAPTOP GAMING MSI GL65 LEOPARD 10SCXK 093VN I7 10750H/ 1650 4GB/ 8GB/ 512GB/ 15.6”/ FHD/ 144HZ/ IPS/ WIN 10',
        price: 1052,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/msi-gaming-ge66-raider-11ug-i7-258vn-600x600.jpg',
        description:
            '- CPU: Intel core i7-10750H (2.60GHz upto 5.00 GHz, 12MB)\\n- RAM: 8GB DDR4 2666Mhz\\n- Ổ cứng: 512GB NVMe PCIe SSD + 1 slot 2.5\\"\\n- VGA: NVIDIA® GeForce® GTX 1650 4GB GDDR6\\n- Màn hình: 15.6 inch FHD (1920*1080), IPS-Level 144Hz, 45%NTSC Thin Bezel\\n- Cân nặng: 2.3 kg\\n- Tính năng: Đèn nền bàn phím\\n- OS: Windows 10 Home',
        stock: 11,
        created_at: '2022-01-06T17:00:00Z',
        brand: 9,
    },
    {
        id: 8,
        product_code: 'A315-56-37DV',
        name: 'Laptop Lenovo 3 A315-56-37DV i3 1005G1/ 4GB RAM/ 256GB SSD/ 15.6 inch FHD/ Win 10/ Đen',
        price: 998,
        img: 'http://laptopstoreapi-jthanh8144.herokuapp.com/images/lenovo-thinkbook-14s-g2-itl-i5-1135g7-8gb-512g-600x600.jpg',
        description:
            '- CPU: Intel® Core™ i3-1005G1 (1.20GHz upto 3.40GHz, 4MB)\\n- RAM: 4GB DDR4 on board (1 onboard + 1 khe rời)\\n- Ổ cứng: 256GB PCIe NVMe SSD\\n- VGA: Intel® UHD Graphics\\n- Màn hình: 15.6 inch FHD (1920 x 1080), high-brightness Acer ComfyView™ LED-backlit TFT LCD\\n- Pin: 2-cell, 36.7 Wh\\n- Cân nặng: 1.7 kg\\n- OS: Windows 10 SL',
        stock: 20,
        created_at: '2022-01-06T17:00:00Z',
        brand: 10,
    },
];

const setData = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
};

const getData = () => {
    let data;
    if (localStorage.getItem('data')) {
        data = JSON.parse(localStorage.getItem('data'));
    } else {
        data = [...localData];
        setData(data);
    }
    return data;
};

const render = (element, html) => {
    element.innerHTML = html;
};

const getQueryParams = (query) => {
    let match;
    const pl = /\+/g;
    const search = /([^&=]+)=?([^&]*)/g;
    (decode = function (s) {
        return decodeURIComponent(s.replace(pl, ' '));
    }),
        (query = window.location.search.substring(1));

    urlParams = {};
    while ((match = search.exec(query))) {
        urlParams[decode(match[1])] = decode(match[2]);
    }

    return urlParams;
};
