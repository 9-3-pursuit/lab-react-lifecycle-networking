import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee, isExpanded, handleClick }) => {
  const { firstName, lastName, prefix, postfix, title } = employee;

  return (
    <article className="employee">
      <h3>
        {`${prefix} ${firstName} ${lastName}`}
        {postfix && `${", " + postfix}`}
      </h3>
      <h4>{title}</h4>
      <button onClick={handleClick}>Show Pets</button>
      {isExpanded && <PetList />}
    </article>
  );
};

export default Employee;
