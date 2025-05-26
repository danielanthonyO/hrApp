const Person = (props) => {
return (
    <div className="person">
    <h3>{props.name}</h3>
    <p>{props.title}</p>
    <p>Salary: ₦{props.salary}</p>
    <p>Phone: {props.phone}</p>
    <p>Email: {props.email}</p>
    <p>Favorite Animal: {props.animal}</p>
    </div>
);
};

export default Person;
