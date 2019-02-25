import React from 'react';

function ButtonBox ({handleReset}) {
    return (
        <div>
            <button onClick={handleReset}>Reset Board</button>
            <button>Change Users</button>
        </div>
    );
}

export default ButtonBox;