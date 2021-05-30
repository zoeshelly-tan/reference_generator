import React, { Component } from "react";
import request from "superagent"
import { observer } from 'mobx-react';
import SessionStore from 'mobx-session';
import Login from '../pages/Login'
import Container from "../components/Container";
import SearchBox from "../components/SearchBox";
import Row from "../components/Row";
import BookCard from "../components/BookCard"


const Search = observer(() => {
    const state = {
        books: [],
        searchField: ""
    }

    const searchBook = (e) => {
        e.preventDefault();

        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {

                console.log(data.body.items);
                this.setState({ books: data.body.items })
            })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }

    if (SessionStore.initialized) {

        if (SessionStore.hasSession) {
            return (
                <div>
                    <Container>
                        <h1>search</h1>

                        <div className="featured-article-wrapper second-style">
                            <Container>
                                <Row>
                                    <SearchBox searchBook={searchBook} handleSearch={handleSearch} />
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    {state.books.map((book, index) => (

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
            );
        } else {
            return <Login />;
        }
    }

    return null;


});
// class Search extends Component {
// state = {
//     books: [],
//     searchField: ""
// }

// searchBook = (e) => {
//     e.preventDefault();

//     request
//         .get("https://www.googleapis.com/books/v1/volumes")
//         .query({ q: this.state.searchField })
//         .then((data) => {

//             console.log(data.body.items);
//             this.setState({books: data.body.items})
//         })
// }

// handleSearch = (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     this.setState({ searchField: e.target.value })
// }


// render() {
//     return (
//         <div>
//             <Container>
//                 <h1>search</h1>

//                 <div className="featured-article-wrapper second-style">
//                     <Container>
//                         <Row>
//                             <SearchBox searchBook={this.searchBook} handleSearch={this.handleSearch} />
//                         </Row>
//                     </Container>
//                     <Container>
//                         <Row>
//                             {this.state.books.map((book, index) => (

//                                 <BookCard
//                                 key={index}
//                                 title={book.volumeInfo.title}
//                                 authors={[book.volumeInfo.authors]}
//                                 description={book.volumeInfo.description}
//                                 previewLink={book.volumeInfo.previewLink}
//                                 />
//                             ))}

//                         </Row>
//                     </Container>
//                 </div>
//             </Container>
//         </div>
//     )
// }
// };

export default Search;