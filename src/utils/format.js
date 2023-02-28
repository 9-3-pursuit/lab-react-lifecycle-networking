
export const formatEmployee = (firstName, lastName, prefix, postfix) => {
    let name = `${firstName} ${lastName}`;
  if (prefix) name = `${prefix} ${name}`;
  if (postfix) name = `${name}, ${postfix}`;
  return (name)
}