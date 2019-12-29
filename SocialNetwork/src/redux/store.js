import profileReducer from "../redux/profile-reducer";
import dialogsReducer from "../redux/dialogs-reducer";
import sidebarReducer from "../redux/sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 11 },
        { id: 2, message: "Hi, how are you?", likesCount: 9 },
        { id: 3, message: "Hi, how are you?", likesCount: 7 },
        { id: 4, message: "Hi, how are you?", likesCount: 15 },
        { id: 5, message: "Hi, how are you?", likesCount: 21 }
      ],
      newPostText: "Uber"
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Driver Support" },
        { id: 2, name: "New comission" },
        { id: 3, name: "Best purposes" },
        { id: 4, name: "Account status" },
        { id: 5, name: "Comercial information" },
        { id: 6, name: "Accomodation for drivers" },
        { id: 7, name: "Info about trips" }
      ],
      messagesData: [
        { id: 1, message: "Lorem ipsum" },
        { id: 2, message: "Lorem ipsum" },
        { id: 3, message: "Lorem ipsum" },
        { id: 4, message: "Lorem ipsum" },
        { id: 5, message: "Lorem ipsum" }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("state is changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  }
};

window.store = store;
export default store;
