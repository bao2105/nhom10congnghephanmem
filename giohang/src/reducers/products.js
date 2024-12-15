var initialState = [
    {
        id : 1,
        name : 'Giày Fandy Boost Radial Color White/Pink/Violet Chính Hãng',
        image : 'https://fandy.vn/wp-content/uploads/2024/04/Giay-Fandy-Kids-Boost-Lock-Radial-White-Pink-Violet-00.webp',
        description : 'Sản phẩm do Việt Nam sản xuất',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Giày Fandy EVA Sketch White/Blue Chính Hãng',
        image : 'https://fandy.vn/wp-content/uploads/2024/04/Giay-Fandy-Kids-Eva-Sketch-White-Blue-00.webp',
        description : 'Sản phẩm do Việt Nam sản xuất',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Giày Fandy Casa Grey/White/Green Chính Hãng',
        image : 'https://fandy.vn/wp-content/uploads/2024/04/Giay-Fandy-Kids-Casa-Grey-White-Green-00.webp',
        description : 'Sản phẩm do Việt Nam sản xuất',
        price : 450,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;