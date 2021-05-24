import React from "react";
import "./style.css";

function SearchBox(){
    return(
        <div className="col-md-6 info-block">
        <h3>Reference Generator</h3>
        <div className="colored-line"></div>
        <h2>Best way to <span>get</span> your <span>reference</span>list</h2>
        <div className="input-group mb-10">
            <input type="text" className="form-control" placeholder="Book Author & URL" />
        </div>

        <a href="blog-single.html" className="btn btn-solid"><span>Rearch</span></a>
    </div>
    )
}

export default SearchBox;