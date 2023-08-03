import React from "react";
import SurveyResult1 from "@/components/pages/surveyResult/SurveyResult1";
import SurveyResult2 from "@/components/pages/surveyResult/SurveyResult2";
import SurveyResult3 from "@/components/pages/surveyResult/SurveyResult3";
import SurveyResult4 from "@/components/pages/surveyResult/SurveyResult4";
import SurveyResult5 from "@/components/pages/surveyResult/SurveyResult5";
import SurveyResult6 from "@/components/pages/surveyResult/SurveyResult6";
import SurveyResult7 from "@/components/pages/surveyResult/SurveyResult7";
import SurveyResult8 from "@/components/pages/surveyResult/SurveyResult8";

export default function SurveyResult({ selectedButton, restartSurvey }) {
  const renderSurveyResult = () => {
    if (
      selectedButton.includes(1) && //영구
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult1 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //영구
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult1 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //소심
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult2 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //소심
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult2 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //유익
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult3 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //유익
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult3 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //고독
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult4 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //고독
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult4 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //소통
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult5 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //소통
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult5 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //북적
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult6 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //북적
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult6 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //집중
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult7 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //집중
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult7 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //한산
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      return <SurveyResult8 restartSurvey={restartSurvey} />;
    } else if (
      selectedButton.includes(1) && //한산
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      return <SurveyResult8 restartSurvey={restartSurvey} />;
    }
  };

  return <>{renderSurveyResult()}</>;
}
