import { useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import { fetchRooms } from "./Redux/newSlice"
import { deleteRoom } from "./Redux/newSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { database } from "./firebase/firebase"
import { doc,updateDoc } from "firebase/firestore"

function HotelList(){
        const dispatch = useDispatch()
        const hotels = useSelector((state)=>state.rooms.rooms)
        const roomStatus = useSelector((state)=> state.rooms.status)
        const redirect = useNavigate()
        const [data,setData] = useState({RoomType:"",beds:0,adults:0,children:0,availability:"",price:500,description:"",image_url:""})



        useEffect(() => {  
                if (roomStatus === 'idle') {  
                         dispatch(fetchRooms());  
                }  
                }, 
                [roomStatus,dispatch]
        ); 
        

    //    setting up the delete
    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteRoom(id))
    }
    // add roooms
    const handleAdd = () => {
        redirect('/Admin')
    }
    // edit rooms
    const handleEdit = async (id)=>{
        const collectionRef = doc(database,"Rooms",id) 
        await updateDoc(collectionRef,{data:data})
    }
    return(
        <div>

                <div className="card-container">
                
                <div className="card-container align-content-around flex-wrap" style={{display:"flex",justifyContent:'space-between',gap:'3rem'}}>
                    {hotels && hotels.map((item,index)=>(
                            <div  key={index} className="card" style={{width:"18rem"}}>
                                    <img src={item.data.image_url} alt="picture" />
                                    <div className="card-body">
                                    <h5 contentEditable={"true"} className="card-title" onInput={(e)=>setData({...data,RoomType:e.target.innerText})}>{item.data.RoomType}</h5>
                                    <p contentEditable={"true"} className="card-text" onInput={(e)=>setData({...data,description:e.target.innerText})}>{item.data.description}</p>
                                    <p contentEditable={"true"} className="card-text" onInput={(e)=>setData({...data,price:e.target.innerText})}>{item.data.price}</p>
                                    <p >Available:<b contentEditable={"true"} onInput={(e)=>setData({...data,availability:e.target.innerText})}>{item.data.availability}</b></p>
                                    <a href="#" className="btn btn-primary w-100" onClick={()=>handleEdit(item.id)}>Update Room</a><br /><br />
                                    <a href="#" className="btn btn-danger w-100" onClick={()=>handleDelete(item.id)}>Delete</a>
                                    </div>
                            </div>
                    )
                    )}
                    <div className="d-flex align-items-center">
                        <button className="h-15 text-white bg-danger p-2 border-0" onClick={handleAdd}>Add Room</button>
                    </div>
                </div>
                    
            </div>
        </div>
        
    )
}
export default HotelList