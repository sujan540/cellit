import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import users from "./users";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    "user_edit": (state, action) => {
      // reset form (wipe state) when navigating away from the User edit page
      switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  }),
  users: users,
});

export function reducerCall(state, action, reducerClass) {

    //get all class methods
    const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
        if ('length' !== name && 'name' !== name && 'prototype' !== name) {
            return name;
        }
    });

    //check if the action method exists in the static class

    if (methods.find(x => x === action.type)) {

        const new_state = cloneObject(state);
        //return the static method
        return reducerClass[action.type](new_state, action);
    } else {
        //there's no valid method, so just return the state
        return state;
    }
}

function cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
}
