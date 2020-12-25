import { CLEAR_STORE } from './actionTypes';

export { addIngredient, removeIngredient } from "./ingredients";

export {
    initializeFavorite,
    addFavorite,
    addFavoriteCheck,
    removeFavorite,
    removeFavoriteCheck,
    fetchFavorite,
    clearFavorite,
    authFavorite,
} from "./favorite";

export {
    auth,
    authStart,
    authSuccess,
    authFail,
    logout,
    authCheckState,
} from "./auth";

export const clearStore =  () => {
    return {type: CLEAR_STORE}
}
