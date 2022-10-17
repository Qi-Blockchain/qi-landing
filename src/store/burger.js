import {atom} from "recoil";

const burgerState = atom({
    key: 'burger',
    default: false,
});

export {burgerState};