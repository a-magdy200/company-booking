import ClientHeaderComponent from "./Client/ClientHeader";
import InspectorHeaderComponent from "./inspector/InspectorHeader";
import React from "react";
import { HeaderComponent } from "../shared";

const RenderHeader = (role) => {
    if (role === 'client') {
        return <ClientHeaderComponent />;
    } else if (role === 'inspector') {
        return <InspectorHeaderComponent />;
    } else {
        return <HeaderComponent />;
    }
};
export default RenderHeader;
