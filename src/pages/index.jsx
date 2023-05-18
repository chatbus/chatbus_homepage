import * as React from "react";
import { graphql } from 'gatsby';
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import Index from "../../data/pages/index.mdx"

const IndexPage = ({data}) => {
    const title = data.mdx.frontmatter.title;
    const excerpt = data.mdx.excerpt;

    const { scrollYProgress } = useScroll();
    // const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
    const offsetDistance = useTransform(scrollYProgress, [0, 1], ['10%', '100%']);
    const isscroll600Set = useTransform(scrollYProgress, [0, 0.15, 0.3, 1], [0, 0, 1, 1]);
    const isscroll1200Set = useTransform(scrollYProgress, [0, 0.27, 0.42, 1], [0, 0, 1, 1]);
    const isscroll1800Set = useTransform(scrollYProgress, [0, 0.39, 0.5, 1], [0, 0, 1, 1]);

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

                    <div className="mt-[60px] mb-[50px]">
                        <Index />
                        <br />
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
                        <motion.div className="ani_bus" id="bus" style={{ offsetDistance }}>
                            <StaticImage alt="bus-top" src="../images/parallax/bus-top.png" />
                        </motion.div>

                        <div className="object-wrap">
                            <motion.div className="object left" style={{opacity: isscroll600Set}}>
                                <div className="img">
                                    <StaticImage alt="img-mes" src="../images/parallax/img-mes.png" />
                                </div>
                                <p className="tit">문자</p>
                                <p>대화</p>
                            </motion.div>
                            <motion.div className="object right" style={{opacity: isscroll1200Set}}>
                                <div className="img">
                                    <StaticImage alt="img-voice" src="../images/parallax/img-voice.png" />
                                </div>
                                <p className="tit">음성</p>
                                <p>TTS/STT</p>
                            </motion.div>
                            <motion.div className="object left" style={{opacity: isscroll1800Set}}>
                                <div className="img">
                                    <StaticImage alt="img-file" src="../images/parallax/img-file.png" />
                                </div>
                                <p className="tit">파일</p>
                                <p>이미지, pdf</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export const query = graphql`
  query { 
    mdx(frontmatter: {slug: {eq: "/index1"}}) {
        id
        frontmatter{
            title
        }
        excerpt
      }
    }
    `
export default IndexPage;
