import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Card from "../components/BookCard";
import Ads from "../components/Ads"

function SearchResult(){
        return (
            <div className="site-content">
                <div className="page-head bg-four">
                    <div className="parallax-mask"></div>
                    <div className="container">
                        <h1>Search Result</h1>
                    </div>
                </div>


                <div className="blog-page-wrapper">
                    <Container>
                        <Row>
                            <div className="col-md-8 posts-list ">
                                <BookCard></BookCard> 
                                <div className="pagination-wrapper">
                                    <ul className="pagination">
                                        <li><a href="#"><i className="icofont icofont-rounded-left"></i></a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#" className="active">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">6</a></li>
                                        <li><a href="#"><i className="icofont icofont-rounded-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 sidebar">
                                <Ads></Ads>
                            </div>
                        </Row>
                    </Container>
                </div>


            </div >
        )
    }

    export default SearchResult;