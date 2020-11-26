import { useState } from 'react'

function CreateGroupForm() {
    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");

    return (
        <div className="create-new-group-form py-2 px-3">
            <form>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                        Group Name
                    </label>
                    <input
                        required
                        className="
                        shadow appearance-none
                        border rounded w-full
                        py-3 px-3 text-gray-700
                        leading-tight 
                        focus:outline-none
                        focus:shadow-outline
                        placeholder-gray-500"
                        type="text"
                        placeholder="Enter Group Name..."
                        value={groupName}
                        onChange={(e) => {
                            e.preventDefault();
                            setGroupName(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-1">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                        About the Group
                    </label>
                    <textarea
                        required
                        className="shadow 
                        appearance-none
                        border
                        resize-none
                        rounded w-full py-4 px-3
                        text-gray-700 mb-3 leading-tight
                        focus:outline-none focus:shadow-outline
                        placeholder-gray-500"
                        placeholder="Enter Group description..."
                        value={groupDescription}
                        cols="10"
                        rows="6"
                        maxLength="270"
                        onChange={(e) => {
                            e.preventDefault();
                            setGroupDescription(e.target.value);
                        }}>                   
                    </textarea>
                </div>
                <div className="text-right">
                    <button className="shadow-lg rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-red-400 hover:to-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Create Group
                    </button>
                </div>  
            </form>
        </div>
    )
}

export default CreateGroupForm
