import React from "react";
import "./style.css";

function SearchBox(props){
    return(
        <div className="col-md-6 info-block">
        <h3>Reference Generator</h3>
        <div className="colored-line"></div>
        <h2>Best way to <span>get</span> your <span>reference</span>list</h2>
        <form className="input-group mb-10" onSubmit={props.searchBook}>
            <input type="text" className="form-control" placeholder="Book Author & URL" onChange={props.handleSearch} />
        <button class="btn btn-primary" type="submit" >Search</button>
        </form>
        
    </div>
    )
}

export default SearchBox;