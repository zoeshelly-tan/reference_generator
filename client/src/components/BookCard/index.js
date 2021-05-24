import React from "react";

import "./style.css";
// import API from "../../utils/API";
import SaveBtn from "../SaveBtn"

class BookCard extends React.Component {
	render(){
  return (
   
    <div className="blog-post list-style clearfix">
							<div className="img-wrapper">
								<img src=" " alt="" className="img-responsive"/>
							</div>
							<div className="info-block">
								<h3 className="category">Mobile Apps</h3>
								<a href="blog-single.html"><h2>enim anoed minim vein quis nostrud</h2></a>
								<p>Dolor sit amet, consectetur adipin et dolore magna aliquLorem t</p>
								<div className="meta">
									<h5>June 8,  2016</h5>
									<span className="sep">/</span>
									<h5>22 Comments</h5>
								</div>
								<SaveBtn></SaveBtn>
							</div>
						</div>
            
  );
}}

export default BookCard;
