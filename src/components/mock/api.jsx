const productos = [
    {
        id:'1',
        name:'FIFA 2024',
        category:'Juegos',
        description:'Todos los torneos del mundo',
        price:75,
        img:'/Fifa24.jpg',
        stock:10
    },
    {
        id:'2',
        name:'CALL OF DUTY 4',
        category:'Nuevos ingresos',
        description:'Accion',
        price:95,
        img:'/Callofduty.jpg',
        stock:8
    },
    {
        id:'3',
        name:'PLAY 5',
        category:'Ofertas',
        description:'Consola digital',
        price:500,
        img:'/play5.jpg',
        stock:15
    },
    {
        id:'4',
        name:'X BOX SERIES',
        category:'Nuevos ingresos',
        description:'La consola de Microsoft',
        price:400,
        img:'/xbox.jpg',
        stock:12
    },
    {
        id:'5',
        name:'JOYSTICK PLAY 5',
        category:'Ofertas',
        description:'Varios colores',
        price:100,
        img:'/jostick.jpg',
        stock:20
    }
]

export const getProducts = ()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

export const getOneProduct = (id)=>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let onProduct = productos.find((item)=>item.id === id)
                resolve(onProduct)
            }
        },2000)
    })
}

