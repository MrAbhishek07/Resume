import { useEffect } from "react";
import { useState } from "react";

const SkillBar = ( { done }) => {

    const [ value, setValue] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(oldValue => {


                
                const newValue = oldValue + 10;

                if(newValue === 100){
                    clearInterval(interval)
                }
                return newValue
                
            })
        }, 100)
    }, [])

    // setInterval (() => {
    //     if(counter == 65){
    //         clearInterval();
    //     } else{
    //         counter += 1;
            
    //     }
    // },20)

   




 

    return (
        <div className="skillbar">
            <div className="outer">
                <div className="inner">
                    <div id="number" >{value}%</div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>

        </div>
    );
}

export default SkillBar;