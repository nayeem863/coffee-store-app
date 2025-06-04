import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffees = useLoaderData()
    console.log(coffees)
    return (
        <div>
            
        </div>
    );
};

export default CoffeeDetails;