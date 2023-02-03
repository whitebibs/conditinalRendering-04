import React from "react"
import{Hello} from "./hello"
import { Welcome } from "./Welcome"
export class App extends React.Component{
    render(){
        return (
        <div>
            <Hello/>
            <p>What a beautiful day</p>
            <Welcome name="John" age={20}/>
        </div>
        )
    }
}


