import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Đăng kí</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Tên đăng nhập</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Tên đăng nhập"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Địa chỉ gmail</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="Nhập địa chỉ gmail"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder=" Nhập Password"
                />
              </div>
              <div className="my-3">
                <p>
                  Bạn đã có tài khoản ?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Đăng nhập
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Đăng kí
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
