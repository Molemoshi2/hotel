import { useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import { fetchRooms } from "./Redux/newSlice"


function HotelList(){
        const dispatch = useDispatch()
        const hotels = useSelector((state)=>state.rooms.rooms)
        const roomStatus = useSelector((state)=> state.rooms.status)


        useEffect(() => {  
                if (roomStatus === 'idle') {  
                         dispatch(fetchRooms());  
                }  
                }, 
                [roomStatus, dispatch]
        ); 
        

       
        
    return(
        <div>

                <div className="card-container">
                
                <div className="card-container align-content-around flex-wrap" style={{display:"flex",justifyContent:'space-between'}}>
                    {hotels && hotels.map((item,index)=>(
                            <div  key={index} className="card" style={{width:"18rem"}}>
                                    <img src={item.data.image_url} alt="picture" />
                                    <div className="card-body">
                                    <h5 className="card-title">{item.data.RoomType}</h5>
                                    <p className="card-text">{item.data.description}</p>
                                    <p className="card-text">R{item.data.price}</p>
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                    <a href="#" className="btn btn-danger">Delete</a>
                                    </div>
                            
                            
                        

                            </div>

                            
                    )
                    )}
                </div>
                    
            </div>
        </div>
        
    )
}
export default HotelList