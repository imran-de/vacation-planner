import { useEffect, useState } from "react";

const useLoadData = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allEvents")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    return {
        events
    }
}

export default useLoadData;