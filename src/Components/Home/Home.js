import React from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import DisplayItems from '../DisplayItems/DisplayItems';
import './Home.css';

const Home = () => {
    
    return (
        <Row>
            <Banner/>
            <DisplayItems/>
        </Row>
    );
};

export default Home;