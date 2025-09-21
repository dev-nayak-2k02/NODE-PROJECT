export const homeController = (req, res)=>{
    res.send('<strong>Welcome to Home page</strong>');
}

export const aboutController = (req, res)=>{
    res.send('<strong>Welcome to about page</strong>')
}

export const productController = (req, res)=>{
    const product = [
        {
            "id":1,
            "name":"Samsung"
        },
        {
            "id":2,
            "name":"Nokia"
        },
        {
            "id":3,
            "name":"Apple"
        }
    ]
    res.send({
        message:"Items fetched",
        status:true,
        product:product
    })
}

export const searchController = (req, res)=>{
    const product = [
        {
            "id":1,
            "name":"Samsung"
        },
        {
            "id":2,
            "name":"Nokia"
        },
        {
            "id":3,
            "name":"Apple"
        }
    ]
    const singleProduct = product.find((product)=>product.id == Number(req.params.id))
    console.log(singleProduct)
    console.log(singleProduct.id)
    console.log(singleProduct.name)
    if(singleProduct){
        res.send({
            message:"Items fetched",
            status:true,
            product:singleProduct
        })
    } else {
        res.send({
            message:"Items not fetched",
            status:false,
        })
    }
}