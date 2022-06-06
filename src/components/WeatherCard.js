import React, { useEffect } from 'react'

function WeatherCard({tempInfo}) {
    const [weatherState, setWeatherState] = React.useState("");

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    useEffect(() =>{
        if(weatherMood){
            switch(weatherMood){
                case "Clouds": setWeatherState("wi-day-cloudy");
                break;
                case "Haze": setWeatherState("wi-fog");
                break;
                case "Clear": setWeatherState("wi-day-sunny");
                break;
                case "Mist": setWeatherState("wi-dust");
                break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }

    }, [weatherMood]);

    let sec = sunset;
    let date = new Date(sec *1000);
    let timeStr = `${date.getHours()}: ${date.getMinutes()}`;

    return (
        <>
            <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <div>{temp}&deg;</div>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weatherMood}
                        </div>
                        <div className="place">{name}, {country}</div>
                    </div>

                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-sunset'}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr} <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-humidity'}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-rain'}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={'wi wi-strong-wind'}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WeatherCard
