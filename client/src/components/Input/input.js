import React, { Component } from "react";

// class Input extends Component {

    // render() {//TODO: Maybe don't need this to be it's own component - maybe one input for each of numguests and each guide
    export function Input(props) {
        return (
            <div className="form-group">
                <input className="form-control" {...props} />
            </div>
        )
    }
// }

export default Input;
