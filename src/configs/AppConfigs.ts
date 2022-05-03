import {getValue} from './envloader';
const AppConfigs = {
  port: getValue('APP_PORT'),
  appName: getValue('APP_NAME'),
};
export default AppConfigs;
