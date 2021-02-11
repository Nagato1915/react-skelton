import React from 'react';
import './Skelton.css'

const SkeltonElement = ({ type }) => {
    const classes = `skelton ${type}`
    return(
        <div className={classes}>

        </div>
    )
}

export default SkeltonElement;