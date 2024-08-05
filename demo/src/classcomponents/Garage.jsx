import React from "react";
import { Car } from "./Car";
export class Garage extends React.Component{
    render(){
        return(
            <>
                <div>
                    <h1>Who is in my  garage</h1>
                    <Car/>
                </div>
            </>
        )
    }
}