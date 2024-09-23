import type { ChangeEvent } from "react";


export default function OnChange() {

  const onChageValue = (e:ChangeEvent<HTMLInputElement>) =>{
    e.stopPropagation();
    e.preventDefault();
    console.log('onChangeValue', e.target.value);
  }

  const onChageChecked = (e:ChangeEvent<HTMLInputElement>) =>{
    e.stopPropagation();
    console.log('onChageChecked', e.target.value);
  }

  const onChageFiles = (e:ChangeEvent<HTMLInputElement>) =>{
    e.stopPropagation();
    console.log('onChageFiles', e.target.value);
  }


  return (
    <div>
      <p>OnChange</p>
      <div>
        <input type="text" onChange={onChageValue} placeholder="enter some texts" defaultValue="hello"
        />
       
        <input type="checkbox" onChange={onChageChecked} defaultChecked />
       

        <input type="file" onChange={onChageFiles} multiple accept="images/*"/>
      </div>
      <div></div>
    </div>
  );
}
