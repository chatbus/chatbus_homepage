import * as React from "react";
import { Link } from "gatsby";
const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li>
                    <Link to="/">프로젝트 소개</Link>
                </li>
                <li>
                    <Link to="/member">멤버 정보</Link>
                </li>
                <li>
                    <Link to="/manual">메뉴얼</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
