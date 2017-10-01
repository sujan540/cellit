// users reducer
export default function users(state = {}, action) {
    let new_state;
    switch (action.type) {

        case 'MODAL_DELETE_SHOW':
            new_state = JSON.parse(JSON.stringify(state));
            new_state.delete_show = true;
            new_state.delete_user = {
                id: action.id,
                username: action.username
            }
            return new_state;

        case 'MODAL_DELETE_HIDE':
            new_state = JSON.parse(JSON.stringify(state));
            new_state.delete_show = false;
            new_state.delete_user = {
                id: 0,
                username: ''
            }
            return new_state;

        case 'USERS_LIST_SAVE':
            return action.users;

        case 'USERS_ADD_SAVE':
            const user = action.user;
            user.id = user.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            return [...state, user];

        case 'USERS_EDIT_SAVE':
            return state.map(user =>
                Number(user.id) === Number(action.user.id) ? {...action.user} : user
            );
            break;

        case 'USERS_DELETE_SAVE':
            return state.filter(user =>
                Number(user.id) !== Number(action.id)
            );

        // initial state
        default:
            return state;
    }
}