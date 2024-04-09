import { User } from "../models/user"

export const localhostUserToModel = ( localhostUser ) =>{

    const{
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firtsName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    })
}