import react from 'react'
const Card = ({row}) => {
    return (
        <div>
            <img src={row.avatar} style={{width:'200px',height:'200px'}}/>
            <h3>{row.name}</h3>
            <p>{row.desc.slice(0,90)}</p>
        </div>
    )

}
export default Card