import React, { useState } from 'react';
import { gql } from "apollo-boost"
import { Query } from "react-apollo"

const GraphQl = () => {
    const [ data, setData] = useState("")

    const GET_CONTINENTS = gql`
    {
        teams
        {
          office
          manager
        }
        
    }
    `;

    return (
        <>
            <h2>Continents</h2>
            <Query query={GET_CONTINENTS}>
                {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error!(</p>
                return(
                    setData(data)
                )}}
            </Query>
            {console.log(data)}
        </>
    )
}

export default GraphQl;