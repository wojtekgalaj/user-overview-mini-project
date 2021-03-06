import AppConstants from '../constants/app-constants';
import {dispatch, register} from '../dispatcher/app-dispatcher';

export default {
  toggleFilters() {
    dispatch({
      actionType: AppConstants.TOGGLE_ADVANCED_FILTERS
    })
  },
  updateFilters(newFilters) {
    dispatch({
      actionType: AppConstants.UPDATE_FILTERS,
      data: {newFilters}
    })
  }
}
