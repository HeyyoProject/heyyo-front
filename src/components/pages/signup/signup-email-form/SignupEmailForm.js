import * as style from "@/components/pages/signup/signup-email-form/SignupEmailForm.style";
import React, { useState } from "react";
import { emailState } from "/src/recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import { checkEmailDuplicate } from "@/apis/auth/signup/duplicateCheck";
import { SignupEmailDuplicate } from "@/components/pages/signup/signup-email-form/signup-email-duplicate/SignupEmailDuplicate";

export default function SignupEmailForm() {
  // Recoil
  const [email, setEmail] = useRecoilState(emailState);

  const [duplicateEmailStatus, setDuplicateEmailStatus] = useState({
    isDuplicateEmail: false,
    message: "init",
  });
  const [emailFormatError, setEmailFormatError] = useState(false);

  // 이메일 정규식
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const handleEmailCheck = async () => {
    const inputEmail = email;

    if (!emailRegEx.test(inputEmail)) {
      setEmailFormatError(true);
      return;
    }

    setEmailFormatError(false);

    try {
      const { isDuplicateEmail, message } = await checkEmailDuplicate(
        inputEmail,
      );
      setDuplicateEmailStatus({ isDuplicateEmail, message });
    } catch (error) {
      setDuplicateEmailStatus({
        isDuplicateEmail: true,
        message: "API 호출 오류",
      });
    }
  };

  return (
    <style.BoxDiv>
      <style.EmailContainer>
        <style.EmailLabel>
          <style.EmailInput
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            maxLength="30"
            placeholder="이메일을 입력해주세요."
          />
          <style.NickNameButton onClick={handleEmailCheck}>
            중복확인
          </style.NickNameButton>
        </style.EmailLabel>

        <SignupEmailDuplicate
          isDuplicateEmail={duplicateEmailStatus.isDuplicateEmail}
          message={duplicateEmailStatus.message}
          emailFormatError={emailFormatError}
        />
      </style.EmailContainer>
    </style.BoxDiv>
  );
}
