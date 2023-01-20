import * as actions from '../../common/types'

const INITIAL_STATE = {
    toys: [
        {
            id: "Sheepie",
            name: "Sheepie",
            type: "Sheep",
            skills: ["baa"],
            weakness: ["wolf"],
            image: "https://picsum.photos/800/800?random=" + Math.random()
        }
    ],
    toySearch: []
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case actions.LOADED:
            let toys = [...state.toys];
            return {...INITIAL_STATE, toys: action.payload};
        case actions.TOYS_SEARCHED:
            return {...state, toySearch: action.payload};
        case actions.TOY_DELETED:
            toys = [...state.toys];
            let newToys = toys.filter(function(value){
                return value.name !== action.payload;
            });
            return {...state, toys:newToys};
        case actions.TOY_ADDED:
            toys = [...state.toys];
            let newToy = {
                id: action.payload.name,
                name: action.payload.name,
                type: action.payload.type,
                skills: ["baa"],
                weakness: ["wolf"],
                image: "https://picsum.photos/800/800?random=" + Math.random()
            }
            toys = [...state.toys];
            toys.unshift(newToy);
            return {...state, toys};
        default:
            return state;
    }
}
