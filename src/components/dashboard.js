
import React, { useState, useEffect } from 'react';
import Card from './card';
import jsonData from './data.json';
import { Navbar, Container, InputGroup, FormControl } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
function DashBoard() {
    const [data, setData] = useState([]);
    const [searchvalue, setsearchvalue] = useState("");

    useEffect(() => {
        setData(JSON.parse(JSON.stringify(jsonData)));
        return () => {

        }
    }, [])

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <InputGroup className="w-25">
                        <InputGroup.Text><SearchIcon /></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="Search" value={searchvalue} onChange={(e) => setsearchvalue(e.target.value)} />
                    </InputGroup>

                </Container>
            </Navbar>
            {
                data && data.length > 0 && data.filter(name => name.content.includes(searchvalue.toLowerCase()) || name.name.includes(searchvalue.toLowerCase())).map((item) => <Card value={item} />)
            }


        </div>
    );
}

export default DashBoard;


// import React, { useState, useEffect } from "react";
// // Own Css 
// //import "./styles.css";
// import jsonData from './data.json';


// export default function DashBoard() {
//     // react Hook For State Handler
//     const [data, setData] = useState(null)

//     //  const loadData = () => setData(JSON.parse(JSON.stringify(jsonData)));
//     useEffect(() => {
//         setData(JSON.parse(JSON.stringify(jsonData)));
//         return () => {

//         }
//     }, [])

//     return (
//         <div className="App">
//             {
//                 // use data State Variable For Get Data Use JavaScript Map Mathod
//                 data ? data.map(
//                     function (data) {
//                         return (<div className="card">
//                             <h4> {data.username}</h4>
//                             <h2> {data.firstName}  {data.lastName}</h2>
//                             <h3> {data.gender}</h3>
//                             <h3> {data.aboutAuthor}</h3>
//                         </div>)
//                     }
//                 ) : ""
//             }
//         </div>
//     );
// }