
import Menu from "./Componenets/Menu"
import {Routes,Route} from 'react-router-dom'
import Footer from "./Componenets/Footer"
import Librarylist  from "./Componenets/Librarylist"
import AddSongs from "./Componenets/AddSongs"
import UpdateSong from "./Componenets/UpdateSong"
import Home from "./Componenets/Home"

function App(){
  return(
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Librarylist/>}/>
        <Route path="/addsongs" element={<AddSongs/>}/>
        <Route path="/updatesong/:id" element={<UpdateSong/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    <Footer/> 
    </>
  )
}

export default App;