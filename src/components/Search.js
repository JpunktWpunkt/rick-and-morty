import React, { useState } from 'react';

const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    const onChange =(searchTerm) => {
        setText(searchTerm)
        getQuery(searchTerm)
    }
    return (
        <section className="search">
            <form>
                <input type="text"
                       className="form-control"
                       placeholder="Search characters"
                       value={text}
                       onChange={(event) =>onChange(event.target.value)}
                       autoFocus />
            </form>

        </section>
    );
}


export default Search;