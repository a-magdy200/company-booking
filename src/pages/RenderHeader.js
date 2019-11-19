import ClientHeaderComponent from "./Client/ClientHeader";
import InspectorHeaderComponent from "./inspector/InspectorHeader";
import React from "react";
import AdminHeaderComponent from "./admin/AdminHeader";
import HeaderComponent from "../shared/Header";

const RenderHeader = role => {
    if (role === 'client') {
        return <ClientHeaderComponent />;
    } else if (role === 'inspector') {
        return <InspectorHeaderComponent />;
    }  else if (role === 'admin') {
        return <HeaderComponent />;
    } else {
        // return <HeaderComponent />;
        return null;
    }
};
export default RenderHeader;
