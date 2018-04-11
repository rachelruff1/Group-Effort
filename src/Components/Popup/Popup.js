import React, { Component } from "react";
import "./Popup.css";
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["dallas", "austin", "more", "more2", "more3"],
      name2: "this. place. name. 2"
    };
  }

  render() {
    // let img = document.createElement("img");
    // img.src = "data:image/jpeg;base64," + btoa(this.props.placeimg);
    // document.body.appendChild(img);

    return (
      <div className="popup">
        <div className="box">
          <div className="stuffinbox">
            <button>+ Create New</button>

            <section class="container">
              <div class="dropdown">
                <select name="one" class="dropdown-select">
                  <option value="">Select…</option>
                  {this.state.name.map((name, i) => (
                    <option value="1">{this.state.name[i]}</option>
                  ))}
                </select>
              </div>
            </section>
            <button> go</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
