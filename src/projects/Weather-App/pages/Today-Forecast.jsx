import WeatherInfo from "../components/Weather-Info.jsx"

function TodayForecast() {
    return(
        <>
            <WeatherInfo/>
            <h2 className="mx-20 my-5 text-2xl font-medium">Today's forecast</h2>

            {/*  */}
            {/*  */}
            {/*  */}

            <section className="flex justify-start items-center flex-row text-left mt-5 py-10 bg-gray-200 w-[97%] mx-auto rounded-2xl">
                
                <div className="flex flex-row items-center justify-start">
                    <i class="fa-solid fa-cloud text-5xl mb-4 px-10"></i>

                    <div>
                        <h1 className="text-xl block">
                            Morning
                            <span className="block text-3xl">
                                11°C
                            </span>

                            <span>
                                Cloudy
                            </span>
                        </h1>
                    </div>
                </div>

                {/*  */}
                {/*  */}

                <div className="divisor"></div>

                {/*  */}
                {/*  */}

                <div className="flex flex-row items-center justify-start">
                    
                    <i class="fa-solid fa-temperature-three-quarters text-5xl mb-4 px-10"></i>

                    <div>
                        <h1 className="text-3xl block">
                            25°C
                            <span className="block text-lg text-gray-600">
                                Feels like 23°C
                            </span>
                        </h1>
                    </div>
                </div>

                {/*  */}
                {/*  */}

                <div className="divisor"></div>

                {/*  */}
                {/*  */}

                <div className="flex flex-row items-center justify-start">
                    
                <i class="fa-solid fa-droplet text-5xl mb-4 px-10"></i>

                    <div>
                        <h1 className="text-3xl block">
                            25°C
                            <span className="block text-lg text-gray-600">
                                Feels like 23°C
                            </span>
                        </h1>
                    </div>
                </div>

                {/*  */}
                {/*  */}

                <div className="divisor"></div>

                {/*  */}
                {/*  */}

                <div className="flex flex-row items-center justify-start">
                    
                    <i class="fa-solid fa-wind text-5xl mb-4 px-10"></i>
        
                        <div>
                            <h1 className="text-3xl block">
                                8 km/h
                                <span className="block text-lg text-gray-600">
                                    Wind speed
                                </span>
                            </h1>
                        </div>
                </div>

            </section>
        </>
    );
}

export default TodayForecast