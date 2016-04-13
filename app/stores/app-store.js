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
      selected: 'Replies'
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
      selected: 'Is greater than'
    }
  }
};

const toggleFilters = () => {
  filters.showing = !filters.showing;
}

const setFirstDropdown = (value) => {
  filters.advanced.first.selected = value;
}

const setSecondDropdown = (value) => {
  filters.advanced.second.selected = value;
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
      case AppConstants.AF_SET_FIRST_DROPDOWN:
        setFirstDropdown(action.value);
        break;
      case AppConstants.AF_SET_SECOND_DROPDOWN:
        setSecondDropdown(action.value);
        break;
    }

    AppStore.emitChange();

  })
});

export default AppStore;
