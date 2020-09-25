import React, {useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie]= useState([]);

    useEffect(() => {
        async function fetchData() {
      const request = await axios.get(requests.fetchTrendings);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
    },[])
    return (
        <header>{/*bg image */}
          {/*title*/}
          {/*div-> 2buttons */}
          {/*description */}
            
        </header>
    )
}

export default Banner
