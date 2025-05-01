import { useState } from "react";

function ArrayObj() {
    const [arr, setARR] = useState(["orange"]);
    const [obj, setObj] = useState([{ name: "Shyam", age: 20 }]);

    const addValue = () => {
        setARR((prev) => [...prev, "banana"]);
    }
    const addObjValue = () => {
        setObj((obj1) => [...obj1, { name: "Prashant", age: 25 }]);
    }
    return (
        <>
            <div>
                <h1>Array Object</h1>
                <button onClick={addValue}>Add Value</button>
                <h2>{arr.map((item, index) => <p key={index}>{item}</p>)}</h2>
            </div>
            <div>
                <h1>Array Object</h1>
                <button onClick={addObjValue}>Add Value</button>
                <h2>{obj.map((item, index) => <p key={index}>{item.name} {item.age}</p>)}</h2>
            </div>
        </>
    )

}

export default ArrayObj;