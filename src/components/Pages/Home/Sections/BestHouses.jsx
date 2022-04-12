import styles from './BestHouses.module.scss'
import Carousel from '../../../Carousel/Carousel'
import Card from '../../../Card/Card'

import { ArrowButton } from '../../../buttons/Buttons'
import { SwiperSlide } from 'swiper/react'
import { useQuery, gql } from '@apollo/client'

const CARD_DATA = gql`
  query GET_CARDS {
    houses(filters: { categories: { Category: { contains: "Hot"} } }) 
    {
      data{
        id
        attributes{
          Panel
          Street
          Size
          Rooms
          Direction
          Floors
          Type
          ImageUrl
          Price
          location{
            data{
              attributes{
                Location
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
        }
      }
    }
  }
`

const BestHouses = () => {
  const { loading, data, error } = useQuery(CARD_DATA)

  console.log(data)

  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Best Houses</h1>
        <ArrowButton text="See more" path="buy" />
      </div>

      {/* CARDS / CAROUSEL */}
      <div className={styles.cards}>
        <Carousel>
          {loading || error ? (
            <>
              <SwiperSlide>
                <Card />  
              </SwiperSlide>
            </>
          ) : (
            <>
              {data.houses.data.map((house, index) => (
                <SwiperSlide key={index}>
                  <Card 
                    info={{
                      id: house.id,
                      panel: house.attributes.Panel,
                      imageSource: house.attributes.ImageUrl,
                      district: house.attributes.location.data.attributes.Location,
                      size: house.attributes.Size,
                      street: house.attributes.Street,
                      rooms: house.attributes.Rooms,
                      floors: house.attributes.Floors,
                      direction: house.attributes.Direction,
                      type: house.attributes.Type,
                      price: house.attributes.Price,
                    }}
                  /> 
                </SwiperSlide>
              ))}
            </>
          )}
        </Carousel>
      </div>
    </section>
  )
}

export default BestHouses