class Environment {
}

var Role;
(function (Role) {
    Role["ROLE_ADMIN"] = "ROLE_ADMIN";
    Role["ROLE_USER"] = "ROLE_USER";
})(Role || (Role = {}));

var LogOTStatus;
(function (LogOTStatus) {
    LogOTStatus["NEW"] = "1";
    LogOTStatus["LEAD_APPROVED"] = "2";
    LogOTStatus["PM_APPROVED"] = "3";
    LogOTStatus["REJECT"] = "4";
    LogOTStatus["OS_LOG"] = "99";
})(LogOTStatus || (LogOTStatus = {}));
var LogOTTypes;
(function (LogOTTypes) {
    LogOTTypes["REGULAR"] = "1";
    LogOTTypes["WEEKEND"] = "2";
    LogOTTypes["HOLIDAY"] = "3";
    LogOTTypes["GOLIVE_BEFORE_TWELVE"] = "4";
    LogOTTypes["GOLIVE_AFTER_TWELVE"] = "5";
})(LogOTTypes || (LogOTTypes = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["USER"] = "1";
    UserRoles["LEADER"] = "2";
})(UserRoles || (UserRoles = {}));
var UserPosition;
(function (UserPosition) {
    UserPosition["PM"] = "1";
    UserPosition["BACKEND"] = "2";
    UserPosition["FRONTEND"] = "3";
    UserPosition["BA"] = "4";
    UserPosition["TEST_MANUAL"] = "5";
    UserPosition["AUTOMATION"] = "6";
    UserPosition["OTHER"] = "7";
})(UserPosition || (UserPosition = {}));
var AbsenceTypes;
(function (AbsenceTypes) {
    AbsenceTypes["ALL_DAY"] = "1";
    AbsenceTypes["HALF_DAY"] = "2";
})(AbsenceTypes || (AbsenceTypes = {}));
var UserGender;
(function (UserGender) {
    UserGender["FEMALE"] = "FEMALE";
    UserGender["MALE"] = "MALE";
    UserGender["OTHER"] = "OTHER";
})(UserGender || (UserGender = {}));
var ContractType;
(function (ContractType) {
    ContractType["PARALINE"] = "PARALINE";
    ContractType["OKINAWA"] = "OKINAWA";
})(ContractType || (ContractType = {}));

class GetAbsenceListRequest {
    constructor(teamId, status, absenceResources, absenceTypes, startDate, endDate, userIds, officeId) {
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

/**
 * Generated bundle index. Do not edit.
 */

export { AbsenceTypes, ContractType, Environment, GetAbsenceListRequest, LogOTStatus, LogOTTypes, Role, UserGender, UserPosition, UserRoles };
//# sourceMappingURL=hub-center-hub-model.mjs.map
