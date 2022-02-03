import { DispatchedEventsModel } from './../models/events/dispatched-events.model.js';
import { DataFlowDataModel } from '../models/dataflow-data.model.js';
import { NodeTemplates } from '../templates/node-templates.js';
import { NodeModel } from '../models/nodes/node.model.js';
import { EnterpriseAsCode } from '@semanticjs/common';


export const TestNapkinIDEConfig: any = {
  'NodeTypes': {
    request: {
      AllowedOutputTypes: ['PROJECT'],
      ClassList: ['entry-node'],
      HTMLTemplateID: 'RequestTemplate',
      InputCountLimit: 1
    },
    project: {
      AllowedInputTypes: ['REQUEST'],
      HTMLTemplateID: 'ProjectTemplate',
      InputCountLimit: 1
    },
    'route-filter': {
      AllowedInputTypes: ['PROJECT'],
      AllowedOutputTypes: ['APPLICATION'],
      HTMLTemplateID: 'RouteTemplate',
    },
    application: {
      AllowedInputTypes: ['ROUTE_FILTER', 'PROJECT'],
      ClassList: ['exit-node'],
      HTMLTemplateID: 'ApplicationTemplate',
      OutputCountLimit: 0,
    },
  },
};


export class ConstantUtils {

  static count: number = 0;

  protected static getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName];
  }

  public static ORIGINAL_TEST_DATA: any = {
   Nodes: [
    {
      ID: '1',
      Type: 'request',
      ClassList: ['persisted-class'],
      Data: {},
    },
    {
      ID: '2',
      Type: 'project',
      Data: {
        Name: 'IoT Ensemble',
        Host: 'www.iot-ensemble.com',
      }
    },
    {
      ID: '3',
      Type: 'route-filter',
      Data: {
        Path: '/',
      },
    },
    {
      ID: '4',
      Type: 'application',
      Data: {
        Name: 'Application',
        Package: '@iot-ensemble/public-web',
        Version: 'latest',
      },
    }
   ],
   Edges: [
    {
      ID: '1',
      Outputs: {
        output_1: {
          Connections: [],
        }
      },
      NodeInID: '1',
      NodeOutID: '2',
    },
    {
      ID: '2',
      Inputs: {
        input_1: {
          Connections: [
            {
              node: '1',
              input: 'output_1',
            },
          ],
        }
      },
      Outputs: {
        output_1: {
          Connections: [],
        }
      },
      NodeInID: '2',
      NodeOutID: '3',
    },
    {
      ID: '3',
      Inputs: {
        input_1: {
          Connections: [
            {
              node: '2',
              input: 'output_1',
            },
          ],
        },
        input_2: {
          Connections: [],
        }
      },
      Outputs: {
        output_1: {
          Connections: [],
        },
        output_2: {
          Connections: [],
        }
      },
      NodeInID: '2',
      NodeOutID: '3',
    },
    {
      ID: '4',
      Inputs: {
        input_1: {
          Connections: [
            {
              node: '3',
              input: 'output_1',
            },
          ],
        }
      },
      NodeInID: '2',
      NodeOutID: '3',
    }
   ]
  };

  public static FULL_EXTERNAL_DATA: any = {
    
    
          "Name": "shannon.bruns@fathym.com Enterprise",
          "ID": "6e8f3051-6b07-430a-b987-c68692530131",
          "Nodes": [
              {
                  "ID": "1",
                  "Type": "request",
                  "ClassList": [],
                  "Data": {}
              },
              {
                  "Type": "project",
                  "ID": "2",
                  "Data": {
                      "Name": "Docusaurus - Documentation - Open Source",
                      "Hosts": [
                          "b206e58771d7-shared.lowcodeunit.com"
                      ]
                  }
              },
              {
                  "Type": "application",
                  "ID": "3",
                  "Data": {
                      "Details": {
                          "Description": "A basic staritng point for sites and documentation built with Docusaurus.",
                          "Name": "Docusaurus - Documentation - Open Source",
                          "Priority": 5000,
                          "PriorityShift": 0
                      },
                      "Processor": {
                          "CacheControl": null,
                          "ModifierLookups": null,
                          "Priority": 0,
                          "Type": "DFS",
                          "BaseHref": "/",
                          "DefaultFile": "index.html",
                          "ID": "5d91e82e-b506-4bb6-9ca0-b2cd425ef4cc",
                          "Label": "DFSProcessor",
                          "Registry": "6e8f3051-6b07-430a-b987-c68692530131",
                          "TenantLookup": "6e8f3051-6b07-430a-b987-c68692530131"
                      }
                  }
              },
              {
                  "Type": "project",
                  "ID": "4",
                  "Data": {
                      "Name": "Docusaurus - Documentation - Open Source",
                      "Hosts": [
                          "114e5118f77b-shared.lowcodeunit.com"
                      ]
                  }
              },
              {
                  "Type": "application",
                  "ID": "5",
                  "Data": {
                      "Details": {
                          "Description": "A basic staritng point for sites and documentation built with Docusaurus.",
                          "Name": "Docusaurus - Documentation - Open Source",
                          "Priority": 5000,
                          "PriorityShift": 0
                      },
                      "Processor": {
                          "CacheControl": null,
                          "ModifierLookups": null,
                          "Priority": 0,
                          "Type": "DFS",
                          "BaseHref": "/",
                          "DefaultFile": "index.html",
                          "ID": "fae07c14-39b9-4388-8160-3023d72a9b98",
                          "Label": "DFSProcessor",
                          "Registry": "6e8f3051-6b07-430a-b987-c68692530131",
                          "TenantLookup": "6e8f3051-6b07-430a-b987-c68692530131"
                      }
                  }
              },
              {
                  "Type": "project",
                  "ID": "6",
                  "Data": {
                      "Name": "Docusaurus - Documentation - Open Source",
                      "Hosts": [
                          "e04ad1e695e9-shared.lowcodeunit.com"
                      ]
                  }
              },
              {
                  "Type": "application",
                  "ID": "7",
                  "Data": {
                      "Details": {
                          "Description": "A basic staritng point for sites and documentation built with Docusaurus.",
                          "Name": "Docusaurus - Documentation - Open Source",
                          "Priority": 5000,
                          "PriorityShift": 0
                      },
                      "Processor": {
                          "CacheControl": null,
                          "ModifierLookups": null,
                          "Priority": 0,
                          "Type": "DFS",
                          "BaseHref": "/",
                          "DefaultFile": "index.html",
                          "ID": "bf7797b7-ac1e-4836-a449-f3ffb21c3cbb",
                          "Label": "DFSProcessor",
                          "Registry": "6e8f3051-6b07-430a-b987-c68692530131",
                          "TenantLookup": "6e8f3051-6b07-430a-b987-c68692530131"
                      }
                  }
              },
              {
                  "Type": "project",
                  "ID": "8",
                  "Data": {
                      "Name": "Docusaurus - Documentation - Open Source",
                      "Hosts": [
                          "9f2199a5afce-shared.lowcodeunit.com"
                      ]
                  }
              },
              {
                  "Type": "application",
                  "ID": "9",
                  "Data": {
                      "Details": {
                          "Description": "A basic staritng point for sites and documentation built with Docusaurus.",
                          "Name": "Docusaurus - Documentation - Open Source",
                          "Priority": 5000,
                          "PriorityShift": 0
                      },
                      "Processor": {
                          "CacheControl": null,
                          "ModifierLookups": null,
                          "Priority": 0,
                          "Type": "DFS",
                          "BaseHref": "/",
                          "DefaultFile": "index.html",
                          "ID": "e5b8be68-91c6-4927-9cda-8264f018a3d2",
                          "Label": "DFSProcessor",
                          "Registry": "6e8f3051-6b07-430a-b987-c68692530131",
                          "TenantLookup": "6e8f3051-6b07-430a-b987-c68692530131"
                      }
                  }
              }
          ],
          "Edges": [
              {
                "ID": "sys-edge-1",
                "NodeInID": "2",
                "NodeOutID": "3"
              },
              {
                  "ID": "sys-edge-2",
                  "NodeInID": "1",
                  "NodeOutID": "2"
              },
              {
                  "ID": "sys-edge-3",
                  "NodeInID": "2",
                  "NodeOutID": "route-filter-path-/.*-0"
              },
              {
                  "ID": "sys-edge-4",
                  "NodeInID": "route-filter-path-/.*-0",
                  "NodeOutID": "3"
              },
              {
                  "ID": "sys-edge-5",
                  "NodeInID": "1",
                  "NodeOutID": "4"
              },
              {
                  "ID": "sys-edge-6",
                  "NodeInID": "4",
                  "NodeOutID": "route-filter-path-/.*-0"
              },
              {
                  "ID": "sys-edge-7",
                  "NodeInID": "route-filter-path-/.*-0",
                  "NodeOutID": "5"
              },
              {
                  "ID": "sys-edge-8",
                  "NodeInID": "1",
                  "NodeOutID": "6"
              },
              {
                  "ID": "sys-edge-9",
                  "NodeInID": "6",
                  "NodeOutID": "route-filter-path-/.*-0"
              },
              {
                  "ID": "sys-edge-10",
                  "NodeInID": "route-filter-path-/.*-0",
                  "NodeOutID": "7"
              },
              {
                  "ID": "sys-edge-11",
                  "NodeInID": "1",
                  "NodeOutID": "8"
              },
              {
                  "ID": "sys-edge-12",
                  "NodeInID": "8",
                  "NodeOutID": "route-filter-path-/.*-0"
              },
              {
                  "ID": "sys-edge-13",
                  "NodeInID": "route-filter-path-/.*-0",
                  "NodeOutID": "9"
              }
          ]
      }

  public static EXTERNAL_DATA_TEST: any = {
    "Name": "shannon.bruns@fathym.com Enterprise",
    "ID": "6e8f3051-6b07-430a-b987-c68692530131",
    Nodes: [
        {
            "ID": "1",
            "Type": "request",
            "ClassList": [],
            "Data": {}
        },
        {
            "Type": "project",
            "ID": "2",
            "Data": {
                "Name": "Docusaurus - Documentation - Open Source",
                "Hosts": [
                    "b206e58771d7-shared.lowcodeunit.com"
                ]
            }
        }
    ],
    Edges: [
        {
            "ID": "sys-edge-2",
            "NodeInID": "1",
            "NodeOutID": "2"
        },
        {
            "ID": "sys-edge-3",
            "NodeInID": "2",
            "NodeOutID": "route-filter-path-/.*-0"
        }
    ]
  }

  public static DATA_TEST: any = {
      
  Nodes: [
    {
      ID: '11a', 
      Type: 'request',
      ClassList: ['persisted-class'],
      Data: {},
    },
    {
      ID: '2',
      Type: 'project',
      Data: {
        Name: 'IoT Ensemble',
        Host: 'www.iot-ensemble.com',
      },
    },
  ],
  Edges: [
    {
      ID: '11a',
      Outputs: {
        output_1: {
          Connections: [],
        }
      }
    },
    {
      ID: '2',
      Inputs: {
        input_1: {
          Connections: [
            {
              node: '11a',
              input: 'output_1',
            },
          ],
        }
      },
      Outputs: {
        output_1: {
          Connections: [],
        }
      }
    }
  ],
  }

  public static MapData(moduleName: string, data: any): any {

    return {
      Module: moduleName,
      Data: data.Nodes!.map((node: any, index: number) => {

        const config = TestNapkinIDEConfig.NodeTypes![<string>node.Type];
      
      /**
       * If NodeInID exists, then we know that NodeInID (node connecting from) 
       * has an output node
       */
        const outputs = data.Edges?.filter(
          (edge: any) => edge.NodeInID === node.ID)
          .map((edge: any) => {
        
            if (!edge.Outputs) {
              edge.Outputs = {
                output_1: {
                  Connections: [
                    // {
                    //   node: edge.NodeOutID,
                    //   input: 'input_1',
                    // }
                  ]
                },
                // output_2: {
                //   Connections: [

                //   ]
                // }
              }
            }

          return edge.Outputs;
        });

        const inputs = data.Edges?.filter(
          (edge: any) => edge.NodeOutID === node.ID)
          .map((edge: any) => {
        
            if (!edge.Inputs) {
              edge.Inputs = {
                input_1: {
                  Connections: [
                    {
                      node: edge.NodeInID,
                      input: 'output_1',
                    }
                  ]
                },
                // output_2: {
                //   Connections: [

                //   ]
                // }
              }
            }

          return edge.Inputs;
        });

        return ConstantUtils.newModel(config, node, inputs, outputs, index);
      })
    }
  }

  /**
   * Return a new model
   *
   * @param config
   * @param node
   * @param inputs
   * @param outputs
   * @returns
   */
  protected static newModel(
    config: any, 
    node: any, 
    inputs: any, 
    outputs: any,
    index: number
    ): NodeModel {

    return <NodeModel>{
      AllowedInputTypes: config.AllowedInputTypes,
      AllowedOutputTypes: config.AllowedOutputTypes,
      ClassList: node.ClassList,
      Data: node.Data,
      HTML: this.getProperty(NodeTemplates, config.HTMLTemplateID),
      // ID: `${++ConstantUtils.count}`,
      ID: node.ID,
      Inputs: inputs[0],
      NodeType: node.Type.toUpperCase(),
      NumOfInputs: config.InputCountLimit,
      NumOfOutputs: config.OutputCountLimit,
      Outputs: outputs[0],
      PosY: node.PositionY || (index + 1) * 50,
      PosX: node.PositionX || (index + 1) * 75,
      TypeNode: false,
    };
  }

  public static DISPATCHED_EVENTS: Array<DispatchedEventsModel> = [
    { Event: 'mouseMove', Message: 'Mouse position', Params: ['x', 'y'] },
    { Event: 'nodeMoved', Message: 'Node moved' },
    { Event: 'nodeCreated', Message: 'Node created' },
    { Event: 'nodeRemoved', Message: 'Node removed' },
    { Event: 'nodeSelected', Message: 'Node selected' },
    { Event: 'moduleCreated', Message: 'Module created' },
    { Event: 'moduleChanged', Message: 'Module Changed' },
    { Event: 'connectionCreated', Message: 'Connection created' },
    { Event: 'zoom', Message: 'Zoom' },
    { Event: 'translate', Message: 'Translate' },
    { Event: 'addReroute', Message: 'Add reroute' },
    { Event: 'removeReroute', Message: 'Remove reroute' },
  ];
}
