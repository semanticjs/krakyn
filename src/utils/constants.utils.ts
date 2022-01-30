import { DispatchedEventsModel } from './../models/events/dispatched-events.model.js';
import { DataFlowDataModel } from '../models/dataflow-data.model.js';
import { NodeTemplates } from '../templates/node-templates.js';
import { NodeModel } from '../models/nodes/node.model.js';
import { EnterpriseAsCode } from '@semanticjs/common';

// import {
//   TestNapkinIDEConfig,
//   TestNapkinIDEFlow,
//   NapkinIDENode,
//   NapkinIDEEdge,
// } from '@semanticjs/napkin-ide';

export const ExternalDataTest: any = {
  
  Nodes: [
    {
      ID: '1AA', // ids that aren't just numbers don't work - also, the position
                // of the node, if not set in the config, is applied by multiplying
                // the id by X, so large ids put the node off screen
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
      ID: '1AA',
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
              node: 'AA',
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

export const ExternalDataConfig: any = {

    "Name": "shannon.bruns@fathym.com Enterprise",
    "ID": "6e8f3051-6b07-430a-b987-c68692530131",
    Nodes: [
        {
            "ID": "sys-1",
            "Type": "request",
            "ClassList": [],
            "Data": {}
        },
        {
            "Type": "project",
            "ID": "project-1a9f69fb-50ce-46b9-a934-a5191a0959cc",
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
            "NodeInID": "sys-1",
            "NodeOutID": "project-1a9f69fb-50ce-46b9-a934-a5191a0959cc",
            Outputs: {
              output_1: {
                Connections: [],
              }
            },
        },
        {
            "ID": "sys-edge-3",
            "NodeInID": "project-1a9f69fb-50ce-46b9-a934-a5191a0959cc",
            "NodeOutID": "route-filter-path-/.*-0",
            Inputs: {
              input_1: {
                Connections: [
                  {
                    node: 'sys-1',
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
        }
    ]
}
export const TestNapkinIDEConfig: any = {
  'NodeTypes': {
    request: {
      AllowedOutputTypes: ['PROJECT'],
      ClassList: ['entry-node'],
      HTMLTemplateID: 'RequestTemplate',
      InputCountLimit: 1,
    },
    project: {
      AllowedInputTypes: ['REQUEST'],
      HTMLTemplateID: 'ProjectTemplate',
      InputCountLimit: 1,
    },
    'route-filter': {
      AllowedInputTypes: ['PROJECT'],
      AllowedOutputTypes: ['APPLICATION'],
      HTMLTemplateID: 'RouteTemplate',
    },
    application: {
      AllowedInputTypes: ['ROUTE_FILTER'],
      ClassList: ['exit-node'],
      HTMLTemplateID: 'ApplicationTemplate',
      OutputCountLimit: 0,
    },
  },
};

export const TestNapkinIDEFlow: any = {
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
      },
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
    },
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
  ],
};

export class ConstantUtils {

  static count: number = 0;

  protected static getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName];
  }

  /**
   * My test - shannon
<<<<<<< HEAD
   * 
   * @returns 
=======
   * @returns
>>>>>>> f5fa06b3992f6283d8dd5bda1c44264605467da9
   */
  public static DataToImport(): EnterpriseAsCode {
    let code: EnterpriseAsCode;
    code.Enterprise.Name = 'NapkinIDE';
    code.EnterpriseLookup = '1';


    return code;
  }

  public static NAPKIN_IDE_MODULE_DATA: DataFlowDataModel = {
    Module: 'NapkinIDE',
    Data: TestNapkinIDEFlow.Nodes!.map((node: any) => {
      const config = TestNapkinIDEConfig.NodeTypes![<string>node.Type];

      const inputs = TestNapkinIDEFlow.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        return edge.Inputs;
      });

      const outputs = TestNapkinIDEFlow.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        return edge.Outputs
      });

      return ConstantUtils.newModel(config, node, inputs, outputs);
    }),
  };

  public static HOME_MODULE_DATA: DataFlowDataModel = {
    Module: 'Home',
    Data: TestNapkinIDEFlow.Nodes!.map((node: any) => {
      const config = TestNapkinIDEConfig.NodeTypes![<string>node.Type];

      const inputs = TestNapkinIDEFlow.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        return edge.Inputs;
      });

      const outputs = TestNapkinIDEFlow.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        return edge.Outputs
      });

      return ConstantUtils.newModel(config, node, inputs, outputs);
    }),
  };

  /**
   * Testing new data structure for external data
   *
   * @returns data object
   */
  public static EXTERNAL_MODULE_DATA: any = {
    Module: 'ExternalData',
    Data: ExternalDataConfig.Nodes!.map((node: any) => {
      const config = TestNapkinIDEConfig.NodeTypes![<string>node.Type];

      const inputs = TestNapkinIDEFlow.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        if (!edge.Inputs) {

          edge.Inputs = {
            input_1: {
              Connections: [
                {
                  node: edge.ID,
                  input: 'output_1'
                }
              ]
            }
          }
        }

        return edge.Inputs;
      });

      const outputs = TestNapkinIDEFlow.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        if (!edge.Outputs) {
          
          edge.Outputs = {
            output_1: {
              Connections: [
                {
                  node: edge.ID,
                  output: 'input_1'
                }
              ]
            }
          }
        }

        return edge.Outputs
      });

      return ConstantUtils.newModel(config, node, inputs, outputs);
    }),
  }

  public static EXTERNAL_TEST_DATA: DataFlowDataModel = {
    Module: 'ExternalTestData',
    Data: ExternalDataTest.Nodes!.map((node: any) => {
      const config = TestNapkinIDEConfig.NodeTypes![<string>node.Type];

      const inputs = ExternalDataTest.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        return edge.Inputs;
      });

      const outputs = ExternalDataTest.Edges?.filter(
        (edge: any) => edge.ID === node.ID
      ).map((edge: any) => {

        return edge.Outputs
      });

      return ConstantUtils.newModel(config, node, inputs, outputs);
    }),
  };

  /**
   * Return a new model
   *
   * @param config
   * @param node
   * @param inputs
   * @param outputs
   * @returns
   */
  protected static newModel(config: any, node: any, inputs: any, outputs: any): NodeModel {

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
      PosY: node.PositionY || node.ID * 150,
      PosX: node.PositionX || node.ID * 100,
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
