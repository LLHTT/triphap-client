import styles from "./Card.module.scss"
//react icons
import { BsDoorClosedFill } from "react-icons/bs"
import { FaRegBuilding } from "react-icons/fa"
import { GiMultiDirections } from "react-icons/gi"
import { BsBuilding } from "react-icons/bs"
import { GoPrimitiveDot } from "react-icons/go"

import building3 from "../../assets/building3.jpg"
import { Link } from "react-router-dom"

const Card = ({ info, showInfo, secondClass }) => {
  //CONVERT PRICE FUNC
  const convertPrice = (price) => {
    if (price >= 1000 && price < 999999) return `${price / 1000}k `
    if (price >= 1000000) return `${price / 1000000}m `
    return price;
  };

  //CONVERT RENT FUNC
  const convertRent = (rent) => {
    if (rent >= 1000) return `${rent / 1000}k `
    return rent
  };

  return (
    <Link to={`/property/${info.id}`}>
      <div className={`${styles.card_container} ${secondClass}`}>
        <div className={styles.image_container}>
          {/* IMAGE */}
          <div className={styles.image_buy_btn}>
            <Link to="/"><GoPrimitiveDot /> {info.panel}</Link>
          </div>
          <img src={info.imageSource} alt="building" />
          {/* DISTRICT */}
          <h3>{info.district}</h3>
          {/* STREET */}
          <h4>
            <p className={styles.street}>{info.street} • </p>
            <p className={styles.type}>{info.type}</p>
          </h4>
          {/* ROOMS ETC */}
          <div className={styles.info}>
            {/* ROW1 */}
            <div className={styles.row1}>
              {/* ROOMS */}
              <div className={styles.rooms}>
                <BsDoorClosedFill />
                <span>{`${info.rooms} Rooms`}</span>
              </div>
              {/* FLOORS */}
              <div className={styles.floors}>
                <FaRegBuilding />
                <span>{`${info.floors} Floors`}</span>
              </div>
            </div>
            {/* ROW2 */}
            <div className={styles.row2}>
              {/* Size */}
              <div className={styles.size}>
                <BsBuilding />
                <span>{`${info.size}`}</span>
              </div>
              {/* Direction */}
              <div className={styles.direction}>
                <GiMultiDirections />
                <span>{`${info.direction}`}</span>
              </div>
            </div>
          </div>
          <div className={styles.card_buy}>
            {/* PRICES */}
            <div className={styles.prices}>
              <h2
                style={showInfo.price ? {} : { display: "none" }}
              >{`${convertPrice(info.price)}$`}</h2>
              <h2
                style={showInfo.rent ? {} : { display: "none" }}
              >{`${convertRent(info.rent)}$/m`}</h2>
            </div>
            {/* SEE MORE BUTTON */}
            <div className={styles.card_btn}>
              <Link to={`/property/${info.id}`}>See More</Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

//default Props
Card.defaultProps = {
  info: {
    id: undefined,
    imageSource: building3,
    panel: "Buy",
    district: "1",
    size: "425",
    street: "Nguyen Trai",
    rooms: 9,
    floors: 3,
    bathrooms: 2,
    type: "Front",
    price: 180000,
    rent: 0,
  },
  showInfo: {
    price: true,
    rent: false,
  },
  secondClass: "undefined",
}

export default Card
