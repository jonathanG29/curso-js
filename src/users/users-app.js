import { renderTable } from "./presentantion/render-table/render-table";
import usersStore from "./store/users-store";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) =>{

    element.innetHTML = 'loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable( element );
}