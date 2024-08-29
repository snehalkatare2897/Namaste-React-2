import React from "react"

 class UserClass extends React.Component
 {
  constructor(props){
    super(props)
    this.state={
      // count:0,
      // count1:2
      userInfo:{
        login:"Dummy",
      }
    }
    // console.log(this.props.name+"child constructor")
    
  }
  async componentDidMount(){
    // console.log(this.props.name+"child componrnt did mount")
    const data = await fetch("https://api.github.com/users/snehalkatare2897")
    const json = await data.json();
    this.setState({
      userInfo:json
    })
    console.log(json)
  }
  
  
  
  render()
    {
      // console.log(this.props.name+"child render")
        // const {name,location} = this.props
        const {login} = this.state.userInfo;
        // console.log("login",this.state.userInfo)
        return(
            <div className="user-card">
              {/* <h1>count:{count}</h1>
              <button onClick={()=>{
                this.setState({
                  count :this.state.count+1
                })
              }}>Count Increase</button> */}
            <h2>Name:{login}</h2>
            <h3>Location:{login}</h3>
            </div>
        
        )
          
 }

}

export default UserClass