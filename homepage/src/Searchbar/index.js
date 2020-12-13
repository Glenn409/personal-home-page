import './index.css';

function SearchBar(){
    return(
        <div className='SearchBar'>
            <h1>Hello Christopher</h1>

            {/* input box for google search*/}
            <form action="https://www.google.com/search" class="searchform" method="get" name="searchform">
                <input name="sitesearch" type="hidden" />
                <input autocomplete="on" class="form-control search" name="q" placeholder="Search Google" required="required"  type="text"/>
                <button class="button" type="submit">Search</button>
            </form>


        </div>
    )
}

export default SearchBar;