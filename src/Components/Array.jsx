import React, { useState } from 'react';
import './Array.css';

const Array = () => {
    const elements = [
        "item1", "item2", "item3", "item4", "item5",
        "item6", "item7", "item8", "item9", "item10",
        "item11", "item12", "item13", "item14", "item15",
        "item16", "item17", "item18", "item19", "item20"
    ];

    const initialShowCount = 10;
    const showElems = elements.slice(0, initialShowCount);

    const [elems, setElems] = useState(showElems);

    const showingelements = () => {
        const newShowCount = elems.length + 2; // Jyada elements dikhane ke liye count badhao
        const newElems = elements.slice(0, newShowCount); // Naye count tak ke elements ko get karo
        setElems(newElems);
    };

    return (
        <div>
            {elems.map((singleElem, index) => (
                <p key={index}>{singleElem} <strong>from index :</strong> {index}</p>
            ))}
            <button onClick={showingelements}>Show More</button>
        </div>
    );
};

export default Array;