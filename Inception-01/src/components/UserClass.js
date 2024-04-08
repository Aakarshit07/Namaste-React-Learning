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
            let count = 0;
            this.tiemr = setInterval(() => {
                console.log("Counter ", count++)
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
        // To access the counter we use this
        clearInterval(this.timer);
    }

    render() {
        //* Destructureing of props
        const {name, bio, avatar_url } = this.state.userInfo;
        return (
            <div className="flex justify-center items-center px-2 m-2">
                <div className="border-4 rounded-lg flex items-center w-1/2">
                    <img  className="w-40" src={avatar_url} alt={name} />
                    <div className="flex-col text-neutral-700 text-lg text-wrap w-1/2 text-ellipsis line-clamp-5">
                        <h2 className="font-bold">{name}</h2>
                        <h3 className="font-semibold text-neutral-500">{bio}</h3>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default UserClass;