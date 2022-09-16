import * as React from "react";
import MemberCard from "../components/memberCard";

const MemberPage = () => {
  const members = [
    { name: "도니(서지암)", desc: "환경구성 프로젝트 관리" },
    { name: "엘라(박소희)", desc: "디자인 및 퍼블리싱 프론트 개발" },
    // { name: "우솝(김건위)", desc: "프론트 개발 테스트" },
    { name: "첸첸(천인정)", desc: "프론트 개발 테스트" },
  ];
  return (
      <MemberCard members={members} />
  );
};

export default MemberPage;
