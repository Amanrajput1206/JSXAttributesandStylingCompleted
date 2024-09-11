import React from "react";
import ReactDOM from "react-dom";
// https://picsum.photos/ this website can be used to create stylish placeholders for images
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* Even though we are writing html here, it will be converted to javascript and hence instead of using the word class 
as we do for css classes we must use className in React, though it will only give a warning 
Also all the attributes of HTML are used as camelcased in JSX code*/}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="bacon"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
    />
    <img
      className="food-img"
      alt="jamon"
      src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
    />
  </div>,
  document.getElementById("root")
);
