import produce from 'immer';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';

function SearchForm({ users }) {
    const [searchquery, setSearchQuery] = useState("");
    const [filteredUsersArray, setFilteredUsersArray] = useState([]);
    
    const handleSearchUser = (e) => {
        e.preventDefault();
        console.log(searchquery);
    };

    useEffect(() => {
        const handleFilterUser = () => {
            if (searchquery === "") {
                return false;
            } else {
                const filterUsers = (state) => {
                    return produce(state, (draft) => {
                        return draft.filter((user) => {
                            console.log(user);
                            return user.firstname.toLowerCase().includes(searchquery)
                                || user.lastname.toLowerCase().includes(searchquery);
                        });
                    });
                };
                const newUsersArray = filterUsers(users);
                setFilteredUsersArray(newUsersArray);
                console.log(newUsersArray);
            };
        };
        
        handleFilterUser();
    }, [searchquery, users]);
    
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
            <>
                {
                    searchquery === "" ?
                        <p className="py-3 px-2">Search for your friends...</p>
                        :
                        filteredUsersArray.length !== 0 ?
                            (
                                <>
                                    {
                                        filteredUsersArray.map(
                                            user => <SearchItem key={user.uid} user={user} />
                                        )
                                    }
                                </>
                            )
                            :
                            (
                                <p className="py-3 px-2">No matched Results</p>
                            )
                }
            </>
        </>
    );
}

export default SearchForm
