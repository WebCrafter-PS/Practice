import { useState } from "react";

//start & stop
export default function Toggle (){
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <h2>Toggle</h2>
            <button onClick={()=>setToggle(!toggle)}>{toggle ? 'Stop' : 'Start'}</button>
        </div>
    )
}