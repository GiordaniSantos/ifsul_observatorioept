import { SCHEDULE_CREATE, SCHEDULE_UPDATE, SCHEDULE_GET } from './ScheduleActions';

const initialState = {
    schedule: []
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SCHEDULE_CREATE: {
            const response = payload ? payload.data : null;
            const schedule = response ? response.data : null;
            return { ...state, schedule};
        }
        case SCHEDULE_UPDATE: {
            const response = payload ? payload.data : null;
            const schedule = response ? response.data : null;
            return { ...state, schedule};
        }
        case SCHEDULE_GET: {
            const response = payload ? payload.data : null;
            const schedule = response ? response.data : null;
            return {...state, schedule};
        }
        default: {
            return state;
        }
    }
};