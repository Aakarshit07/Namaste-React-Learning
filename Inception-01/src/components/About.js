
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
            <div>
                <h1>This is Bitesy</h1>
                <h1>We are a Online food ordering website</h1>
                <div>
                    <UserClass />
                </div>
            </div>
        )
    }
}

export default About;



//* In which order the parent class componet and child class component will be rendered.
//* When Parent has only one child 
/** 
 *  Parent Constructor
 *  Parent render
 *     - Child Constructor
 *     - Child Render
 *     - Child ComponentDidMount
 *  Parent ComponentDidMount
*/

// When Parent has more than one child
/** 
 * ***********************This is Render Phase*******
 * 
 *  Parent Constructor
 *  Parent render
 * 
 *  - First Child Constructor
 *  - First Child Render
 *  - Second Child Constructor
 *  - Second Child Render
 * 
 * **********************This is Commit Phase********
 * 
 *  First Child ComponentDidMount
 *  Second Child ComponentDidMount
 *  Parent Child ComponentDidMount
 * 
 * **************************************************
*/

// This is happening because updating element iin actual DOM happend in two phases.
// Render Phase and Commit Phase. 
// As Render method is fast and not expensive as DOM updating. 
// Thats why React BATCH The RENDERS And Compute them and Schedule them.
// In COMMIT PHASE React actually updates the DOM. So it does it from the Batch Scheduled.

