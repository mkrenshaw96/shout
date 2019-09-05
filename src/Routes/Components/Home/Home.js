import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const Home = () => {
    const { loading, error, data } = useQuery(gql`
    {
    allUsers {
        name
        email
        }
    }
`);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;

    //FOR TESTING RECEIVED DATA
    console.log(data);

    return (
        <>
            {
                data.allUsers.map((user, i) => (<h1 key={i}>Name: {user.name}</h1>))
            }
        </>
    );
};

export default Home;