import React from 'react';
import CharItem from './CharItem';



const CharGrid = ({items, isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) :
        (<section className="cards">{items.map(item => (<CharItem key={item.id} item={item}  />))}</section>)

}


export default CharGrid;