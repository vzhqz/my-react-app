import { Routes, Route } from 'react-router'
import Header from './components/Header.jsx'
import TodayForecast from './pages/Today-Forecast.jsx'
import HourlyForecast from './pages/Hourly-Forecast.jsx'
import TenDayForecast from './pages/10-Day-Forecast.jsx'
import WeekendForecast from './pages/Weekend-Forecast.jsx'
import ChangeLocation from './pages/Change-Location.jsx'
import './Weather-App.css'

function WeatherApp() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={ <TodayForecast/> } />
                <Route path="/hourly-forecast" element={ <HourlyForecast/> } />
                <Route path="/10-day-forecast" element={ <TenDayForecast/> } />
                <Route path="/weekend-forecast" element={ <WeekendForecast/> } />
                <Route path="/change-location" element={ <ChangeLocation/> } />
            </Routes>
        </>
    )
}

export default WeatherApp