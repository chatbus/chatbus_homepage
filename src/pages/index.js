import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  
  console.log("%c" +
  "💖╔═════════════════════════════════════════╗💜\n" +
  "💘    ________          __  ____             🤎\n" +
  "🧡   / ____/ /_  ____ _/ /_/ __ )__  _______ 💙\n" +
  "💛  / /   / __ \\/ __ `/ __/ __  / / / / ___/ 💚\n" +
  "💚 / /___/ / / / /_/ / /_/ /_/ / /_/ (__  )  💛\n" +
  "💙 \\____/_/ /_/\\__,_/\\__/_____/\\__,_/____/   🧡\n"+
  "🤎   ^_^  Welcome to ChatBus Console~  ^_^   💘\n"+
  "💜╚═════════════════════════════════════════╝💖", 'color: yellow; background: black; font-size: 15px;');
  
  return (
    <Layout pageTitle="프로젝트 소개">
      <p>chatbus hompage hi</p>
    </Layout>
  );
};

export default IndexPage;
