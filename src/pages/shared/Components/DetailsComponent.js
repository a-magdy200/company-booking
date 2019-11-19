import { CardSection } from "./CardSection";
import { Card } from "./Card";
import React from "react";

const DetailsComponent = ({details, title}) => {
    const keys = Object.keys(details);
    console.log(keys);
    console.log(details);
    console.log(details['email']);
    return <Card>
        <h2 className={'card-heading'}>{title}</h2>
        {
            keys.map( (key, index) => {
                let value = details[key];
                if (typeof(value) !== 'object') {
                    return <CardSection title={key} key={index} value={details[key]}/>
                }
                return null;
            })
        }
    </Card>
};
export { DetailsComponent };
