import type {Action,Level,State} from './Types';
import {actDrag,initialState} from './Rules';
export function replay(level:Level,path:Action[]=level.solution):State{let state=initialState(level);for(const action of path){const next=actDrag(level,state,action);if(next===state)throw new Error(`Illegal proof action ${JSON.stringify(action)}`);state=next;}return state;}
export function solve(level:Level):{path:Action[];optimal:false;method:string}{if(!replay(level).won)throw new Error('Proof does not win');return {path:clone(level.solution),optimal:false,method:'verified hand-authored feasible path'};}

function clone<T>(value:T):T{return JSON.parse(JSON.stringify(value)) as T;}
