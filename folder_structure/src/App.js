import "./style.css";
import Folder from "./components/Folder";
import explorer from "./Data/folderData";
import { useState } from "react";
import useTraverseTree from "./hooks/use-traverse-tree"

export default function App() {
  const [exploreData, setExploreData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {

    const finalTree = insertNode(exploreData, folderId, item, isFolder);

    setExploreData(finalTree);
  };
  // console.log(exploreData)

  return (
    <div className="App">
      <Folder handleInsertNode = { handleInsertNode} explorer={exploreData} />
    </div>
  );
}

