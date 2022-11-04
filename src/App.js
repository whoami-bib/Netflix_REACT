import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import './app.css'
import RowPost from "./components/RowPost/RowPost";
import {Originals,action,comedy,horror} from './urls'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals'/>
     <RowPost url ={action} title='Action' isSmall />
     <RowPost url ={comedy} title='Comedy' isSmall />
     <RowPost url ={horror} title='Horror' isSmall />

    </div>
  );
}

export default App;
