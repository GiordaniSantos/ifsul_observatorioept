import { NEWS_CREATE, NEWS_LIST, NEW_GET, NEW_UPDATE } from './NewsActions';

const initialState = {
    neww: null,
    news: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case NEWS_CREATE: {
            const response = payload ? payload.data : null;
            const neww = response ? response.data : null;
            return { ...state, neww};
        }
        case NEW_UPDATE: {
            const response = payload ? payload.data : null;
            const neww = response ? response.data : null;
            return { ...state, neww};
        }
        case NEW_GET: {
            const response = payload ? payload.data : null;
            const neww = response ? response.data : null;
            
            return {...state, neww};
        }
        case NEWS_LIST: {
            const response = payload ? payload.data : null;
            const news = response ? response.data : null;
            
            return {...state, news};
        }
        default: {
            return state;
        }
    }
};