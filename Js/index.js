const index = require ("express")();

const PORT = process.env.PORT || 3000;

index.get("",(req, res) => {
    res.send("Hello World");
});

index.listen(PORT,()=> {
    console.log(`App up at port ${PORT}`);
})