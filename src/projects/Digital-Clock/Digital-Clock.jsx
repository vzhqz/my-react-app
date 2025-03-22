import { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        hours = (hours % 12 || 12).toString().padStart(2, "0");

        const minutes = time.getMinutes().toString().padStart(2, "0");
        const seconds = time.getSeconds().toString().padStart(2, "0");
        

        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[url('/Images/CityImage.jpg')] bg-center bg-cover">
            <div className="w-screen text-center py-5 backdrop-blur-xs backdrop-grayscale-25">
                <h1 className="text-8xl cursor-default font-bold tracking-[2px] text-white">
                    {formatTime()}
                </h1>
            </div>
        </div>
    );
}

export default DigitalClock;
