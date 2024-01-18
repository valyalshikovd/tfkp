import React from 'react';

const Question = (props) => {
    const { photoPath, altText } = props;
    const imageUrl = process.env.PUBLIC_URL + '/questions/q';
    return (
        <div>
            process.env.PUBLIC_URL
            <img src={imageUrl + photoPath + ".png"} alt={imageUrl + photoPath + ".png"}  />
        </div>
    );
};

export default Question;