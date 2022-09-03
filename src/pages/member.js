import * as React from "react";
import Layout from "../components/layout";
import MemberCard from "../components/MemberCard";

const MemberPage = () => {
  const members = [
    { name: "도니(서지암)", desc: "소개" },
    { name: "엘라(박소희)", desc: "소개" },
    { name: "우솝(김건위)", desc: "소개" },
    { name: "첸첸(천인정)", desc: "소개" },
  ];
  return (
    <Layout pageTitle="멤버 정보">
      <MemberCard members={members} />
    </Layout>
  );
};

export default MemberPage;
