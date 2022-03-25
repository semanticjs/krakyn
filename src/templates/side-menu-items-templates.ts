export class SideMenuItemTemplates {

    public static FLOW_DRAG_ITEMS(callback?: any): Array<any> {
       return [
           {
               ClassList: ['drag-item'],
               DataNode: 'request',
               Draggable: true,
               DragAction: callback,
               Id: 'request',
               Label: ' Request',
               IconClassList: ['request-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'project',
               Draggable: true,
               DragAction: callback,
               Id: 'project',
               Label: ' Project',
               IconClassList: ['project-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'filter',
               Draggable: true,
               DragAction: callback,
               Id: 'filter',
               Label: ' Route Filter',
               IconClassList: ['filter-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'application',
               Draggable: true,
               DragAction: callback,
               Id: 'application',
               Label: ' Application',
               IconClassList: ['application-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'modifier',
               Draggable: true,
               DragAction: callback,
               Id: 'modifier',
               Label: ' DFS Modifier',
               IconClassList: ['modifier-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'join',
               Draggable: true,
               DragAction: callback,
               Id: 'join',
               Label: ' Join',
               IconClassList: ['join-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'split',
               Draggable: true,
               DragAction: callback,
               Id: 'split',
               Label: ' Split',
               IconClassList: ['split-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'decision',
               Draggable: true,
               DragAction: callback,
               Id: 'decision',
               Label: ' Decision',
               IconClassList: ['decision-icon']
           },
           {
               ClassList: ['drag-item'],
               DataNode: 'event',
               Draggable: true,
               DragAction: callback,
               Id: 'event',
               Label: ' Event',
               IconClassList: ['event-icon']
           }
       ]
    }
}