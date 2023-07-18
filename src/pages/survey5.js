import Link from "next/link";

export default function Survey2() {
  return (
    <>
      <div className="container">
        <h2 className="title">
          공부에 집중하려고 할 때, 당신은 어떻게 공부하나요?
        </h2>
      </div>
      <div className="container">
        <Link href="/survey5">
          <button className="btn1 btnContent1">
            PPT를 정독하며
            <br />
            N회독을 해요!
          </button>
        </Link>
        <img className="image1" src="/img/Survey7.svg" />
        <Link href="/survey5">
          <button className="btn2 btnContent2">
            직접 정리한
            <br />
            필기를 훑어요.
          </button>
        </Link>
        <img className="image2" src="/img/Survey8.svg" />
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
