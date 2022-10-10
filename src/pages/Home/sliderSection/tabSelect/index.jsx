import React from 'react';
import TabItem from "./tabItem";
import classes from './styles.module.scss';

const TabSelect = () => {
    return (
        <div className={classes.wrapper}>
            <TabItem value={'news'} defaultChecked={true}/>
            <TabItem value={'videos'} defaultChecked={false}/>
        </div>
    );
};

export default TabSelect;