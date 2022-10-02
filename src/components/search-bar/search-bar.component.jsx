import { Component } from "react";
import "./search-box.styles.css"


class SearchBar extends Component{
    
    render(){
        const { onChangeHandler, 
                placeHolder, 
                className } = this.props;

        return(
        <div>
            <input 
                className={`search-box tc br2 ${className}`}
                type="search" 
                placeholder={placeHolder}
                onChange={onChangeHandler}
                
            /> 
        </div>
        )
    }
}
export default SearchBar;