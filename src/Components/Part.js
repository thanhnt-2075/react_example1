import React from 'react';

const Part = ({ book, onChangeText }) => {
    return (
        <div>
            Description:
            <input 
                value={book.description}
                onChange={(e) => onChangeText(e.target.value)}
            />
        </div>
    )
   
};

export default Part;