import React from 'react';
import SkeltonElement from './SkeltonElement';

const SkeltonArticle = ({ theme }) => {
    const themeClass = theme || 'light';
    return(
        <div className={`skelton-wrapper ${themeClass}`}>
            <div className="skelton-article"> 
                <SkeltonElement type="title" />
                <SkeltonElement type="text" />
                <SkeltonElement type="text" />
                <SkeltonElement type="text" />
            </div>
        </div>
    )
}

export default SkeltonArticle;