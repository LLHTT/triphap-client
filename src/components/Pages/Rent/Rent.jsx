import Navbar from '../../navbar/Navbar'
import styles from './Rent.module.scss'
import Card from '../../Card/Card'
import { useQuery } from '@apollo/client'
import { RENT_CARDS } from '../../../utils/Queries'

const Rent = () => {
  const { loading, error, data } = useQuery(RENT_CARDS)
  
  return (
    <main>
      <Navbar />
      <div className={styles.content}>
        <h1>Houses For Sale</h1>
        {/* CARDS */}
        <div className={styles.card}>
          {loading || error ? (
            <h1 style={{ color: "#333"}}>Loading...</h1>
          ) : (
            <div className={styles.cards}>
              {data.houses.data.map((house, index) => (
                <Card 
                  secondClass={styles.card}
                  key={index}
                  info={{
                    id: house.id,
                    panel: house.attributes.Panel,
                    imageSource: house.attributes.ImageUrl,
                    district: house.attributes.location.data.attributes.District,
                    size: house.attributes.Size,
                    street: house.attributes.Street,
                    rooms: house.attributes.Rooms,
                    floors: house.attributes.Floors,
                    direction: house.attributes.Direction,
                    type: house.attributes.Type,
                    rent: house.attributes.Rent,
                  }}
                  showInfo={{
                    price: false,
                    rent: true,
                  }}
                /> 
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Rent