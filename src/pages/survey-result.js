import React, { useEffect, useState } from "react";
import SurveyResultPage from "@/components/pages/survey/survey-result-page/SurveyResultPage";
import surveyResultData from "@/data/surveyResultData";

export default function SurveyResult({ selectedButton, restartSurvey }) {
  const [selectedData, setSelectedData] = useState();

  useEffect(() => {
    if (
      //영구
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.영구);
    } else if (
      //영구
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.영구);
    } else if (
      //소심
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.소심);
    } else if (
      //소심
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.소심);
    } else if (
      //유익
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.유익);
    } else if (
      //유익
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.유익);
    } else if (
      //고독
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.고독);
    } else if (
      //고독
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.고독);
    } else if (
      //소통
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.소통);
    } else if (
      //소통
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.소통);
    } else if (
      //북적
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.북적);
    } else if (
      //북적
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(6) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.북적);
    } else if (
      //집중
      selectedButton.includes(3) &&
      selectedButton.includes(5) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.집중);
    } else if (
      //집중
      selectedButton.includes(3) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.집중);
    } else if (
      //한산
      selectedButton.includes(2) &&
      selectedButton.includes(4) &&
      selectedButton.includes(7) &&
      selectedButton.includes(8)
    ) {
      setSelectedData(surveyResultData.한산);
    } else if (
      //한산
      selectedButton.includes(2) &&
      selectedButton.includes(5) &&
      selectedButton.includes(6) &&
      selectedButton.includes(9)
    ) {
      setSelectedData(surveyResultData.한산);
    }
  }, [selectedButton]);

  const surveyTitleColor = (surveyResultData) => {
    switch (surveyResultData) {
      case 0:
        return "#6ECEC9";
      case 1:
        return "#BA76D6";
      case 2:
        return "#FF4545";
      case 3:
        return "#ED516F";
      case 4:
        return "#FFB92E";
      case 5:
        return "#1EAA39";
      case 6:
        return "#E73828";
      case 7:
        return "#409DE2";
    }
  };

  const surveyBgColor = (surveyResultData) => {
    switch (surveyResultData) {
      case 0:
        return "rgba(110, 206, 201, 0.30)";
      case 1:
        return "#FBF2FF";
      case 2:
        return "#FFD6D6";
      case 3:
        return "#FFDFE5";
      case 4:
        return "#FFEECF";
      case 5:
        return "#E1EFD8";
      case 6:
        return "#FFEEE3";
      case 7:
        return "#C7ECFF";
    }
  };

  const surveyContentColor = (surveyResultData) => {
    switch (surveyResultData) {
      case 0:
        return "#46BCB3";
      case 1:
        return "#A94ECE";
      case 2:
        return "#FF4545";
      case 3:
        return "#ED516F";
      case 4:
        return "#FFB92E";
      case 5:
        return "#88D159";
      case 6:
        return "#E73828";
      case 7:
        return "#04699B";
      default:
        return "#04699B";
    }
  };

  return (
    <>
      {selectedData && (
        <SurveyResultPage
          restartSurvey={restartSurvey}
          selectedData={selectedData}
          titleColor={surveyTitleColor(selectedData.id)}
          bgColor={surveyBgColor(selectedData.id)}
          contentColor={surveyContentColor(selectedData.id)}
        />
      )}
    </>
  );
}
