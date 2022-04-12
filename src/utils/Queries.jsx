import { gql } from '@apollo/client'

const BUY_CARDS = gql `
  query BUY_CARDS {
    houses(
      filters: { categories: { Category: { contains: "Buy" } } }
      pagination: { limit: 20 }
    ) {
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
const RENT_CARDS = gql `
  query RENT_CARDS {
    houses(filters: { categories: { Category : { contains: "Rent" } } }) {
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
          Rent
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

const ID_CARD = gql `
  query ID_CARD($id: ID) {
    houses(filters: { id: { eq: $id } }) {
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
          Rent
          Description
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

const FILTERED_CARDS = gql`
  query FILTERED_CARDS(
    $cat: String
    $maxPrice: Float
    $minPrice: Float
    $forRent: Float
    $page: Int
  ) {
    houses(
      filters: {
        categories: { Category: { contains: $cat } }
        or: [{ Price: { eq: $forRent } }, { Price: { gte: $minPrice } }]
        and: { Price: { lt: $maxPrice } }
      }
      pagination: { pageSize: 3, page: $page }
    ) {
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
          Rent
          Description
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

export { BUY_CARDS, RENT_CARDS, ID_CARD, FILTERED_CARDS }