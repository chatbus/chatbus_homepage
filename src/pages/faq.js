import * as React from "react";
import { motion } from "framer-motion";

const FaqPage = () => {
  return (
    <div className="w-full text-center">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.50 }}
      >
        <h2 className="mb-8 text-3xl font-bold leading-snug text-dark sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug md:pt-[50px] lg:pt-[100px]">FAQ</h2>
        <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
        <div className="-mx-4 flex flex-wrap mt-[60px]">
          <div className="w-full px-4 lg:w-1/2">
            <div className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-[#F3F4FE] p-5 sm:p-8" data-wow-delay=".1s">
              <button className="faq-btn flex w-full items-center text-left">
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary text-[#F3F4FE]">
                  <svg width="17" height="10" viewBox="0 0 17 10" className="icon fill-current rotate-180">
                    <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" fill="currentColor" stroke="currentColor"></path>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How to use UIdeck?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color text-left">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research &amp; creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div><div className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-[#F3F4FE] p-5 sm:p-8" data-wow-delay=".1s">
            <button className="faq-btn flex w-full items-center text-left">
              <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary text-[#F3F4FE]">
                <svg width="17" height="10" viewBox="0 0 17 10" className="icon fill-current rotate-180">
                  <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" fill="currentColor" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="w-full">
                <h4 className="text-base font-semibold text-black sm:text-lg">
                  How to use UIdeck?
                </h4>
              </div>
            </button>
            <div className="faq-content pl-[62px]">
              <p className="py-3 text-base leading-relaxed text-body-color text-left">
                It takes 2-3 weeks to get your first blog post ready. That
                includes the in-depth research &amp; creation of your monthly
                content marketing strategy that we do before writing your
                first blog post, Ipsum available .
              </p>
            </div>
          </div>
            <div className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-[#F3F4FE] p-5 sm:p-8" data-wow-delay=".1s">
              <button className="faq-btn flex w-full items-center text-left">
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary text-[#F3F4FE]">
                  <svg width="17" height="10" viewBox="0 0 17 10" className="icon fill-current rotate-180">
                    <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" fill="currentColor" stroke="currentColor"></path>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How to use UIdeck?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color text-left">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research &amp; creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-[#F3F4FE] p-5 sm:p-8" data-wow-delay=".1s">
              <button className="faq-btn flex w-full items-center text-left">
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary text-[#F3F4FE]">
                  <svg width="17" height="10" viewBox="0 0 17 10" className="icon fill-current rotate-180">
                    <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" fill="currentColor" stroke="currentColor"></path>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How to use UIdeck?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color text-left">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research &amp; creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-[#F3F4FE] p-5 sm:p-8" data-wow-delay=".1s">
              <button className="faq-btn flex w-full items-center text-left">
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary text-[#F3F4FE]">
                  <svg width="17" height="10" viewBox="0 0 17 10" className="icon fill-current rotate-180">
                    <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" fill="currentColor" stroke="currentColor"></path>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How to use UIdeck?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color text-left">
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research &amp; creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div><div className="single-faq wow fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-[#F3F4FE] p-5 sm:p-8" data-wow-delay=".1s">
            <button className="faq-btn flex w-full items-center text-left">
              <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary text-[#F3F4FE]">
                <svg width="17" height="10" viewBox="0 0 17 10" className="icon fill-current rotate-180">
                  <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" fill="currentColor" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="w-full">
                <h4 className="text-base font-semibold text-black sm:text-lg">
                  How to use UIdeck?
                </h4>
              </div>
            </button>
            <div className="faq-content pl-[62px]">
              <p className="py-3 text-base leading-relaxed text-body-color text-left">
                It takes 2-3 weeks to get your first blog post ready. That
                includes the in-depth research &amp; creation of your monthly
                content marketing strategy that we do before writing your
                first blog post, Ipsum available .
              </p>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FaqPage;
