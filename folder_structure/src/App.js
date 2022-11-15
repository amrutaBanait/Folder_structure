import "./style.css";
import Folder from './components/Folder';
import explorer from './Data/folderData';

export default function App() {
  return (
    <div className="App">
     <Folder explorer = {explorer} />
    </div>
  );
}


