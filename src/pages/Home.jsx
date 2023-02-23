import React, { useState} from 'react'
import WeatherInformations from '../components/WeatherInformations'

import "./Home.css"

export default function Home() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)

  //site + current.json que é o tempo atual em json + key id da conta + query que terá nome da cidade e linguagem
    function getApi(){
        fetch(`http://api.weatherapi.com/v1/current.json?key=efde615f185f495fbf4131055231402&q=${city}&lang=pt`)
        .then((response) => {
            if(response.status === 200){
                return response.json()
            }
        })
        .then((data) => {
            setWeather(data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    return (
    <div className='container'>
        <div className='box'>
            <p className='title'>Verifique a previsão do tempo</p>
            <p className='p'>Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar</p>
            <form className='form-container'>
                <input className='input' onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder='Digite a cidade' required/>
            </form>
            <button onClick={() => setCity("")} className='button'>Limpar</button>
            <button onClick={getApi} className='button'>Buscar</button>
        </div>
        <div className='box'>
            {weather ? (
                <WeatherInformations weatherName={weather.location.name} weatherRegion={weather.location.region} weatherIcon={weather.current.condition.icon} weatherCondition={weather.current.condition.text} weatherTemp={weather.current.temp_c} updated={weather.current.last_updated}/>
         ): null}
        </div>
    </div>
  )
}

