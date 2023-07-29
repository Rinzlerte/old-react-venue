import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe
                title = "location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.403273062131!2d24.024454392655976!3d49.84744478963725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0cbe16ec63%3A0x650d830dbecc044f!2z0L_RgNC-0YHQv9C10LrRgiDQkifRj9GH0LXRgdC70LDQstCwINCn0L7RgNC90L7QstC-0LvQsCwgMiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1562762725083!5m2!1suk!2sua"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            />
            <div className="location_tag">
                <div>location</div>
            </div>
        </div>
    );
};

export default Location;