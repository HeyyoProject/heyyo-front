import React, { useState } from "react";
import * as style from "@/components/pages/environment/environment-left-page/EnvironmentLeftPage.style";
import Image from "next/image";

export default function EnvironmentLeftPage() {
    const [isModifyBoxVisible, setModifyBoxVisible] = useState(false);
    const [password, setPassword] = useState("");

    const handleButtonClick = (path) => {
        window.location.href = `http://localhost:3000/${path}`;
    };

    const handleModifyClick = () => {
        setModifyBoxVisible(!isModifyBoxVisible);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = '/login';
    };

    return (
        <style.Container>
            <style.Welcome>안녕하세요, 해요님!</style.Welcome>
            <style.EditImage>
                <Image
                    src="assets/img/Environment_edit.svg"
                    alt="Environment_edit"
                    loader={() => "assets/img/Environment_edit.svg"}
                    width={14}
                    height={14}
                />
            </style.EditImage>
            <style.EditBox></style.EditBox>

            {isModifyBoxVisible && (
                <style.ModifyBox>
                    <style.ModifyBoxStyle1>회원정보를 수정하시겠습니까?</style.ModifyBoxStyle1>
                    <style.ModifyBoxStyle2>본인 확인을 위해 비밀번호를 입력해주세요.</style.ModifyBoxStyle2>
                    <style.ModifyBoxBox1>
                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={handlePasswordChange}
                            style={{ background: "none", border: "none", outline: "none", width: "100%" }}
                        />
                    </style.ModifyBoxBox1>
                    <style.ModifyBoxBox2>
                        <button onClick={handleLogout}>이전 페이지로 돌아가기</button>
                    </style.ModifyBoxBox2>
                </style.ModifyBox>
            )}

            <button onClick={handleModifyClick}>
                <style.Edit>회원정보 수정 </style.Edit>
            </button>

            <style.WelcomeRectangle1>
                <style.Message1>나의 공부방</style.Message1>
            </style.WelcomeRectangle1>
            <style.WelcomeRectangle2>
                <style.Message2>내가 문의한 글</style.Message2>
                <style.Message22>
                    <button onClick={() => handleButtonClick("mystudyroom")}>문의하기</button>
                </style.Message22>
            </style.WelcomeRectangle2>
            <style.WelcomeRectangle3>
                <style.Message3>내가 쓴 글</style.Message3>
                <style.Message33>
                    <button onClick={() => handleButtonClick("referenceroom")}>글쓰기</button>
                </style.Message33>
            </style.WelcomeRectangle3>

            <button onClick={handleLogout}>
                <style.Message4>로그아웃</style.Message4>
            </button>

            <style.EnvironmentImage>
                <Image
                    src="assets/img/Environment_다같이.svg"
                    alt="Environment_다같이"
                    loader={() => "assets/img/Environment_다같이.svg"}
                    width={395}
                    height={459}
                />
            </style.EnvironmentImage>
        </style.Container>
    );
}
