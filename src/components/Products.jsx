import Product from "./Product";

const products = [
    {id: 1,
     name : "Basto-Ye",
     urlImage : 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
     price : 6
    },
    {id: 2,
     name : "Basto-Ye",
     urlImage : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
     price : 32
    },
    {id: 3,
     name : "Basto-Ye",
     urlImage : 'https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3Dhttps://unsplash.com/photos/a-table-topped-with-plates-of-food-and-drinks-LxOLLOFU890',
     price : 18
    },
    {id: 4,
     name : "Basto-Ye",
       urlImage : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
     price : 5
    },
    {id: 5,
     name : "Basto-Ye",
      urlImage : 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8fDA%3D://unsplash.com/photos/top-view-salad-with-guacamole-oaz0raysASk',
     price : 15
    },
    {id: 6,
     name : "Basto-Ye",
     urlImage : 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxmb29kfGVufDB8fDB8fHww',
     price : 12
    },
]
const Products =()=>{
    return(
    <div className="grid">
      {products.map(product=>(
       <Product product={product}/>
      ))}
    </div>
    )
}

export default Products;

