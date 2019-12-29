const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE_BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 6, message: body });
      return state;

    default:
      return state;
  }
};


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default dialogsReducer;
