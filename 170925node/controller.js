export const homeController = (req,res)=>{
    res.send('message');
}

export const aboutController = (req,res)=>{
    res.send('this is aboutController');
}

export const productController = (req,res)=>{
    const products = [
        {
            'id':1,
            'name':'Apple'
        },
        {
            'id':2,
            'name':'Samsung'
        },
        {
            'id':3,
            'name':'moto'
        }
    ]
    res.send({
        message:'Fetched',
        status:true,
        product:products
    })
}

export const searchController =  (req,res)=>{
    const products = [
        {
            'id':1,
            'name':'Apple'
        },
        {
            'id':2,
            'name':'Samsung'
        },
        {
            'id':3,
            'name':'moto'
        }
    ]
    const singleProduct = products.find((product)=>product.id === +(req.params.id))
    console.log(singleProduct);
    console.log(`Id = ${singleProduct.id}`);
    console.log(`Name = ${singleProduct.name}`);
    if(singleProduct){
        res.send({
            message:'Fetched',
            status:true,
            product:products
        })
    } else {
        res.send({
            message: 'not found',
            status: false
        })
    }
}
// exports.module = {homeController, aboutController, productController}