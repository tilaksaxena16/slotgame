import React from "react";
import "./Slotmach";


const Slotmach = (props) => {

   let {x,y,z} = props;

    if (x === y && y === z) {
        return (
            <div>
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is Matching. </h1>
                <hr />
            </div>
        ) } else {
        return (
            <div>
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is Not Matching. </h1>
                <hr />
            </div>
        )

    }
}

export { Slotmach }