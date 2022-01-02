import React,{ Component } from 'react'
class Timer extends Component{
  constructor(props){
    super(props);
  }
  state = {
    minutes:this.props.min,
    seconds:this.props.sec
  }
  componentDidMount(){
    this.myInterval=setInterval(()=>{
       const {minutes,seconds} = this.state;
       console.log("seconds ",seconds);
      if (seconds>0) {
        this.setState(({seconds})=>({
          seconds:seconds-1
        }))
      }
      if (seconds<=0) {
        if (minutes<=0) {
          clearInterval(this.myInterval)
        }
        else {
          this.setState(({minutes})=>({
            minutes:minutes-1,
            seconds:59
          }))
        }
      }

    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.myInterval)
  }
  render(){
    const {minutes,seconds}=this.state;

    return(
      <div className="component">
      {
        minutes<=0 && seconds===0 ? <p className="p">Time is up!!!</p>:  <p className="Z" >Time Remaining: {minutes}:{seconds <10 ? `0${seconds}`:seconds }</p>
      }

      </div>
    )
  }
}
var As=20;
export default Timer;
export {As};
