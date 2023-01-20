import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import story from '../../story/reducers/story_reducer';
import activities from '../../activities/reducers/activities_reducer';
import toys from '../../toys/reducers/toys_reducer';
import settings from '../../settings/reducers/settings_reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers(
    {
        story, activities, toys, settings
    }
);

// const store = createStore(
//     reducer,
//     compose(
//         applyMiddleware(thunk)
//     )
// );

const presistedReducer = persistReducer(persistConfig, reducer );
const store = createStore(presistedReducer,
    composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };

//export default store;

export default () => {
    let persistor = persistStore(store)
    return { store, persistor }
}
