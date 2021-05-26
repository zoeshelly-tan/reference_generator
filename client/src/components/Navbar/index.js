import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Row from "../Row"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar() {
	return (
		<div style={{height:"120px"}}>
			<header id="main-header">
				<Container>
					<Row>
						<div className="site-branding col-md-3 col-xs-6">
							<a href="#">F<span>A</span>M</a>
						</div>
						<div id="site-navigation" className="col-md-8 header-primary">
							<ul id="main-menu">
								<li className="menu-item ">
									<Link className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} to="./search">Search</Link>
								</li>
								<li className="menu-item"><Link className={window.location.pathname === "/manualadd" ? "nav-link active" : "nav-link"} to="./manualadd">Manually Add in</Link></li>

								<li className="menu-item active"><Link className={window.location.pathname === "/bibliography" ? "nav-link active" : "nav-link"} to="./bibliography">Reference List</Link>
								</li>


							
							</ul>
						</div>

					</Row>
				</Container>
			</header>
		</div>
	)
}

export default Navbar;
