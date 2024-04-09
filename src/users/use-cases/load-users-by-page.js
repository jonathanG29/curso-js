import { localhostUserToModel } from "../mappers/localhost-user.mapper";


/**
 * 
 * @param {Number} page
 * @returns
 */
export const loadUsersByPage = async(page = 1) =>{

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)

    const users = data.map(localhostUserToModel)

    console.log(users)

    // console.log(users)
    return users;
}