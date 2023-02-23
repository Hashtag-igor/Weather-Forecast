import React from 'react'

export default function WeatherInformations({weatherIcon, weatherCondition, weatherTemp, weatherName, weatherRegion, updated}) {
  return (
    <div>
        <div>
            <h2 style={{margin: "0px 0px 10px 0px"}}>{weatherName} / {weatherRegion}</h2>
            <img src={weatherIcon} alt="weather icon" />
            <p style={{marginBottom: "5px", fontSize: "20px"}}>{weatherCondition}</p>
            <h1 style={{fontSize: "3em"}}>{weatherTemp}°C</h1>
            <p style={{fontSize: "12px", marginTop: "10px"}}>Atualizado em {updated}</p>
        </div>
    </div>
  )
}
