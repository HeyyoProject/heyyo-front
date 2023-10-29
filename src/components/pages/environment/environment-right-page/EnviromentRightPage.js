import React, { useState } from "react";
import * as style from "@/components/pages/environment/environment-right-page/EnvironmentRightPage.style";
import Image from "next/image";

export default function EnvironmentRightPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [isModifyBoxVisible, setModifyBoxVisible] = useState(false);
    const handleTestButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDeleteAccount = () => {
        handleCloseModal();
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleModifyClick = () => {
        setModifyBoxVisible(!isModifyBoxVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = '/login';
    };


    return (
        <div>
            <style.EditMessage>회원정보 수정</style.EditMessage>
            <style.EditContainer>
                <style.BasicEdit>기본정보</style.BasicEdit>
                <style.Information1>이름</style.Information1>
                <style.InformationBox1>
                    <input
                        type="text"
                        placeholder="이름을 입력하세요"
                        style={{ background: "none", border: "none", outline: "none", width: "100%" }}
                    />
                </style.InformationBox1>

                <style.Information2>닉네임</style.Information2>
                <style.InformationBox2>
                    <input
                        type="text"
                        placeholder="닉네임을 입력하세요"
                        style={{ background: "none", border: "none", outline: "none", width: "100%" }}
                    />
                </style.InformationBox2>
                <style.Information3>비밀번호</style.Information3>
                <style.InformationBox3>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        style={{ background: "none", border: "none", outline: "none", width: "100%" }}
                    />
                </style.InformationBox3>
                <style.Information4>이메일</style.Information4>
                <style.InformationBox4>
                    <input
                        type="text"
                        placeholder="이메일을 입력하세요"
                        style={{ background: "none", border: "none", outline: "none", width: "100%" }}
                    />
                </style.InformationBox4>
                <style.Information5>휴대전화</style.Information5>
                <style.InformationBox5>
                    <input
                        type="text"
                        placeholder="번호를 입력하세요"
                        style={{ background: "none", border: "none", outline: "none", width: "100%" }}
                    />
                </style.InformationBox5>
                <style.Information6>생년월일</style.Information6>
                <style.InformationBox6>
                    <input
                        type="text"
                        placeholder="생년월일을 입력하세요"
                        style={{ background: "none", border: "none", outline: "none", width: "100%" }}
                    />
                </style.InformationBox6>

                <style.StudyStyle>나의 공부 성향</style.StudyStyle>
                <style.StudyStyleDetail>님의 공부 성향은</style.StudyStyleDetail>
                <style.StudyStyleBox></style.StudyStyleBox>

                <style.TestBox>
                    <style.TestBoxDetail1>테스트 안내</style.TestBoxDetail1>
                    <style.TestBoxDetail2>*본 테스트는 검증된 내용이 아니라 참고만 해 주시기를 부탁드립니다. </style.TestBoxDetail2>
                    <style.TestBoxDetail3>*테스트 결과는 개인의 특별한 상황에 따라 다를 수 있습니다. </style.TestBoxDetail3>
                </style.TestBox>

                <style.TestButton>
                    <button onClick={() => handleTestButtonClick("referenceroom")}>
                        <style.TestButtonStyle>공부 성향 테스트 다시하기</style.TestButtonStyle>
                    </button>
                </style.TestButton>

                <style.Agreement>마케팅 수신 동의(선택)</style.Agreement>
                <style.DetailButton>자세히 보기</style.DetailButton>

                <style.DetailButtonImage>
                    <Image
                        src="assets/img/Environment_Detail.svg"
                        alt="Environment_Detail"
                        loader={() => "assets/img/Environment_Detail.svg"}
                        width={8.75}
                        height={5.489}
                    />
                </style.DetailButtonImage>

                <style.AllMessage>전문보기</style.AllMessage>
                <style.EditComplete>
                    <button onClick={handleModifyClick}>
                        <style.EditCompleteStyle>수정 완료</style.EditCompleteStyle>
                    </button>
                </style.EditComplete>

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

                <style.Delete>
                    <button onClick={handleDeleteAccount}>계정 삭제하기</button>
                </style.Delete>
            </style.EditContainer>


        </div>
    );
}
