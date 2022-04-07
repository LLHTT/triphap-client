import Navbar from '../../navbar/Navbar'
import styles from './Buy.module.scss'
import Card from '../../Card/Card'
import { useQuery } from '@apollo/client'
import { BUY_CARDS } from '../../../utils/Queries'

const Buy = () => {
  const { loading, error, data } = useQuery(BUY_CARDS)
  
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
                    imageSource: `http://localhost:1337${house.attributes.Preview_image.data.attributes.url}`,
                    district: house.attributes.location.data.attributes.District,
                    size: house.attributes.Size,
                    street: house.attributes.Street,
                    rooms: house.attributes.Rooms,
                    floors: house.attributes.Floors,
                    direction: house.attributes.Direction,
                    type: house.attributes.Type,
                    price: house.attributes.Price,
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

export default Buy