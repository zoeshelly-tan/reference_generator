import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import SearchBox from "../components/SearchBox";
import request from "superagent"
import BookCard from "../components/BookCard"


class Search extends Component {
    state = {
        books: [],
        searchField: ""
    }

    searchBook = (e) => {
        e.preventDefault();
        
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                
                console.log(data.body.items);
                this.setState({books: data.body.items})
            })
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }

  
    render() {
        return (
            <div>
                <Container>
                    <h1>search</h1>

                    <div className="featured-article-wrapper second-style">
                        <Container>
                            <Row>
                                <SearchBox searchBook={this.searchBook} handleSearch={this.handleSearch} />
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                {this.state.books.map((book, index) => (
                                    
                                    <BookCard
                                    key={index}
                                    title={book.volumeInfo.title}
                                    authors={[book.volumeInfo.authors]}
                                    description={book.volumeInfo.description}
                                    previewLink={book.volumeInfo.previewLink}
                                    />
                                ))}

                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        )
    }
};

export default Search;