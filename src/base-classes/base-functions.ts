import { VariablesUtils } from '../utils/variables.utils.js';
import { DrawingUtils } from '../utils/drawing.utils.js';
import { DataFlowDataModel } from '../models/dataflow-data.model.js';
import { ConstantUtils } from '../utils/constants.utils.js';
import { NodeModel } from '../models/nodes/node.model.js';

export abstract class BaseFunctions {

    /**
     * Set active module
     * 
     * @param module module name
     * @returns active module
     */
    protected activeModule(moduleName?: string): DataFlowDataModel | any {

        return VariablesUtils.DataFlowModuleData.find((e: DataFlowDataModel) => {
            if (moduleName) {
                return e.Module === moduleName;
            }

            return e.Module === VariablesUtils.ActiveModule;
        })
    }
   
    protected updateConnectionNodes(id: string): void {
        
        const idSearch: string = 'node_in_' + id;
        const idSearchOut: string = 'node_out_' + id;

        let precanvasWitdhZoom = VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom);
        precanvasWitdhZoom = precanvasWitdhZoom || 0;

        let precanvasHeightZoom = VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom);
        precanvasHeightZoom = precanvasHeightZoom || 0;

        const elemsOut: NodeListOf<HTMLElement> = VariablesUtils.MainContainer.querySelectorAll(`.${idSearchOut}`);
        const elemtsearchId_out: HTMLElement | null = VariablesUtils.MainContainer.querySelector(`#${id}`);

        Object.keys(elemsOut).map((item: any, index: number) => {

            if (elemsOut[item].querySelector('.point') === null) {

                // var elemtsearchId_out: any = VariablesUtils.MainContainer.querySelector(`#${id}`);

                const id_search = elemsOut[item].classList[1].replace('node_in_', '');
                const elemtsearchId: any = VariablesUtils.MainContainer.querySelector(`#${id_search}`);
                const elemtsearch: HTMLElement = elemtsearchId.querySelectorAll('.' + elemsOut[item].classList[4])[0]
                const eX: number = elemtsearch.offsetWidth / 2 + (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                const eY: number = elemtsearch.offsetHeight / 2 + (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;
                
                if (elemtsearchId_out) {
                    const elemtsearchOut: any = elemtsearchId_out.querySelectorAll('.' + elemsOut[item].classList[3])[0];
                    const line_x: number = elemtsearchOut.offsetWidth / 2 + (elemtsearchOut.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                    const line_y: number = elemtsearchOut.offsetHeight / 2 + (elemtsearchOut.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;
                    const x: number = eX;
                    const y : number= eY;
                    const lineCurve = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.Curvature, 'openclose');

                    elemsOut[item].children[0].setAttributeNS(null, 'd', lineCurve);
                }
                
            } else {
                
                const points: NodeListOf<Element> = elemsOut[item].querySelectorAll('.point');
                let linecurve: string = '';
                const reoute_fix: Array<any> = [];

                points.forEach((item: any, i: any) => {
                    if (i === 0 && ((points.length - 1) === 0)) {

                        // var elemtsearchId_out: any = VariablesUtils.MainContainer.querySelector(`#${id}`);
                        var elemtsearch = item;

                        var eX = (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var eY = (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;

                        var elemtsearchOut = elemtsearchId_out.querySelectorAll('.' + item.parentElement.classList[3])[0]
                        var line_x: number = elemtsearchOut.offsetWidth / 2 + (elemtsearchOut.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        var line_y: number = elemtsearchOut.offsetHeight / 2 + (elemtsearchOut.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'open');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                        var elemtsearchId_out = item;
                        var id_search = item.parentElement.classList[1].replace('node_in_', '');
                        var elemtsearchId: any = VariablesUtils.MainContainer.querySelector(`#${id_search}`);
                        var elemtsearch: any = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[4])[0]

                        var elemtsearchIn: any = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[4])[0]
                        var eX: number = elemtsearchIn.offsetWidth / 2 + (elemtsearchIn.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        var eY: number = elemtsearchIn.offsetHeight / 2 + (elemtsearchIn.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;


                        var line_x: number = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var line_y: number = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'close');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                    } else if (i === 0) {

                        // var elemtsearchId_out: any = VariablesUtils.MainContainer.querySelector(`#${id}`);
                        var elemtsearch = item;

                        var eX: number = (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var eY: number = (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;

                        var elemtsearchOut = elemtsearchId_out.querySelectorAll('.' + item.parentElement.classList[3])[0]
                        var line_x: number = elemtsearchOut.offsetWidth / 2 + (elemtsearchOut.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        var line_y: number = elemtsearchOut.offsetHeight / 2 + (elemtsearchOut.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;

                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'open');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                        // SECOND
                        var elemtsearchId_out = item;
                        var elemtsearch: any = points[i + 1];

                        var eX = (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var eY = (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var line_x: number = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var line_y: number = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvature, 'other');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                    } else if (i === (points.length - 1)) {

                        var elemtsearchId_out = item;

                        var id_search = item.parentElement.classList[1].replace('node_in_', '');
                        var elemtsearchId: any = VariablesUtils.MainContainer.querySelector(`#${id_search}`);
                        var elemtsearch = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[4])[0]

                        var elemtsearchIn = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[4])[0]
                        var eX: number = elemtsearchIn.offsetWidth / 2 + (elemtsearchIn.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        var eY: number = elemtsearchIn.offsetHeight / 2 + (elemtsearchIn.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;
                        var line_x: number = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * (VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom)) + VariablesUtils.RerouteWidth;
                        var line_y: number = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * (VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom)) + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'close');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                    } else {
                        var elemtsearchId_out = item;
                        var elemtsearch: any = points[i + 1];

                        var eX: number = (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * (VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom)) + VariablesUtils.RerouteWidth;
                        var eY: number = (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * (VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom)) + VariablesUtils.RerouteWidth;
                        var line_x: number = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * (VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom)) + VariablesUtils.RerouteWidth;
                        var line_y: number = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * (VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom)) + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvature, 'other');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);
                    }

                });
                if (VariablesUtils.RerouteFixCurvature) {
                    reoute_fix.forEach((itempath, i) => {
                        elemsOut[item].children[i].setAttributeNS(null, 'd', itempath);
                    });

                } else {
                    elemsOut[item].children[0].setAttributeNS(null, 'd', linecurve);
                }

            }
        })

        const elems = VariablesUtils.MainContainer.querySelectorAll(`.${idSearch}`);
        Object.keys(elems).map(function (item: any, index) {

            if (elems[item].querySelector('.point') === null) {
                var elemtsearchId_in: any = VariablesUtils.MainContainer.querySelector(`#${id}`);
                var id_search = elems[item].classList[2].replace('node_out_', '');

                // alert(`#${id_search}`);

                var elemtsearchId: any = VariablesUtils.MainContainer.querySelector(`#${id_search}`);

                if ( !elemtsearchId) {
                    // alert('no element found');
                    return;
                }

                var elemtsearch = elemtsearchId.querySelectorAll('.' + elems[item].classList[3])[0]

                var line_x: number = elemtsearch.offsetWidth / 2 + (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                var line_y: number = elemtsearch.offsetHeight / 2 + (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;

                var elemtsearchId_in = elemtsearchId_in.querySelectorAll('.' + elems[item].classList[4])[0]
                var x = elemtsearchId_in.offsetWidth / 2 + (elemtsearchId_in.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                var y = elemtsearchId_in.offsetHeight / 2 + (elemtsearchId_in.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;

                const lineCurve = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.Curvature, 'openclose');
                elems[item].children[0].setAttributeNS(null, 'd', lineCurve);

            } else {
                const points = elems[item].querySelectorAll('.point');
                let linecurve = '';
                const reoute_fix: Array<any> = [];
                points.forEach((item: any, i: any) => {
                    let eX: any;
                    let eY: any;
                    if (i === 0 && ((points.length - 1) === 0)) {

                        // var elemtsearchId_out: any = VariablesUtils.MainContainer.querySelector(`#${id}`);
                        var elemtsearch = item;

                        var line_x: number = (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var line_y: number = (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;

                        var elemtsearchIn = elemtsearchId_out.querySelectorAll('.' + item.parentElement.classList[4])[0]
                        eX = elemtsearchIn.offsetWidth / 2 + (elemtsearchIn.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        eY = elemtsearchIn.offsetHeight / 2 + (elemtsearchIn.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;

                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'close');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                        var elemtsearchId_out = item;
                        var id_search = item.parentElement.classList[2].replace('node_out_', '');
                        var elemtsearchId: any = VariablesUtils.MainContainer.querySelector(`#${id_search}`);
                        var elemtsearch: any = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[3])[0]

                        var elemtsearchOut = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[3])[0]
                        var line_x: number = elemtsearchOut.offsetWidth / 2 + (elemtsearchOut.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        var line_y: number = elemtsearchOut.offsetHeight / 2 + (elemtsearchOut.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;

                        eX = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        eY = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'open');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);


                    } else if (i === 0) {
                        // FIRST
                        var elemtsearchId_out = item;
                        var id_search = item.parentElement.classList[2].replace('node_out_', '');
                        var elemtsearchId: any = VariablesUtils.MainContainer.querySelector(`#${id_search}`);
                        var elemtsearch = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[3])[0]
                        var elemtsearchOut = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[3])[0]
                        var line_x: number = elemtsearchOut.offsetWidth / 2 + (elemtsearchOut.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        var line_y: number = elemtsearchOut.offsetHeight / 2 + (elemtsearchOut.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;

                        eX = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        eY = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'open');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                        // SECOND
                        var elemtsearchId_out = item;
                        var elemtsearch: any = points[i + 1];

                        eX = (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        eY = (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var line_x = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var line_y = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvature, 'other');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                    } else if (i === (points.length - 1)) {

                        var elemtsearchId_out = item;

                        var id_search = item.parentElement.classList[1].replace('node_in_', '');
                        var elemtsearchId: any = VariablesUtils.MainContainer.querySelector(`#${id_search}`);
                        var elemtsearch = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[4])[0]

                        var elemtsearchIn = elemtsearchId.querySelectorAll('.' + item.parentElement.classList[4])[0]
                        eX = elemtsearchIn.offsetWidth / 2 + (elemtsearchIn.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
                        eY = elemtsearchIn.offsetHeight / 2 + (elemtsearchIn.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom;

                        var line_x = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var line_y = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvatureStartEnd, 'close');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);

                    } else {

                        var elemtsearchId_out = item;
                        var elemtsearch: any = points[i + 1];

                        eX = (elemtsearch.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        eY = (elemtsearch.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var line_x = (elemtsearchId_out.getBoundingClientRect().x - VariablesUtils.PreCanvas.getBoundingClientRect().x) * precanvasWitdhZoom + VariablesUtils.RerouteWidth;
                        var line_y = (elemtsearchId_out.getBoundingClientRect().y - VariablesUtils.PreCanvas.getBoundingClientRect().y) * precanvasHeightZoom + VariablesUtils.RerouteWidth;
                        var x = eX;
                        var y = eY;

                        var lineCurveSearch = DrawingUtils.CreateCurvature(line_x, line_y, x, y, VariablesUtils.RerouteCurvature, 'other');
                        linecurve += lineCurveSearch;
                        reoute_fix.push(lineCurveSearch);
                    }

                });
                if (VariablesUtils.RerouteFixCurvature) {
                    reoute_fix.forEach((itempath, i) => {
                        elems[item].children[i].setAttributeNS(null, 'd', itempath);
                    });

                } else {
                    elems[item].children[0].setAttributeNS(null, 'd', linecurve);
                }

            }
        })
    }

    protected updateConnection(eX: any, eY: any): void {
        const precanvas = VariablesUtils.PreCanvas;
        const zoom = VariablesUtils.Zoom;
        let precanvasWitdhZoom = precanvas.clientWidth / (precanvas.clientWidth * zoom);
        precanvasWitdhZoom = precanvasWitdhZoom || 0;
        let precanvasHeightZoom = precanvas.clientHeight / (precanvas.clientHeight * zoom);
        precanvasHeightZoom = precanvasHeightZoom || 0;
        var path = VariablesUtils.ConnectionElement.children[0];

        var line_x = VariablesUtils.SelectedElement.offsetWidth / 2 + (VariablesUtils.SelectedElement.getBoundingClientRect().x - precanvas.getBoundingClientRect().x) * precanvasWitdhZoom;
        var line_y = VariablesUtils.SelectedElement.offsetHeight / 2 + (VariablesUtils.SelectedElement.getBoundingClientRect().y - precanvas.getBoundingClientRect().y) * precanvasHeightZoom;

        var x = eX * (VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom)) - (VariablesUtils.PreCanvas.getBoundingClientRect().x * (VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom)));
        var y = eY * (VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom)) - (VariablesUtils.PreCanvas.getBoundingClientRect().y * (VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom)));

        var curvature = VariablesUtils.Curvature;
        var lineCurve = DrawingUtils.CreateCurvature(line_x, line_y, x, y, curvature, 'openclose');
        
        path.setAttributeNS(null, 'd', lineCurve);
    }

    protected getModuleFromNodeId(id: string): any {

        let nameModule: string = '';

        /**
         * Current module
         */
        const editor: DataFlowDataModel = this.activeModule(VariablesUtils.ActiveModule);

        Object.keys(editor.Data).map((node, index2) => {
            if (node == id) {
                nameModule = editor.Module;
            }
        })
        
        return nameModule;
    }

    protected removeConnection(): void {

        if (VariablesUtils.SelectedConnection != null) {

            var listclass = VariablesUtils.SelectedConnection.parentElement.classList;
            VariablesUtils.SelectedConnection.parentElement.remove();
            //console.log(listclass);

            if (this.hasOutputs(listclass)) {
                var index_out = this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs[listclass[3]].Connections.findIndex(function (item: any, i: any) {
                    return item.node === listclass[1].slice(13) && item.output === listclass[4]
                });

                this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs[listclass[3]].Connections.splice(index_out, 1);
            }

            if (this.hasInputs(listclass)) {
                var index_in = this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs[listclass[4]].Connections.findIndex(function (item: any, i: any) {
                    return item.node === listclass[2].slice(14) && item.input === listclass[3]
                });

                this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs[listclass[4]].Connections.splice(index_in, 1);
                this.Dispatch('connectionRemoved', { output_id: listclass[2].slice(14), input_id: listclass[1].slice(13), output_class: listclass[3], input_class: listclass[4] });
            }

            VariablesUtils.SelectedConnection = null;
        }
    }

    protected removeConnectionNodeId(id: any): void {
        const idSearchIn = 'node_in_' + id;
        const idSearchOut = 'node_out_' + id;

        const elemsOut = VariablesUtils.MainContainer.querySelectorAll(`.${idSearchOut}`);

        for (var i = elemsOut.length - 1; i >= 0; i--) {
            var listclass = elemsOut[i].classList;

            if (this.hasInputs(listclass)) {
                var index_in = this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs[listclass[4]].Connections.findIndex(function (item: any, i: any) {
                    return item.node === listclass[2].slice(14) && item.input === listclass[3]
                });

                this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs[listclass[4]].Connections.splice(index_in, 1);
            }

            if (this.hasOutputs(listclass)) {
                var index_out = this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs[listclass[3]].Connections.findIndex(function (item: any, i: any) {
                    return item.node === listclass[1].slice(13) && item.output === listclass[4]
                });
                this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs[listclass[3]].Connections.splice(index_out, 1);
            }

            elemsOut[i].remove();

            this.Dispatch('connectionRemoved', { output_id: listclass[2].slice(14), input_id: listclass[1].slice(13), output_class: listclass[3], input_class: listclass[4] });
        }

        const elemsIn = VariablesUtils.MainContainer.querySelectorAll(`.${idSearchIn}`);
        for (var i = elemsIn.length - 1; i >= 0; i--) {

            var listclass = elemsIn[i].classList;
            if (this.hasOutputs(listclass)) {
                var index_out = this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs[listclass[3]].Connections.findIndex(function (item: any, i: any) {
                    return item.node === listclass[1].slice(13) && item.output === listclass[4]
                });
                this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs[listclass[3]].Connections.splice(index_out, 1);
            }

            if (this.hasInputs(listclass)) {
                var index_in = this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs[listclass[4]].Connections.findIndex(function (item: any, i: any) {
                    return item.node === listclass[2].slice(14) && item.input === listclass[3]
                });

                this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs[listclass[4]].Connections.splice(index_in, 1);
            }
            elemsIn[i].remove();

            this.Dispatch('connectionRemoved', { output_id: listclass[2].slice(14), input_id: listclass[1].slice(13), output_class: listclass[3], input_class: listclass[4] });
        }
    }

    protected hasOutputs(listclass: Array<any>): boolean {

        if (this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)]) {
            return this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs && 
                   this.activeModule(VariablesUtils.ActiveModule).Data[listclass[2].slice(14)].Outputs.length > 0;
        }
       return  false;
    }

    protected hasInputs(listclass: Array<any>): boolean {

        if (this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)]) {
            return this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs && 
                   this.activeModule(VariablesUtils.ActiveModule).Data[listclass[1].slice(13)].Inputs.length > 0;
        }
       return  false;
    }

    protected removeNodeId(id: string): void {
        this.removeConnectionNodeId(id);
        var moduleName: any = this.getModuleFromNodeId(id.slice(5))
        if (VariablesUtils.ActiveModule === moduleName) {

            /**
             * Remove node from canvas
             */
            const nodeToRemove = VariablesUtils.MainContainer.querySelector(`#${id}`);
            if (nodeToRemove) {
                nodeToRemove.remove();
            }   
        }
        
        /**
         * Delete node from array
         */
        const deleteIndex: number = this.activeModule(VariablesUtils.ActiveModule).Data.findIndex(
            (itm: NodeModel) => {
                return itm.ID === id.slice(5);
        });

        // delete this.activeModule(VariablesUtils.ActiveModule).Data[deleteIndex];


        // delete this.activeModule(VariablesUtils.ActiveModule).Data[id.slice(5)];

        // this.activeModule(VariablesUtils.ActiveModule)
        // .Data
        // .filter((item: NodeModel) => {
        //     return item.ID !== id.slice(5);
        // })

    
        // this.activeModule(VariablesUtils.ActiveModule).splice(
        //     this.activeModule(VariablesUtils.ActiveModule).Data.findIndex(
        //         (itm: NodeModel) => {
        //             return itm.ID === id.slice(5);
        //     }), 1
        // )

        this.Dispatch('nodeRemoved', id.slice(5));
    }

    protected removeReouteConnectionSelected(): void {
        this.Dispatch('connectionUnselected', true);
        if (VariablesUtils.RerouteFixCurvature) {
            VariablesUtils.SelectedConnection.parentElement.querySelectorAll(".main-path").forEach((item: any, i: any) => {
                item.classList.remove("selected");
            });
        }
    }

    protected contextmenuDel(): void {

        if (VariablesUtils.PreCanvas.getElementsByClassName("drawflow-delete").length) {
            VariablesUtils.PreCanvas.getElementsByClassName("drawflow-delete")[0].remove();
        };
    }

    protected getNodeFromId(id: any): any {
        var moduleName: any = this.getModuleFromNodeId(id)
        return JSON.parse(JSON.stringify(this.activeModule(VariablesUtils.ActiveModule).Data[id]));
    }

    public removeReroutePoint(ele: any): void {
        const nodeUpdate = ele.parentElement.classList[2].slice(9)
        const nodeUpdateIn = ele.parentElement.classList[1].slice(13);
        const output_class = ele.parentElement.classList[3];
        const input_class = ele.parentElement.classList[4];


        let numberPointPosition = Array.from(ele.parentElement.children).indexOf(ele) - 1;

        const nodeId = nodeUpdate.slice(5);
        const searchConnection = this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections.findIndex(function (item: any, i: any) {
            return item.node === nodeUpdateIn && item.output === input_class;
        });

        if (VariablesUtils.RerouteFixCurvature) {

            const numberMainPath = ele.parentElement.querySelectorAll(".main-path").length
            ele.parentElement.children[numberMainPath - 1].remove();
            numberPointPosition -= numberMainPath;
            if (numberPointPosition < 0) {
                numberPointPosition = 0;
            }
        }
        this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections[searchConnection].points.splice(numberPointPosition, 1);

        ele.remove();
        this.Dispatch('removeReroute', nodeId);
        this.updateConnectionNodes(nodeUpdate);
    }

    public createReroutePoint(ele: any): void {
        
        VariablesUtils.SelectedConnection.classList.remove("selected");
        const nodeUpdate = VariablesUtils.SelectedConnection.parentElement.classList[2].slice(9);
        const nodeUpdateIn = VariablesUtils.SelectedConnection.parentElement.classList[1].slice(13);
        const output_class = VariablesUtils.SelectedConnection.parentElement.classList[3];
        const input_class = VariablesUtils.SelectedConnection.parentElement.classList[4];
        VariablesUtils.SelectedConnection = null;
        const point = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        point.classList.add("point");
        var pos_x: any = VariablesUtils.PosX * (VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom)) - (VariablesUtils.PreCanvas.getBoundingClientRect().x * (VariablesUtils.PreCanvas.clientWidth / (VariablesUtils.PreCanvas.clientWidth * VariablesUtils.Zoom)));
        var pos_y: any = VariablesUtils.PosY * (VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom)) - (VariablesUtils.PreCanvas.getBoundingClientRect().y * (VariablesUtils.PreCanvas.clientHeight / (VariablesUtils.PreCanvas.clientHeight * VariablesUtils.Zoom)));

        point.setAttributeNS(null, 'cx', pos_x);
        point.setAttributeNS(null, 'cy', pos_y);
        point.setAttributeNS(null, 'r', VariablesUtils.RerouteWidth.toString());

        let position_add_array_point = 0;
        if (VariablesUtils.RerouteFixCurvature) {

            const numberPoints = ele.parentElement.querySelectorAll(".main-path").length;
            var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            path.classList.add("main-path");
            path.setAttributeNS(null, 'd', '');

            ele.parentElement.insertBefore(path, ele.parentElement.children[numberPoints]);
            if (numberPoints === 1) {
                ele.parentElement.appendChild(point);
            } else {
                const search_point = Array.from(ele.parentElement.children).indexOf(ele)
                position_add_array_point = search_point;
                ele.parentElement.insertBefore(point, ele.parentElement.children[search_point + numberPoints + 1]);
            }

        } else {
            ele.parentElement.appendChild(point);
        }

        const nodeId = nodeUpdate.slice(5);
        const searchConnection = this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections.findIndex(function (item: any, i: any) {
            return item.node === nodeUpdateIn && item.output === input_class;
        });

        if (this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections[searchConnection].points === undefined) {
            this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections[searchConnection].points = [];
        }

        if (VariablesUtils.RerouteFixCurvature) {
            // console.log(position_add_array_point)
            if (position_add_array_point > 0) {
                this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections[searchConnection].points.splice(position_add_array_point, 0, { pos_x: pos_x, pos_y: pos_y });
            } else {
                this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections[searchConnection].points.push({ pos_x: pos_x, pos_y: pos_y });
            }

            ele.parentElement.querySelectorAll(".main-path").forEach((item: any, i: any) => {
                item.classList.remove("selected");
            });

        } else {
            this.activeModule(VariablesUtils.ActiveModule).Data[nodeId].outputs[output_class].Connections[searchConnection].points.push({ pos_x: pos_x, pos_y: pos_y });
        }

        this.Dispatch('addReroute', nodeId);
        this.updateConnectionNodes(nodeUpdate);
    }

    protected getNodesFromName(name: any): Array<any> {
        var nodes: Array<any> = [];
        const editor: any = this.activeModule(VariablesUtils.ActiveModule)
        Object.keys(editor).map(function (moduleName, index) {
            for (var node in editor[moduleName].data) {
                if (editor[moduleName].data[node].name == name) {
                    nodes.push(editor[moduleName].data[node].id);
                }
            }
        });
        return nodes;
    }

    /**
     * Check if nodes can connect to each other
     */
    protected canConnect(event: any, inputElement: Array<any>, outputElement: Array<any>): boolean {
        
        const canConnect: boolean = inputElement[0].AllowedInputTypes.some((type: string) => {
            return type === outputElement[0].NodeType;
        });

        if (!canConnect) {
            const closestSVG = VariablesUtils.ConnectionElement.closest('svg');
            closestSVG.querySelector('path').classList.add('error');
            // event.target.classList.add('error');
            //  VariablesUtils.ConnectionElement.remove();
            this.Dispatch('connectionCancel', true);
        }
       
        

        return canConnect;
    }

    /**
     * Dispatch DOM events
     * 
     * @param event DOM event
     * @param details event info
     * @returns 
     */
    public Dispatch(event: any, details: any): any {
        // Check if this event not exists
        if (VariablesUtils.Events[event] === undefined) {
            // console.error(`This event: ${event} does not exist`);
            return false;
        }
        VariablesUtils.Events[event].listeners.forEach((listener: any) => {
            listener(details);
        });
    }

    public Remove_Event(ev: any): void {
        // Remove this event from the target's cache
        for (var i = 0; i < VariablesUtils.EVCache.length; i++) {
            if (VariablesUtils.EVCache[i].pointerId == ev.pointerId) {
                VariablesUtils.EVCache.splice(i, 1);
                break;
            }
        }
    }

    public Zoom_Refresh(): void {
        this.Dispatch('zoom', VariablesUtils.Zoom);
        VariablesUtils.CanvasX = (VariablesUtils.CanvasX / VariablesUtils.ZoomLastValue) * VariablesUtils.Zoom;
        VariablesUtils.CanvasY = (VariablesUtils.CanvasY / VariablesUtils.ZoomLastValue) * VariablesUtils.Zoom;
        VariablesUtils.ZoomLastValue = VariablesUtils.Zoom;
        VariablesUtils.PreCanvas.style.transform = "translate(" + VariablesUtils.CanvasX + "px, " + VariablesUtils.CanvasY + "px) scale(" + VariablesUtils.Zoom + ")";
    }

    public Zoom_In(): void {
        if (VariablesUtils.Zoom < VariablesUtils.ZoomMax) {
            VariablesUtils.Zoom += VariablesUtils.ZoomValue;
            this.Zoom_Refresh();
        }
    }
    public Zoom_Out(): void {
        if (VariablesUtils.Zoom > VariablesUtils.ZoomMin) {
            VariablesUtils.Zoom -= VariablesUtils.ZoomValue;
            this.Zoom_Refresh();
        }
    }

    public Zoom_Reset(): void {
        if (VariablesUtils.Zoom != 1) {
            VariablesUtils.Zoom = 1;
            this.Zoom_Refresh();
        }
    }
}