import React from 'react'
import Cards from './Cards'

const List = (props) => {
    return (
        <div  className='list-movies'  >
            
{props.moviedata.map((el) => <Cards el ={el}></Cards> )}


        </div>
    )
}

export default List
