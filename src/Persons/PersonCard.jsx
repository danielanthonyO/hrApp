// // PersonCard.js
// import "./Person.css";
import "./Person.css";

const PersonCard = (props) => {
const yearsWorked = Math.floor(
(new Date() - new Date(props.startDate)) / (1000 * 60 * 60 * 24 * 365)
);

let reminder = null;
const daysWorked = (new Date() - new Date(props.startDate)) / (1000 * 60 * 60 * 24);
if (yearsWorked > 0 && yearsWorked % 5 === 0) {
reminder = "🎉 Schedule recognition meeting.";
} else if (daysWorked < 182) {
reminder = "🔔 Schedule probation review.";
}

const animalToEmoji = {
Owl: "🦉",
Dog: "🐶",
Bear: "🐻",
Wolf: "🐺",
Cat: "🐱",
Deer: "🦌",
Fox: "🦊",
Rabbit: "🐰",
Eagle: "🦅",
};

const emojiAnimal = animalToEmoji[props.animal] || props.animal;

return (
<div className="person">
    <h3>Name: {props.name}</h3>
    <p>Title: {props.title}</p>
    <p>Salary: ₦{props.salary}</p>
    <p>Phone: {props.phone}</p>
    <p>Email: {props.email}</p>
    <p>Favorite Animal: {emojiAnimal} ({props.animal})</p>
    <p>Start Date: {props.startDate}</p>
    <p>Location: {props.location}</p>
    <p>Department: {props.department}</p>
    <p>Skills: {props.skills.join(", ")}</p>
    <p>Years Worked: {yearsWorked}</p>
    {reminder && <p className="reminder">{reminder}</p>}
</div>
);
};

export default PersonCard;



// const PersonCard = (props) => {

// return (
//     <div className="person">
//     <h3>Name: {props.name}</h3>
//     <p>Title: {props.title}</p>
//     <p>Salary: ₦{props.salary}</p>
//     <p>Phone: {props.phone}</p>
//     <p>Email: {props.email}</p>
//     <p>Favorite Animal: {props.animal}</p>
//     <p>Start Date: {props.startDate}</p>
//     <p>Location: {props.location}</p>
//     <p>Department: {props.department}</p>
//     <p>Skills: {props.skills.join(", ")}</p>
//     </div>
// );
// };

// export default PersonCard;