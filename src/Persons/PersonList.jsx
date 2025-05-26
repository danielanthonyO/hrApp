import PersonCard from "./PersonCard";
import "./Person.css";

const PersonList = ({employees}) => {
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