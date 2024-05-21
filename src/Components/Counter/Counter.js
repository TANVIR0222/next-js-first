"use client"
import { useState } from "react";
const Counter = () => {
    const [counter, setcounter] = useState(0);

    return (
        <div>
            <h1 className="uppercase">count now : {counter} </h1>
            <button onClick={() => setcounter(counter + 1)}
                className="btn mr-9 btn-primary">Increase</button>
            {
                counter === 0 ? 'stop' :
                    <button onClick={() => setcounter(counter - 1)}
                    className="btn btn-primary">decrease</button>
            }
        </div>


    );
};

export default Counter;