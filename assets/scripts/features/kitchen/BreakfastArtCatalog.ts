export const BREAKFAST_ART_PATHS = [
 ...['leaf','tomato','bread','cheese','water','berry','meat'].map(id=>'ingredients/'+id),
 ...['table','pan','drink'].map(id=>'devices/'+id),
 ...['salad','toast','deluxe','juice','burger'].map(id=>'dishes/'+id),
 ...['wall','floor_a','floor_b','station'].map(id=>'board/'+id),
 ...['chef_idle','chef_slide','chef_cook','chef_win','chef_fail'].map(id=>'characters/'+id),
 ...['undo_button','overtime_button','ad_tab','bag_slot'].map(id=>'ui/'+id), 'backgrounds/clean_plate'
] as const;
