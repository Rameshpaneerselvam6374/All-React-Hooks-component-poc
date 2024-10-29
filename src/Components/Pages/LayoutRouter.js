import { Outlet,Link } from "react-router-dom";
import Menu from "./Menu";
const LayoutRouter = () => {
    return (
        <>
        <Menu></Menu>
        {/* <nav className='Router'>
            <ul>
          <li>
            <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Blog"}>Blog</Link>
            </li>
            <li>
                <Link to={"/Contact"}>Contact</Link>
            </li>
            </ul>  
        </nav> */}
        <Outlet/>
        </>
    );
}

export default LayoutRouter;