// functional component
export const Footer = () => {
  return (
    <h2> Hello I am a footer 🔥</h2>
  )
}

export const Herosec = ( props ) => {
  const user_online=true;
  const show=(e)=>{
    console.log(e.target.value);
    // console.log("changing")
  }
  const print = () => {
    console.log("Clicked 😑");
  }
  return (
    <div className="ms-5 container">
    { user_online ? <h1 className="text-success h3"> Online </h1> : <h1 className="text-danger h3"> Offline </h1>  }
      <h3> I am {props.role} {props.name} ⚡ </h3>
      <hr />
      <div className="input-group mb-3 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>{show(e)}} />
      </div>
      <button className="btn btn-warning" onClick={() => { print() }}> Click here 🌱 </button>
    </div>
  )
}

 //named export 1 or many
  //default export 1

// in a file you can only have 1 default export and many named export


// onclick, onmouseover, onchange etc