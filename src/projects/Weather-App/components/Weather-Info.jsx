import { useNavigate } from "react-router";

function WeatherInfo() {
    const navigate = useNavigate();

    return (
        <section className="flex justify-start items-center flex-row text-left mt-10 py-7 bg-gray-200 w-[97%] mx-auto rounded-2xl">
            
            <div className="flex flex-row items-center justify-start">
                <i className="fa-solid fa-location-dot text-5xl mb-4 px-10"></i>

                <div>
                    <h1 className="text-3xl block">
                        New York, NY
                        <span className="block text-lg text-gray-600">
                            25°C | Partly Cloudy
                        </span>
                    </h1>

                    <button
                        className="mt-4 bg-gray-300 py-2.5 px-3 rounded-xl cursor-pointer hover:bg-gray-400 transition-all duration-150 ease-in active:opacity-70"
                        onClick={() => navigate("/change-location")}
                    >
                        Change Location
                    </button>
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
    );
}

export default WeatherInfo