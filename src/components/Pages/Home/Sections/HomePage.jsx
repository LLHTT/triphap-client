import Navbar from "../../../navbar/Navbar"
import styles from "./HomePage.module.scss"

import { Link } from "react-router-dom"
import { useState } from "react"

const HomePage = () => {
  const [price, setPrice] = useState("<100k")
  const [location, setLocation] = useState("")

  return (
    <>
      {/* NAVBAR */}
      <div className={styles.Navbar}>
        <Navbar BurgerColour={"whitesmoke"} />
      </div>

      <section className={styles.section_1}>
        {/* BACKGROUND IMAGE
        <div className={styles.img}></div> */}
        
        {/* SECTION 1 CONTENT */}
        <div className={styles.section_1_content}>
          {/* SLOGAN */}
          <div className={styles.slogan}>
            <h1>TriPhap Real Estate</h1>
            <p>
              Search and find your dream house at affordable prices, with the
              best quality.
            </p>
          </div>

          {/* SearchBox */}
          <div className={styles.search_container}>
            {/* LOCATION */}
            <div className={styles.location_container}>
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* Price Range */}
            <div className={styles.price_container}>
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value=">500k">{`>500k`}</option>
              </select>
            </div>
            {/* Search Button */}
            <button className={styles.btn_search}>
              <Link to="search">Search</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
