import React, { useState } from "react";
import {FaStar,FaHeart,FaDollarSign,FaThumbsDown,FaThumbsUp} from "react-icons/fa"; 
import {FaAngry,FaFrown,FaMeh,FaGrinBeam,FaGrinHearts} from 'react-icons/fa'
import {FaGlobeEurope,FaGlobeAfrica,FaGlobeAmericas,FaGlobeAsia} from 'react-icons/fa'
import { CircleFlag } from 'react-circle-flags'

export const StarRating = () => {
    const [rating, setRating] = useState(null);
    var newColor1 = ""
    const [hover, setHover] = useState(null);
    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    return <div class="flex-container">
        {[...Array(5)].map((star,i) => {
            function populate(a) {
            for ( var i = 0; i < 6; i++ ) { a += hexValues[ Math.round( Math.random() * 14 )]}
                return a;
              }
            newColor1 = populate('#');
            const ratingValue = i + 1;
              return <label>
                  <input 
                  type="radio" 
                  name="rating" 
                  value= {ratingValue} 
                  onClick ={() => setRating(ratingValue) } 
                  />
                  <FaStar className="star" 
                  color={ratingValue <= (hover || rating) ? newColor1 : "#e4e5e9" } 
                  size={50}
                  onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                  onMouseLeave= {() => setHover(null)}
                  />
              </label> 
        })}
         <p>  {rating}/5 </p>
    </div>
}
export const StarRating2 = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    function populate(a) {
        for ( var i = 0; i < 6; i++ ) { a += hexValues[ Math.round( Math.random() * 14 )]}
            return a;
    }
    var newColor1 = populate('#');
    return <div class="flex-container">
        {[...Array(5)].map((star,i) => {  
            const ratingValue = i + 1;
              return <label>
                  <input 
                  type="radio" 
                  name="rating" 
                  value= {ratingValue} 
                  onClick ={() => setRating(ratingValue) } 
                  />
                  <FaStar className="star" 
                  color={ratingValue <= (hover || rating) ? newColor1 : "#e4e5e9" } 
                  size={50}
                  onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                  onMouseLeave= {() => setHover(null)}
                  />
              </label> 
        })}
         <p>  {rating}/5 </p>
    </div>
}
export const HeartRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div class="flex-container">
        {[...Array(5)].map((star,i) => {
            const ratingValue = i + 1;
              return <label>
                  <input 
                  type="radio" 
                  name="rating" 
                  value= {ratingValue} 
                  onClick ={() => setRating(ratingValue) } 
                  />
                  <FaHeart className="star" 
                  color={ratingValue <= (hover || rating) ? "#ff0000" : "#e4e5e9" } 
                  size={50}
                  onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                  onMouseLeave= {() => setHover(null)}
                  />
              </label> 
        })}
         <p>  {rating}/5 </p>
    </div>
}
export const DollarSign = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div class="flex-container">
        {[...Array(5)].map((star,i) => {
            const ratingValue = i + 1;
              return <label>
                  <input 
                  type="radio" 
                  name="rating" 
                  value= {ratingValue} 
                  onClick ={() => setRating(ratingValue) } 
                  />
                  <FaDollarSign className="star" 
                  color={ratingValue <= (hover || rating) ? "#85bb65" : "#e4e5e9" } 
                  size={50}
                  onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                  onMouseLeave= {() => setHover(null)}
                  />
              </label> 
        })}
         <p>  {rating}/5 </p>
    </div>
}
export const Thumbsymbol = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div class="flex-container">
        {[...Array(2)].map((star,i) => {
            const ratingValue = i + 1;
            if (i<1) {
                return <label>
                <input 
                type="radio" 
                value= {ratingValue} 
                onClick ={() => setRating(ratingValue) } 
                />
                <FaThumbsUp 
                className="star" 
                color={ratingValue === (hover || rating) ? "#0000ff" : "#e4e5e9" } 
                size={50}
                onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                onMouseLeave= {() => setHover(null)}
                />
            </label> 
            }
            else {
                return <label>
                <input 
                type="radio" 
                value= {ratingValue} 
                onClick ={() => setRating(ratingValue) } 
                />
                <FaThumbsDown 
                className="star" 
                color={ratingValue === (hover || rating) ? "#FF0000" : "#e4e5e9" } 
                size={50}
                onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                onMouseLeave= {() => setHover(null)}
                />
            </label> 
            }
           
        })}
        <div class="text_explanation">
      <p>{rating === 1 ? 'Liked' : rating === 2 ? 'Disliked' : ''}  </p>  
      </div>
</div>
}
export const Facesmood = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div class="flex-container">
        {[...Array(5)].map((star,i )=>{
            const ratingValue = i + 1;
            if (i<1) {
                return <label>
                <input 
                type="radio" 
                value= {ratingValue} 
                onClick ={() => setRating(ratingValue) } 
                />
                <FaAngry 
                className="star" 
                color={ratingValue === (hover || rating) ? "#800020" : "#e4e5e9" } 
                size={50}
                onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                onMouseLeave= {() => setHover(null)}
                />
            </label> 
            }
           else if (i<2) {
            return <label>
            <input 
            type="radio" 
            value= {ratingValue} 
            onClick ={() => setRating(ratingValue) } 
            />
            <FaFrown 
            className="star" 
            color={ratingValue === (hover || rating) ? "#D22B2B" : "#e4e5e9" } 
            size={50}
            onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
            onMouseLeave= {() => setHover(null)}
            />
        </label> 
           }
           else if (i<3) {
            return <label>
            <input 
            type="radio" 
            value= {ratingValue} 
            onClick ={() => setRating(ratingValue) } 
            />
            <FaMeh 
            className="star" 
            color={ratingValue === (hover || rating) ? "#AA4A44" : "#e4e5e9" } 
            size={50}
            onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
            onMouseLeave= {() => setHover(null)}
            />
        </label> 
            }
           else if (i<4) {
            return <label>
            <input 
            type="radio" 
            value= {ratingValue} 
            onClick ={() => setRating(ratingValue) } 
            />
            <FaGrinBeam 
            className="star" 
            color={ratingValue === (hover || rating) ? "#228B22" : "#e4e5e9" } 
            size={50}
            onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
            onMouseLeave= {() => setHover(null)}
            />
        </label> 
            }
            else {
                return <label>
                <input 
                type="radio" 
                value= {ratingValue} 
                onClick ={() => setRating(ratingValue) } 
                />
                <FaGrinHearts 
                className="star" 
                color={ratingValue === (hover || rating) ? "#0FFF50" : "#e4e5e9" } 
                size={50}
                onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                onMouseLeave= {() => setHover(null)}
                />
            </label> 
            }
           
        })}
        <div class="text_explanation">
      <p>{rating === 1 ? 'Angry' : rating === 2 ? 'Sad' :  rating === 3 ? 'Decent' :  rating === 4 ? 'Happy' :  rating === 5 ? 'In Love' :  ''}  </p>  
        </div>
    </div>
}
export const Worldrot = () => {
    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div class="flex-container">
        {[...Array(4)].map((star,i )=>{
            const ratingValue = i + 1;
            function populate(a) {
                for ( var i = 0; i < 6; i++ ) { a += hexValues[ Math.round( Math.random() * 14 )]}
                    return a;
                  }
            var newColor1 = populate('#');      
            if (i<1) {
                return <label>
                <input 
                type="radio" 
                value= {ratingValue} 
                onClick ={() => setRating(ratingValue) } 
                />
                <FaGlobeEurope 
                className="star" 
                color={ratingValue === (hover || rating) ? newColor1 : "#e4e5e9" } 
                size={50}
                onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                onMouseLeave= {() => setHover(null)}
            />
            </label> 
            }
           else if (i<2) {
            return <label>
            <input 
            type="radio" 
            value= {ratingValue} 
            onClick ={() => setRating(ratingValue) } 
            />
            <FaGlobeAfrica 
            className="star" 
            color={ratingValue === (hover || rating) ? newColor1 : "#e4e5e9" } 
            size={50}
            onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
            onMouseLeave= {() => setHover(null)}
            />
        </label> 
           }
           else if (i<3) {
            return <label>
            <input 
            type="radio" 
            value= {ratingValue} 
            onClick ={() => setRating(ratingValue) } 
            />
            <FaGlobeAmericas 
            className="star" 
            color={ratingValue === (hover || rating) ? newColor1 : "#e4e5e9" } 
            size={50}
            onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
            onMouseLeave= {() => setHover(null)}
            />
        </label> 
            }
            else {
                return <label>
                <input 
                type="radio" 
                value= {ratingValue} 
                onClick ={() => setRating(ratingValue) } 
                />
                <FaGlobeAsia 
                className="star" 
                color={ratingValue === (hover || rating) ? newColor1 : "#e4e5e9" } 
                size={50}
                onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                onMouseLeave= {() => setHover(null)}
                />
            </label> 
            }
        })}
        <div class="text_explanation">
      <p>{rating === 1 ? 'Europe' : rating === 2 ? 'Africa' :  rating === 3 ? 'Americas' :  rating === 4 ? 'Asia' :  rating === 5 ? 'In Love' :  ''}  </p>  
        </div>
    </div>
}
export const Flagmod = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const country_code = ["ch","cz","de","es","gb","it","pl","ru","tr","us"]
    return <div class="flex-container">
        {[...Array(10)].map((star,i )=>{
            const ratingValue = i + 1;
                return <label>
                <input 
                type="radio" 
                value= {ratingValue} 
                onClick ={() => setRating(ratingValue) } 
                />
                <CircleFlag 
                countryCode={country_code[i]}
                className="flag" 
                height={ratingValue === (hover || rating) ? 35 : 25 } 
                onMouseEnter= {() => {setHover(ratingValue);setRating(ratingValue)} }
                onMouseLeave= {() => setHover(null)}
                />
            </label> 
        })}
        <div class="text_explanation">
      <p>{country_code[rating-1]} </p>  
        </div>
    </div>
}

