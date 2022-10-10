import React, { useState, useEffect } from "react";
import axios from 'axios'
import CardMovie from "./CardMovie";



const Profile = () => {

    useEffect(() => {
        getData()
    }, [])

    const [data, setData] = useState([])

    const getData = () => {
        const Apikey = '3368c4de99d69b9fe8d4851a78f021cb'
        axios.get(`https://api.themoviedb.org/4/list/1?api_key=${Apikey}`)
            .then(res => {
                setData(res.data.results)
            })
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ border: '1px solid', padding: '8px' }}>
                {
                    data.map((item) => {
                        console.log(item, 'ini item')
                        return (
                            <CardMovie data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile; 