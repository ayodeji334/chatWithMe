import { ADD_CHAT, SELECT_CHAT } from "../ActionTypes/actionTypes";

const initState = {
    current_user_chats: [
        {
            id: 1,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 45),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Dunmola",
            receiver_img_src: "....",
        },
        {
            id: 2,
            updated_at: new Date(2020, 6, 17, 23, 45, 33),
            created_at: new Date(2020, 6, 11, 23, 34, 34),
            last_message: "Bro odun you like black black.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Nifemi",
            receiver_img_src: "....",
        },
        {
            id: 3,
            updated_at: new Date(2020, 6, 17, 23, 45, 17),
            created_at: new Date(2020, 6, 17, 23, 34, 11),
            last_message: "Bawo ni prof",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Babatunde Raji",
            receiver_img_src: "....",
        },
        {
            id: 4,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 12),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Timmy",
            receiver_img_src: "....",
        },
        {
            id: 5,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Bro odun show us your partner!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Femi",
            receiver_img_src: "....",
        },
        {
            id: 6,
            updated_at: new Date(2020, 6, 17, 23, 45, 48),
            created_at: new Date(2020, 6, 17, 23, 34, 12),
            last_message: "My gov, you disappointed me. I will lie to you sir",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Raji Fashola",
            receiver_img_src: "....",
        },
        {
            id: 7,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 45),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Opeyemi",
            receiver_img_src: "....",
        },
        {
            id: 8,
            updated_at: new Date(2020, 6, 17, 23, 45, 33),
            created_at: new Date(2020, 6, 11, 23, 34, 34),
            last_message: "Bro odun you like black black.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Ayomide Ilupeju",
            receiver_img_src: "....",
        },
        {
            id: 9,
            updated_at: new Date(2020, 6, 17, 23, 45, 17),
            created_at: new Date(2020, 6, 17, 23, 34, 11),
            last_message: "Bawo ni prof",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Ayomikun Raji",
            receiver_img_src: "....",
        },
        {
            id: 10,
            updated_at: new Date(2020, 6, 17, 23, 45, 23),
            created_at: new Date(2020, 6, 12, 23, 34, 12),
            last_message: "I love you too",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Timilehin",
            receiver_img_src: "....",
        },
        {
            id: 11,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Temi, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Temi Otedola",
            receiver_img_src: "....",
        },
        {
            id: 12,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Ayomide, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Ayomide",
            receiver_img_src: "....",
        },
        {
            id: 13,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Sunday, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Sunday",
            receiver_img_src: "....",
        },
        {
            id: 14,
            updated_at: new Date(2020, 6, 17, 23, 45, 12),
            created_at: new Date(2020, 6, 11, 23, 34, 59),
            last_message: "Hello Itunu, You are doing well!.... Lol",
            sender_id: "jh23jsadj2sdsjds2",
            receiver_id: "4839TkG79DsExbIi3rxA",
            receiver_name: "Itunu",
            receiver_img_src: "....",
        }
    ],
    selected_chat: {}
};

const chatReducer = (state = initState, action) =>{
    switch (action.type) {
        case ADD_CHAT: 
            return {
                ...state,
                current_user_chats: [...state.current_user_chats, action.payload]
            }
        case SELECT_CHAT: 
            return {
                ...state,
                selected_chat: action.payload
            }
        default:
            return state;
    };
}

export default chatReducer;