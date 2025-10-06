export const homeController = (req, res)=>{
    res.send('<h1>This is Home Welcome, to mah Crib</h1>')
}

export const registerController = (req, res)=>{
    res.send('<h1>This is register, Registration is mandatory for account creatiion</h1>')
}

export function aboutController(req, res){
    const product = [
        {
            "name": "Iphone 17 Pro(12GB RAM, 256GB Storage)",
            "brand": "Apple",
            "color": "Punk Orange",
            "processor": "A-19 Bionic chip",
            "price": '1,30,000'
        },
        {
            "name": "Galaxy S25 Pro-max(12GB RAM, 256GB Storage)",
            "brand": "Samsung",
            "color": "Space Grey",
            "processor": "Snapdragon-8 Elite",
            "price": '1,17,000'
        },
        {
            "name": "IQOO Neo 10(8GB RAM, 256GB Storage)",
            "brand": "IQOO(Vivo)",
            "color": "Platinum Chrome",
            "processor": "Snapdragon-8s Gen 4",
            "price": "30,000"
        }
    ]
    res.json({
        message: "Fetched data",
        success: true,
        content: product
    })
    console.log(req.params.id);
}