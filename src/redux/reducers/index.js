import { combineReducers } from 'redux';
import categories from './activityCategoryReducer';
import activities from './activityReducer';

export default combineReducers({
    categories: categories,
    activities: activities
});