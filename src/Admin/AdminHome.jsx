import NavigationBar from "../NavigationBar"
import Footer from "../footer"
import { database } from "../firebase/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function AdminHome(){
    const redirect = useNavigate()
    const [data,setData] = useState({RoomType:"",beds:0,adults:0,children:0,availability:"",price:500,description:"",image_url:""})
    const collectionRef = collection(database,'Rooms')
    const handleAddToDatabase = ()=>{
        addDoc(collectionRef,{
            data:data
        }).then(
            ()=>{
                alert('data added')
                redirect('/')
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }
    return(
        <div>
            <NavigationBar></NavigationBar>
            <div className="Main-search-cntainer">
                <div className="search-cntainer">
                    <input type="text" placeholder="Search hotel listing" className="Searrch-input" />
                    <button className="Search-btton">Search</button>
                </div>
            </div>
            <div className="d-flex justify-content-center m-5">
                <div className="border w-75 p-5 text-center" >
                    <h3 className="text-center m-5">Hotel list</h3>
                    <label > Room Type : </label><br />
                    <select className="mt-2" onChange={(e)=>setData({...data,RoomType: e.target.value})}>
                        <option>Standard Room</option>
                        <option>Family Room</option>
                        <option>Executive Room</option>
                        <option>Junior Suite</option>
                        <option>Presidential Suite</option>
                    </select><br /><br />
                    <input className="mt-2 w-50" type="number" placeholder="Beds" onChange={(e)=>setData({...data,beds: e.target.value})}/><br /><br />
                    <input className="ms-2 w-50" type="number" placeholder="Adults" onChange={(e)=>setData({...data,adults:e.target.value})}/><br /><br />
                    <input className="ms-2 w-50"  type="number" placeholder="Children" onChange={(e)=>setData({...data,children: e.target.value})}/>
                    <br /><br />
                    <label > Room Availability :</label>
                    <select className="ms-2" onChange={(e)=>setData({...data,availability:e.target.value})}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br /><br />
                    <input type="number" min={500} step={150} placeholder="Price" onChange={(e)=>setData({...data,price:e.target.value})}/>
                    <br /><br />
                    <textarea className="w-50" placeholder="Description" onChange={(e)=>setData({...data,description:e.target.value})}></textarea><br /><br />
                    <input className="w-25 " type="url" placeholder="Enter image url" onChange={(e)=>setData({...data,image_url:e.target.value})}/><br /><br />
                    <button className="btn btn-primary" onClick={handleAddToDatabase}>Add Hotel</button>

                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default AdminHome