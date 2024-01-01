import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'
import {FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
const Footer = () => {
  return (
    <div >
      <footer className="footer py-10 bg-200 text-base-content p-[8%] border border-t-[#6bb42f]">
        <aside>
         <Link to="/">
         <img className=' w-32 md:w-44' src={logo} alt="" />
        </Link>
          <p>
           Green Agro ltd.
            <br />
            Providing best product.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Information</header>
          <Link to="/about" className="link link-hover ">About Us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <header className="footer-title">Quick Links</header>
          <Link to={'/dashboard/ordered-products'} className="link link-hover">My Orders</Link>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <header className="footer-title">Follow us</header>
          <a className="link link-hover">Social: </a>
          <a className="link link-hover flex gap-5 text-2xl text-[#518329]"><FaFacebookSquare /><FaYoutube/> <BsLinkedin/></a>
    
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by Green Agro.Ltd</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
