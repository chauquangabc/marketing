import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const response = [
    {
      category: "women's clothing",
      description: "Váy trắng sữa họa tiết bông hoa",
      id: 1,
      image:
        "https://helamiss.com/cdn/shop/files/Ao_3_bd44c6a6-dc95-4aa2-8403-782a1e2ec8d6.png?v=1723131504&width=600",
      price: 459000,
      rating: { rate: 4.2, count: 122 },
      title: "HELA",
    },
    {
      category: "men's clothing",
      description: "Áo Khoác Denim Họa Tiết Monogram",
      id: 2,
      image:
        "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%C3%A1o-kho%C3%A1c-denim-h%E1%BB%8Da-ti%E1%BA%BFt-monogram--HRA79WUZD650_PM2_Front%20view.png?wid=490&hei=490",
      price: 87000000,
      rating: { rate: 4.5, count: 203 },
      title: "LOUIS VUITTON",
    },
    {
      category: "men's clothing",
      description: "Quần Jean Họa Tiết Monogram",
      id: 3,
      image:
        "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-qu%E1%BA%A7n-jean-h%E1%BB%8Da-ti%E1%BA%BFt-monogram--HRD79WUZD650_PM2_Front%20view.png?wid=490&hei=490",
      price: 64 * 1000000,
      rating: { rate: 5.0, count: 400 },
      title: "LOUIS VUITTON",
    },
    {
      category: "men's clothing",
      description: "Áo Thi Đấu Đội Tuyển Việt Nam 2023 Grand Sport ",
      id: 4,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/415/445/products/0e29415e-0f1b-44b2-85ce-e810ef4cff83.jpg",
      price: 949000,
      rating: { rate: 5.0, count: 1022 },
      title: "Áo thi đấu đội tuyển Việt Nam ",
    },
    {
      category: "women's clothing",
      description: "Đầm Louis Vuitton basic",
      id: 5,
      image:
        "https://vn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-%C4%91%E1%BA%A7m--FRDS62G72900_PM2_Front%20view.png?wid=490&hei=490",
      price: 63500000,
      rating: { rate: 4.0, count: 242 },
      title: "LOUIS VUITTON",
    },
    {
      category: "women's clothing",
      description: "Áo ren dáng Slim",
      id: 6,
      image:
        "https://helamiss.com/cdn/shop/files/Ao_5f32687f-b675-4564-b8f8-a2d45f4293b7.png?v=1723131604&width=600",
      price: 349000,
      rating: { rate: 4.1, count: 422 },
      title: "HELA",
    },
    {
      category: "women's clothing",
      description: "Váy hai dây họa tiết chấm bi kết hợp cùng áo len",
      id: 7,
      image:
        "https://helamiss.com/cdn/shop/files/Ao_778798b9-3daf-4f66-96c2-644c7659776e.png?v=1723131427&width=600",
      price: 199000,
      rating: { rate: 4.2, count: 122 },
      title: "HELA",
    },
    {
      category: "men's clothing",
      description: "Polo Ralph Lauren 🐎",
      id: 8,
      image:
        "https://cdn.deporvillage.com/cdn-cgi/image/h=576,w=576,dpr=1,f=auto,q=75,fit=contain,background=white/product/RPL-714899613003_001.jpg",
      price: 599000,
      rating: { rate: 4.8, count: 129 },
      title: "RALPH LAUREN",
    },
    {
      category: "men's clothing",
      description: "Quần jeans DSQ nam phom ôm thời trang",
      id: 9,
      image:
        "https://product.hstatic.net/1000284478/product/470_s74lb1338_1_377e5ca94a75413298be5a10f02d6bc7_large.jpg",
      price: 10500000,
      rating: { rate: 4.0, count: 542 },
      title: "DSQDSQUARED2",
    },
    {
      category: "women's clothing",
      description: "Áo khoác unisex phối mũ tay dài Classic Monogram Jacquard",
      id: 10,
      image:
        "https://product.hstatic.net/1000284478/product/43crs_3awjm0543_2_cdd23546cc3447d49afe2184eb110c9c_large.jpg",
      price: 5900000,
      rating: { rate: 4.9, count: 22 },
      title: "MLB",
    },
    {
      category: "jewelery",
      description: "Túi thời trang mang phong cách Vintage dành cho phái đẹp",
      id: 11,
      image:
        "https://micocah.vn/wp-content/uploads/2023/07/tui-xach-nu-micocah-hang-hieu-cao-cap-han-quoc-nsh694-m517-mico-768x768.jpg",
      price: 5900000,
      rating: { rate: 4.7, count: 352 },
      title: "MICOCAH VN",
    },
    {
      category: "jewelery",
      description: "Giày nam da thật ELLY HOMME – EGTM2",
      id: 12,
      image:
        "https://mediaelly.sgp1.digitaloceanspaces.com/uploads/2019/08/13121748/giay-nam-cao-cap-da-that-ELLY-EGTM2-3.jpg",
      price: 1590000,
      rating: { rate: 4.5, count: 182 },
      title: "ELLY",
    },
    {
      category: "electronics",
      description: "Apple Watch SE chính hãng ",
      id: 13,
      image: "https://shopdunk.com/images/thumbs/0026828_watch-se-2021_550.png",
      price: 3420000,
      rating: { rate: 4.5, count: 182 },
      title: "APPLE WATCH",
    },
    {
      category: "electronics",
      description: "Đồng hồ Rolex Datejust 36 126233 mặt số Saphia ",
      id: 14,
      image:
        "https://uploads.nationaljeweler.com/uploads/0a09491fcc240c6e6ad5b1888084c3d7.jpg",
      price: 545000000,
      rating: { rate: 4.5, count: 182 },
      title: "ROLEX",
    },
    {
      category: "electronics",
      description: "Đồng hồ Patek Philippe Aquanaut 5269/200R-001",
      id: 15,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/364/978/products/dong-ho-patek-philippe-aquanaut-5269200r-001-7-fc12426a-88a8-4966-bcb4-6fe20b41dcbd.jpg?v=1711196175210",
      price: 1890000000,
      rating: { rate: 4.5, count: 182 },
      title: "PATEK PHILIPPE",
    },
  ];
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      //const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(response);
        setFilter(response);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            Tất cả
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Đồ nam
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Đồ nữ
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Phụ kiện
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Đồ điện tử
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 30)}
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">
                    {product.price} <i>VND</i>{" "}
                  </li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Sản phẩm mới</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
