import React from "react";

class UserClass extends React.Component {
    //To accept props we need constructor and use super in it.
    constructor(props) {
        //? Why we call super here?
        super(props)

        //? Creating State
        this.state = {
            userInfo: {
                name: "Dummy",
                bio: "Dummy",
            }
        }

        //! Never Every Update you state directly in class base components.
        //* Example: this.state.count = this.state.count + 1;
    }
    
    async componentDidMount() {
        try {
            
            const data = await fetch("https://api.github.com/users/Aakarshit07");
            const jsonData =  await data.json();
            
            this.setState({
                userInfo: jsonData,
            })

        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate () {
        console.log(this.state.userInfo.name, "ComponentDidUpdate");
    }

    componentWillUnmount () {
        console.log("ComponentwillUnmount");
    }

    render() {
        //* Destructureing of props
        const {name, bio, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt={name} />
                <h2>Name: {name}</h2>
                <h3>About Me:{bio}</h3>
            </div>
        )
    }
}

export default UserClass;