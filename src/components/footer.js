import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <div className="wow fadeInUp relative z-10 bg-black pt-20 pb-20 lg:pt-[60px]">
        <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
                <div>
                    <Link to="/" className="navbar-logo block w-full py-5 max-w-[140px]">
                        <StaticImage src="../images/chatbus_logo.png" alt="logo" className="chatbus logo" />
                    </Link>
                </div>
                <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-8/12 xl:w-9/12">
                    <h4 className="mb-3 text-lg font-semibold text-white">License</h4>
                    <p className="mb-9 text-base font-normal text-white">git hub : <a href="https://github.com/chatbus" className="hover:underline" target="_blank" rel="noreferrer">https://github.com/chatbus</a></p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
