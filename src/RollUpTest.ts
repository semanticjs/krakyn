import { FlowTool } from './controls/FlowTool';
import { VariablesUtils } from './utils/variables.utils';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { DataFlowDataModel } from './models/dataflow-data.model';
import { DragDropUtils } from './utils/drag-drop.utils';
import {query} from 'lit/decorators/query.js';
import { PositionUtils } from './utils/position.utils';
import { NodeTemplates } from './templates/node-templates';

@customElement('rollup-test-control')

export class RollUpTest extends LitElement {
  
  @property({ type: Number }) 
  public Counter: number;

  @query('#drag-items')
  public DragItems: HTMLElement;
  
  @property({ type: DataFlowDataModel }) 
  public FlowData: DataFlowDataModel;

  // @property({ type: FlowTool })
  // public FlowTool: FlowTool;

  @property({ type: String })
  public HeaderTitle: string;

  @property({ type: Array })
  public SideMenuItems: Array<any>

  @property({ type: String }) 
  public Title: string;

  /**
   * Internal reactive state refers to properties that aren't
   * part of the component's API. Typically marked protected or private
   */
  @state()
  protected canvas: HTMLElement;
  
  @state()
  protected flowTool: any;

  constructor() {
    super();

    /**
     * 
     * Set default value - overridden with passed in value
     */
    this.canvas = document.getElementById("drawflow");
    this.flowTool = new FlowTool(this.canvas);
    this.Title = 'This is a component';
    this.Counter = 5;
  }

  __increment() {
    this.Counter += 1;
  }

  protected addNodeToDrawFlow(name: string, x: number, y: number): any {
    
    if (VariablesUtils.EditorMode === 'fixed') {
      return false;
    }

    let posX = PositionUtils.DraggedNodeEndXPos(x);	
    let posY = PositionUtils.DraggedNodeEndYPos(y);

    switch (name) {
      case 'request':
        this.flowTool.AddNode
        (
          {
            ID: '1',
            AllowedOutputTypes: ['PROJECT'],
            Name: 'request', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Request,
            // HTML: document.getElementById('request').content,
            TypeNode: false
          }
        );
      break;
      case 'project':
        this.flowTool.AddNode
        (
          {
            Type: 'project',
            AllowedInputTypes: ['REQUEST'],
            ID: '222',
            Name: 'project', 
            NumOfInputs: 1, 
            NumOfOutputs: 1, 
            Outputs: {
              "output_1":
              {
                  "Connections":
                      []
              }
            },
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Project,
            TypeNode: false
          }
        );
      break;
      case 'filter':
        this.flowTool.AddNode
        (
          {
            Name: 'filter', 
            NumOfInputs: 1, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Filter,
            TypeNode: false
          }
        );
      break;
      case 'application':
        this.flowTool.AddNode
        (
          {
            Name: 'application', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Application,
            TypeNode: false
          }
        );
      break;
      case 'modifier':
        this.flowTool.AddNode
        (
          {
            Name: 'modifier', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Modifier,
            TypeNode: false
          }
        );
      break;
      case 'join':
        this.flowTool.AddNode
        (
          {
            Name: 'join', 
            NumOfInputs: 1, 
            NumOfOutputs: 2, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Join,
            TypeNode: false
          }
        );
      break;
      case 'split':
        this.flowTool.AddNode
        (
          {
            Name: 'split', 
            NumOfInputs: 2, 
            NumOfOutputs: 2, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Split,
            TypeNode: false
          }
        );
      break;
      case 'decision':
        this.flowTool.AddNode
        (
          {
            Name: 'decision', 
            NumOfInputs: 1, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Decision,
            TypeNode: false
          }
        );
      break;
      case 'event':
        this.flowTool.AddNode
        (
          {
            Name: 'event', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: [], 
            Data: {}, 
            HTML: NodeTemplates.Event,
            TypeNode: false
          }
        );
      break;
      case 'facebook':
        this.flowTool.AddNode
        (
          {
            Name: 'facebook', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['facebook'], 
            Data: {}, 
            HTML: NodeTemplates.Facebook,
            TypeNode: false
          }
        );
        break;
      case 'slack':
        this.flowTool.AddNode
        (
          {
            Name: 'slack', 
            NumOfInputs: 1, 
            NumOfOutputs: 0, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['slack'], 
            Data: {}, 
            HTML: NodeTemplates.Slack,
            TypeNode: false
          }  
        );
        break;
      case 'github':
        this.flowTool.AddNode
        (
          {
            Name: 'github', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['github'], 
            Data: {}, 
            HTML: NodeTemplates.Github,
            TypeNode: false
          }
        );
        break;
      case 'telegram':
        this.flowTool.AddNode
        (
          {
            Name: 'telegram', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['telegram'], 
            Data: {}, 
            HTML: NodeTemplates.Telegram,
            TypeNode: false
          }
        );
        break;
      case 'aws':
        this.flowTool.AddNode
        (
          {
            Name: 'aws', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['aws'], 
            Data: {}, 
            HTML: NodeTemplates.AWS,
            TypeNode: false
          }
        );
        break;
      case 'log':
        this.flowTool.AddNode
        (
          {
            Name: 'log', 
            NumOfInputs: 1, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['log'], 
            Data: {}, 
            HTML: NodeTemplates.Log,
            TypeNode: false
          }
        );
        break;
      case 'google':
        this.flowTool.AddNode
        (
          {
            Name: 'google', 
            NumOfInputs: 1, 
            NumOfOutputs: 0, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['google'], 
            Data: {}, 
            HTML: NodeTemplates.Google,
            TypeNode: false
          }
        );
        break;
      case 'email':
        this.flowTool.AddNode
        (
          {
            Name: 'email', 
            NumOfInputs: 1, 
            NumOfOutputs: 0, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['email'], 
            Data: {}, 
            HTML: NodeTemplates.Email,
            TypeNode: false
          }
        );
        break;
      case 'template':
        this.flowTool.AddNode
        (
          {
            Name: 'template', 
            NumOfInputs: 1, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['template'], 
            Data: {}, 
            HTML: NodeTemplates.Template,
            TypeNode: false
          }
        );
        break;
      case 'multiple':
        this.flowTool.AddNode
        (
          {
            Name: 'multiple', 
            NumOfInputs: 3, 
            NumOfOutputs: 4, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['multiple'], 
            Data: {}, 
            HTML: NodeTemplates.Multiple,
            TypeNode: false
          }
        );
        break;
      case 'personalized':
        this.flowTool.AddNode
        (
          {
            Name: 'personalized', 
            NumOfInputs: 1, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['personalized'], 
            Data: {}, 
            HTML: NodeTemplates.Personalized,
            TypeNode: false
          }
        );
        break;
      case 'dbclick':
        this.flowTool.AddNode
        (
          {
            Name: 'dbclick', 
            NumOfInputs: 0, 
            NumOfOutputs: 1, 
            PosX: posX, 
            PosY: posY, 
            ClassList: ['dbclick'], 
            Data: {}, 
            HTML: NodeTemplates.DBLClick,
            TypeNode: false
          }
        );
        break;

      default:
    }
  }

  protected dragEvent(eventType: string, e: DragEvent): void {

    switch(eventType) {
      case 'drop':
        DragDropUtils.Drop(e, this.addNodeToDrawFlow);
        e.preventDefault();
        break;
      case 'dragover':
        DragDropUtils.AllowDrop(e);
        e.preventDefault();
        break;
    }
    
  }

  static get styles() {
    return css `
    @charset "UTF-8";
/**
* Style Type
*
* Node Shape Styles
*/
/**
* Base functionality
*/
@import url("https://fonts.googleapis.com/css2?family=Rokkitt:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");
.base, .request, .project, .filter, .application, .modifier, .join, .split, .decision, .event {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white; }

.gap > * {
  margin: 14px; }

.basic-node, .request, .project, .filter, .application, .modifier {
  min-height: 30px;
  width: 100px;
  border-radius: 7px; }

.request {
  background-color: var(--node-request); }

.project {
  color: white;
  background-color: var(--node-project); }

.filter {
  background-color: var(--node-filter); }

.application {
  background-color: var(--node-application); }

.modifier {
  background-color: var(--node-modifier); }

/**
* Plus shape
*/
.join {
  background-color: var(--node-join);
  height: 100px;
  width: 100px;
  clip-path: polygon(0 25%, 25% 25%, 25% 0, 75% 0, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0 75%); }

/**
* X shape
*/
.split {
  width: 100px;
  height: 100px;
  clip-path: polygon(25% 0, 0 25%, 25% 50%, 0 75%, 25% 100%, 50% 75%, 75% 100%, 100% 75%, 75% 50%, 100% 25%, 75% 0, 49% 25%);
  background-color: var(--node-split); }

/**
* Diamond shape
*
* There are multiple ways to generate a diamond 
* shape, using a mask allows the input and output 
* markers to be vertical without some crazy 
* repositioning - however, using the mask hides
* part of the inputs/outputs, because those items
* sit inside of the shape and not outside of it
*/
.decision {
  background-color: var(--node-decision);
  height: 100px;
  width: 100px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }

/**
* Circle shape
*/
.event {
  border-radius: 50%;
  background-color: var(--node-event);
  width: 60px;
  height: 60px; }

/**
* Style Type
*
* Global Styles
*/
/*  Global Variables  */
:root {
  --theme-black: #111111;
  --theme-font-family: 'Rokkitt', serif;
  --theme-white: #f3f3f3;
  --theme-accent: #9cd8d7;
  --margin-step: 1em;
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --border-color: #cacaca;
  --background-color: #fafafa;
  --background-box-title: #f7f7f7;
  --canvas-background-color: rgb(17, 161, 172);
  /**
    * Node colors
    */
  --node-request: #DA0063;
  --node-project: #652CB3;
  --node-filter: #12CDD4;
  --node-application: #222222;
  --node-modifier: #2DC6F0;
  --node-join: #11A1AC;
  --node-split: #11A1AC;
  --node-decision: #2D9BF0;
  --node-event: #DA0063;
  /**
    * Node connectors
    */
  --node-size: 20px;
  --node-input-color: rgb(251, 251, 0);
  --node-output-color: rgb(0, 180, 251);
  --node-delete: rgb(255, 0, 0);
  /**
    * Node paths
    */
  --node-path-main: rgb(70, 130, 180);
  --node-path-hover: rgb(17, 104, 175);
  --node-path-selected: rgb(67, 185, 147);
  /* Standard Breakpoints
    320px — 480px: Mobile devices
    481px — 768px: iPads, Tablets
    769px — 1024px: Small screens, laptops
    1025px — 1200px: Desktops, large screens
    1201px and more —  Extra large screens, TV
    */ }

.flexbox-base, .drawflow .fathym-node .inputs, .drawflow .fathym-node .outputs {
  display: flex;
  justify-content: center;
  align-items: center; }

.container {
  display: flex;
  flex-flow: row;
  height: 100%;
  min-height: 100%;
  padding: 10px; }

/*  Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

html, body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background-color); }

.flexbox-row {
  flex-direction: column; }

@media only screen and (max-width: 768px) {
  .col {
    width: 50px; }
  .col .drag-item span {
    display: none; }
  #drawflow {
    width: calc(100vw - 51px); } }

@media only screen and (max-width: 768px) {
  .modal-content {
    width: 80%; } }

/**
* Style Type
*
* Main Structural Styles
*/
/**
* Main container wrapper
*/
.wrapper {
  width: 100%;
  height: calc(100vh - 67px);
  display: flex; }

/**
* Main canvas where we drag nodes to
*/
#drawflow {
  position: relative;
  width: calc(100vw - 301px);
  height: calc(100% - 50px);
  top: 40px;
  background: var(--canvas-background-color);
  background-size: 25px 25px;
  /*
    * background grid lines
    */
  background-image: linear-gradient(to right, #f1f1f1 1px, transparent 1px), linear-gradient(to bottom, #f1f1f1 1px, transparent 1px); }

/**
* Sidenav
*/
.col {
  overflow: auto;
  width: 300px;
  height: 100%;
  border-right: 1px solid var(--border-color); }

/**
* Header
*/
header {
  height: 66px;
  border-bottom: 1px solid var(--border-color);
  padding-left: 20px; }

header h2 {
  margin: 0px;
  line-height: 66px; }

header a {
  color: black; }

/**
* Drag items from side nav
*/
.drag-item {
  line-height: 50px;
  border-bottom: 1px solid var(--border-color);
  padding-left: 20px;
  cursor: move;
  user-select: none; }

/**
* Tab menu
*/
.tab-menu {
  position: absolute;
  height: 40px;
  display: block;
  background: white;
  width: 100%; }

.tab-menu ul {
  padding: 0px;
  margin: 0px;
  line-height: 40px; }

.tab-menu ul li {
  display: inline-block;
  margin-left: 10px;
  border-right: 1px solid var(--border-color);
  padding-right: 10px;
  line-height: 40px;
  cursor: pointer; }

.tab-menu ul li.selected {
  font-weight: bold; }

/**
* Style Type
*
* Node Structural Styles
*/
.parent-drawflow {
  display: flex;
  overflow: hidden;
  touch-action: none;
  outline: none; }

/**
* Canvas
*/
.drawflow {
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
  /**
* Parent to clipped path elements
*
* Use this so we can have drop shadows on clipped paths
*/ }
  .drawflow .fathym-node {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    /**
    * Items that sit inside nodes
    */ }
    .drawflow .fathym-node.selected {
      filter: brightness(1.25);
      -webkit-filter: brightness(1.25); }
    .drawflow .fathym-node:hover {
      cursor: move; }
    .drawflow .fathym-node .inputs, .drawflow .fathym-node .outputs {
      flex-direction: row;
      position: absolute;
      z-index: 2; }
    .drawflow .fathym-node .inputs {
      top: calc(5px - var(--node-size)); }
    .drawflow .fathym-node .outputs {
      bottom: calc(5px - var(--node-size)); }
    .drawflow .fathym-node .input, .drawflow .fathym-node .output {
      width: var(--node-size);
      height: var(--node-size);
      background: white;
      border-radius: 50%;
      border: 2px solid black;
      cursor: crosshair;
      margin: 0px 5px; }
      .drawflow .fathym-node .input:hover, .drawflow .fathym-node .output:hover {
        background-color: greenyellow; }
    .drawflow .fathym-node .input {
      background-color: var(--node-input-color); }
    .drawflow .fathym-node .output {
      background-color: var(--node-output-color); }
  .drawflow .node-drop-shadow {
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.25)); }
  .drawflow .parent-node {
    position: relative; }

.drawflow-delete {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: var(--node-delete);
  color: white;
  z-index: 4;
  font-size: large;
  border: 2px solid white;
  line-height: 0;
  font-weight: bold;
  border-radius: 50%;
  font-family: monospace;
  cursor: pointer; }

/**
* Position of delete icon
*/
.parent-node .drawflow-delete {
  right: -15px;
  top: -15px; }

/**
* Style Type
*
* Node Path Styles
*/
.drawflow svg {
  z-index: 0;
  position: absolute;
  overflow: visible !important; }

.drawflow .main-path {
  fill: none;
  stroke-width: 5px;
  stroke: var(--node-path-main); }

.drawflow .connection {
  position: absolute;
  pointer-events: none; }
  .drawflow .connection .main-path {
    fill: none;
    stroke-width: 5px;
    stroke: var(--node-path-main);
    pointer-events: all; }
  .drawflow .connection .error {
    stroke: red !important; }
  .drawflow .connection .main-path:hover {
    stroke: var(--node-path-hover);
    cursor: pointer; }
  .drawflow .connection .main-path.selected {
    stroke: var(--node-path-selected); }
  .drawflow .connection .point {
    cursor: move;
    stroke: black;
    stroke-width: 2;
    fill: white;
    pointer-events: all; }
    .drawflow .connection .point .selected, .drawflow .connection .point:hover {
      fill: var(--node-path-hover); }

/*# sourceMappingURL=global-scss.min.css.map */
    `
  }

  render() {
    return html `

    <!--
    <link rel="stylesheet" href="./assets/styles/global-scss.min.css">
    -->
      

      <template id="request">
        <div class="node-drop-shadow">
          <div class="gap flexbox-row request">
              <span df-Name></span>
              <input type="text" df-Host>
              <a href="#" df-Host></a>
          </div>
        </div>
      </template>

      <template id="request-template">
        <div class="node-drop-shadow">
          <div class="request">
              <span>Request</span>
          </div>
        </div>
      </template>

      <template id="project-template">
        <div class="node-drop-shadow">
          <div class="project gap flexbox-row flexbox-base">
              <span style="text-align: center" df-Name></span>
              <a href="#" df-Host style="color: white; text-align: center"></a>
          </div>
        </div>
      </template>

      <template id="route-template">
        <div class="node-drop-shadow">
          <div class="filter">
              <span>Filter</span>
          </div>
        </div>
      </template>

      <template id="application-template">
        <div class="node-drop-shadow">
          <div class="application">
            <div class="flexbox-base" style="height: 100px">
              <span>Application</span>
            </div>
          </div>
        </div>
      </template>

    <header>
      <h2>${ this.HeaderTitle }</h2>
    </header>

    <div class="wrapper">
    
      <!-- 
        Left side menu items
      -->
      <drag-menu-items 
        id="drag-items" 
        class="col"
        .MenuItems=${ this.SideMenuItems }>
      </drag-menu-items>

      <div class="col-right">
        <div class="tab-menu">
          <ul>
            <li onclick="FlowTool.ChangeModule('NapkinIDE'); 
              menuTabSelected(event);" class="selected">
              Napkin IDE Change
            </li>
            <li onclick="FlowTool.ChangeModule('Home'); 
                menuTabSelected(event);">
              Test Module
            </li>
            <!-- <li onclick="FlowTool.ChangeModule('Test'); 
                menuTabSelected(event);">
                Test Module
            </li> -->
          </ul>
        </div>

        <!-- Flow Tool -->
        <!--
        <div 
          id="drawflow" 
          @drop="${ (e: DragEvent) => this.dragEvent('drop', e) }" 
          @dragover="${ (e: DragEvent) => this.dragEvent('dragover', e) }">
        </div>
        -->
        <canvas-control 
          id="drawflow"
          @drop="${ (e: DragEvent) => this.dragEvent('drop', e) }" 
          @dragover="${ (e: DragEvent) => this.dragEvent('dragover', e) }">

          <p>This is the Canvas</p>
          
        </canvas-control>
      </div>
    </div>
  </div>
    `
  }

  /**
     * Overrides the shadow DOM (turns it off) - one reason for this is to use 
     * global styles 
     * 
     * @returns this control
     */
    // public createRenderRoot(): RollUpTest {
    //     return this;
    // }
}
