import { NodeModel } from "./nodes/node.model";

export class DataFlowDataModel {
    public Data!: Array<NodeModel>;
    // public Nodes?: Array<NodeModel>;
    // public Edges?: Array<any>;
    public Module!: string;

    constructor(opts: DataFlowDataModel) {
        Object.assign(this, opts); // destructure values
    }
}