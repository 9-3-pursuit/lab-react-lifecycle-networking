// input: employee object
// output: formatted name as a string

export const helperEmployee=(firstName, lastName, prefix, postfix, title) => {
    return `${prefix} ${firstName} ${lastName}, ${postfix}`;
}

// export const helperPet =(name,kind,breed,employeeId) => {
//     return `${name}
//     ${kind}
//     ${breed}
//     ${employeeId}`
// }