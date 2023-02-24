export const formatEmployeeName = (employee) => {
  const postFix = employee.postfix ? `, ${employee.postfix}` : "";
  return `${employee.prefix} ${employee.firstName} ${employee.lastName}${postFix}`;
};
