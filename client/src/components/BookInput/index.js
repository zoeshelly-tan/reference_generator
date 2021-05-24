import React from "react";
import Wrapper from "../Wrapper"
import "./style.css";

class BookInput extends React.Component{
	render(){
    return(
        <Wrapper>
        <h2><label>Books</label></h2>
				<div class="input-group ">
					<h3>Year published:</h3>
					<input type="text" class="form-control" placeholder="year" aria-label="Example text with button addon"
						aria-describedby="button-addon1"/>
				</div>
				<div class="input-group ">
					<h3>Title:</h3>
					<input type="text" class="form-control" placeholder="year" aria-label="Example text with button addon"
						aria-describedby="button-addon1"/>
				</div>
				<div class="input-group ">
					<h3>Edition:</h3>
					<input type="text" class="form-control" placeholder="year" aria-label="Example text with button addon"
						aria-describedby="button-addon1"/>
				</div>
				<div class="input-group ">
					<h3>City published:</h3>
					<input type="text" class="form-control" placeholder="year" aria-label="Example text with button addon"
						aria-describedby="button-addon1"/>
				</div>
				<div class="input-group ">
					<h3>Publisher:</h3>
					<input type="text" class="form-control" placeholder="year" aria-label="Example text with button addon"
						aria-describedby="button-addon1"/>
				</div>
				<div class="input-group ">
					<h3>Pages used:</h3>
					<input type="text" class="form-control" placeholder="year" aria-label="Example text with button addon"
						aria-describedby="button-addon1"/>
				</div>

				<button type="button" class="btn btn-primary">Generate</button>
		
        </Wrapper>
    )
}}

export default BookInput