import { useState } from "react";

export default function Counter() {

    const[count,setCount] = useState(0)

    function inccerase(){
        setCount(count+1)
        console.log(count)
    }

    return(
        <div>
           <h3>Count={count}</h3>
           <button onClick={inccerase}>Click</button>
        </div>
    )

   
    
} 