import {dispatch, register} from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

var _filters = {
  showing: false,
  active: {}
};

const _toggleFilters = () => {
  console.log('toggling');
  _filters.showing = !_filters.showing;
}

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getFilters() {
    return _filters;
  },

  dispatcherIndex: register(function (action) {
    switch (action.actionType) {
      case AppConstants.TOGGLE_ADVANCED_FILTERS:
        _toggleFilters();
        break;
    }
    console.log('emitting change');

    AppStore.emitChange();

  })
});

export default AppStore;
