import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 50000;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Thanh toán</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Sản phẩm ({totalItems})
                      <span>
                        {Math.round(subtotal)}
                        <i> VND</i>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Phí vận chuyển
                      <span>
                        {shipping}
                        <i> VND</i>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Thành tiền</strong>
                      </div>
                      <span>
                        <strong>
                          {Math.round(subtotal + shipping)}
                          <i> VND</i>
                        </strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Thông tin giao hàng</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" novalidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          Tên người nhận
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Tên người nhận"
                          value=""
                          required
                        />
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Gmail người nhận
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Gmail người nhận"
                          required
                        />
                        <div className="invalid-feedback">
                          Vui lòng nhập gmail chính xác để nhận hàng
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Địa chỉ
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Địa chỉ nhận hàng"
                          required
                        />
                        <div className="invalid-feedback">
                          Vui lòng nhập địa chỉ để nhận hàng!
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Phương thức thanh toán</h4>

                    <div>
                      <div>
                        <button>Thanh toán khi nhận hàng</button>
                      </div>
                      <br />
                      <div>
                        <button>Thanh toán qua tín dụng </button>
                        <div className="row gy-3">
                          <div className="col-md-6">
                            <label for="cc-name" className="form-label">
                              Tên chủ thẻ
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-name"
                              placeholder=""
                              required
                            />
                            <small className="text-muted">
                              Nhập đầy đủ tên in trên thẻ
                            </small>
                            <div className="invalid-feedback">
                              Name on card is required
                            </div>
                          </div>

                          <div className="col-md-6">
                            <label for="cc-number" className="form-label">
                              Số thẻ
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-number"
                              placeholder=""
                              required
                            />
                            <div className="invalid-feedback">
                              Credit card number is required
                            </div>
                          </div>

                          <div className="col-md-3">
                            <label for="cc-expiration" className="form-label">
                              Ngày hết hạn
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-expiration"
                              placeholder=""
                              required
                            />
                            <div className="invalid-feedback">
                              Expiration date required
                            </div>
                          </div>

                          <div className="col-md-3">
                            <label for="cc-cvv" className="form-label">
                              CVV
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc-cvv"
                              placeholder=""
                              required
                            />
                            <div className="invalid-feedback">
                              Security code required
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary "
                      type="submit"
                      disabled
                    >
                      Hoàn thành thanh toán
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
