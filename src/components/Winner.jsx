import React from 'react';

function Winner (props) {
            return props.winner? <p>Winner is {props.winner}</p>:null
}

export default Winner;