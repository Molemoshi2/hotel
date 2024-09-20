import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../firebase/firebase";
import { collection,getDocs} from "firebase/firestore";


export const fetchRooms = createAsyncThunk("Rooms/fetchRooms", async ()=>{
    const roomsRef = collection(database, "Rooms");
    const ReadRooms = await getDocs(roomsRef)
    const rooms = ReadRooms.docs.map((doc)=>(  {...doc.data()}   ))
    return rooms;
})


export const NewSlice = createSlice(
    {
        name: 'rooms',
        initialState:{
            rooms: [],
            status: 'idle',
            error: null
        },
        reducers:{},
        extraReducers: (builder)=>{
            builder
            .addCase(fetchRooms.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(fetchRooms.fulfilled, (state,action)=>{
                state.status = 'succeeded'
                state.rooms = action.payload
            })
            .addCase(fetchRooms.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            
        }

    }
)

export default NewSlice.reducer