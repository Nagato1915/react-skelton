import React from 'react';
import SkeltonElement from './SkeltonElement';

const SkeltonProfile = ({ theme }) => {
    const themeClass = theme || 'light'
    return(
        <div className={`skelton-wrapper ${themeClass}`}>
            <div className="skelton-profile">
                <div>
                    <SkeltonElement  type="avator"/>
                </div>
                <div>
                    <SkeltonElement  type="title"/>
                    <SkeltonElement  type="text"/>
                    <SkeltonElement  type="text"/>
                </div>
            </div>
        </div>
    )
}

export default SkeltonProfile;