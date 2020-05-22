import {CartTypes} from './cart.types';

export const toggleCardHidden = () => ({
    type: CartTypes.TOGGLE_CARD_HIDDEN
});

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
}) 