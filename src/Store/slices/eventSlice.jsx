import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteSelectedEventsApi, getAllEventsApi, getSingleEventsByIdApi, postEventsApi } from "../../Api/eventsApi";

const initialState ={
    events :[],  //list of persons
    selectedEvents :[],   //currently selected persons
    isLoading :false,
}

export const getAllEvents = createAsyncThunk(
    'event/getAllEvents',
    async(_,thunkAPI)=>{
        thunkAPI.dispatch(setLoading(true))
        const response = await getAllEventsApi(); //returrn get response from the API 
        thunkAPI.dispatch(updateEvents(response.data)) //passing the response to the reducer function including the response
        // console.log(response.data);
        return response.data
    }
)


export const getEventsById = createAsyncThunk(
    'event/getEventsById',
    async(eventId, thunkAPI)=>{
        const response = await getSingleEventsByIdApi(eventId);
        thunkAPI.dispatch(updateSelectedEvents(response.data))
        return response.data;
    }
)


export const saveEvents = createAsyncThunk(
    'event/saveEvents',
    async(event,thunkAPI)=>{
        thunkAPI.dispatch(setLoading(true))
        const response = await postEventsApi(event)
        thunkAPI.dispatch(getAllEvents())
        return response.data


})


export const deleteEventsById = createAsyncThunk(
    'event/deleteEventsById',
    async(eventId,thunkAPI)=>{
        const response = await deleteSelectedEventsApi(eventId);
        thunkAPI.dispatch(getAllEvents())
        return response.data;
    }
)


// export const updateEventsById = createAsyncThunk(
//     'person/updateEventsById',
//     async(personId,thunkAPI)=>{
//         const response = await updateSinglePersonApi(personId)
//         thunkAPI.dispatch(updateSelectedEvents(response.data))   
//         return response
//     }
// )


export const personSlice = createSlice({
    name:'event',
    initialState,
    reducers:{
        updateEvents:(state,action)=>{
            state.events = action.payload;
            state.isLoading=false;
        },
        updateSelectedEvents:(state,action) =>{
            state.selectedEvents = action.payload
            state.isLoading=false;
        },
        setLoading:(state)=>{
            state.isLoading = !state.isLoading;
        }
        
    }
})

export const { updateEvents,updateSelectedEvents,setLoading} = personSlice.actions

export default personSlice.reducer