import {PERFORMANCE_SHORTCUTS,validAction,type DriveActionId} from './drive-actions';

const STORAGE_KEY='g1-drive-performance-slots-v1';
type BindingStorage=Pick<Storage,'getItem'|'setItem'>;
/** Only logical RB face-button actions are configurable. Raw device channels
 * and mode/recovery chords remain owned by the input adapter. */
export class DriveBindings {
  private slots:DriveActionId[]=PERFORMANCE_SHORTCUTS.map(s=>s.action);
  revision=0;
  constructor(private readonly storage?:BindingStorage){
    try{const saved=JSON.parse(storage?.getItem(STORAGE_KEY)??'null');if(saved?.version===1&&this.valid(saved.slots))this.slots=[...saved.slots];}catch{}
  }
  private valid(value:unknown):value is DriveActionId[]{return Array.isArray(value)&&value.length===4&&value.every(validAction);}
  actionAt(button:number):DriveActionId{return this.slots[button]??PERFORMANCE_SHORTCUTS[0].action;}
  snapshot():DriveActionId[]{return [...this.slots];}
  save(slots:unknown):boolean {
    if(!this.valid(slots))return false;
    this.slots=[...slots];this.revision++;
    try{if(!this.storage)return false;this.storage.setItem(STORAGE_KEY,JSON.stringify({version:1,slots:this.slots}));return true;}catch{return false;}
  }
  restore():boolean{return this.save(PERFORMANCE_SHORTCUTS.map(s=>s.action));}
}
