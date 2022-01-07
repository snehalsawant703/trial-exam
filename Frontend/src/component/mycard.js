import "bootstrap/dist/css/bootstrap.min.css";
import {useState } from "react";


export function Mycard() {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  const increment = () => setCounter1(counter1 + 1);
  const decrement = () => setCounter2(counter2 + 1);


  return (
    <div className="card  bg-success text-light fs-5">
      <div className="card-header d-flex justify-content-center">Mycard</div>

      <img
        className="card-img w-100 d-block"
        src="https://picsum.photos/200/200"
        alt="Card image cap"
      ></img>

      <div className="card-body alert-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nam!
      </div>
    
    <div>                                           
      <div className="d-flex row">
        <div className="d-flex col-sm-6 justify-content-center">
        {counter1}
        </div>
        <div className="d-flex col-sm-6 justify-content-center">
        {counter2}
        </div>
    </div>
    <div>
        <input
          className="w-70 bg-success text-light w-50"
          type="button"
          value="Like"
          onClick={increment}
        />
        
        <input
          className="w-70 bg-success text-light w-50"
          type="button"
          value="Dislike"
           onClick={decrement}
        /> 
      </div>
      </div>
    </div>
  );
}
