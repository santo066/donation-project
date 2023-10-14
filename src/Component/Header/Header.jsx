import { NavLink } from "react-router-dom";

export default function Header() {

    const Link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>

    return (
        <div className="mx-14">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><img src="../public/image/logo.png" alt="fffff" className="w-28 " /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Link
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}