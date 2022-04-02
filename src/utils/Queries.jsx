import { gql } from '@apollo/client'

const BUY_CARDS = gql `
  query GET_BUY_CARDS {
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
          Price
          Preview_image{
            data{
              attributes{
                url
              }
            }
          }
          location{
            data{
              attributes{
                District
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
  query GET_RENT_CARDS {
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
          Rent
          Preview_image{
            data{
              attributes{
                url
              }
            }
          }
          location{
            data{
              attributes{
                District
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
  query GET_ID_CARD($id: ID) {
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
          Price
          Rent
          Description
          Preview_image{
            data{
              attributes{
                url
              }
            }
          }
          location{
            data{
              attributes{
                District
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
  query GET_FILTERED_CARDS(
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
          Price
          Rent
          Description
          Preview_image{
            data{
              attributes{
                url
              }
            }
          }
          location{
            data{
              attributes{
                District
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