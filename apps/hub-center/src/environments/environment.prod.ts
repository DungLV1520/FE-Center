import { Environment } from '@hub-center/hub-model';

class EnvironmentImpl implements Environment {
  hubBackendApiEndpoint = 'https://cms.advtv.vn/api/dev/';
  hubBackendApiEndpointFile = 'https://cms.advtv.vn/api/dev/';
}

export const environment = new EnvironmentImpl();
