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
<a href="https://gitter.im/chatbus/homepage" target="_blank"><img src="https://badges.gitter.im/chatbus/homepage.svg" alt="Gitter" /></a>
<a href="https://github.com/chatbus/chatbus_homepage/issues"><img alt="Issues" src="https://img.shields.io/github/issues/chatbus/chatbus_homepage?color=0088ff" /></a>
<a href="https://github.com/chatbus/chatbus_homepage/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/chatbus/chatbus_homepage?color=0088ff" /></a>
<a href="https://github.com/chatbus/chatbus_homepage/actions"><img alt="Tests Passing" src="https://github.com/chatbus/chatbus_homepage/actions/workflows/main.yml/badge.svg" /><img alt="Tests Passing" src="https://github.com/chatbus/chatbus_homepage/actions/workflows/test.yml/badge.svg" /></a>

</h1>


## π§βπ» κ°λ°νκ²½ μννκΈ°

1. **νλ‘μ νΈ μ΄κΈ°μ€μ  with [<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=plastic&logo=Yarn&logoColor=white" />](https://classic.yarnpkg.com/lang/en/)** λ°©λ²

    yarn μ νμ©νμ¬ νλ‘μ νΈ μ΄κΈ° μ€μ μ νλ€..<br />
    [Node.js](https://nodejs.org/) 16.17.0 μ΄μκ³Ό yarn ( npm i -g yarn ) μ΄ νμνλ€.

    ```shell
    # ν΄λΉ νλ‘μ νΈλ₯Ό ν΄λ‘ νκ±°λ λ€μ΄λ‘λνμ¬ νλ‘μ νΈ μ΄κΈ° μ€μ μ νλ€.
    yarn install
    ```

2. **νλ‘μ νΈ μ΄κΈ°μ€μ  with [<img src="https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=Docker&logoColor=white" />](https://www.docker.com/)**
   
    μ κ³΅λλ λμ»€ μ΄λ―Έμ§λ₯Ό νμ©νμ¬ νλ‘μ νΈ μ€μ μ νλ€. <br />
    node.js λ yarnμ μ€μΉν  νμμμ΄ λμ»€ νκ²½λ§ κ΅¬μ±λμ΄ μλ€λ©΄ λ°λ‘ νκ²½κ΅¬μ±μ ν  μ μλ€.
    ν΄λΉ λμ»€μ΄λ―Έμ§λ [μ¬κΈ°](https://hub.docker.com/repository/docker/jams777/chatbus_homepage_local)μμ νμΈν  μ μλ€. ( [λμ»€νμΌ](https://github.com/chatbus/docker_chatbus_homepage_local) )

    ```shell
    > docker pull jams777/chatbus_homepage_local:latest
    > docker run -it --name chatbut_homepage_dev \
             -p 5001:5001 -p 8000:8000 \
             -v λ‘μ»¬κ²½λ‘:/app/web \ 
             jams777/chatbus_homepage_local:latest /bin/bash
    # λμ»€ ν°λ―Έλ μμμ
    > start 
    ```

## π₯³ ννμ΄μ§ λ°°ν¬νκΈ°

1. **Githubμμ μ κ³΅νλ [<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=plastic&logo=GitHub%20Actions&logoColor=white" />](https://github.com/chatbus/chatbus_homepage/actions) νμ©**

    Pull Request λ₯Ό ν΄μ main λΈλμΉμ λ¨Έμ§κ° λλ©΄ μλμΌλ‘ λ°°ν¬κ° λλ€. <br />
    Actionsλ [gatsby-gh-pages-action](https://github.com/enriikke/gatsby-gh-pages-action)μ μ¬μ©νλ€. 


2. **Github Pagesλ‘ λ°°ν¬**
 
    [chatbus.github.io](https://github.com/chatbus/chatbus.github.io) λ νμ§ν λ¦¬μ λ°°ν¬κ° λλ©° [μΉνμ΄μ§](https://chatbus.github.io)λ‘ νμΈμ΄ κ°λ₯νλ€.    


## π° νλ‘μ νΈ μ λ³΄

1. **λͺ©μ **
    
    [<img src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=React&logoColor=white&link=https://reactjs.org/" />](https://reactjs.org/)μ [<img src="https://img.shields.io/badge/Gatsby-663399?style=plastic&logo=Gatsby&logoColor=white" />](https://www.gatsbyjs.com/)λ₯Ό μ€ν°λνλλ° λͺ©μ μ΄ μλ€
   

2. **μ΄κΈ° μμ€**

   [νν λ¦¬μΌ](https://www.gatsbyjs.com/docs/tutorial/)μ λ°λΌνλ©΄μ μ΄κΈ°μμ€λ₯Ό λ§λ€μλ€.


3. **μ΄μ κ΄λ¦¬**

   Github [μ΄μ](https://github.com/chatbus/chatbus_homepage/issues)λ₯Ό νμ©νμ¬ κ΄λ¦¬νλ€.


## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/jams777" target="_blank"><img src="https://avatars.githubusercontent.com/u/2595527?v=4&s=100" width="100px;" alt="" class="readme_avatar" /></a></td>
    <td align="center"><sub><b>λλ</b></sub></td>
    <td align="center">νκ²½κ΅¬μ± <br />νλ‘μ νΈ κ΄λ¦¬</td> 
    <td align="center"><a href="https://github.com/jams777" target="_blank"><img src="http://img.shields.io/badge/-jams777-black?style=plastic&logo=github" alt=""/></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/commits?author=jams777"><img src="https://img.shields.io/badge/-commit-black??style=plastic&logo=github" /></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/issues?q=assignee%3Ajams777+is%3Aopen" title="Issue">Issue<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Ajams777+is%3Aopen" /></a></td>    
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/pulls?q=is%3Apr+assignee%3Ajams777" title="Pull Requests">Pull Request<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Ajams777+is%3Aopen+is%3Apr" /></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/thgml21004" target="_blank"><img src="https://avatars.githubusercontent.com/u/56290407?v=4&s=100" width="100px;" alt="" class="readme_avatar" /></a></td>
    <td align="center"><sub><b>μλΌ</b></sub></td>
    <td align="center">λμμΈ λ° νΌλΈλ¦¬μ±<br />νλ‘ νΈ κ°λ°</td> 
    <td align="center"><a href="https://github.com/thgml21004" target="_blank"><img src="http://img.shields.io/badge/-thgml21004-black?style=plastic&logo=github" alt=""/></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/commits?author=thgml21004"><img src="https://img.shields.io/badge/-commit-black?style=plastic&logo=github" /></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/issues?q=assignee%3Athgml21004+is%3Aopen" title="Issue">Issue<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Athgml21004+is%3Aopen" /></a></td>    
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/pulls?q=is%3Apr+assignee%3Athgml21004" title="Pull Requests">Pull Request<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3Athgml21004+is%3Aopen+is%3Apr" /></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/CheonInJeong" target="_blank"><img src="https://avatars.githubusercontent.com/u/80233325?v=4&s=100" width="100px;" alt="" class="readme_avatar" /></a></td>
    <td align="center"><sub><b>μ²Έμ²Έ</b></sub></td>
    <td align="center">νλ‘ νΈ κ°λ°<br />νμ€νΈ</td> 
    <td align="center"><a href="https://github.com/CheonInJeong" target="_blank"><img src="http://img.shields.io/badge/-CheonInJeong-black?style=plastic&logo=github" alt=""/></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/commits?author=CheonInJeong"><img src="https://img.shields.io/badge/-commit-black??style=plastic&logo=github" /></a></td>
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/issues?q=assignee%3ACheonInJeong+is%3Aopen" title="Issue">Issue<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3ACheonInJeong+is%3Aopen" /></a></td>    
    <td align="center"><a href="https://github.com/chatbus/chatbus_homepage/pulls?q=is%3Apr+assignee%3ACheonInJeong" title="Pull Requests">Pull Request<br /><img src="https://img.shields.io/github/issues-search/chatbus/chatbus_homepage?query=assignee%3ACheonInJeong+is%3Aopen+is%3Apr" /></a></td>
  </tr>
</table>


## LICENSE - λΌμ΄μΌμ€ 

   [MIT](LICENSE)


## νλ‘μ νΈ μ‘°ν μ μΆμ΄

![μ‘°νμ κ·Έλν](https://hits.seeyoufarm.com/api/count/graph/dailyhits.svg?url=https://github.com/chatbus/chatbus_homepage)




