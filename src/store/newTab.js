import {atom} from "recoil";

const newsTabState = atom({
    key: 'newsTab',
    default: 'news',
});

export {newsTabState};