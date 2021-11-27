/* eslint-disable import/no-anonymous-default-export */
import { MEMBERS_LIST } from './MembersActions';

const initialState = {
    members: []
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case MEMBERS_LIST: {
            const response = payload ? payload.data : null;
            const members = response ? response.data : null;
            return { ...state, members };
        }
        default: return state;
    }
};