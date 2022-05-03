import http from 'http';
import App from './app';
import AppConfigs from './configs/AppConfigs';
import {LogService} from './utils/tinnie/log/LogService';

http.createServer(App).listen(AppConfigs.port, () => {
  LogService.log(AppConfigs.appName + ' started on port ' + AppConfigs.port);
});
