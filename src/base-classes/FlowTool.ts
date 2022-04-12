import { IdsUtils } from "../utils/ids.utils.js";
import { NodeModel } from "../models/nodes/node.model.js";
import { VariablesUtils } from "../utils/variables.utils.js";
import { DataFlowBaseClass } from "./data-flow-base-class.js";
import { DataFlowDataModel } from "../models/dataflow-data.model.js";
import { ContainerEvent } from "../models/nodes/container-event.model.js";
import { EventsUtils } from "../utils/events.utils.js";
import { NodeBaseClass } from "../templates/node-base-class.js";

export class FlowTool extends DataFlowBaseClass {
  /**
   * List of event listeners
   */
  protected eventListeners: Array<ContainerEvent>;
  protected nodeBaseClass: NodeBaseClass;

  constructor(container: HTMLElement, render: any = null, parent: any = null) {
    super();

    this.nodeBaseClass = new NodeBaseClass();
    VariablesUtils.Parent = parent;
    VariablesUtils.Render = render;
    VariablesUtils.MainContainer = container;

    this.setEventListeners();
  }

  protected setEventListeners(): void {
    this.eventListeners = [
      {
        Event: "mouseup",
        Action: this.DragEnd.bind(this),
      },
      {
        Event: "mousemove",
        Action: this.Position.bind(this),
      },
      {
        Event: "mousedown",
        Action: this.Click.bind(this),
      },
      {
        Event: "touchend",
        Action: this.DragEnd.bind(this),
      },
      {
        Event: "touchmove",
        Action: this.Position.bind(this),
      },
      {
        Event: "touchstart",
        Action: this.Click.bind(this),
      },
      {
        Event: "contextmenu",
        Action: this.Contextmenu.bind(this),
      },
      {
        Event: "keydown",
        Action: this.KeyDown.bind(this),
      },
      {
        Event: "wheel",
        Action: this.Zoom_Enter.bind(this),
      },
      {
        Event: "input",
        Action: this.UpdateNodeValue.bind(this),
      },
      {
        Event: "dblclick",
        Action: this.DblClick.bind(this),
      },
      {
        Event: "onpointerdown",
        Action: this.PointerDown.bind(this),
      },
      {
        Event: "onpointermove",
        Action: this.PointerMove.bind(this),
      },
      {
        Event: "onpointerup",
        Action: this.PointerUp.bind(this),
      },
      {
        Event: "onpointercancel",
        Action: this.PointerUp.bind(this),
      },
      {
        Event: "onpointerout",
        Action: this.PointerUp.bind(this),
      },
      {
        Event: "onpointerleave",
        Action: this.PointerUp.bind(this),
      },
    ];
  }

  /**
   * Start creating nodes
   */
  protected start(): void {
    /**
     * Initialize UI events
     */
    EventsUtils.InitializeDispatchedEvents();

    if (!VariablesUtils.MainContainer) {
      return;
    }

    /**
     * Parent container
     */
    VariablesUtils.MainContainer.classList.add("parent-drawflow");
    VariablesUtils.MainContainer.tabIndex = 0;

    /**
     * Container that holds everything
     */
    // const precanvas: HTMLElement | null = document.getElementById('flow-canvas');

    /**
     * if precanvas already exists, then remove it
     */
    //  if (precanvas && precanvas.parentNode) {
    //     precanvas.parentNode.removeChild(precanvas);
    //  }

    /**
     * Don't have access to document.getElementById, so remove canvas this way
     *
     * Probably will find a better way to do this, but for now...
     */
    const mainContainerChildren: HTMLCollection =
      VariablesUtils.MainContainer.children;
    Array.from(mainContainerChildren).forEach((elm: Element) => {
      if (elm.id === "flow-canvas") {
        VariablesUtils.MainContainer.removeChild(elm);
        VariablesUtils.PreCanvas = null;
      }
    });

    VariablesUtils.PreCanvas = document.createElement("div");
    VariablesUtils.PreCanvas.setAttribute("id", "flow-canvas");
    VariablesUtils.PreCanvas.classList.add("drawflow");
    VariablesUtils.MainContainer.appendChild(VariablesUtils.PreCanvas);

    /**
     * add all eventlisteners to the container
     */
    EventsUtils.AddEventListeners(
      VariablesUtils.MainContainer,
      this.eventListeners
    );

    // VariablesUtils.load();
  }

  /**
   * load platform data
   */
  protected load(): void {
    let data: any;

    if (this.activeModule(VariablesUtils.ActiveModule).Data.Nodes) {
      data = this.activeModule(VariablesUtils.ActiveModule).Data.Nodes;
    } else {
      data = this.activeModule(VariablesUtils.ActiveModule).Data;
    }

    for (var key in data) {
      /**
       * Load nodes from config values
       */
      this.nodeBaseClass.LoadNodesFromConfig(
        data[key],
        VariablesUtils.PreCanvas
      );
    }

    if (VariablesUtils.Reroute) {
      for (var key in data) {
        this.addRerouteImport(data[key].ID);
      }
    }

    for (var key in data) {
      // this.updateConnectionNodes('node-' + key);
      if (VariablesUtils.PreCanvas) {
        this.updateConnectionNodes("node-" + data[key].ID);
      }
    }

    const flowTool: any = this.activeModule(VariablesUtils.ActiveModule);

    let number = 1;

    Object.keys(flowTool).map(function (key, index) {
      Object.keys(flowTool[key]).map(function (id, index2) {
        if (parseInt(id) >= number) {
          number = parseInt(id) + 1;
        }
      });
    });

    VariablesUtils.NodeId = number;
  }

  //  registerNode(name: any, html: any, props = null, options = null) {
  //    VariablesUtils.noderegister[name] = {html: html, props: props, options: options};
  //  }

  /**
   * When dragging a node onto the canvas
   *
   * @param val Node model
   * @returns node id
   */
  public AddNode(val: NodeModel): string {
    return this.nodeBaseClass.AddNode(val);
  }

  protected addRerouteImport(dataNode: any): void {
    const reroute_width = VariablesUtils.RerouteWidth;
    const reroute_fix_curvature = VariablesUtils.RerouteFixCurvature;
    const container = VariablesUtils.MainContainer;
    Object.keys(dataNode.outputs).map(function (output_item, index) {
      Object.keys(dataNode.outputs[output_item].Connections).map(function (
        input_item,
        index
      ) {
        const points =
          dataNode.outputs[output_item].Connections[input_item].points;
        if (points !== undefined) {
          points.forEach((item: any, i: any) => {
            const input_id =
              dataNode.outputs[output_item].Connections[input_item].node;
            const input_class =
              dataNode.outputs[output_item].Connections[input_item].output;
            const ele: any = container.querySelector(
              ".connection.node_in_node-" +
                input_id +
                ".node_out_node-" +
                dataNode.id +
                "." +
                output_item +
                "." +
                input_class
            );

            if (reroute_fix_curvature) {
              if (i === 0) {
                for (var z = 0; z < points.length; z++) {
                  var path = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                  );
                  path.classList.add("main-path");
                  path.setAttributeNS(null, "d", "");
                  ele.appendChild(path);
                }
              }
            }

            const point = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            point.classList.add("point");
            var pos_x = item.pos_x;
            var pos_y = item.pos_y;

            point.setAttributeNS(null, "cx", pos_x);
            point.setAttributeNS(null, "cy", pos_y);
            point.setAttributeNS(null, "r", reroute_width.toString());

            ele.appendChild(point);
          });
        }
      });
    });
  }

  /**
   * When switching modules - clicking menu tab buttons
   *
   * @param name module to load
   */
  public ChangeModule(name: string): void {
    this.Dispatch("moduleChanged", name);

    VariablesUtils.ActiveModule = name;
    VariablesUtils.PreCanvas.innerHTML = "";
    VariablesUtils.CanvasX = 0;
    VariablesUtils.CanvasY = 0;
    VariablesUtils.PosX = 0;
    VariablesUtils.PosY = 0;
    VariablesUtils.MouseX = 0;
    VariablesUtils.MouseY = 0;
    VariablesUtils.Zoom = 1;
    VariablesUtils.ZoomLastValue = 1;
    VariablesUtils.PreCanvas.style.transform = "";

    this.Init(this.activeModule(VariablesUtils.ActiveModule), false);
  }

  //  removeModule(name: any) {
  //    if(VariablesUtils.CurrentModule === name) {
  //      this.changeModule('Home');
  //    }
  //    // delete VariablesUtils.drawflow.drawflow[name];

  //    const index: number = VariablesUtils.DataFlowModuleData.findIndex((e:DataFlowDataModel) => {
  //      return e.Module === 'name';
  //    });

  //    if (index !== -1) {
  //        VariablesUtils.DataFlowModuleData.splice(index, 1);
  //    }

  //    this.Dispatch('moduleRemoved', name);
  //  }

  //  clearModuleSelected() {
  //    VariablesUtils.PreCanvas.innerHTML = '';

  //    VariablesUtils.DataFlowModuleData.find((e: DataFlowDataModel) => {
  //      if (e.Module === VariablesUtils.CurrentModule) {
  //          e.Data = {};
  //      }
  //    })

  //    // this.activeModule(VariablesUtils.CurrentModule) =  { 'data': {} };
  //  }

  /**
   * Clear canvas to add new nodes
   */
  protected clear(): void {
    if (VariablesUtils.PreCanvas) {
      VariablesUtils.PreCanvas.innerHTML = "";
      // VariablesUtils.drawflow = { 'drawflow': { 'Home': { 'data': {} }}};
    }
  }
  //  export () {
  //  //   const dataExport = JSON.parse(JSON.stringify(VariablesUtils.drawflow));
  //  //   this.Dispatch('export', dataExport);
  //  //   return dataExport;
  //  }

  /**
   *
   * @param data DataFlow data
   * @param notifi dispatch event when data has been imported
   * @returns
   */
  public Init(data: DataFlowDataModel, notify: boolean = true): void {
    let newData: any;

    /**
     * If no data, then ignore functionality
     */
    if (!data) {
      return;
    }

    if (data.Data && Object.keys(data.Data).length === 0) {
      return;
    }

    if (data && !data.Data) {
      newData = data;
    } else if (data.Data) {
      newData = data.Data;
    }

    // if (!data || Object.keys(data.Data).length === 0) {
    //   return;
    // }

    this.clear();
    this.start();

    const flowData: DataFlowDataModel = new DataFlowDataModel({
      // Data: JSON.parse(JSON.stringify(data)).Data,
      Data: JSON.parse(JSON.stringify(newData)),
      Module: data.Module,
    });

    /**
     * Should only do this when adding new data
     */
    //  VariablesUtils.DataFlowModuleData.push(flowData);

    this.load();

    if (notify) {
      EventsUtils.Dispatch("import", "import");
    }
  }
}
