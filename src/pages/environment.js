import React from "react";
import EnvironmentLeftPage from "@/components/pages/environment/environment-left-page/EnvironmentLeftPage";
import EnvironmentRightPage from "@/components/pages/environment/environment-right-page/EnviromentRightPage";

export default function Environment() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <EnvironmentLeftPage />
            <EnvironmentRightPage />
        </div>
    );
}