//HomeNav.jsx
import "../CSS/HomeNav.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Guest from "./Guest";
import Register from "./Register";
import LoginUser from "./LoginUser";
import Admin from "./Admin";

const HomeNav = () => {
  return (
    <>
      <main className="site-wrapper">
        <div className="hexagon-item">
          <div className="hex-item">
            <div className="div-1"></div>
            <div className="div-2"></div>
            <div className="div-3"></div>
          </div>
          <div className="hex-item">
            <div className="div-1"></div>
            <div className="div-2"></div>
            <div className="div-3"></div>
          </div>
          <Link to="admin/*" className="hex-content">
            <span className="hex-content-inner">
              <span className="icon">
                <i className="fa fa-id-badge"></i>
              </span>
              <span className="title">
                <h2 className="h2-title"> Admin </h2>
              </span>
            </span>
            <svg
              viewBox="0 0 173.20508075688772 200"
              height="200"
              width="174"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </Link>
        </div>
        <div className="pt-table">
          <nav
            className="pt-tablecell page-home relative"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  <div className="page-title">
                    <span className="heading-page">Elegance Starts Here</span>
                    <p className="llc">Hilton LLC</p>
                  </div>

                  <div className="hexagon-menu-clear">
                    <Link to="login-user/*" className="hex-content">
                      <span className="hex-content-inner">
                        <span className="icon">
                          <i className="fa fa-universal-access"></i>
                        </span>
                        <span className="title">Login</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                    </Link>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>

                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>

                      <Link to="register/*" className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-bullseye"></i>
                          </span>
                          <span className="title">Register</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </Link>
                    </div>

                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>

                      <Link to="guest/*" className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-braille"></i>
                          </span>
                          <span className="title">Guest</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </main>

      <Routes>
        <Route index element={<Admin />} />
        <Route path="admin/*" element={<Admin />} />
        <Route index element={<Guest />} />
        <Route path="guest/*" element={<Guest />} />
        <Route index element={<LoginUser />} />
        <Route path="/login-user/*" element={<LoginUser />} />
        <Route index element={<Register />} />
        <Route path="/register/*" element={<Register />} />
      </Routes>

      <Outlet />
    </>
  );
};
export default HomeNav;
