
import { useEffect , useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Librarylist(){
    const [songs , setSongs] = useState([]);
    const navigate=useNavigate();


    useEffect(()=> {
       fetchSongs()
    },[])

    function fetchSongs(){
        axios.get('http://localhost:5000/songs/')
        .then(response=>{
            setSongs(response.data);
        })
        .catch(error=>{
            console.log('There was an error fetching the Songs data!',error);
        })
    }


    function handleDelete(id){
        axios.delete(`http://localhost:5000/songs/${id}`)
        .then(()=>{
            fetchSongs();
        })
        .catch(error=>{
            console.log('There was an error deleting the Songs data!',error);
        })
    }


    return(
        <div class="d-flex justify-content-center">




        <div className="container mt-4">
        <h2>Songs List</h2>
        <p>Here Our New Songs</p>
                        { 
                            <div className="row">
                                {songs.map(song => (
                                    <div className="col-md-4" key={song.id} >
                                        <div className="card mb-4" style={{backgroundImage:'url("https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',color:"white"}}>
                                            <img src={song.image} className="card-img-top" height={200} alt={song.name} />
                                            <div className="card-body">
                                                <h5 className="card-title">Song Title</h5>
                                                <h5 className="card-title">{song.name}</h5>
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${song.id}`}>View Song Details</button>
                                            </div>
                                        </div>
        
                                        <div className="modal fade" id={`modal${song.id}`} tabIndex="-1" aria-labelledby={`modalLabel${song.id}`} aria-hidden="true" >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id={`modalLabel${song.id}`}>{song.name}</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
        
                                                    <div className="modal-body"  style={{backgroundImage:'url("https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',color:"white"}}>
                                                        <img src={song.image} className="card-img-top" alt={song.name} height={200} />
                                                        
                                                        <p className="card-text">Song Name:  {song.name}</p>
                                                        <p className="card-text">Singer Name: {song.singer}</p>
                                                        <p className="card-text">Music Director : {song.musicDirector}</p>
                                                        <p className="card-text">Release Date: {song.releaseDate}</p>
                                                        <p className="card-text">Album: {song.album}</p>
        
        
                                                    </div>
        
                                                    <div className="modal-footer">
                                                    <button type="button" className="btn btn-warning me-2" data-bs-dismiss="modal" onClick={()=>navigate(`/updatesong/${song.id}`)}>Update</button>
                                                    <button type="button" className="btn btn-danger ms-2" data-bs-dismiss="modal" onClick={() => handleDelete(song.id)}>Delete</button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
        
        
        
        
                    </div>
        
        
        
    )
}

export default Librarylist;

/* <>
             <div >
        <div style={{backgroundImage:'url("https://images.pexels.com/photos/3806767/pexels-photo-3806767.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
            <h2 className=" text-center border-bottom mb-5"  style={{color:"white"}}>Songs List</h2>
            <div className="row"  >
                {songs.map(song => (
                    <div className="col-md-4" key={song.id}>
                        <div className="card mb-5" style={{backgroundImage:'url("https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
                            <img src={song.image} className="card-img-top" height={250} alt={song.name}/>
                            <img src={"https://www.shutterstock.com/shutterstock/videos/3444869925/thumb/1.jpg?ip=x480"}  height={160} alt={song.name}/>
                            <div className="card-body"  style={{width:"18rem"}}>
                                <h5 className="card-title" style={{color:"white"}}>{song.name}</h5>
                                <p className="card-text" style={{color:"white"}}>Singer : {song.singer}</p>
                                <p className="card-text" style={{color:"white"}}>MusicDirector : {song.musicDirector} </p>
                                <p className="card-text" style={{color:"white"}}>ReleaseDate: {song.releaseDate} </p>
                                <p className="card-text" style={{color:"white"}}>Album: { song.album} </p>
                                <button className="btn btn-danger me-2" onClick={()=>{handleDelete(song.id)}}>Delete</button>
                                <button className="btn btn-primary me-2" onClick={()=>{navigate(`/updatesong/${song.id}`)}}>Update</button>


                            </div>
                        </div>


                    </div>
                    


                ))}
            </div>


        </div>
        </div>

        </>*/