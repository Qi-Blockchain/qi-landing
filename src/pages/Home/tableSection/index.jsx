import React from 'react';
import classes from './styles.module.scss';
import TextBlock from "./textBlock";
import TableBlock from "./tableBlock";
import useScreenWIdth from "../../../hook/useScreenWIdth";
import TableBlockMobile from "./tableBlockMobile";

const TableSection = () => {
    const screen = useScreenWIdth();

    return (
        <div className={classes.containerPage}>
            <section className={classes.wrapper}>
                <TextBlock/>
                {screen > 500 ?
                    <TableBlock/>
                    :
                    <TableBlockMobile/>
                }
            </section>
        </div>
    );
};

export default TableSection;