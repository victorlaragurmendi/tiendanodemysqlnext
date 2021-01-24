
const List=(props)=>{
    return(
        <ul>
            {
                    props.nombres.map(u=>(
                        <li className="list-group-item list-group-item-active" key={u.id}>
                            <h3>{u.name}</h3>
                        </li>
                    ))
            }
        </ul>
    )
}

export default List