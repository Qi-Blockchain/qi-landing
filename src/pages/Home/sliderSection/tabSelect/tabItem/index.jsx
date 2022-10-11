import React from 'react';
import classes from './styles.module.scss';
import {useSetRecoilState} from "recoil";
import {newsTabState} from "../../../../../store/newTab";

const TabItem = ({value, defaultChecked}) => {
    const setActiveTab = useSetRecoilState(newsTabState);

    return (
        <div className={classes.wrapper}>
            <input
                type='radio'
                className={classes.input}
                id={'select-' + value}
                value={value}
                name='select-tab'
                defaultChecked={defaultChecked}
                onChange={() => setActiveTab(value)}
            />
            <label htmlFor={'select-' + value} className={classes.label}>
                {value}
            </label>
        </div>
    );
};

export default TabItem;