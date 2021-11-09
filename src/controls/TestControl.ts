import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-control')

export class TestControl extends LitElement {

    constructor() {
        super();
    }


    public render(): any {
        return html 
        `
        <div style="height: 400px; width: 400px; background-color: red">
            Test Control
            <slot></slot>
        </div>
        `
    }
}