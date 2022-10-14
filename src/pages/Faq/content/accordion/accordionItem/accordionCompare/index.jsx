import React, {useState} from 'react';
import classes from '../styles.module.scss';
import {ReactComponent as CaretRight} from "../../../../../../assets/images/caret-right-icon.svg";
import {ReactComponent as CaretDown} from "../../../../../../assets/images/caret-down-icon.svg";
import classNames from "classnames";
import useScreenWIdth from "../../../../../../hook/useScreenWIdth";
import TableBlock from "./tableBlock";
import TableBlockMobile from "./tableBlockMobile";

const AccordionLink = () => {
    const [isActive, setIsActive] = useState(false);
    const screen = useScreenWIdth();

    const handleToggleVisibility = () => setIsActive(!isActive);

    const buttonClasses = () => classNames({
        [classes.button]: true,
        [classes.buttonActive] : isActive
    });

    const tableClasses = () => classNames({
        [classes.table]: true,
        [classes.tableActive] : isActive
    });

    return (
        <div>
            <button className={buttonClasses()} onClick={handleToggleVisibility}>
                <div className={classes.headingWrapper}>
                    How does Qi compare with other leading blockchains?
                </div>
                <div>
                    {isActive ?
                        <CaretDown/>
                        :
                        <CaretRight/>
                    }
                </div>
            </button>
            <div className={tableClasses()}>
                {
                    screen > 500 ?
                        <TableBlock/>
                        :
                        <TableBlockMobile/>
                }
            </div>
        </div>
    );
};

export default AccordionLink;