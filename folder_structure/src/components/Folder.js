
import {useState} from "react";

function Folder({explorer}){
    const [expand, setExpand] = useState(true);
return(
    <div>
        <span 
         onClick = {()=> setExpand(!expand)}
       
       >{explorer.name}</span>

       <div style= {{display: expand? "block" : "none", paddingLeft: 26}}>
        {explorer.items.map((explorer)=>(
                <Folder explorer = {explorer} />
            ))
        }
       </div>
    </div>
    
)
}

export default Folder;