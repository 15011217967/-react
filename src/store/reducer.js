import { combineReducers } from 'redux';
import titleStore from '../component/title/store/reducer';
import navStore from '../component/nav/store/reducer';

export default combineReducers({
    titleStore:titleStore,
    navStore:navStore
});