import React from 'react';
import BackgroundImg from '../../assets/images/bannerbackground.png';

const Banner = () => {
    const bannerClass = {        
        textAlign: 'center',
        height: '400px',
        width:'100%',
        backgroundImage: `url(${BackgroundImg})`
    };
    return (
        <div style={bannerClass}>
            <div style={{position:'relative',padding:'160px 0'}}>
                <h3>Best food waiting for your belly</h3>
                <input type="text" style={{borderRadius:'15px', width:'260px'}} placeholder='search food item'/>
                <button className='submit' style={{marginLeft: '-80px'}}>Search</button>
            </div>
        </div>
    );
};

export default Banner;