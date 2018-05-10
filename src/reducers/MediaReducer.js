import {
    UPLOADING_MEDIA, UPLOADING_MEDIA_SUCCESS, UPLOADING_MEDIA_FAILURE,
    FETCHING_MEDIA, FETCHING_MEDIA_SUCCESS, FETCHING_MEDIA_FAILURE
} from "../actions/ActionTypes";

const initialState = {
    showSpinner: false,
    data: [],
    hasError: false,
    errorMessage: null
};

export function media(state = initialState, action) {
    switch (action.type) {
        case UPLOADING_MEDIA:
            return {
                showSpinner: true,
                data: [...state.data],
                hasError: false,
                errorMessage: null
            };
        case UPLOADING_MEDIA_SUCCESS:
            return {
                showSpinner: false,
                data: [
                    ...state.data,
                    {
                        id: action.id,
                        name: action.name,
                        size: action.size,
                        dateUploaded: action.dateUploaded
                    }
                ],
                hasError: false,
                errorMessage: null
            };
        case UPLOADING_MEDIA_FAILURE:
            return {
                showSpinner: false,
                data: [...state.data],
                hasError: true,
                errorMessage: action.error
            };
        case FETCHING_MEDIA:
            return {
                showSpinner: true,
                data: [...state.data],
                hasError: false,
                errorMessage: null
            };
        case FETCHING_MEDIA_SUCCESS:
            return {
                showSpinner: false,
                data: action.media,
                hasError: false,
                errorMessage: null
            };
        case FETCHING_MEDIA_FAILURE:
            return {
                showSpinner: false,
                data: [...state.data],
                hasError: true,
                errorMessage: action.error
            };
        default:
            return state;
    }
}