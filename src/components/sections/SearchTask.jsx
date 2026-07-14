
import { FaSearch } from "react-icons/fa";
function SearchTask() {
    return (
        <form>
            <div className="flex">
                <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-95 lg:min-w-110">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                        placeholder="Search Task"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4 cursor-pointer"
                    >
                        <FaSearch color="gray" size={16}/>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SearchTask;