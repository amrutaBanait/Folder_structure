
import {useState} from "react";

function Folder({explorer}){
    const [expand, setExpand] = useState(false);
return(
    <div>
        <span onclick = {()=> setExpand(!expand)}
       >{explorer.name}</span>
       <div>
        {explorer.items.map((explorer)=>(
                <Folder explorer = {explorer} />
            ))
        }
       </div>
    </div>
    
)
}

export default Folder;