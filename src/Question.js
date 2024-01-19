import React from 'react';

const Question = (props) => {
    const { photoPath, altText } = props;
    const imageUrl = process.env.PUBLIC_URL + '/questions/q';
    return (
        <div>
            <div>
                {imageUrl + photoPath + ".PNG"}
            </div>
            <img src=/questions/q19.PNG alt={imageUrl + photoPath + ".PNG"}  />
        </div>
    );
};

export default Question;