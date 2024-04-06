
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent Constructor");
    }

    // used to make api class, beacuse react first renders the UI then calls this method.
    componentDidMount () {
        console.log("Parent ComponentDidMount");
    }

    render () {
        console.log("Parent render");

        return (
            <div className="flex flex-col items-center p-4 my-4">
                <h1 className="font-bold text-4xl text-neutral-700">This is Bitesy</h1>
                <h1 className="font-semibold text-2xl my-2 text-neutral-600">We are a Online food ordering website</h1>
                <div className="flex justify-center items-center">
                    <UserClass />
                </div>
            </div>
        )
    }
}

export default About;



