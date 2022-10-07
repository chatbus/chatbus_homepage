import * as React from "react";
import { graphql } from 'gatsby';
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useState } from "react"

const IndexPage = ({data}) => {
    const title = data.mdx.frontmatter.title;
    const excerpt = data.mdx.excerpt;

    const [offSet, setOffSet] = useState();
    const [isscroll600Set, setisscroll600Set] = useState();
    const [isscroll1200Set, setisscroll1200Set] = useState();
    const [isscroll1800Set, setisscroll1800Set] = useState();

    // const handlescroll = () => {
    //     // console.log(window.pageYOffset);
    //     // console.log('높이', window.pageYOffset / document.body.offsetHeight * 100); // 퍼센트 높이 구하기
    // };
    //
    // window.addEventListener('scroll', handlescroll);

    useEffect(()=> {
        window.addEventListener("scroll", () => {

            if ( !isNaN(window.pageYOffset) ) {
                setOffSet(window.pageYOffset);

                if (window.pageYOffset >= 600) {
                    setisscroll600Set(window.pageYOffset / document.body.offsetHeight);
                    setisscroll1200Set(window.pageYOffset / (document.body.offsetHeight - 1200));
                    setisscroll1800Set(window.pageYOffset / (document.body.offsetHeight - 1800));
                    // console.log('600:', window.pageYOffset / document.body.offsetHeight);
                    // console.log('1200:', window.pageYOffset / (document.body.offsetHeight - 1200));
                    // console.log('1800:', window.pageYOffset / (document.body.offsetHeight - 1800));
                } else {
                    setisscroll600Set(false);
                    setisscroll1200Set(false);
                    setisscroll1800Set(false);
                }
            }

        });
    }) ;

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
        <div className="w-full text-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.50 }}
            >
            <div className="container-inner">
                <h2 className="mb-8 text-3xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug pt-[100px]">프로젝트 소개</h2>
                <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">{title}</p>

                <div className="-mx-4 flex flex-wrap mt-[60px] mb-[50px]">
                    {excerpt}
                </div>
            </div>
            <div className="parallax-wrap pt-[100px] pb-[100px]">
                <div className="stripes">
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                </div>
                <div className="ani_container">
                    {/*<div className="ani_bus" style={{right: offSet * 2.5 + "px", transform: [{rotate: isscroll400Set ? offSet * 4.2 + 'deg' : '90deg'}]}}>*/}
                    {/*    <StaticImage src="../images/parallax/bus-top.png" />*/}
                    {/*</div>*/}
                    <div className="ani_road_straight">
                        <StaticImage alt="road-extender" src="../images/parallax/road-extender.svg" />
                    </div>
                    <div className="ani_road">
                        <StaticImage alt="windy-road" src="../images/parallax/windy-road.svg" />
                    </div>
                    <div className="ani_bus" id="bus" style={{ offsetDistance: (offSet?offSet:0) * 1.4}}>
                        <StaticImage alt="bus-top" src="../images/parallax/bus-top.png" />
                    </div>

                    <div className="object-wrap">
                        <div className="object left">
                            <div className="img" style={{opacity: (isscroll600Set?isscroll600Set:0) + 0.2 * 3.8}}>
                                <StaticImage alt="img-mes" src="../images/parallax/img-mes.png" />
                            </div>
                            <p className="tit">문자</p>
                            <p>대화</p>
                        </div>
                        <div className="object right">
                            <div className="img" style={{opacity: (isscroll1200Set?isscroll1200Set:0) * 2.4}}>
                                <StaticImage alt="img-voice" src="../images/parallax/img-voice.png" />
                            </div>
                            <p className="tit">음성</p>
                            <p>TTS/STT</p>
                        </div>
                        <div className="object left">
                            <div className="img" style={{opacity: (isscroll1800Set?isscroll1800Set:0) * 1.6}}>
                                <StaticImage alt="img-file" src="../images/parallax/img-file.png" />
                            </div>
                            <p className="tit">파일</p>
                            <p>이미지, pdf</p>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
  );
};
export const query = graphql`
  query { 
    mdx(frontmatter: {slug: {eq: "index"}}) {
        id
        frontmatter{
            title
        }
        excerpt
      }
    }
    `
export default IndexPage;
