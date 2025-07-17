// Redux State Management for website.

import { createStore } from 'redux';

const initialWebSiteState = {};

const rootReducer = ( state = initialWebSiteState, action ) =>
{
    let newWebSiteState = {};

    switch( action.type )
    {
        default:
            newWebSiteState = {...state};
    }

    return newWebSiteState;
}

const store = createStore(rootReducer);

export default store;