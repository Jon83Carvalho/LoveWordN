
export function filerecords (filename) {
    var fs=require('fs');
  
    const content = 'teste'
  
    fs.writeFile(`${filename}.txt`,content,err=>{
        if(err) {
            console.error(err)
            return
        }
    })
  }