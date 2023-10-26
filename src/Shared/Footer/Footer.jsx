import logo from '../../assets/images/logo.png'
const Footer = () => {
  return (
    <div >
      <footer className="footer py-10 bg-base-200 text-base-content p-[8%] border-t">
        <aside>
         <img className='w-32' src={logo} alt="" />
          <p>
           ZOA Agro ltd.
            <br />
            Providing best product.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by ZOA Agro Ltd</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
