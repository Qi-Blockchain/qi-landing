import {atom} from "recoil";

const burgerState = atom({
    key: 'burder',
    default: false,
});

export {burgerState};