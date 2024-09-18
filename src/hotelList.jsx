import { collection,getDocs } from "firebase/firestore"
import { useEffect,useState } from "react"
import { database } from "./firebase/firebase"
import NavigationBar from "./NavigationBar"
import Footer from "./footer"
function HotelList(){
        const [hotels, setHotels] = useState([])
        const getcollection = async ()=>
                {
                        try{
                                const readColletion = await getDocs(collection(database,"Rooms"))
                                const data = readColletion.docs.map((doc)=>(
                                        {...doc.data(),id:doc.id}
                                )
                                        
                                        
                                )
                                
                                setHotels([...data])
                        }
                        
                        catch{
                                console.log("Error")
                        }
                }


        useEffect(
                ()=>{
                        getcollection()
                },[]
        )
        console.log(hotels)
    return(
        <div>
                <NavigationBar/>

                <div className="card-container">
                
                <div className="card-container" style={{display:"flex",gap:"3rem"}}>
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
            <Footer/>
        </div>
        
    )
}
export default HotelList