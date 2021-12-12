import React, { useState } from "react";
import {Botnavbar,ColoredLine,Copyrighttags} from './bars'
import './App.css';
import {StarRating,HeartRating,DollarSign,StarRating2,Thumbsymbol,Facesmood,Worldrot,Flagmod} from "./StarRating"; 

function random_color(){
  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  function populate(a) {
  for ( var i = 0; i < 6; i++ ) { a += hexValues[ Math.round( Math.random() * 14 )]}
    return a;
  }
  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round( Math.random() * 360 );
  var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
  document.body.style.background = gradient;
  document.body.style.backgroundAttachment = "fixed";
  return [newColor1]
}

var colors = random_color();
const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick, onMouseOver }) => {
  let trial = "#717171"
  if (rating && rating >= starId) trial = colors[0]

  return (
    <div
      className="star"
      id="de"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      <svg
        height="50px"
        width="50px"
       // class={styleClass}
       fill = {trial} 
       viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};


function App() {
   const [rating,setRating] = useState(0);
   const [hoverState, setHoverState] = useState(0);
   const stars = [1,2,3,4,5];
   function feedback_text(i) {
    var textbox = document.getElementById("outputdisplay")
    if (i<1) textbox.innerText="Useless"
    else if (i<2) textbox.innerText="1/5 Poor" 
    else if (i<3) textbox.innerText="2/5 Ok"
    else if (i<4) textbox.innerText="3/5 Fair" 
    else if (i<5) textbox.innerText="4/5 Great"
    else if (i<6)textbox.innerText="5/5 Excellent"
  }



   return (
      <div className="App">
        <div class="Display">
        <div class="header">React Ratings Project  Ⓒ  Ongun Demirag </div>
        <ColoredLine color="black" />
        <div class="flex-container">
          {stars.map((i) =>  (
            <Star 
              key= {i}
              starId={i}
              rating={hoverState || rating }
              onMouseEnter={() => setHoverState(i)}
              onMouseLeave={() => setHoverState(0)}
              onClick={() => {setRating(i);feedback_text(i)} }
              onMouseOver={() => feedback_text(i)}
            />
          ))}
        <div class="Output" id="outputdisplay"></div>
        </div>
        <ColoredLine color="black" />
        <StarRating/>
        <ColoredLine color="black" />
        <StarRating2/>
        <ColoredLine color="black" />
        <HeartRating/>
        <ColoredLine color="black" />
        <DollarSign />
        <ColoredLine color="black" />
        <Thumbsymbol />
        <ColoredLine color="black" />
        <Facesmood />
        <ColoredLine color="black" />
        <Worldrot />
        <ColoredLine color="black" />
        <Flagmod />
        <ColoredLine color="black" />
        <Botnavbar />
        <ColoredLine color="black" />
        <Copyrighttags />
        </div>
      </div>
   );
}

export default App;
