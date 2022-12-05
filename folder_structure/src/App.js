import "./style.css";
import Folder from './components/Folder';
import explorer from './Data/folderData';
import {useState} from "react";

export default function App() {
  const [exploreData, setExploreData] = useState(explorer);
 // console.log(exploreData)
  return <div className = "App">
    <Folder explorer = {exploreData}/>
  </div>
 
}


