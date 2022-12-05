import {useState} from "react";

function Folder({explorer}){
  console.log(explorer)

const [expand, setExpand] = useState(false);

  if(explorer.isFolder){
return(
    <div style = {{marginTop : 5}}>

        <div className= "folder" onClick = {()=> setExpand(!expand)}>
            <span> 📁{explorer.name}</span>
        </div>

    <div>
        <button>Folder +</button>
        <button>File +</button>
    </div>
    
        <div style = {{display:expand ? "block" : "none", paddingLeft:25}}>
            {explorer.items.map((exp)=>{ 
                return(
                    <Folder explorer={exp} key= {exp.id}/>
                   
                )
            })}
        </div>
    </div>
)
        }else{
    return <span className="file">📃{explorer.name}</span>
}
    

}

export default Folder;