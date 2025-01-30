const fs1=require('fs')

//Read the file readfile()
fs1.readFile('kle.txt','utf8',(data,err)=>
{
if(err)
{    
  console.error('Error reading file:',err)
} 
console.log(data)
})

//write-->writeFile()
fs1.writeFile('kle.txt','HelloWorld||',(err)=>{
 if(err)  
 {
    console.error(err) 
}
console.log('file written successfully');


fs1.readFile('kle.txt','utf8',(err,data)=>
    {
    if(err)
    {
        console.error('Error reading file:',err)
    }
    console.log(data);
})           

})



//Append--appendFile()
fs1.appendFile('kle.txt','\nAppended textworld',(err)=>
{
if(err)
 {
    console.error(err)
 }
console.log('data appended');
})


//Delete-->unlink()
fs1.unlink('kle.txt',(err)=>{
    if(err)
    {
        console.error(err);

    }
    console.log('deleted successfully');

})