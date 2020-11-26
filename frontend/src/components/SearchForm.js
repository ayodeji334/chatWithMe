import { useState } from 'react';

function SearchForm() {
    const [searchquery, setSearchQuery] = useState("");
    
    const handleSearchUser = (e) => {
        e.preventDefault();
        console.log(searchquery);
    };
    
    return (
        <>
            <div className="w-auto h-auto py-2 px-1 border-b-2 border-gray-300">
                <form onSubmit={handleSearchUser}>
                    <input
                        className="rounded bg-gray-200 p-3 w-full focus:outline-none placeholder-gray-500"
                        type="search"
                        placeholder="Search chat here..."
                        required
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                    />
                </form>
            </div>
            <div className="px-2 py-3">
                <h1>Search result</h1>
            </div>
        </>
    )
}

export default SearchForm
