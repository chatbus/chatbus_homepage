import * as React from "react";
const Navigator = ({ menu }) => {
  return (
    <div className="fixed w-40 max-w-full px-4 bg-[#F3F4FE] rounded-xl p-8 pb-0">
        <nav className="hidden text-primary rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6">
            <ul>{menu.map((value, index) => (<li className="pb-10 hover:underline active:font-semibold" key={index}>{value}</li>))}</ul>
        </nav>
    </div>
  );
};

export default Navigator;
