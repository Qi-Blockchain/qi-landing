import React from 'react';
import classes from './styles.module.scss';

const NavBlock = () => {
    return (
        <div className={classes.wrapper}>
            <a href={'https://docs.qiblockchain.online/'} className={classes.link}>
                Docs
            </a>
            <a href={'https://qiblockchain.online/index.php/faq'} className={classes.link}>
                FAQ
            </a>
            <a href={'https://qiblockchain.online/index.php/terms-and-conditions'} className={classes.link}>
                Terms of Service
            </a>
        </div>
    );
};

export default NavBlock;