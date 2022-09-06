<p align="center">
  <a href="https://chatbus.github.io">
    <img alt="chatbus" src="https://avatars.githubusercontent.com/u/110974823?s=100&v=4" width="100" />
  </a>
</p>

<h1 align="center">
  ChatBus HomePage Project

<a href="#"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fchatbus%2Fchatbus_homepage&count_bg=%2379C83D&title_bg=%231553B6&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false" alt="Hits" /></a>
<a href="#"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Open Source Love" /></a>
<a href="/LICENSE"><img src="https://img.shields.io/github/license/chatbus/chatbus_homepage.svg" alt="GitHub license" /></a>
<a href="#Contributors"><img src="https://img.shields.io/badge/contributors-3-orange.svg?style=flat-square" alt="All Contributors" /></a>
<a href="https://github.com/chatbus/chatbus_homepage/stargazers"><img src="https://img.shields.io/github/stars/chatbus/chatbus_homepage.svg?style=social" alt="Star on GitHub" /></a>
<br />
<a href="https://gitter.im/chatbus/homepage"><img src="https://badges.gitter.im/chatbus/homepage.svg" alt="Gitter" /></a>
<a href="https://github.com/chatbus/chatbus_homepage/issues"><img alt="Issues" src="https://img.shields.io/github/issues/chatbus/chatbus_homepage?color=0088ff" /></a>
<a href="https://github.com/chatbus/chatbus_homepage/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/chatbus/chatbus_homepage?color=0088ff" /></a>
<a href="https://github.com/chatbus/chatbus_homepage/actions"><img alt="Tests Passing" src="https://github.com/chatbus/chatbus_homepage/actions/workflows/main.yml/badge.svg" /><img alt="Tests Passing" src="https://github.com/chatbus/chatbus_homepage/actions/workflows/test.yml/badge.svg" /></a>

</h1>


## 🧑‍💻 개발환경 셋팅하기

1. **프로젝트 초기설정 with [<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white" />](https://classic.yarnpkg.com/lang/en/)** 방법

    yarn 을 활용하여 프로젝트 초기 설정을 한다..<br />
    [Node.js](https://nodejs.org/) 16.17.0 이상과 yarn ( npm i -g yarn ) 이 필요하다.

    ```shell
    # 해당 프로젝트를 클론하거나 다운로드하여 프로젝트 초기 설정을 한다.
    yarn install
    ```

2. **프로젝트 초기설정 with [<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" />](https://www.docker.com/)**
   
    제공되는 도커 이미지를 활용하여 프로젝트 설정을 한다. <br />
    node.js 나 yarn을 설치할 필요없이 도커 환경만 구성되어 있다면 바로 환경구성을 할 수 있다.
    해당 도커이미지는 [여기](https://hub.docker.com/repository/docker/jams777/chatbus_homepage_local)에서 확인할 수 있다. ( [도커파일](https://github.com/chatbus/docker_chatbus_homepage_local) )

    ```shell
    > docker pull jams777/chatbus_homepage_local:latest
    > docker run -it --name chatbut_homepage_dev \
             -p 5001:5001 -p 8000:8000 \
             -v 로컬경로:/app/web \ 
             jams777/chatbus_homepage_local:latest /bin/bash
    # 도커 터미널 안에서
    > start 
    ```

## 🥳 홈페이지 배포하기

1. **Github에서 제공하는 [<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=GitHub%20Actions&logoColor=white" />](https://github.com/chatbus/chatbus_homepage/actions) 활용**

    Pull Request 를 해서 main 브랜치에 머지가 되면 자동으로 배포가 된다. <br />
    Actions는 [gatsby-gh-pages-action](https://github.com/enriikke/gatsby-gh-pages-action)을 사용했다. 


2. **Github Pages로 배포**
 
    [chatbus.github.io](https://github.com/chatbus/chatbus.github.io) 레파지토리에 배포가 되며 [웹페이지](https://chatbus.github.io)로 확인이 가능하다.    


## 📰 프로젝트 정보

1. **목적**
    
    [<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" />](https://reactjs.org/)와 [<img src="https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=Gatsby&logoColor=white" />](https://www.gatsbyjs.com/)를 스터디하는데 목적이 있다
   

2. **초기 소스**

   [튜토리얼](https://www.gatsbyjs.com/docs/tutorial/)을 따라하면서 초기소스를 만들었다.


3. **이슈 관리**

   Github [이슈](https://github.com/chatbus/chatbus_homepage/issues)를 활용하여 관리한다.


## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/jams777"><img src="https://avatars.githubusercontent.com/u/2595527?v=4&s=100" width="100px;" alt=""/></a></td>
    <td align="center"><sub><b>도니</b></sub></td>
    <td align="center">환경구성 <br />프로젝트 관리</td> 
    <td align="center"><a href="https://github.com/jams777"><img src="http://img.shields.io/badge/-jams777-black?style=for-the-badge&logo=github" alt=""/></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/commits?author=jams777"><img src="https://img.shields.io/badge/-commit-black??style=for-the-badge&logo=github" /></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/issues?q=assignee%3Ajams777+is%3Aopen" title="Issue">Issue<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Ajams777+is%3Aopen" /></a></td>    
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/pulls?q=is%3Apr+assignee%3Ajams777" title="Pull Requests">Pull Request<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Ajams777+is%3Aopen+is%3Apr" /></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/thgml21004"><img src="https://avatars.githubusercontent.com/u/56290407?v=4&s=100" width="100px;" alt=""/></a></td>
    <td align="center"><sub><b>엘라</b></sub></td>
    <td align="center">디자인 및 퍼블리싱<br />프론트 개발</td> 
    <td align="center"><a href="https://github.com/thgml21004"><img src="http://img.shields.io/badge/-thgml21004-black?style=for-the-badge&logo=github" alt=""/></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/commits?author=thgml21004"><img src="https://img.shields.io/badge/-commit-black??style=for-the-badge&logo=github" /></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/issues?q=assignee%3Athgml21004+is%3Aopen" title="Issue">Issue<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Athgml21004+is%3Aopen" /></a></td>    
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/pulls?q=is%3Apr+assignee%3Athgml21004" title="Pull Requests">Pull Request<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Athgml21004+is%3Aopen+is%3Apr" /></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/CheonInJeong"><img src="https://avatars.githubusercontent.com/u/80233325?v=4&s=100" width="100px;" alt=""/></a></td>
    <td align="center"><sub><b>첸첸</b></sub></td>
    <td align="center">프론트 개발<br />테스트</td> 
    <td align="center"><a href="https://github.com/CheonInJeong"><img src="http://img.shields.io/badge/-CheonInJeong-black?style=for-the-badge&logo=github" alt=""/></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/commits?author=CheonInJeong"><img src="https://img.shields.io/badge/-commit-black??style=for-the-badge&logo=github" /></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/issues?q=assignee%3ACheonInJeong+is%3Aopen" title="Issue">Issue<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3ACheonInJeong+is%3Aopen" /></a></td>    
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/pulls?q=is%3Apr+assignee%3ACheonInJeong" title="Pull Requests">Pull Request<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3ACheonInJeong+is%3Aopen+is%3Apr" /></a></td>
  </tr>
</table>


## LICENSE - 라이센스 

   [MIT](LICENSE)


## 프로젝트 조회 수 추이

![조회수 그래프](https://hits.seeyoufarm.com/api/count/graph/dailyhits.svg?url=https://github.com/chatbus/chatbus_homepage)




