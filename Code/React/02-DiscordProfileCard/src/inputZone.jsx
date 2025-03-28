//inputZone.jsx

export function InputZone({ userData, handleInput }) {

    // Function to handle image selection separately
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get selected file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleInput({ target: { name: "profileImage", value: reader.result } });
            };
            reader.readAsDataURL(file); // Convert file to base64
        }
    };



    return (
        <article className="inputZone">

            <input 
                type="color" 
                className="inputZone-colorPicker"
                name="bgColor"  
                value={userData.bgColor || "#cef1fd"} /* Default color */
                onChange={handleInput} 
            />

            <label className="inputZone-imageInputBox" > Upload A PFP

                <input 
                    type="file" 
                    className="inputZone-imageInputBox-hidden" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                /> 
                    
            </label>


            <input 
                type="text" 
                maxlength="15"
                className="inputZone-inputBox" 
                placeholder="Name"
                name="name"  
                value={userData.name} 
                onChange={handleInput} 
            />

            <input  
                type="text" 
                maxlength="15"
                className="inputZone-inputBox" 
                placeholder="Username"
                name="userName"  
                value={userData.userName} 
                onChange={handleInput} 
            />

            <input 
                type="text" 
                maxlength="10"
                className="inputZone-inputBox"
                placeholder="Pronouns"
                name="pronouns"  
                value={userData.pronouns} 
                onChange={handleInput} 
            />

            <input
                maxlength="150"
                type="text"
                className="inputZone-inputBox"  
                placeholder="Bio"
                name="bioText"  
                value={userData.bioText} 
                onChange={handleInput}  
            />

            <select 

                className="inputZone-dropDown"
                name="status" 
                value={userData.status}
                onChange={handleInput}
                
            > 
                <option value="Online">Online</option>
                <option value="Idle">Idle</option>
                <option value="DnD">Don't Disturb</option>
                <option value="Invisible">Invisble</option>

            </select>

            <div InputZone-checkBox-Wrapp>


                <label className="inputZone-checkBox-container" > Mutual Friends
                    
                    <input  
                        
                        type="checkbox"
                        className="inputZone-checkBox"

                        name="mutualFriends"
                        checked={!!userData.mutualFriends}
                        onChange={handleInput}


                    /> 

                    <span className="InputZone-checBox-checkMark"></span>

                </label>


                <label className="inputZone-checkBox-container" > Mutual Servers

                    <input  
                        
                        type="checkbox"
                        className="inputZone-checkBox"

                        name="mutualServers"
                        value={userData.mutualServers}
                        onChange={handleInput}

                    />

                    <span className="InputZone-checBox-checkMark"></span>

                </label>

            </div>






        </article>
    );
}
