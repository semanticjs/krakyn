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

export const ExternalDataConfig: any = {
    "Name": "shannon.bruns@fathym.com Enterprise",
    "ID": "6e8f3051-6b07-430a-b987-c68692530131",
    "Nodes": [
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
      },
      {
        "Type": "application",
        "ID": "application-a741de99-c800-4a53-8078-da6ba0b4dcae",
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
        "ID": "project-b42fcac1-5cad-4359-be75-47b7d49dfba7",
        "Data": {
          "Name": "Docusaurus - Documentation - Open Source",
          "Hosts": [
            "114e5118f77b-shared.lowcodeunit.com"
          ]
        }
      },
      {
        "Type": "application",
        "ID": "application-0f69f553-337f-43cd-9a2e-8d552b38c242",
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
        "ID": "project-7b7ffe01-5f24-4c5f-b45e-ef12b070b5c0",
        "Data": {
          "Name": "Docusaurus - Documentation - Open Source",
          "Hosts": [
            "e04ad1e695e9-shared.lowcodeunit.com"
          ]
        }
      },
      {
        "Type": "application",
        "ID": "application-b53ba6ed-1c7e-4483-aedc-4fdc05179c33",
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
        "ID": "project-a3ba12d9-ce59-4202-8952-63340e45bba4",
        "Data": {
          "Name": "Docusaurus - Documentation - Open Source",
          "Hosts": [
            "9f2199a5afce-shared.lowcodeunit.com"
          ]
        }
      },
      {
        "Type": "application",
        "ID": "application-6a00c64d-701c-400e-8c6d-1337b11974dd",
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
        "ID": "sys-edge-2",
        "NodeInID": "sys-1",
        "NodeOutID": "project-1a9f69fb-50ce-46b9-a934-a5191a0959cc"
      },
      {
        "ID": "sys-edge-3",
        "NodeInID": "project-1a9f69fb-50ce-46b9-a934-a5191a0959cc",
        "NodeOutID": "route-filter-path-/.*-0"
      },
      {
        "ID": "sys-edge-4",
        "NodeInID": "route-filter-path-/.*-0",
        "NodeOutID": "application-a741de99-c800-4a53-8078-da6ba0b4dcae"
      },
      {
        "ID": "sys-edge-5",
        "NodeInID": "sys-1",
        "NodeOutID": "project-b42fcac1-5cad-4359-be75-47b7d49dfba7"
      },
      {
        "ID": "sys-edge-6",
        "NodeInID": "project-b42fcac1-5cad-4359-be75-47b7d49dfba7",
        "NodeOutID": "route-filter-path-/.*-0"
      },
      {
        "ID": "sys-edge-7",
        "NodeInID": "route-filter-path-/.*-0",
        "NodeOutID": "application-0f69f553-337f-43cd-9a2e-8d552b38c242"
      },
      {
        "ID": "sys-edge-8",
        "NodeInID": "sys-1",
        "NodeOutID": "project-7b7ffe01-5f24-4c5f-b45e-ef12b070b5c0"
      },
      {
        "ID": "sys-edge-9",
        "NodeInID": "project-7b7ffe01-5f24-4c5f-b45e-ef12b070b5c0",
        "NodeOutID": "route-filter-path-/.*-0"
      },
      {
        "ID": "sys-edge-10",
        "NodeInID": "route-filter-path-/.*-0",
        "NodeOutID": "application-b53ba6ed-1c7e-4483-aedc-4fdc05179c33"
      },
      {
        "ID": "sys-edge-11",
        "NodeInID": "sys-1",
        "NodeOutID": "project-a3ba12d9-ce59-4202-8952-63340e45bba4"
      },
      {
        "ID": "sys-edge-12",
        "NodeInID": "project-a3ba12d9-ce59-4202-8952-63340e45bba4",
        "NodeOutID": "route-filter-path-/.*-0"
      },
      {
        "ID": "sys-edge-13",
        "NodeInID": "route-filter-path-/.*-0",
        "NodeOutID": "application-6a00c64d-701c-400e-8c6d-1337b11974dd"
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
   * @returns 
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

      const inputs = ExternalDataConfig.Edges?.filter(
        (edge: any) => edge.NodeOutID === node.ID
      ).map((edge: any) => {
        alert('asdsdf');
        const newEdge: any = 'New Edge';
        let timer: string = 'timer';

        return edge.Inputs;
      });

      const outputs = ExternalDataConfig.Edges?.filter(
        (edge: any) => edge.NodeOutID === node.ID
      ).map((edge: any) => {

        return edge.Outputs
      });

      return ConstantUtils.newModel(config, node, inputs, outputs);
    }),
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
