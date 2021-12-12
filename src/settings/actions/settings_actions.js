import axios from 'axios';
import * as actions from "../../common/types";

const apiUrl = actions.apiUrl;

export const loadData = () => async (dispatch) => {

    let restAddress = `${apiUrl  + 'getData?'}`;

    axios.get(restAddress).then(
        function ({data}) {
            dispatch({type: actions.LOADED, payload: data});

        }
    ).catch(
        function () {
            dispatch({type: actions.LOADED, payload: {}})
        }
    );
};
