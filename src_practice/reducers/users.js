import {reducerCall} from './index';

export default function users(state = {}, action) {
    return reducerCall(state, action, reducerClass);
}

/**
 * Reducer static class
 */
class reducerClass {
    static modalDeleteShow(new_state, action) {
        new_state.modal = new_state.modal ? new_state.modal : {};
        new_state.modal.list_delete = {
            show: true,
            id: action.id,
            username: action.username
        }
        return new_state;
    }

    static modalDeleteHide(new_state, action) {
        new_state.modal.list_delete = {
            show: false,
            id: 0,
            username: ''
        }
        return new_state;
    }

    static delete(new_state, action) {

        for (const index in new_state.list) {
            if (new_state.list[index].id === action.id) {
                new_state.list.splice(index, 1);
                break;
            }
        }
        return new_state;
    }

    static add(new_state, action) {
        const id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        new_state.list.push({
            id: id,
            username: action.username,
            job: action.job
        });

        return new_state;

    }

    static edit(new_state, action) {
        console.log(new_state.list)
        for (const user of new_state.list) {
            if (user.id === action.id) {
                Object.assign(user, {
                    username: action.username,
                    job: action.job
                });

                break;
            }
        }
        console.log(new_state.list)
        return new_state;
    }

    static fetchListSuccess(new_state, action){
        new_state.list = action.users;
        return new_state;
    }
}