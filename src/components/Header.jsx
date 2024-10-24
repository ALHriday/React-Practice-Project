
const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-orange-400"> 
            <h1 className="text-4xl font-bold">Logo</h1>
            <ul className="hidden md:flex">
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">Home</li>
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">Service</li>
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">Contact</li>
                <li className="px-4 py-2 mx-1 bg-slate-200 rounded-lg hover:bg-teal-400">About Us</li>
            </ul>
            <div className="flex md:hidden justify-center items-center flex-col gap-1">
                <span className="bg-black w-5 h-1"></span>
                <span className="bg-black w-5 h-1"></span>
                <span className="bg-black w-5 h-1"></span>
            </div>

        </div>
    );
};

export default Header;