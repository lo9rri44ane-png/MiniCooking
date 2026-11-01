/** Source alpha bounds use top-left pixels; Cocos UI anchors are measured from bottom-left. */
export function chefVisibleCenterOffset(bounds:{left:number;right:number;top:number;bottom:number},canvasWidth:number,canvasHeight:number,anchorY=.5):{x:number;y:number}{
 return {x:(bounds.left+bounds.right)/2-canvasWidth*.5,y:canvasHeight*(1-anchorY)-(bounds.top+bounds.bottom)/2};
}
