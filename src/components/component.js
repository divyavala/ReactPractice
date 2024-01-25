import React from "react";
import { useState } from "react";
const MyComponent=()=>{
    const [reasons,setReasons]=useState([
        "reason1","reason2","reason3","reason4","reason5"

    ])

return(
    <>
    {reasons.map((reason,index)=>(
        <li key={index}>
        {reason}
        </li>
    )
    )}
    
    </>
)


}

export default MyComponent;