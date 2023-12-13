import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const TractorPull = () => {
    return (
        <div className="pull-container">
            <h1 className='tractor-head'>Raising beef isn't all we do!</h1>
            <div>
                <h2 className='tractor-para'>
                    We also spend time traveling the Midwest to compete in Pro-Stock pulling. From humble beginnings building our first pulling tractor for a pull in our hometown over a decade ago, we now strive to be among the best in the nation. If this is also something you're interested in, check us out on Youtube, and visit our Facebook page to find out details about our upcoming pulls if you'd like see it all for yourself!
                </h2>
                <button className='fa-link-yt'>
                    <FontAwesomeIcon icon={faYoutube} className='fa-svg' />
                    <a href="https://www.youtube.com/@stlcopshawn/videos" target="_blank" rel="noopener noreferrer">
                        Youtube!
                    </a>
                </button>
            </div>
        </div>
    );
};

export default TractorPull;
