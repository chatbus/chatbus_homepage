import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { ContextProviderComponent } from "./pageTitleContext"
import ContextConsumer from "./pageTitleContext"

const Layout = ({ pageTitle, children }) => {
  return (
    <ContextProviderComponent>
      <Header />
      <main className="relative z-20 overflow-hidden md:pt-[120px] lg:pt-[170px] pb-[120px] h-max">
          <div className="container">
              <div className="my-1 flex justify-center md:justify-end">
                  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fchatbus.github.io&count_bg=%233056D3&title_bg=%23555555&icon=iconify.svg&icon_color=%23FFFFFF&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false"/>
              </div>
              <div className="hero-content wow fadeInUp md:pt-[50px] lg:pt-[100px] mx-auto max-w-[780px] text-center">
                  <h1 className="mb-8 text-3xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                      <ContextConsumer>
                          {({ data }) => {
                              return <span>{data.pageTitle}</span>
                          }}
                      </ContextConsumer>
                  </h1>
              </div>
              <div className="-mx-4 flex flex-wrap items-center">
                  {children}
              </div>
          </div>
      </main>
      <Footer />
    </ContextProviderComponent>
  );
};

export default Layout;
