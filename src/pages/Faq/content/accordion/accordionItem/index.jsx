import React, {useState} from 'react';
import classes from './styles.module.scss';
import {ReactComponent as CaretRight} from "../../../../../assets/images/caret-right-icon.svg";
import {ReactComponent as CaretDown} from "../../../../../assets/images/caret-down-icon.svg";
import classNames from "classnames";

const AccordionItem = ({heading, text}) => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleVisibility = () => setIsActive(!isActive);

    const buttonClasses = () => classNames({
        [classes.button]: true,
        [classes.buttonActive] : isActive
    });

    const textClasses = () => classNames({
        [classes.content]: true,
        [classes.contentActive] : isActive
    });

    return (
        <div>
            <button className={buttonClasses()} onClick={handleToggleVisibility}>
                <div className={classes.headingWrapper}>
                    {heading}
                </div>
                <div>
                    {isActive ?
                        <CaretDown/>
                        :
                        <CaretRight/>
                    }
                </div>
            </button>
            <p className={textClasses()}>
                {text}
            </p>
        </div>
    );
};

export default AccordionItem;