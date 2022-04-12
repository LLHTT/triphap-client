import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { ID_CARD } from '../../../utils/Queries'
import Navbar from '../../navbar/Navbar'
import Card from '../../Card/Card'
import styles from './Property.module.scss'

const Property = () => {
  let params = useParams()
  const { loading, error, data } = useQuery(ID_CARD, {
    variables: { id: params.propertyId },
  })

  const queryHandler = () => {
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>
    if (data) {
      if (data.houses.data.length) {
        let house = data.houses.data[0]
        return (
          <div className={styles.house}>
            <Card 
              // key={index}
              info={{
                id: params.propertyId,
                category: "Buy/Rent",
                panel: house.attributes.Panel,
                imageSource: house.attributes.ImageUrl,
                district: house.attributes.location.data.attributes.District,
                size: house.attributes.Size,
                street: house.attributes.Street,
                rooms: house.attributes.Rooms,
                floors: house.attributes.Floors,
                direction: house.attributes.Direction,
                type: house.attributes.Type,
                price: house.attributes.Price,
                rent: house.attributes.Rent,
              }}
              showInfo={{
                price: house.attributes.Price ? 1 : 0,
                rent: house.attributes.Rent ? 1 : 0,
              }}
            />

            {/* DESCRIPTION */}
            <div className={styles.description}>
              <span>Description:</span>
              <p>{house.attributes.Description}</p>
            </div>
          </div>
        )
      }
      // else:
      return <h1>Property Not Found</h1>
    }
  }

  return (
    <main className={styles.flex}>
      <Navbar />
      <div className={styles.center}>{queryHandler()}</div>
    </main>
  )
}

export default Property