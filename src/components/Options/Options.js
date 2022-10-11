import React from 'react';

const Options = (props) => {
    return (
        <div>
            <input type="radio" id="option" name="fav_answer" value="option"/>
            <label for="option">{props.option}</label>  
        </div>
    );
};

export default Options;