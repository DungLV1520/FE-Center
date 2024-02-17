import { Environment } from '@hub-center/hub-model';

class EnvironmentImpl implements Environment {
  hubBackendApiEndpoint = 'http://3.1.6.245:8090/';
}

export const environment = new EnvironmentImpl();
