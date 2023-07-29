import React, { useState } from 'react';

function App() {
  const [darkmode, setDarkmode] = useState({
    color: "#000",
    backgroundColor: "#fff"
  });

  const changecolors=()=>{
    if(darkmode.color==="#000"){
    setDarkmode({
      color:"#fff",
      backgroundColor:"#000"
    })
    SetText("Light Mode");
  }else{
    setDarkmode({
      color:"#000",
      backgroundColor:"#fff"
    })
    SetText("Dark Mode");
  }}
  // const changeback=()=>{
  //   setDarkmode({
  //     color:"#000",
  //     backgroundColor:"#fff"
  //   })
  // }

  const [text,SetText]=useState("Dark Mode")


  return (
    <div className="container-fluid text-center" style={darkmode}>
      <button className="btn btn-outline-danger my-4" onClick={changecolors} >{text}</button>
      <div className="jumbotron text-center" >
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </div>
    </div>
  );
}

export default App;
