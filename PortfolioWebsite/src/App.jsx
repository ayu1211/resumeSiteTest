import { useState } from 'react'
import NetFlixIntro from './components/NetFlixIntro.jsx'
import WhosWatching  from "./components/WhosWatching.jsx";
import HomePage from "./components/homePage.jsx"
function App() {
  const [selectedProfile,setSelectedProfile] = useState(null);
  const [showIntro,setShowIntro] = useState(false);

  if(!selectedProfile) {
    return <WhosWatching onSelect = {(p)=> {
      setSelectedProfile(p);
      setShowIntro(true)
    }} />
  }
  if(showIntro) {
    return <NetFlixIntro onEnd ={() => setShowIntro(false)}/>;
  }
  return (
     <HomePage selectedProfile = {selectedProfile}/>
  )
}

export default App;
