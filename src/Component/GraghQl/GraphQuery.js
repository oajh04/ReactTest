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