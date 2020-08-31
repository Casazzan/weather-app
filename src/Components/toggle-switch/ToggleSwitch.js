import React from "react";
import "./toggle-switch.css";

class ToggleSwitch extends React.Component {
  render() {
    return (
      <div className="toggle-switch">
        <div className="toggle-switch-option">{this.props.optionOneString}</div>
        <label className="switch">
          <input type="checkbox" />
          <span
            className="slider round"
            onClick={
              this.props.toggleFunction
                ? () => this.props.toggleFunction()
                : null
            }
          ></span>
        </label>
        <div className="toggle-switch-option">{this.props.optionTwoString}</div>
      </div>
    );
  }
}

export default ToggleSwitch;
