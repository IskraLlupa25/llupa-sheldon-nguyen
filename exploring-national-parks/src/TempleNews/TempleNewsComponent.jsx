/**
 * ParkInfoComponent is a React component that displays information about national parks.
 * It fetches park data from the ParkInfo functionality and renders the information on the page.
 * If there is more than one park, it displays a list of parks. If there is only one park, it displays detailed information about that park.
 * @module ParkInfoComponent
 * @memberof ParkInfo
 * @returns {JSX.Element} The rendered ParkInfoComponent component.
 */
// ParkInfoComponent.jsx
import React, { useState, useEffect } from 'react';
import '../Style/parkInfo.css';

function TempleNewsComponent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className="top-padding-info">
            <div className='all-parks-info-welcome'>
                   <center>
                        <h1 id="park-info-title">Temple University News</h1>
                        <h2>The latest Temple News</h2>
                    </center>
            </div>
            <br></br>
            <a class="twitter-timeline" data-height="200" href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw">Tweets by TempleUniv</a>
                        
        </div>
    );
}

export default TempleNewsComponent;
