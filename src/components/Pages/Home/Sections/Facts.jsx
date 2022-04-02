import styles from "./Facts.module.scss"
import building3 from "../../../../assets/building3.jpg"

const Facts = () => {
  return (
    <section className={styles.section_4}>
      {/* SECTION TITLE */}
      <div className={styles.section_4_title}>
        <h1>Help People To Getting Their Dream House For More Than 9 Years</h1>
      </div>

      {/* CONTENT */}
      <div className={styles.section_4_content}>
        {/* IMAGE CONTAINER */}
        <div className={styles.image_container}>
          <img src={building3} alt="building" />
        </div>
        {/* INFO */}
        <div className={styles.info}>
          <p>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available in TriPhap!
          </p>

          <div className={styles.rows}>
            {/* ROW1 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>3.034</h2>
                <h3>Completed Houses</h3>
              </div>
              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>1.123</h2>
                <h3>Rented Houses </h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>517</h2>
                <h3>Sold Houses</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>5.188</h2>
                <h3>Happy Client</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facts
