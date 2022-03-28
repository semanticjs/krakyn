export class SideMenuItemTemplates {

    public static FLOW_DRAG_ITEMS(draggable: boolean = true, callback?: any): Array<any> {
       return [
           {
               ClassList: ['drag-item'],
               DataNode: 'request',
               Draggable: draggable,
               DragAction: callback,
               Id: 'request',
               Label: ' Request',
               IconClassList: ['request-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'project',
               Draggable: draggable,
               DragAction: callback,
               Id: 'project',
               Label: ' Project',
               IconClassList: ['project-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'filter',
               Draggable: draggable,
               DragAction: callback,
               Id: 'filter',
               Label: ' Route Filter',
               IconClassList: ['filter-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'application',
               Draggable: draggable,
               DragAction: callback,
               Id: 'application',
               Label: ' Application',
               IconClassList: ['application-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'modifier',
               Draggable: draggable,
               DragAction: callback,
               Id: 'modifier',
               Label: ' DFS Modifier',
               IconClassList: ['modifier-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'join',
               Draggable: draggable,
               DragAction: callback,
               Id: 'join',
               Label: ' Join',
               IconClassList: ['join-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'split',
               Draggable: draggable,
               DragAction: callback,
               Id: 'split',
               Label: ' Split',
               IconClassList: ['split-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'decision',
               Draggable: draggable,
               DragAction: callback,
               Id: 'decision',
               Label: ' Decision',
               IconClassList: ['decision-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'event',
               Draggable: draggable,
               DragAction: callback,
               Id: 'event',
               Label: ' Event',
               IconClassList: ['event-icon']
           }
       ]
    }
}