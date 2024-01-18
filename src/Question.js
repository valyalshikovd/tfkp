import React from 'react';

const Question = (props) => {
    const { photoPath, altText } = props;
    const imageUrl = 'questions/q';
    return (
        <div>
            <div>
                {process.env.PUBLIC_URL}
            </div>
            <img src={imageUrl + photoPath + ".png"} alt={imageUrl + photoPath + ".png"}  />
        </div>
    );
};

export default Question;