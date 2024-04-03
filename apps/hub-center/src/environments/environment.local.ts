import { Environment } from '@hub-center/hub-model';

class EnvironmentImpl implements Environment {
  hubBackendApiEndpoint = 'http://167.71.198.237:8888/';
}

export const environment = new EnvironmentImpl();
