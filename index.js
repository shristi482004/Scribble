const express=require('express');
const app=express();
const Path=require('path');
const file=require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(Path.join(__dirname,'public')));
app.set('view engine','ejs');
app.use((req,res,next)=>{
    console.log("MiddleWare Running");
    next();
});
app.get('/',(req,res)=>{
    file.readdir('files',(err,files)=>{
         res.render('index',{files:files});
    })
   
});

app.post('/create',(req,res)=>{
    file.writeFile(`files/${req.body.taskTitle.split(' ').join('_')}.txt`,req.body.taskDescription,(err)=>{
        if(err){
            return res.status(500).send("Error creating file");
        }
       else console.log("File created successfully");
        res.redirect('/');
});
});
app.get('/files/:filename',(req,res)=>{
    file.readFile(`./files/${req.params.filename}`,'utf-8',(err,files)=>{
        if(err){
            return res.status(500).send("Error reading file");
        }
      res.render('show',{filename:req.params.filename,description:files});
    })
   
});
app.post('/delete/:filename', (req, res) => {
  file.unlink(`./files/${req.params.filename}`, (err) => {
    if (err) return res.status(500).send('Error deleting');
    res.sendStatus(200);
  });
});

 app.get('/edit/:prevname', (req, res) => {
    res.render('edit', {
        prevname: req.params.prevname
    });
});

   

/*app.post('/edit/:prevname',(req,res)=>{
   
   file.rename(`./files/${req.body.prevname}`,`files/${req.body.newName.split(' ').join('_')}.txt`,(err)=>{
        if(err){
            return res.status(500).send("Error reading file");
        }
       
      res.redirect('/');
      
    });
   
});
*/
app.post('/edit/:prevname', (req, res) => {
  const oldName = req.params.prevname; 
  const newName = req.body.newName;

  if (!newName) {
    return res.redirect('/');
  }

  const safeNewName =
    newName.trim().split(' ').join('_') + '.txt';

  file.rename(
    `./files/${oldName}`,
    `./files/${safeNewName}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error renaming file");
      }
      res.redirect('/');
    }
  );
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
