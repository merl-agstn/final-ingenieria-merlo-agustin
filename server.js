const express=require('express');
const app=express();
const PORT=process.env.PORT||8080;
app.use(express.static('public'));
app.get('/api/cat',async(req,res)=>{
  try{
    const r=await fetch('https://api.thecatapi.com/v1/images/search');
    const j=await r.json();
    res.json({url:j[0].url});
  }catch(e){
    res.status(500).json({error:'failed'});
  }
});
app.listen(PORT,()=>console.log('listening',PORT));