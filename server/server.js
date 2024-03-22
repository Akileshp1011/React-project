const express=require('express');
const mongoose=require('mongoose');
//const mongodb=require('mongodb')
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());

const ProductModel=require("./models/Product");



mongoose.connect("mongodb://127.0.0.1:27017/Product");

//mongodb.connect("mongodb+srv://admin:admin@cluster0.jjcj38o.mongodb.net/?retryWrites=true&w=majority");
app.post("/insert",async(req,res)=>{

    const productName=req.body.productName
    const description=req.body.description

    const product=new ProductModel({
        productName:productName,
        description:description
    });
    try{
        await(product.save());
    }catch(err){
        console.log(err);
    }
});

app.get("/reads",async(req,res)=>{
    ProductModel.find({},(err,result)=>{
       if(err){
           res.send(err)
           
       }
       // console.log(result);
       res.send(result);
    });
      
   });
app.put("/update",async(req,res)=>{

    const newProductName=req.body.newProductName;
    const id=req.body.id;

 
    try{
      await ProductModel.findById(id,(err,updatedProduct) => {
            updatedProduct.productName=newProductName;
            updatedProduct.save();
            res.send("update");
        });
    }catch(err){
        console.log(err);
    }
});
app.delete("/delete/:id", async(req,res) => {
    const id=req.params.id;
    await ProductModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});
app.listen(3002, () =>{
    console.log("server is running");
});