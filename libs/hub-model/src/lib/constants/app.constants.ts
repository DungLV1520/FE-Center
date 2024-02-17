export enum LogOTStatus {
  'NEW' = '1',
  'LEAD_APPROVED' = '2',
  'PM_APPROVED' = '3',
  'REJECT' = '4',
  'OS_LOG' = '99',
}
export enum LogOTTypes {
  'REGULAR' = '1',
  'WEEKEND' = '2',
  'HOLIDAY' = '3',
  'GOLIVE_BEFORE_TWELVE' = '4',
  'GOLIVE_AFTER_TWELVE' = '5',
}

export enum UserRoles {
  'USER' = '1',
  'LEADER' = '2',
}

export enum UserPosition {
  'PM' = '1',
  'BACKEND' = '2',
  'FRONTEND' = '3',
  'BA' = '4',
  'TEST_MANUAL' = '5',
  'AUTOMATION' = '6',
  'OTHER' = '7',
}

export enum AbsenceTypes {
  'ALL_DAY' = '1',
  'HALF_DAY' = '2',
}

export enum UserGender {
  'FEMALE' = 'FEMALE',
  'MALE' = 'MALE',
  'OTHER' = 'OTHER',
}

export enum ContractType {
  'PARALINE' = 'PARALINE',
  'OKINAWA' = 'OKINAWA',
}
