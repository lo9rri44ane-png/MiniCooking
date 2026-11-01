export const CHAPTER_SERIES=['清晨菜园','烘焙时光','芝士派对','果香小站','丰盛早午餐','厨房伙伴','花园食光','招牌收藏'];
/** Presentation only: each existing cleared bit is its collection bit. */
export function collectionIcon(chapter:number,index:number):string{return 'v9/collection/chapter_'+(chapter+1)+'/item_'+String(index+1).padStart(2,'0');}
