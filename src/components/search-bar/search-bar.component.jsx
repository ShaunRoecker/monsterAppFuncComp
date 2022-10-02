
import "./search-box.styles.css"

const SearchBar= ({ className, onChangeHandler, placeHolder}) => {

    return(
        <div>
            <input 
                className={`search-box tc br2 ${className}`}
                type="search"
                onChange={onChangeHandler}
                placeholder={placeHolder}
            />

        </div>
    )

};
export default SearchBar;