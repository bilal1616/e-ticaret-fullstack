import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


function LayoutComponent() {

    const navigate = useNavigate();
    let isAdmin = false;

    const logout = () => {
        navigate('/login');
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    
    })

    const checkIsAdmin = () => {
        let user = JSON.parse(localStorage.getItem('user'));
        isAdmin = user.isAdmin;
    }

    checkIsAdmin();
    


    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#79b47c"}}>
                <div className="container-fluid">
                    <a className="navbar-brand"><img src="https://www.yapikredikobi.com.tr/_assets/img/subpage/e-ticaret.jpg" width="110" height="55"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-1">
                                <Link to="/" style={{color:"#f5f5f5"}}>Ana Sayfa</Link>
                            </li>
                            {
                            isAdmin &&
                            <li className="nav-item mx-2">
                                <Link to="/products" style={{color:"#f5f5f5"}}>Ürünler</Link>
                            </li>
                            }
                            <li className="nav-item mx-2">
                                <Link to="/orders" style={{color:"#f5f5f5"}}>Siparişlerim</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/baskets" style={{color:"#f5f5f5"}}>Sepetim</Link>
                            </li>
                        </ul>
                        <button onClick={logout} className="btn btn-danger" type="submit">Çıkış Yap</button>
                    </div>
                </div>
            </nav>

            <Outlet/>

            <footer className="footer-area mt-5">
                <div className="container footer-container">
                    <div className="footer-top ms-5">
                        <div className="row ms-5">
                            <div className="col-md-6 col-lg-3 about-footer">
                                <h3>E-Ticaret </h3>
                                <ul>
                                    <li><a href="tel:(010) 1234 4321"><i className="fas fa-phone fa-flip-horizontal"></i>(010) 1234 4321</a></li>
                                    <li><i className="fas fa-map-marker-alt"></i>
                                        1 / 105 Bay Lights,
                                        <br/>Lorem Ipsum,
                                        <br/>LIC 3201
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-2 page-more-info">
                                <div className="footer-title">
                                    <h4>Sayfalar</h4>
                                </div>
                                <ul>
                                    <li><a href="#">Ana Sayfa</a></li>
                                    <li><a href="#">Siparişlerim</a></li>
                                    <li><a href="#">Sepetim</a></li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-4 open-hours">
                                <div className="footer-title">
                                    <h4>Follow Us</h4>
                                    <ul className="footer-social">
                                        <li><a href="" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="footer-logo ms-5">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><img className="img-logo" src="https://www.yapikredikobi.com.tr/_assets/img/subpage/e-ticaret.jpg"/></td>
                                            {/* <td><img src="https://www.yapikredikobi.com.tr/_assets/img/subpage/e-ticaret.jpg"/></td>
                                            <td><img src="https://www.yapikredikobi.com.tr/_assets/img/subpage/e-ticaret.jpg"/></td>
                                            <td><img src="https://www.yapikredikobi.com.tr/_assets/img/subpage/e-ticaret.jpg"/></td>
                                            <td><img src="https://www.yapikredikobi.com.tr/_assets/img/subpage/e-ticaret.jpg"/></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer-bottom ms-5">
                        <div className="row ms-5">
                            <div className="col-sm-4">
                                <a href="">Privacy policy</a>
                            </div>
                            <div className="col-sm-4">
                                <p>@ 2019 All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default LayoutComponent;