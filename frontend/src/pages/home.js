import { useEffect, useState } from 'react'
import axios from 'axios';

function HomeComponent(){
    const [products, setProducts] = useState([]);

    const getAll = async () => {
        var response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    }

    useEffect(() => {
        getAll();
    }, [])


    const addBasket = async (productId) => {
        let user = JSON.parse(localStorage.getItem("user"));
        let model = {productId: productId, userId: user._id};
        var response = await axios.post("http://localhost:5000/baskets/add", model);
        
        alert(response.data.message);
        
        getAll();
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        products.map((product, index) =>(
                            <div className='col-md-3 mt-4' key={index}>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div className='card-body'>
                                        <img style={{ width: '175px', height: '200px', alignItems:'center',  justifyContent:'center', display:'flex', margin:'auto', padding:'auto'}} src={'http://localhost:5000/' + product.imageUrl} />
                                        <h5 className='text-center mt-1' style={{border:"1px solid #ccc", padding:"10px"}}>Adet: {product.stock}</h5>
                                        <h5 className='text-center text-danger mt-1' style={{border:"1px solid #ccc", padding:"10px"}}>Fiyat: {product.price} &#x20BA;</h5>
                                        {product.stock > 0 ? <button onClick={()=> addBasket(product._id)} className='btn btn-outline-success w-100'>Sepete Ekle</button> : <button className='btn btn-danger w-100'>Ürün Stokta Yok!</button>}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )

}

export default HomeComponent;