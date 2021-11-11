import React, { Component } from 'react'

export default class ClassBased extends Component {

    constructor(props) {

        super(props);
        this.state = {

            fullName: "ayoub werghemi",
            bio: "life lover",
            profession: "Web developer",
            input: 0,


        };


    }

    add = () =>{

        this.setState({ input: this.state.input + 1     });


    }


    componentDidMount() {
        setInterval(this.add,1000)
    }


    render() {

        const ShowFun = () => {

            this.setState({ show: !this.state.show       });

        }
        return ( 


         <div>
             {  this.state.show ? ( 

             <p className="par">
               <h1>this is: { this.state.fullName }  </h1>
           <h2>my bio: { this.state.bio }</h2>
           <h2>and this is my profession: { this.state.profession } </h2>

                <h1>{this.state.input}</h1>

             </p>

             ):null } 





            <button onClick={ShowFun} >click me</button>

            <br></br>

            <p>{this.state.fullName}</p>

            <input
            type="text"
            placefolder="write something"
            />

            <img className="img" src="/bob.png" />


             </div>




        )
    }
}