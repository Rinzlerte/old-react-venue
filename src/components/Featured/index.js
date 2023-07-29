import React from 'react';
import Carrousel from './Carrousel';
// import Counter from './Counter';

import Counter from '../Counter/Counter';

const Featured = ({title}) => (
        <div style={{ position: 'relative' }}>
            <Carrousel />
                {/* <div className="artist_name">
                    <div className="wrapper">
                        {title}
                    </div>
                </div> */}
            {/* <Counter/> */}
        </div>
    );

export default Featured;