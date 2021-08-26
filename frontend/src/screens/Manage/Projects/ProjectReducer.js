import { PROJECT_UPDATE, PROJECT_GET} from './ProjectActions';

const initialState = {
    project: null,
    project: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case PROJECT_UPDATE: {
            const response = payload ? payload.data : null;
            const project = response ? response.data : null;
            return { ...state, project};
        }
        case PROJECT_GET: {
            const response = payload ? payload.data : null;
            const project = response ? response.data : null;
            return { ...state, project};
        }
        default: {
            return state;
        }
    }
};