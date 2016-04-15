import {dispatch, register} from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

const filters = {
  showing: true,
  advanced: {
    first: {
      possible: [
        'Replies',
        'Topics',
        'Solved',
        'Usergroup',
        'Registration date',
        'Last login'
      ],
      selected: 'Select one'
    },
    second: {
      possible: [
        [
          'Is greater than',
          'Is smaller than',
          'Equals'
        ],
        [
          'Captain',
          'Colonel',
          'General',
          'Lieutenant',
          'Officer'
        ],
        [
          'Before',
          'After',
          'Exact Date'
        ]
      ],
      selected: 'Select one'
    },
    third: {
      selected: ''
    }
  }
};

const toggleFilters = () => {
  filters.showing = !filters.showing;
}

const updateFilters = (newFilters) => {
  filters.advanced[newFilters.setKey].selected = newFilters.selected;
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
    return filters;
  },

  dispatcherIndex: register(function (action) {
    switch (action.actionType) {
      case AppConstants.TOGGLE_ADVANCED_FILTERS:
        toggleFilters();
        break;
      case AppConstants.UPDATE_FILTERS:
        updateFilters(action.data.newFilters);
        break;
    }

    AppStore.emitChange();

  })
});

export default AppStore;
