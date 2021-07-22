// import Config from 'react-native-config';
import { authHeader } from '../header';
import { _delete as __delete, _get as __get, _post as __post, _put as __put } from '../request';

/**
 * @param url: string, required
 * @param params: string, optional
 */
const baseURL = 'https://www.colourlovers.com'; //Config.ENDPOINT_SSO;

function _get(url: string, params?: object) {
    return __get(baseURL, url, authHeader(), params);
}
function _post(url: string, body?: object) {
    return __post(baseURL, url, authHeader(), body ? body : {});
}
function _delete(url: string, params?: object) {
    return __delete(baseURL, url, authHeader(), params);
}
function _put(url: string, body: object, params?: object) {
    return __put(baseURL, url, authHeader(), body, params);
}

const getInfoColor = () => _get('/api/colors/random?format=json');
const getInfoImage = () => _get('/api/patterns/random?format=json');

export const ShapeApi = { getInfoColor, getInfoImage };
