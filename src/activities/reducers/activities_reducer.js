import * as actions from '../../common/types'

const INITIAL_STATE = {
    activities: [
        {
            type: "draw",
            image: "https://picsum.photos/800/800?random=" + Math.random(),
            selected: true
        },
        {
            type: "find",
            image: "https://picsum.photos/800/800?random=" + Math.random(),
            selected: true
        },
        {
            type: "say",
            image: "https://picsum.photos/800?random=" + Math.random(),
            selected: true
        },
        {
            type: "sign",
            image: "https://picsum.photos/800?random=" + Math.random(),
            selected: true
        },
        {
            type: "sing",
            image: "https://picsum.photos/800?random=" + Math.random(),
            selected: false
        },
        {
            type: "dance",
            image: "https://picsum.photos/800?random=" + Math.random(),
            selected: false
        },
        {
            type: "write",
            image: "https://picsum.photos/800?random=" + Math.random(),
            selected: false
        },
        {
            type: "count",
            image: "https://picsum.photos/800?random=" + Math.random(),
            selected: false
        },
        {
            type: "hide",
            image: "https://picsum.photos/800?random=" + Math.random(),
            selected: false
        },
    ],
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case actions.LOADED:
            return {...INITIAL_STATE, data: action.payload};
        default:
            return state;
    }
}
