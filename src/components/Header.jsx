
const Header = () => {
    return (
        <div className="flex justify-evenly items-center p-4">
            <h1 className="text-4xl font-bold">Logo</h1>
            <ul className="flex">
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">Home</li>
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">Service</li>
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">Contact</li>
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">About Us</li>
            </ul>
        </div>
    );
};

export default Header;