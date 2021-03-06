import React from "react";
import Container from "../components/Container";
import BookInput from "../components/BookInput";

class ManualAdd extends React.Component {
    render() {
        return (

            <div className="services-wrapper style-two">
                <Container>
                    <div className="section-title">
                        <h2><span>Add in </span> any additional information you have about your source</h2>
                    </div>
                    <BookInput/>
                </Container>
            </div>
        )
    }
}

export default ManualAdd;