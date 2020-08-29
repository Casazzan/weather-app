import React from 'react'

class ToggleSwitch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOptionOne: true,
        }
    }

    render() {
        return (
            <div className="toggle-switch">
                <div className="toggle-switch-option">{this.props.optionOneString}</div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <div className="toggle-switch-option">{this.props.optionTwoString}</div>
            </div>
        )
    }
}

export default ToggleSwitch