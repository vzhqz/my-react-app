import { Link, useLocation } from 'react-router'

function Header() {
    const location = useLocation();

    return (
        <header className="flex justify-between items-center py-2.5 px-10">
        
            <h1 className="text-2xl font-bold tracking-wide">
                Weather App
            </h1>

            <ul className="flex">

                <li className="weather-app-header-li">
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "underline underline-offset-4" : ""}
                    >
                        <i class="fa-solid fa-calendar-day"></i>
                        Today
                    </Link>
                </li>

                <li className="weather-app-header-li">
                    <Link
                        to="/hourly-forecast"
                        className={location.pathname === "/hourly-forecast" ? "underline underline-offset-4" : ""}
                    >
                        <i class="fa-solid fa-clock"></i>
                        Hourly
                    </Link>
                </li>

                <li className="weather-app-header-li">
                    <Link
                        to="/10-day-forecast"
                        className={location.pathname === "/10-day-forecast" ? "underline underline-offset-4" : ""}
                    >
                        <i class="fa-solid fa-calendar-week"></i>
                        10 Day
                    </Link>
                </li>

                <li className="weather-app-header-li">
                    <Link
                        to="/weekend-forecast"
                        className={location.pathname === "/weekend-forecast" ? "underline underline-offset-4" : ""}
                    >
                        <i class="fa-solid fa-couch"></i>
                        Weekend
                    </Link>
                </li>
    
            </ul>

        </header>
    )
}

export default Header