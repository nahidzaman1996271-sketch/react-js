const todoTitle = "Call Family";
const todoDesc = "Call mom and dad this evening"; // <-- added

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth() + 1; // <-- +1 because months start at 0
const currentYear = date.getFullYear();

function Card(){
  return <div className="card">
        <h3 className="cardTitle">{todoTitle}</h3>
        <p className="cardDesc">{todoDesc}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
      </div>
}

export default Card;