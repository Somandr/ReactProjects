const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: 'Hi, how are you?', likesCount: 9 },
        { id: 3, message: 'Hi, how are you?', likesCount: 7 },
        { id: 4, message: 'Hi, how are you?', likesCount: 15 },
        { id: 5, message: 'Hi, how are you?', likesCount: 21 },
    ],
    newPostText: 'Uber',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                // likesCount: 1,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;
