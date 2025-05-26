import PersonCard from "./PersonCard";
import {employees} from "./personData"

const PersonList = () => {
return (
<>
    <main>
    <h1>Employees catalog</h1>
    <div className="boxes">
        {employees.map((emp) => (
        <PersonCard key={emp.id} {...emp} />
        ))}
    </div>
    </main>
</>
);
};

export default PersonList;