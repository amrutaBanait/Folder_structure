import {useState} from "react";

function Folder({ handleInsertNode = () => {} , explorer}){
  //console.log(explorer)

const [expand, setExpand] = useState(false);
const [showInput, setShowInput] = useState({
    visible:false,
    isFolder:null
});

//To stop event propagation
const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput ({
        visible:true,
        isFolder
    });
};

//function to add  new folder
const newFolder = (e) => {
if(e.keyCode === 13 && e.target.value){
  handleInsertNode(explorer.id. e.target.value,showInput.isFolder);
    setShowInput({ ...showInput , visible: false })
};
}
  if(explorer.isFolder){
return (
  <div style={{ marginTop: 5 }}>
    <div className="folder" onClick={() => setExpand(!expand)}>
      <span> 📁{explorer.name}</span>

      <div>
        <button onClick={(e) => handleNewFolder(e, true)}> Folder +</button>
        <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
      </div>
    </div>

    <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
      {showInput.visible && (
        <div className="inputContainer">
          <span>{showInput.isFolder ? "📒" : "📃"}</span>
          <input 
          type="text"
          onKeyDown={newFolder}
          onBlur = {() => setShowInput({...showInput, visible:false})}
          className="inputContainer__input" 
          autoFocus
         
          />
        </div>
      )}
      {explorer.items.map((exp) => {
        return (
        <Folder 
        handleInsertNode={handleInsertNode}
        explorer={exp} 
        key={exp.name}
         />
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



