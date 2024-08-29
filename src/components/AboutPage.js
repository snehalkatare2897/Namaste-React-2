import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component {

    constructor(props) {
        super(props);
        console.log("parent constructor")

    }

    componentDidMount() {
        console.log("parent component did mount")
    }
    render() {
        console.log("parent render")
        return (
        <div>
            <h1>This is bout page</h1>
            <User name={"snehal1 (functional)"} location={"Mumbai"} />
            <UserClass name={"snehal2 (class)"} location={"Mumbai"} />
            {/* <UserClass name={"snehal3 (class)"} location={"Mumbai"} /> */}

            import React from "react"
        </div>
        )

    }
}

// const About = () => {
//     return (
//     <div>
//         <h1>This is bout page</h1>
//         <User name={"snehal (functional)"} location={"Mumbai"}/>
//         <UserClass name={"snehal (class)"} location={"Mumbai"}/>
//     </div>)
// }

export default About