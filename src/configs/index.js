import Button from './components/button';
import showToast from './actions/showToast';
import console from './actions/console.json';
import Gantt from './components/gantt.json';
import Alert from './components/alert.json';
import Echart from './components/echart.json';
import Rate from './components/rate.json';

export const components = {
  Button,
  Gantt,
  Alert,
  Echart,
  Rate
};

export const actions = {
  showToast,
  console
};

export default {
  components,
  actions,
};
