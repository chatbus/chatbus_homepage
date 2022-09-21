import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

const MemberCard = ({ members }) => {
  return (
    <div className="w-full px-4 text-center">
      <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">CHATBUS의 멤버를 소개합니다.</p>
        <div className="-mx-4 flex flex-wrap justify-center mt-[60px]">
            {members.map((member) => (
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4" key={member.id}>
              <div className="wow fadeInUp mb-10">
                <div className="h-150px w-[150px] relative z-10 mx-auto mb-6 rounded-full">
                  <GatsbyImage image={getImage(member.frontmatter.hero_image)} alt={member.frontmatter.hero_image_alt} className="w-full rounded-full" />
                  <span className="absolute top-0 left-0 z-[-1]">
                    <svg className="w-20 h-20 " fill="none" stroke="currentColor">
                      <circle cx="1.29337" cy="80.7066" r="1.29337" transform="rotate(-90 1.29337 80.7066)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="80.7066" r="1.29337" transform="rotate(-90 12.6747 80.7066)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="80.7066" r="1.29337" transform="rotate(-90 24.0575 80.7066)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="80.7066" r="1.29337" transform="rotate(-90 35.4379 80.7066)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="80.7066" r="1.29337" transform="rotate(-90 46.8197 80.7066)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="80.7066" r="1.29337" transform="rotate(-90 68.807 80.7066)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9443" cy="80.7066" r="1.29337" transform="rotate(-90 57.9443 80.7066)"
                              fill="#3056D3"></circle>
                      <circle cx="1.29337" cy="69.3249" r="1.29337" transform="rotate(-90 1.29337 69.3249)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="69.3249" r="1.29337" transform="rotate(-90 12.6747 69.3249)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="69.3249" r="1.29337" transform="rotate(-90 24.0575 69.3249)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="69.3249" r="1.29337" transform="rotate(-90 35.4379 69.3249)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="69.325" r="1.29337" transform="rotate(-90 46.8197 69.325)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="69.325" r="1.29337" transform="rotate(-90 68.807 69.325)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9433" cy="69.325" r="1.29337" transform="rotate(-90 57.9433 69.325)"
                              fill="#3056D3"></circle>
                      <circle cx="1.29337" cy="57.9433" r="1.29337" transform="rotate(-90 1.29337 57.9433)"
                              fill="#3056D3"></circle>
                      <circle cx="1.29337" cy="24.0568" r="1.29337" transform="rotate(-90 1.29337 24.0568)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="57.9433" r="1.29337" transform="rotate(-90 12.6747 57.9433)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="24.0568" r="1.29337" transform="rotate(-90 12.6747 24.0568)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="57.9433" r="1.29337" transform="rotate(-90 24.0575 57.9433)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="24.0568" r="1.29337" transform="rotate(-90 24.0575 24.0568)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="57.9433" r="1.29337" transform="rotate(-90 35.4379 57.9433)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="24.0568" r="1.29337" transform="rotate(-90 35.4379 24.0568)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="57.9431" r="1.29337" transform="rotate(-90 46.8197 57.9431)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="24.0567" r="1.29337" transform="rotate(-90 46.8197 24.0567)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="57.9431" r="1.29337" transform="rotate(-90 68.807 57.9431)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="24.0567" r="1.29337" transform="rotate(-90 68.807 24.0567)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9433" cy="57.9431" r="1.29337" transform="rotate(-90 57.9433 57.9431)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9443" cy="24.0567" r="1.29337" transform="rotate(-90 57.9443 24.0567)"
                              fill="#3056D3"></circle>
                      <circle cx="1.29337" cy="46.5615" r="1.29337" transform="rotate(-90 1.29337 46.5615)"
                              fill="#3056D3"></circle>
                      <circle cx="1.29337" cy="12.6751" r="1.29337" transform="rotate(-90 1.29337 12.6751)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="46.5615" r="1.29337" transform="rotate(-90 12.6747 46.5615)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="12.6751" r="1.29337" transform="rotate(-90 12.6747 12.6751)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="46.5615" r="1.29337" transform="rotate(-90 24.0575 46.5615)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="12.6751" r="1.29337" transform="rotate(-90 24.0575 12.6751)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="46.5615" r="1.29337" transform="rotate(-90 35.4379 46.5615)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="12.6751" r="1.29337" transform="rotate(-90 35.4379 12.6751)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="46.5615" r="1.29337" transform="rotate(-90 46.8197 46.5615)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="12.6751" r="1.29337" transform="rotate(-90 46.8197 12.6751)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="46.5615" r="1.29337" transform="rotate(-90 68.807 46.5615)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="12.6751" r="1.29337" transform="rotate(-90 68.807 12.6751)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9433" cy="46.5615" r="1.29337" transform="rotate(-90 57.9433 46.5615)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9443" cy="12.6751" r="1.29337" transform="rotate(-90 57.9443 12.6751)"
                              fill="#3056D3"></circle>
                      <circle cx="1.29337" cy="35.1798" r="1.29337" transform="rotate(-90 1.29337 35.1798)"
                              fill="#3056D3"></circle>
                      <circle cx="1.29337" cy="1.2933" r="1.29337" transform="rotate(-90 1.29337 1.2933)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="35.1798" r="1.29337" transform="rotate(-90 12.6747 35.1798)"
                              fill="#3056D3"></circle>
                      <circle cx="12.6747" cy="1.2933" r="1.29337" transform="rotate(-90 12.6747 1.2933)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="35.1798" r="1.29337" transform="rotate(-90 24.0575 35.1798)"
                              fill="#3056D3"></circle>
                      <circle cx="24.0575" cy="1.29336" r="1.29337" transform="rotate(-90 24.0575 1.29336)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="35.1798" r="1.29337" transform="rotate(-90 35.4379 35.1798)"
                              fill="#3056D3"></circle>
                      <circle cx="35.4379" cy="1.29336" r="1.29337" transform="rotate(-90 35.4379 1.29336)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="35.18" r="1.29337" transform="rotate(-90 46.8197 35.18)"
                              fill="#3056D3"></circle>
                      <circle cx="46.8197" cy="1.29354" r="1.29337" transform="rotate(-90 46.8197 1.29354)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="35.18" r="1.29337" transform="rotate(-90 68.807 35.18)"
                              fill="#3056D3"></circle>
                      <circle cx="68.807" cy="1.29354" r="1.29337" transform="rotate(-90 68.807 1.29354)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9443" cy="35.18" r="1.29337" transform="rotate(-90 57.9443 35.18)"
                              fill="#3056D3"></circle>
                      <circle cx="57.9443" cy="1.29354" r="1.29337" transform="rotate(-90 57.9443 1.29354)"
                              fill="#3056D3"></circle>
                    </svg>
                  </span>
                  <span className="absolute right-0 bottom-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor">
                      <path d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                            stroke="#13C296"></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-dark">{member.frontmatter.name}</h4>
                  <div className="flex items-center justify-center">
                    {/*<a href={member.frontmatter.github} className="mx-2 flex h-8 w-8 items-center justify-center text-[#cdced6] hover:text-primary">*/}
                    {/*  <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                    {/*    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />*/}
                    {/*  </svg>*/}
                    {/*</a>*/}
                    <a href={member.frontmatter.github} target="_blank">
                      <StaticImage src="../images/github.png" alt="github" style={{width:'20px', height:'20px'}}/>
                    </a>
                    <a href={member.frontmatter.linkdin} target="_blank">
                      <StaticImage src="../images/linkdin.png" alt="linkdin" style={{width:'20px', height:'20px'}}/>
                    </a>
                    <a href={member.frontmatter.homepage} target="_blank">
                      <StaticImage src="../images/homepage.png" alt="homepage" style={{width:'20px', height:'20px'}}/>
                    </a>
                  </div>
                  <p className="mb-5 text-sm font-medium text-body-color">
                    {member.excerpt}
                  </p>
                  <div >
                    참여 프로젝트
                    {member.frontmatter.projects?.map((member,index)=>(<p key={index} className="text-sm font-medium text-body-color">{member}</p>))}
                  </div>
                </div>
              </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default MemberCard;
