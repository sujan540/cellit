import {reducerCall} from './index';

export default function users(state = {}, action) {

    return reducerCall(state, action, reducerClass);
}

class reducerClass {
    static MODAL_DELETE_SHOW(new_state, action) {
        new_state.delete_show = true;
        new_state.delete_user = {
            id: action.id,
            username: action.username
        }
        return new_state;
    }

    static MODAL_DELETE_HIDE(new_state, action) {

        new_state.delete_show = false;
        new_state.delete_user = {
            id: 0,
            username: ''
        }
        return new_state;
    }

    static USERS_LIST_SAVE(new_state, action) {
        return action.users;
    }

    static USERS_ADD_SAVE(new_state, action) {
        const user = action.user;
        user.id = user.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        return [...new_state, user];
    }

    static USERS_EDIT_SAVE(new_state, action) {
        return new_state.map(user =>
            Number(user.id) === Number(action.user.id) ? {...action.user} : user
        );
    }

    static USERS_DELETE_SAVE(new_state, action) {
        return new_state.filter(user =>
            Number(user.id) !== Number(action.id)
        );
    }
}