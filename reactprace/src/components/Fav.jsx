import React, { useState } from 'react';

const Star = ({ selected, onClick }) => (
    <span className={`star ${selected ? 'selected' : ''}`} onClick={onClick}>
    {selected ? '1' : '0'}
  </span>
);

const StarRating = () => {

    const totalStars = 1;
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
    };

    const stars = [];
    for (let index = 0; index < totalStars; index++) {
        stars.push(
            <Star
                key={index}
                selected={index < selectedStars}
                onClick={() => handleStarClick(index)}
            />
        );
    }

    return <div>{stars}</div>;
};

export default StarRating;
