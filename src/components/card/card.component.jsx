
import "./card.styles.css"


const Card = ({ monster }) => {
    const { name, id, email } = monster;

    return(
        <div className="card-container shadow-1">
                <h1>{name}</h1>
                <img src={`https://robohash.org/${id}?set=set2`} alt={`Monster ${name}`} />
                <h3>{email}</h3>
    
        </div>        
    )
};
export default Card;