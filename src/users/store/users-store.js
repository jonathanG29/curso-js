import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state = {
    currentPage: 0, 
    users: [],
}

const loadNextPage = async() =>{
    const users = await loadUsersByPage( state.currentPage + 1)
    if(users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
    // console.log(state)
}

const loadPreviousPage = async() => {
    if(state.currentPage === 1)return;
    const users = await loadUsersByPage (state.currentPage - 1)

    state.users = users
    state.currentPage -= 1;
} 

const onUserChange = () => {
    throw new Error('no implentado');
}

const reloadPage = async() => {
    throw new Error('no implentado');
}

export default{
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    getUser: ()=>[...state.users],
    getCurrentPage: () => state.currentPage,
}