import { observer } from 'mobx-react';
import SessionStore from 'mobx-session';
import React, { useState, useEffect } from "react";
import { Header, Tab } from "semantic-ui-react";
import Container from "../components/Container";
import Row from "../components/Row";
import Login from "./Login";
import ReferenceList from "../components/ReferenceList"


const Bibliography = observer(() => {
    const [references,setReferences] = useState([]);

   
    useEffect(()=>{
        fetch('/api/books')
                .then(response => response.json())
                .then(json => setReferences(json))
                
                
    },[])
    



    if (SessionStore.initialized) {

        if (SessionStore.hasSession) {
            return (
                <Container>
                    <Row>
                        <Header>Bibliography</Header>
                        <Tab></Tab>
                        {references.map((reference, index) => (

                            <ReferenceList
                            key={index}
                            firstName={reference.firstName}
                            lastName={reference.lastName}
                            year={reference.year}
                            title={reference.title}
                            edition={reference.edition}
                            cityPublished={reference.cityPublished}
                            publisher={reference.publisher}
                            page={reference.page}

                            />
                          
                        ))}



                    </Row>
                </Container>
            )
        }
        else {
            return <Login />
        }
    }
    return null;

});

export default Bibliography;
