import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card'

function AcquireData(){
    const [fetchData, setFetchData] = useState([])
    
   

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-14`)
        .then(response => {
            const fetch = response.data;
           setFetchData(fetch)
        })
        .catch(error => console.log('Some errors', error))
    }, [])
    console.log(fetchData)
    return(
        <div>
            This will do some data fetching
            <Card />
        </div>
    )
}

export default AcquireData;