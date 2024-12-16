import {useEffect, useState} from "react";
import {Link} from "react-router";

const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorage.getItem("darkMode") === 'true');
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", isDarkMode.toString());
    }, [isDarkMode]);

    return (<header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Social Feed</h1>
        <div className={"flex gap-2"}>
            <Link to={"/marked-posts"}>
                <button className={"bg-gray-500 px-4 py-2 rounded-md"}>Marked Posts</button>
            </Link>
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="bg-gray-700 px-4 py-2 rounded-md"
            >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    </header>);
};

export default Header;
