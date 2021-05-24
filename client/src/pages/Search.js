import React, { Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import SearchBox from "../components/SearchBox";



class Search extends Component {
    render(){
    return (
        <div>
            <Container>
                <h1>search</h1>

                <div className="featured-article-wrapper second-style">
                    <Container>
                        <Row>
                            <SearchBox></SearchBox>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                                                    
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    )}
};

export default Search;