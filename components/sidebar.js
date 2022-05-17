import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import useCollapse from 'react-collapsed';
import styles1 from '../styles/variables.module.scss'
import styles from '../styles/Home.module.scss'
import ProfilePic from '../public/images/ProfilePic.png'

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
    );
}
function Sidebar() {
    return (
        <h1>close button</h1>
    );
}


