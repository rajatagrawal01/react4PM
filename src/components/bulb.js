import { useState } from "react";

function Bulb() {
    const [source, setSource] = useState('bulb_off.jpg');
    const handleOnClick = () => {
        setSource('bulb_on.jpg');
    }
    const handleOffClick = () => {
        setSource('bulb_off.jpg');
    }

    return(
        <div>
            <img src={source} alt="Bulb" width="200px" height="200px"/>
            <button className="btn btn-primary" onClick={handleOnClick}>On</button>
            <button className="btn btn-danger" onClick={handleOffClick}>Off</button>
        </div>
    )

}
export default Bulb;