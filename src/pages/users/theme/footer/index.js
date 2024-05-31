import {memo} from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoYoutube, BiPhone } from "react-icons/bi";

const Footer = () =>{
    return  <footer className="footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="footer_about">
                    <h1 className="footer_about_logo">LILILASHOP</h1>
                    <ul>
                        <li>ADDRESS: Address:20/2 Street 904, District 9, Ho Chi Minh City</li>
                        <li>PHONE:0363433416</li>
                        <li>EMAIL:Jewelryproduction@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="footer_widget">
                    <h6>SHOP</h6>
                    <ul>
                        <li>
                            <Link to="">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="">Infomation About Us</Link>
                        </li>
                        <li>
                            <Link to="">OUR PRODUCTS</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="">ACCOUNT INFOMATION</Link>
                        </li>
                        <li>
                            <Link to="">Your Cart</Link>
                        </li>
                        <li>
                            <Link to=""> Your Favorites List</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="footer_widget">
                    <h6>Promotion && Customer Incentives</h6>
                    <p>Sign up to receive information here</p>
                    <form action="#">
                        <div className="input_group">
                            <input type="text" placeholder="Email" />
                            <button type="submit" className="button-submit">Register</button>
                        </div>
                        <div className="footer_widget_social">
                            <div Link to="https://www.facebook.com/profile.php?id=61560052164888">
                                <AiOutlineFacebook />
                            </div>
                            <div>
                                <AiOutlineInstagram />
                            </div>
                            <div>
                                 <AiOutlineLinkedin/>
                            </div>
                            <div>
                                <BiPhone />
                            </div>
                            <div><BiLogoYoutube /></div>
                        </div>
                    </form>
                </div>
            </div> 
            </div>
        </div>
    </footer>;
            
};
export default memo(Footer);