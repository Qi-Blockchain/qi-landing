import React from 'react';
import classes from './styles.module.scss';

const PageHeading = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.contentWrapper}>
                <h2 className={classes.heading}>Explore dapps</h2>
                <p className={classes.text}>A lot of dapps are still experimental, testing the possibilties of decentralized networks. But there have been some successful early movers in the technology, financial, gaming and collectibles categories.</p>
            </div>
        </div>
    );
};

export default PageHeading;