/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '@hub-center/hub-model';
import { createRequestOption } from '@hub-center/hub-utilities';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  hubBackendApiEndpoint: string;

  constructor(private http: HttpClient, private environment: Environment) {
    this.hubBackendApiEndpoint = this.environment.hubBackendApiEndpoint;
  }

  getTeamOfOffice(id: string) {
    return this.http.get(this.hubBackendApiEndpoint + `team/office/${id}`);
  }

  getTeamById(id: string) {
    return this.http.get(this.hubBackendApiEndpoint + `team/${id}`);
  }

  createTeam(team: any) {
    return this.http.post(this.hubBackendApiEndpoint + `team`, team);
  }

  removeMember(team: any) {
    return this.http.post(this.hubBackendApiEndpoint + `team/remove-member`, team);
  }

  getUserOfTeam(teamId?: string, body?: any) {
    const params = createRequestOption(body);
    return this.http.get(this.hubBackendApiEndpoint + `team/get-list-member/${teamId}`, {
      params: params,
    });
  }
}
