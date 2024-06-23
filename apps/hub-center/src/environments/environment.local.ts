import { Environment } from '@hub-center/hub-model';

class EnvironmentImpl implements Environment {
  hubBackendApiEndpoint = 'https://cms.advtv.vn/api';
  hubBackendApiEndpointFile = 'https://cms.advtv.vn/api';
}

export const environment = new EnvironmentImpl();
