/** Engine-independent asset locations shared by runtime, native authoring and verification. */
const groups:Record<string,readonly string[]>={
 pages:['HomePage','RestaurantsPage','LevelSelectPage','KitchenPage','SettingsPage','RulesPage','DiagnosticsPage'],
 actors:['Chef','ChefBody','CustomerActor','CartoonSmoke'],
 board:['MechanismTile','Board','BoardCell','Wall','Station','IngredientTile','DeviceTile','RequiredDevice'],
 'ui/hud':['HUD','OrderBubble','CustomerOrderCard','BagSlot','AdBagSlot','EnergyWidget','IngredientChip','RestaurantCard','LevelCard'],
 'ui/dialogs':['ChoicePanel','Popup','PausePanel','WinResult','FailResult','RecipePanel','RecipeCard'],
 'ui/tutorial':['TutorialOverlay','GuideDock','GuideFocus','GuideTarget'],
 'ui/shared':['PrimaryButton','FrameworkButton','Panel','Container','TextLabel','Toast','Effects','SunlightOverlay']
};
export function prefabAssetPath(id:string):string{for(const[group,ids]of Object.entries(groups))if(ids.includes(id))return'prefabs/'+group+'/'+id;throw Error('Unknown native template: '+id);}
