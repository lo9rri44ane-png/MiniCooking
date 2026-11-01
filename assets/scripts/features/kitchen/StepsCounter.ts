import {Node} from 'cc';
import {uiNode} from '../../framework/cocos/UIService';
import {breakfastImage,setBreakfastImage} from './BreakfastArt';
/** Authored counter plate and bitmap numeral glyphs; every glyph keeps its aspect. */
export class StepsCounter {
 readonly node:Node;private slots:Node[]=[];private value=-1;
 constructor(parent:Node){this.node=uiNode(parent,'StepsCounter',-193,563,220,80);breakfastImage(this.node,'StepsPlate','ui/steps_panel',0,0,220,80);}
 setValue(value:number):void{
  const next=Math.max(0,Math.floor(value));if(this.value===next)return;this.value=next;
  const digits=String(next),spacing=digits.length>2?27:31,center=59;
  for(let i=0;i<Math.max(this.slots.length,digits.length);i++){
   if(i>=digits.length){this.slots[i].active=false;continue;}
   let slot=this.slots[i];if(!slot){slot=uiNode(this.node,'StepDigit-'+i,0,0,36,48);this.slots[i]=slot;}
   slot.name='StepDigit-'+i+'-'+digits[i];slot.active=true;slot.setPosition(center+(i-(digits.length-1)/2)*spacing,0);
   setBreakfastImage(slot,'ui/digits/'+digits[i],36,48);
  }
 }
}
