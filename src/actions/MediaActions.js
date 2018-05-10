import axios from 'axios';
import { apiBaseUrl } from "../utils/Constants";

import {
    UPLOADING_MEDIA, UPLOADING_MEDIA_SUCCESS, UPLOADING_MEDIA_FAILURE,
    FETCHING_MEDIA, FETCHING_MEDIA_SUCCESS, FETCHING_MEDIA_FAILURE
} from "./ActionTypes";

export function uploadMedia(file) {
    return dispatch => {

        dispatch({ type: UPLOADING_MEDIA });

        const formData = new FormData(),
            config = {
                'content-type': 'multipart/form-data'
            };

        formData.append('file', file);

        axios.post(`${apiBaseUrl}/media/1`, formData, config)
            .then((res) => {
                dispatch({
                    type: UPLOADING_MEDIA_SUCCESS,
                    id: res.data.id,
                    name: res.data.name,
                    size: res.data.size,
                    dateUploaded: res.data.dateUploaded
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: UPLOADING_MEDIA_FAILURE, error: err.data });
            })
    }
}

export function fetchMedia(id) {
    return dispatch => {

        dispatch({ type: FETCHING_MEDIA });

        axios.get(`${apiBaseUrl}/media/${id}`)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: FETCHING_MEDIA_SUCCESS,
                    media: res.data.media
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: FETCHING_MEDIA_FAILURE, error: err.data });
            })
    }
}