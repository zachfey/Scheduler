import React from 'react';

function Year(props){
    console.log(props)

    return(
        <p>
            {props.year}
        </p>
    )
}

export default Year;