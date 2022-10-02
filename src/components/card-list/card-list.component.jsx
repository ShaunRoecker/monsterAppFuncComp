import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css"


class CardList extends Component {

    render() {
        const { monsters } = this.props
        const monsterList = monsters.map((monster, index) => {
            return(
                <Card monster={monster}/>
            )
        })
        return(
            <div className="card-list">
               {monsterList}
            </div>
        )
    }
}
export default CardList; 