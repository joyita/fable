import * as actions from '../../common/types'

const INITIAL_STATE = {
    data: [],
};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

        case actions.LOADED:
            return {...INITIAL_STATE, data: action.payload};
        default:
            return state;
    }
}
