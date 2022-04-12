import Card from "../../Card/Card"
import styles from "./FilteredCards.module.scss"
import { useContext } from "react"
import SearchContext from "./SearchContext"

const checkHouseCategory = (house) => {
  const houseData = house.attributes.categories.data
  if (houseData.length === 2) return "Buy / Rent"
  else {
    if (houseData[0].attributes.Category === "Rent") return "Rent"
    else return "Buy"
  }
}

const FilteredCards = ({ houses }) => {
  const { buy, rent } = useContext(SearchContext)

  const showPrice = (house) => {
    if (buy) if (house.attributes.Price > 0) return true
  }

  const showRent = (house) => {
    if (rent) if (house.attributes.Rent > 0) return true
  }

  return (
    <div className={styles.cards}>
      {houses.map((house, index) => (
        <Card
          key={index}
          secondClass={styles.card}
          info={{
            id: house.id,
            panel: `${house.attributes.Panel}`,
            imageSource: `${house.attributes.ImageUrl}`,
            category: checkHouseCategory(house),
            district: `${house.attributes.location.data.attributes.District}`,
            size: `${house.attributes.Size}`,
            street: `${house.attributes.Street}`,
            rooms: `${house.attributes.Rooms}`,
            floors: `${house.attributes.Floors}`,
            direction: `${house.attributes.Direction}`,
            type: `${house.attributes.Type}`,
            rent: house.attributes.Rent,
            price: house.attributes.Price,
          }}
          showInfo={{
            price: showPrice(house),
            rent: showRent(house),
          }}
        />
      ))}
    </div>
  )
}

export default FilteredCards
