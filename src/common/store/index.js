import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import story from '../../story/reducers/story_reducer';
import activities from '../../activities/reducers/activities_reducer';
import toys from '../../toys/reducers/toys_reducer';
import settings from '../../settings/reducers/settings_reducer';


const store = createStore(
    combineReducers(
        {
            story, activities, toys, settings
        }
    ),
    {},
    compose(
        applyMiddleware(thunk)
    )
);

// persistStore(store, {storage: AsyncStorage, whitelist: ['likedJobs']});

export default store;