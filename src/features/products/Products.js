
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    products : [],
    isLoading : false,
    error : null
}
const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {}

})

export default postsSlice.reducer