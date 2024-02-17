export interface IAbsence {
  absenceDate: string;
  absenceFromGoliveDate: Date;
  insDatetime: Date;
  leaderApproveTime: string;
  pmApproveTime: string;
  updDatetime: Date;
  id: number;
  insId: number;
  updId: number;
  userId: number;
  absenceReasons: string;
  absenceResources: string;
  absenceTypes: string;
  delFlag: string;
  leaderId: number;
  pmId: number;
  status: string;
  teamId: number;
  createdBy: {
    name:  string;
    team: string;
    position: string;
  };
}

export class GetAbsenceListRequest {
  teamId: number | null;
  status: string | null;
  absenceResources: string | null;
  absenceTypes: string | null;
  startDate: Date | null;
  endDate: Date | null;
  userIds: number[] | null;
  officeId: number | null;

  constructor(
    teamId: number,
    status: string,
    absenceResources: string,
    absenceTypes: string,
    startDate: Date,
    endDate: Date,
    userIds: number[],
    officeId: number
  ) {
    this.teamId = teamId;
    this.status = status;
    this.absenceResources = absenceResources;
    this.absenceTypes = absenceTypes;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userIds = userIds;
    this.officeId = officeId;
  }
}

export interface ILogAbsRequestBody {
  teamId: number;
  status: number;
  officeId: number;
  absenceTypes: number;
  startDate: string;
  endDate: string;
  // absenceResources: string;
  // userIds: number[];
}
