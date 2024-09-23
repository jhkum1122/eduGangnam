import { ChangeEvent } from "react";

export default function FileInput() {
  
  const onChageFiles = (e:ChangeEvent<HTMLInputElement>) =>{
    const files: FileList | null = e.target.files;

    if (files) {
      for (let index = 0; index < files.length; index++) {
        const file : File | null = files.item(index);
        console.log(`file[${index}]`, file);
      }
      
    }
    e.stopPropagation();
    console.log('onChageFiles', e.target.value);
  }

  return (
    <div>
      <p>OnChange</p>
      <div>
        <input type="text" placeholder="enter some texts" defaultValue="hello"
        />
       
           <input type="file" onChange={onChageFiles} multiple accept="images/*"/>
      </div>
      <div></div>
    </div>
  );
}
