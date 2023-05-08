import { API } from "."


export const getAllEventsApi = async()=>{
    return await API.get('/Events')
}

export const postEventsApi = async(data)=>{
    return await API.post('/Events',data)
}

export const deleteSelectedEventsApi = async(id)=>{
    return await API.delete(`/Events/${id}`)
}

export const getSingleEventsByIdApi = async (id)=>{
    return await API.get(`/Events/${id}`)
}