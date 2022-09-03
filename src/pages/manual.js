import * as React from "react";
import Layout from "../components/layout";
import Navigator from "../components/Navigator";

const ManualPage = () => {
  const menu = ["중메뉴1", "중메뉴2", "중메뉴3"];
  return (
    <Layout pageTitle="메뉴얼">
      <div>
        <Navigator menu={menu}></Navigator>
      </div>
    </Layout>
  );
};

export default ManualPage;
