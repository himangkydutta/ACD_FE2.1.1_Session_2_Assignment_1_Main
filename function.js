/**
 * Fat Arrow Function
 * @param {number} employeeID [Returning ID i.e number]
 * @param {String} employeeName [Returning Name i.e String]
 */
var empValues = function (employeeID, employeeName) {
    return { employeeID: employeeID, employeeName: employeeName };
};
console.log(empValues(101, 'himangky'));
