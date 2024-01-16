import HeaderUserPath from "./HeaderUserPath";
import SideBarMenu from "./SideBarMenu";

const Layout = ({ children }) => {
    return (
        <div className="div-container flex  bg-white">
            <aside>
                <SideBarMenu />
            </aside>
            <div className="w-full">
                <nav>
                    <HeaderUserPath />
                </nav>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
