import { observer } from 'mobx-react';
import SessionStore from 'mobx-session';
import React, {useContext, userContext} from "react";
import { Header, Tab } from "semantic-ui-react";
// import { connection } from "../../../../../../../uadel-adel-fsf-pt-11-2020-u-c/week_14/01-Activities/16-Stu_Sessions/Solved/config/connection";
import Container from "../components/Container";
import Row from "../components/Row";
import Login from "./Login";
import ReferenceList from "../components/ReferenceList"


const Bibliography = observer(() => {

//    const Refernce = React.createContext({
//        currentNote: null,
//        notes:[
//            {id:1, authors: "abc", year:"2021", title:"title",city:"city"},
//            {id:2, authors: "aaaa", year:"2021", title:"atitle",city:"acity"}
//        ]
//    })
// state = {
//     books:[]
// }    

// componentDidMount = () => {
//     this.getBook();
//   };


//   getBook = () => {
//     axios.get('/books/')
//       .then((response) => {
//         const data = response.data;
//         this.setState({ posts: data });
//         console.log('Data has been received!!');
//       })
//       .catch(() => {
//         alert('Error retrieving data!!!');
//       });
//   }
  

    if (SessionStore.initialized) {

        if (SessionStore.hasSession) {
            return (
                <Container>
                    <Row>
                        <Header>Bibliography</Header>
                        <Tab></Tab>
                        <ReferenceList></ReferenceList>
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
