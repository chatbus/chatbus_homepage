import * as React from "react";

const MemberCard = ({ members }) => {
  return (
    <div>
      {members.map((member) => (
        <div>
          <div>이름 : {member.name}</div>
          <div>소개 : {member.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
