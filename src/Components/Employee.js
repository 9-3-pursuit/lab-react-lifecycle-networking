import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {
  return (
    <article className="employee">
      <h3><h2>{`${employee.prefix} ${employee.firstName} ${employee.lastName}${employee.postfix ? `, ${employee.postfix}` : ""}`}</h2></h3>
      <h4>{employee.title}</h4>
      <button >Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;
