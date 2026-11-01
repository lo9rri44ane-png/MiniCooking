/** Select one surviving ingredient, never the previous identity. */
export function nextJellyIngredient(ids:readonly number[],previous:number|null,random:()=>number=Math.random):number|null{const options=ids.filter(id=>id!==previous);return options.length?options[Math.min(options.length-1,Math.floor(Math.max(0,random())*options.length))]:null;}
