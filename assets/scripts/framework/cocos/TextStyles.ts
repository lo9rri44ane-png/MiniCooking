import {Label,LabelOutline,Color} from 'cc';
/** Logical 720×1280 typography. No baked text and no nonuniform text scaling. */
export function setTextStyle(label:Label,size:number,bold=size>=28):void{
 label.fontFamily='Microsoft YaHei';label.fontSize=size;label.lineHeight=Math.ceil(size*1.25);label.isBold=bold;
}
export function setButtonTextStyle(label:Label,size:number,light:boolean):void{
 setTextStyle(label,size,true);label.color=new Color().fromHEX(light?'#FFF9E9':'#754321');
 const stroke=label.getComponent(LabelOutline);if(light){const outline=stroke||label.addComponent(LabelOutline);outline.color=new Color().fromHEX('#8A4D22');outline.width=size>=24?2:1;}else if(stroke)stroke.width=0;
}
