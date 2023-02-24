// input: employee object
// output: formatted name as a string
export const formatEmployee = (firstName, lastName, prefix, postfix, title ) => {
    return `${prefix} ${firstName} ${lastName}, ${postfix}`;
};