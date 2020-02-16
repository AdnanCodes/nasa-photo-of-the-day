import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card'

function AcquireData() {
    const [fetchData, setFetchData] = useState([])



    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=lScG6MrWnDarwPxYp1wdk8MlQgMs1MBqW59Sqfzp&date=2019-07-14`)
            .then(response => {
                const fetch = response.data;
                setFetchData(fetch)
            })
            .catch(error => console.log('Some errors', error))
    }, [])
    return (
        <div>
            <Card passData={fetchData} />
            {/* //State being passed as props */}
        </div>
    )
}

export default AcquireData;