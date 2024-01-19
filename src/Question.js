import React from 'react';

const Question = (props) => {
    const { photoPath, altText } = props;
    const imageUrl = process.env.PUBLIC_URL + '/questions/q';
    return (
        <div>
            <img src={"/questions/q" + photoPath + ".PNG"} alt={"/questions/q" + photoPath + ".PNG"}  />
        </div>
    );
};

export default Question;