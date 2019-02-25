import React from 'react';

function GameTable ({handleMove, gameTable}) {
    return (
        <div className="gameTable">
            {gameTable.map((cell, i) => {
                return <p onClick={handleMove} key={i} id={i}>{cell}</p>
            })}
        </div>
    );
}

export default GameTable;