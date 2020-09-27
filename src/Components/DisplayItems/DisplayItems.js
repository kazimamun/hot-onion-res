import React, { useEffect, useState } from 'react';
import './DisplayItems.css';
import items from '../../assets/items/items'
import { Card, CardDeck } from 'react-bootstrap';
const DisplayItems = () => {
    const breakFastMenu = items.filter(item=>item.category == 'breakfast' && item);
    const lunchMenu = items.filter(item=>item.category === "lunch" && item);
    const dinnerMenu = items.filter(item=>item.category === 'dinner' && item);
    const [displayItem, setDisplayItem]=useState(lunchMenu);
  
    return (
        <div className='justify-content-certer'>
            
            <div className="nav">
                <ul className='navigation'>
                    <li onClick={()=>setDisplayItem(breakFastMenu)}>Breakfast</li>
                    <li onClick={()=>setDisplayItem(lunchMenu)}>Lunch</li>
                    <li onClick={()=>setDisplayItem(dinnerMenu)}>Dinner</li>
                </ul>
            </div>
                <CardDeck>
                    {
                        displayItem.map(item=>
                                                    <Card className='mb-3' key={item.id}>
                                                        <Card.Img variant="top" src={item.img} />
                                                        <Card.Body>
                                                        <Card.Title>{item.name}</Card.Title>
                                                        <Card.Text>{item.details}</Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer>
                                                        <small className="text-muted">${item.price}</small>
                                                        </Card.Footer>
                                                    </Card>)
                    }
                </CardDeck>
        </div>
    );
};

export default DisplayItems;