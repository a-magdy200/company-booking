import ClientHeaderComponent from "./Client/ClientHeader";
import InspectorHeaderComponent from "./inspector/InspectorHeader";
import React from "react";
import {HeaderComponent} from "../shared";

const RenderHeader = user => {
    if (user === 'a') {
        return <ClientHeaderComponent />;
    } else if (user === 'b') {
        return <InspectorHeaderComponent />;
    } else {
        return <HeaderComponent />;
    }
};
export default RenderHeader;
