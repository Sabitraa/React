import axios from 'axios';
import react, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const SingleBlog = ()=> {
    const {id} = useParams();
    const [data, setData]= useState({});
    const [loading, setloading] = useState(true)
    const fetchBlog = async() => {
        const res = await axios.get(`https://65cdc8f3c715428e8b3f0dbc.mockapi.io/blog/${id}`);
        setData(res.data);
        setloading(false);
    };
    useEffect(()=> {
        fetchBlog();
    }, []);
    return(
        <>
         {loading ? <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXBrcXNocDByZDRhaDRicmY1bjA3ZDh2ZXF3YXV5ZTJxd2lyODBsaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uIJBFZoOaifHf52MER/200.webp"></img>
         </div> : null}
          <div>
            <img src={data.avatar} style={{width:'200px',height:'200px'}}/>
            <h3>{data.name}</h3>
            <p>{data.desc}</p>

        </div>
        </>
    )
}
export  default SingleBlog;