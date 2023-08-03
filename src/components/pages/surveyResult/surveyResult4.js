import React from "react";
export default function SurveyResult4({ restartSurvey }) {
  return (
    <>
      <div className="container">
        <h2 className="title">
          해요님은{" "}
          <span style={{ fontSize: "50", color: "#ED516F" }}>
            &apos;고독&apos;
          </span>{" "}
          타입이시군요!
        </h2>
      </div>

      <div className="container">
        <img className="image" src="/img/Survey9.svg" />
        <div className="bg">
          <h1 className="bgContent">#나만의삶#마이웨이#집중</h1>
        </div>
      </div>

      <div className="container">
        <button className="btn btnContent">내 타입 그룹방 바로가기</button>
      </div>

      <div className="container btn2">
        <button onClick={restartSurvey}>테스트 다시하기</button>
      </div>

      <style jsx>{`
        .title {
          margin-top: 201px;
          line-height: 129.8%; /* 46.728px */
        }

        .bg {
          width: 1082px;
          height: 290px;
          margin-top: 136px;

          border-radius: 37px;
          background: #ffdfe5;
        }

        .bgContent {
          margin-top: 112px;

          color: #ed516f;
          text-align: center;
          font-size: 50px;
          font-weight: 900;
          line-height: 129.8%; /* 64.9px */
        }

        .btn {
          width: 300px;
          height: 50px;
          margin-top: 76px;

          border-radius: 13px;
          background: #f2923b;
        }

        .btnContent {
          color: #fff;
          font-size: 18px;
          font-style: normal;
          font-weight: 900;
          line-height: normal;
          text-align: center;
        }

        .btn2 {
          margin-top: 10px;

          color: #8c9499;
          text-align: center;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        .image {
          margin-top: 36px;
          width: 541px;
          height: 489.914px;

          position: absolute;
          left: 79px;
        }
      `}</style>
    </>
  );
}