import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Giới thiệu</h1>
        <hr />
        <p className="lead text-center">
          Chào mừng bạn đến với Shop House - một nền tảng mua sắm trực tuyến đầy
          đủ tiện nghi, nơi bạn có thể tìm thấy mọi sản phẩm từ thời trang, điện
          tử, gia dụng, đến mỹ phẩm và nhiều mặt hàng khác. Shop House không chỉ
          là nơi bạn mua sắm, mà còn là nơi bạn trải nghiệm sự thoải mái và tiện
          nghi của cuộc sống hiện đại. Hãy bắt đầu hành trình mua sắm thú vị của
          bạn ngay hôm nay với Shop House, và khám phá vô vàn sản phẩm tuyệt vời
          cùng những ưu đãi hấp dẫn chỉ có tại đây! Cảm ơn bạn đã tin tưởng và
          lựa chọn Shop House. Chúng tôi luôn mong muốn mang đến cho bạn những
          trải nghiệm mua sắm tuyệt vời nhất!
        </p>

        <h2 className="text-center py-4">Sản phẩm của chúng tôi</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19722.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724544000&semt=ais_hybrid"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Đồ nam</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Đồ nữ</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://file.hstatic.net/1000192210/file/phu-kien-thoi-trang-haravan-5_54ff6df118284d148147359a7093d907_grande.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Phụ kiện</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Đồ điện tử</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
