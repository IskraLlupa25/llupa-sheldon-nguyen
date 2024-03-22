import React from 'react';
import TempleNewsComponent from './TempleNews/TempleNewsComponent.jsx';
import './Style/parkInfo.css';

function TempleNews(){
    return(
        <div className="park-info-parent">
            <TempleNewsComponent />
        </div>
    );
}

export default TempleNews;