import { CURRICULUM_CREATE, CURRICULUM_LIST, CURRICULUM_GET, CURRICULUM_UPDATE } from '../Currirulum/CurriculumActions';

const initialState = {
    curriculum: null,
    curriculuns: [],
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case CURRICULUM_CREATE: {
            const response = payload ? payload.data : null;
            const curriculum = response ? response.data : null;
            return { ...state, curriculum};
        }
        case CURRICULUM_UPDATE: {
            const response = payload ? payload.data : null;
            const curriculum = response ? response.data : null;
            return { ...state, curriculum};
        }
        case CURRICULUM_GET: {
            const response = payload ? payload.data : null;
            const curriculum = response ? response.data : null;
            
            return {...state, curriculum};
        }
        case CURRICULUM_LIST: {
            const response = payload ? payload.data : null;
            const curriculuns = response ? response.data : null;
            
            return {...state, curriculuns};
        }
        default: {
            return state;
        }
    }
};