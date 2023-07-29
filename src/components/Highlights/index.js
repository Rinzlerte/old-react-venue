import React from 'react';
import Description from './Description';
import Discount from './Discount';

const Hightlights = () => (
    <section className="highlight_wrapper">
        <Description 
            description = 'description text'
            title = 'sitename'
            details = "details lorem ipsum"
        />
        <Discount />
    </section>
);


export default Hightlights;