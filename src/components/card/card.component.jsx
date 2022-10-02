import { Component } from "react";
import "./card.styles.css"

class Card extends Component{
    render(){
        const { monster } = this.props;
        const { name, id, email } = monster;
        return(
        <div className="card-container shadow-1">
                <h1>{name}</h1>
                <img src={`https://robohash.org/${id}?set=set2`} alt={`Monster ${name}`} />
                <h3>{email}</h3>
    
        </div>
        )
    }
}
export default Card;