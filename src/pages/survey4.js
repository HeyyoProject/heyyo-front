import Link from "next/link";

export default function Survey2() {
  return (
    <>
      <div className="container">
        <h2 className="title">
          밖에서 나가서 공부할 경우, 어디로 갈 것인가요?
        </h2>
      </div>
      <div className="container">
        <Link href="/survey5">
          <button className="btn1 btnContent1">카페로</button>
        </Link>
        <img className="image1" src="/img/Survey5.svg" />
        <Link href="/survey5">
          <button className="btn2 btnContent2">도서관으로</button>
        </Link>
        <img className="image2" src="/img/Survey6.svg" />
      </div>
      <style jsx>{`
        .title {
          margin-top: 219px;
        }
        .btn1 {
          width: 310px;
          height: 290px;
          margin: 138.5px 45px;

          border-radius: 37px;
          background: #f2923b;
        }
        .btn2 {
          width: 310px;
          height: 290px;
          margin: 138.5px 45px;

          border-radius: 37px;
          background: #ffefe0;
        }
        .btnContent1 {
          color: #fff;
          font-size: 36px;
          font-weight: 700;
        }
        .btnContent2 {
          color: #000;
          font-size: 36px;
          font-weight: 700;
        }
        .image1 {
          position: absolute;
          top: 260.3px;
          left: 457.7px;
        }
        .image2 {
          position: absolute;
          top: 10.26px;
          right: 543.19px;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
