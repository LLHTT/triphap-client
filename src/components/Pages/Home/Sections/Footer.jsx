import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <ul className={styles.brand}>
          <li>
            <span>TriPhap</span>
          </li>
          <li>
            <span>Our Location</span>
          </li>
          <li>
            <span>Call us: 0901.82.82.05</span>
          </li>
          <li>
            <div className={styles.socials}>
              <Link to="/">
                <AiOutlineInstagram />
              </Link>
              <Link to="/">
                <AiOutlineFacebook />
              </Link>
              <Link to="/">
                <AiOutlineTwitter />
              </Link>
            </div>
          </li>
        </ul>
        <ul className={styles.services}>
          <li>
            <span>Services</span>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Our Team</Link>
          </li>
        </ul>
        <ul className={styles.support}>
          <li>
            <span>Support</span>
          </li>
          <li>
            <Link to="/">FAQ's</Link>
          </li>
          <li>
            <Link to="/">Support Center</Link>
          </li>
          <li>
            <Link to="/">Help Center</Link>
          </li>
        </ul>
        <ul className={styles.subscribe}>
          <li>
            <span>Subscribe</span>
          </li>
          <li>
            <p>Subscribe to get the latest new and promo from us</p>
          </li>
          <li>
            <div className={styles.subscribe_input}>
              <input type="text" placeholder="Email Address" />
              <button>
                <BsArrowRight />
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.copyright}>© 2022 TriPhap. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
