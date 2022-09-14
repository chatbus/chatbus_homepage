import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ContextConsumer from "./pageTitleContext"

const Header = () => {
    return (
        <div className="ud-header absolute bg-primary top-0 left-0 z-40 flex w-full items-center">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-40 max-w-full px-4">
                        <Link to="/" className="navbar-logo block w-full py-5">
                            <StaticImage src="../images/chatbus_logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button id="navbarToggler" className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            </button>
                            <nav className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6">
                                <ul className="blcok lg:flex">
                                    <li className="group relative">
                                        <Link to="/" className="ud-menu-scroll mx-8 flex py-2 text-lg text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70" >
                                            <ContextConsumer>
                                                {({ data, set }) => (
                                                    <span onTouchStart={() => set({ pageTitle: '프로젝트 소개' })}>프로젝트 소개</span>
                                                )}
                                            </ContextConsumer>
                                        </Link>
                                    </li>
                                    <li className="group relative">
                                        <Link to="/member" className="ud-menu-scroll mx-8 flex py-2 text-lg text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70" >
                                            <ContextConsumer>
                                                {({ data, set }) => (
                                                    <span onTouchStart={() => set({ pageTitle: '멤버 정보' })}>멤버 정보</span>
                                                )}
                                            </ContextConsumer>
                                        </Link>
                                    </li>
                                    <li className="group relative">
                                        <Link to="/manual" className="ud-menu-scroll mx-8 flex py-2 text-lg text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70" >
                                            <ContextConsumer>
                                                {({ data, set }) => (
                                                    <span onTouchStart={() => set({ pageTitle: '메뉴얼' })}>메뉴얼</span>
                                                )}
                                            </ContextConsumer>
                                        </Link>
                                    </li>
                                    <li className="group relative">
                                        <Link to="/faq" className="ud-menu-scroll mx-8 flex py-2 text-lg text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70" >
                                            <ContextConsumer>
                                                {({ data, set }) => (
                                                    <span onTouchStart={() => set({ pageTitle: 'FAQ' })}>FAQ</span>
                                                )}
                                            </ContextConsumer>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
