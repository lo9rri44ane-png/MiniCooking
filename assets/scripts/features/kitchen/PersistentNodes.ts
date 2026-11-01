/** Retain identities across a render pass; unused nodes hide rather than destroy. */
export class PersistentNodes<T extends {active:boolean}> {
 private parents=new WeakMap<object,Map<string,T>>();private all=new Set<T>();private used=new Set<T>();
 begin():void{this.used.clear();}
 use(parent:object,key:string,create:()=>T):T{let entries=this.parents.get(parent);if(!entries){entries=new Map();this.parents.set(parent,entries);}let value=entries.get(key);if(!value){value=create();entries.set(key,value);this.all.add(value);}this.used.add(value);value.active=true;return value;}
 end():void{for(const value of this.all)if(!this.used.has(value))value.active=false;}
}
