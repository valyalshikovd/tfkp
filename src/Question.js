import React from 'react';

const Question = (props) => {
    const { photoPath, altText } = props;
    const imageUrl = process.env.PUBLIC_URL + '/questions/q';
    return (
        <div>
            <div>{photoPath}</div>
            <img src={imageUrl + photoPath + ".png"} alt="Моя фотография" />
        </div>
    );
};

export default Question;