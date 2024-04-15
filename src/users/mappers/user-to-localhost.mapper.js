import { User } from '../models/user';


/**
 * 
 * @param { User} user 
 */
export const userModelToLocalhost = (user) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    return {
        avatar,
        balance,
        firts_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }
}