export var Rate;
(function (Rate) {
    Rate[Rate["Low"] = 0] = "Low";
    Rate[Rate["MidLow"] = 1] = "MidLow";
    Rate[Rate["Mid"] = 2] = "Mid";
    Rate[Rate["MidHi"] = 3] = "MidHi";
    Rate[Rate["High"] = 4] = "High";
})(Rate || (Rate = {}));
;
var FieldValue;
(function (FieldValue) {
    FieldValue[FieldValue["exclude"] = 0] = "exclude";
    FieldValue[FieldValue["include"] = 1] = "include";
})(FieldValue || (FieldValue = {}));
