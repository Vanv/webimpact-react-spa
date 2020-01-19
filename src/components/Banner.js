import React from 'react';
import bannerImage from '../images/success_webimpact.png';


const Banner = () => {
    return(
        <div className="is-fullhd">
            <div className="banner-block">
                <div className="banner-image">
                    <img src={bannerImage} className="id-logo" alt="logo" />
                </div>
                
            </div>
        </div>
    )
};

export default Banner;