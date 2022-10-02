
import Card from "../card/card.component";
import "./card-list.styles.css"

const CardList = ({ monsters }) => {
    const monsterList = monsters.map((monster) => {
        return(
            <Card monster={monster} />
        );
    })
    return(
        <div className="card-list">
               {monsterList}
            </div>
    )
};
export default CardList; 