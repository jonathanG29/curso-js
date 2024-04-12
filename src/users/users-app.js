import { renderAddButton } from "./presentantion/render-add-button/render-add-button";
import { renderButtons } from "./presentantion/render-buttons/render-buttons";
import { renderModal } from "./presentantion/render-modal/render-modal";
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
    renderButtons ( element);
    renderAddButton ( element );
    renderModal( element );
}