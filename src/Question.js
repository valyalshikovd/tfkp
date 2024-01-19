import React from 'react';

const Question = (props) => {
    const { photoPath, altText } = props;
    const imageUrl = process.env.PUBLIC_URL + '/questions/q';
    return (
        <div>
            <div>
                {process.env.PUBLIC_URL}
            </div>
            <img src={imageUrl + photoPath + ".PNG"} alt={imageUrl + photoPath + ".PNG"}  />
        </div>
    );
};

export default Question;