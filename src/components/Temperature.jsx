import React, { useEffect, useState } from 'react'

function Temperature() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState(null)


    useEffect(() => {
        const fetchApi = async () => {
            const url = `${process.env.REACT_APP_API_URL}?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
            const response = await fetch(url)
            const responseJson = await response.json()
            setCity(responseJson.main)
        }
        fetchApi()
    }, [search])

    
    function InputEvent(event) {
        setSearch(event.target.value)
    }



    return (
        <div className="inbox">
            <div className="item">
                <input type="text" placeholder="Enter city name here" onChange={InputEvent} autoCorrect="off" spellCheck="false" />
            </div>
            { !city ? (<p style={{ color: "tomato" }}>No data found</p>) : (<div>
                <div className="item">

                    <p >City Name : - {search}</p>
                </div >
                <div className="item">

                    <p>Temperature : -  {city.temp} °C</p>
                </div>
                <div className="item">

                    <p>Minimum Temperature : - {city.temp_min} °C</p>
                </div>
                <div className="item">

                    <p>Maximum Temperature : - {city.temp_max} °C</p>
                </div>
            </div >)}

        </div >
    )
}

export default Temperature
