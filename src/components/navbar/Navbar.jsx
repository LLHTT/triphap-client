import styles from './Navbar.module.scss'
import { NavLink, Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import logo from '../../assets/logo.png'

import useClickOutside from '../../CustomHooks/ClickOutside'

const Navbar = ({ BurgerColour }) => {
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink 
          to={`${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    )
  }

  const [isNavOpen, setIsNavOpen] = useState(false)
  let domNode = useClickOutside(() => {
    setIsNavOpen(false)
  })

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>

        {/* NAV-BURGER */}
        <div 
          className={styles.mobile_menu}
          style={{color: BurgerColour}}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <ul 
          className={`${isNavOpen ? styles.ul_active : undefined} ${styles.navbar_ul}`}
          ref={domNode}
        >
          <div 
            className={styles.mobile_close}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>

          {/* LI - MENULINK */}
          <MenuLink url="/" path="Home"/>
          <MenuLink url="/buy" path="Purchasing"/>
          <MenuLink url="/rent" path="Renting"/>
          <MenuLink url="/search" path="Search For House"/>
          <MenuLink url="/about" path="About Us"/>
          <MenuLink url="/about" path="Contact"/>
          <Link to="/auth" className={styles.login}>
            <span>Login</span>
          </Link>
        </ul>

        {/* LOGIN */}
        <Link to="/auth" className={styles.login_container}>
          <span style={{ color: BurgerColour }}>Login</span>
          <BsArrowRight style={{ color: BurgerColour }} />
        </Link>
      </nav>
    </div>
  )
}

Navbar.defaultProps = {
  BurgerColour: "rgb(112, 112, 112)",
}

export default Navbar