import { gql } from "apollo-boost"

export const LOAD_DATA = gql`
    query{
        teams{
            id
            office
            mascot
        }
    }
`

export const POST_DATA = gql`
    mutation{
      insertEquipment(
        id: "8"
        used_by: "ddsi"
        count: 3
        new_or_used: "wedkd"
      )
    }   
`