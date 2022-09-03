import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

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
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}

export default IndexPage
