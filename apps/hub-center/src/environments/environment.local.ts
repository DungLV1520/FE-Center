import { Environment } from '@hub-center/hub-model';

class EnvironmentImpl implements Environment {
  hubBackendApiEndpoint = 'https://portal.u-link.asia/api/';
}

export const environment = new EnvironmentImpl();
