import React, {useState} from 'react';
import {BackBtn} from "components";
import PageHeading from "./pageHeading";
import CardBar from "./cardBar";
import CardSection from "./cardSection";
import Card from "./card";
import config from "./config";
import classes from './styles.module.scss';

const Content = () => {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className={classes.wrapper}>
            <BackBtn/>
            <PageHeading/>
            <CardBar activeCard={activeCard} setActiveCard={setActiveCard}/>
            {config[activeCard].map((section) => (
                <CardSection key={section.id} sectionName={section.sectionName}>
                    {section.sectionCards.map((card) => (
                        <Card
                            key={card.id}
                            icon={card.icon}
                            heading={card.heading}
                            text={card.text}
                            tag={card.tag}
                            newTag={card.new}
                            symbol={card.symbol}
                            symbolLink={card.symbolLink}
                        />
                    ))}
                </CardSection>
            ))}
        </div>
    );
};

export default Content;