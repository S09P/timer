import './App.css';
import React,{ Component } from 'react'
import ReactDOM from 'react-dom';
import Timer from './components/timer'

class Top extends Component {
state={
  min:0,
  sec:0
}
getvalue=(event)=>{
console.log("hello",event.target.value);
// const min=this.min.value;
// const sec=this.sec.value;
// this.setState({
//   min: min,
//   sec:sec
// }) ;
const name=event.target.name;
const value=event.target.value;
this.setState({[name]:value});
}
handleSubmit=(event)=>{
  event.preventDefault();
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <Timer />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
  if (this.state.min<60&&this.state.min>-1&&this.state.sec<60&&this.state.sec>-1) {
    ReactDOM.render(
       <React.StrictMode>
         <Timer  min={this.state.min} sec={this.state.sec}/>
       </React.StrictMode>,
       document.getElementById('root')
     );
     var b=this.state.min;
     console.log("b==",b);
  } else {
    alert("Enter Valid Time!!!")
  }
  console.log("final value ",this.state);
}
render(){
  console.log("state:",this.state);
  return(
<form>
<div className="note">
<h1>Minutes</h1>
<h1>Seconds</h1>
</div>
  <div className="main">

<div className="main1">
  <input type="number" onChange={this.getvalue} name="min" max="60" min="0" required/>
  <input type="number" onChange={this.getvalue} name="sec" max="60" min="0" required />
  </div>
  <div className="main3">
  <button onClick={this.handleSubmit}>Start</button>

</div>
  </div>
  </form>
)
}
}
export default Top;
