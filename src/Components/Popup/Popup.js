import React, { Component } from "react";
import "./Popup.css";
class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let img = document.createElement("img");
    // img.src = "data:image/jpeg;base64," + btoa(this.props.placeimg);
    // document.body.appendChild(img);

    return (
      <div className="popup">
        <div className="box">
          <p>hi</p>
        </div>
      </div>
    );
  }
}

export default Popup;
