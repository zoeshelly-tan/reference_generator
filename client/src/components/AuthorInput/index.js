import React from "react";


class AuthorInput extends React.Component {
    render(){
        return(
    <div>
        <label>Author:</label>
    <div className="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text">First and last name</span>
        </div>
        <input type="text" aria-label="First name" className="form-control" />
        <input type="text" aria-label="Last name" className="form-control" />
    </div>
    </div>
        )}}

export default AuthorInput