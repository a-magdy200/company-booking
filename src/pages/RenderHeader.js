import ClientHeaderComponent from "./Client/ClientHeader";
import InspectorHeaderComponent from "./inspector/InspectorHeader";
import React from "react";
import { HeaderComponent } from "../shared";
import AdminHeaderComponent from "./admin/AdminHeader";

const RenderHeader = role => {
    if (role === 'client') {
        return <ClientHeaderComponent />;
    } else if (role === 'inspector') {
        return <InspectorHeaderComponent />;
    }  else if (role === 'admin') {
        return <AdminHeaderComponent />;
    } else {
        // return <HeaderComponent />;
        return null;
    }
};
export default RenderHeader;
