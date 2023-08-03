import React, { useState } from "react";
import Survey1 from "@/components/pages/survey/Survey1";
import Survey2 from "@/components/pages/survey/Survey2";
import Survey3 from "@/components/pages/survey/Survey3";
import Survey4 from "@/components/pages/survey/Survey4";
import Survey5 from "@/components/pages/survey/Survey5";
import SurveyResult from "@/pages/surveyresult";


export default function Survey() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedButton, setSelectedButton] = useState([]);

    const handleNextPage = (selectedButton) => {
        setSelectedButton((prevSelected) => [...prevSelected, selectedButton]);
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const restartSurvey = () => {
        setSelectedButton([]);
        setCurrentPage(1);
    };


    const renderCurrentPage = () => {
        if(currentPage <= 5){
            switch (currentPage) {
                case 1:
                    return <Survey1 handleNextPage={handleNextPage} selectedButton={selectedButton}/>;
                case 2:
                    return <Survey2 handleNextPage={handleNextPage} selectedButton={selectedButton} />;
                case 3:
                    return <Survey3 handleNextPage={handleNextPage} selectedButton={selectedButton} />;
                case 4:
                    return <Survey4 handleNextPage={handleNextPage} selectedButton={selectedButton} />;
                case 5:
                    return <Survey5 handleNextPage={handleNextPage} selectedButton={selectedButton} />;
                default:
                    return null;
            }
        } else {
            return <SurveyResult selectedButton={selectedButton} restartSurvey={restartSurvey}/>
        }
    };

    return <>
        {renderCurrentPage()}</>;
}
