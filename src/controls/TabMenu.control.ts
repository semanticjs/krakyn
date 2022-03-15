import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ModuleMenuModel } from '../models/menu/module-menu.model.js';

@customElement('tab-menu-control')

export class TabMenuControl extends LitElement {

    /**
     * Change module function passed in from parent
     */
    @property({ type: Function })
    public ChangeModuleEvent: Function;

    /**
     * Tab items
     */
    @property({ type: Array })
    public TabItems: Array<ModuleMenuModel>;

    constructor() {
        super();

        /**
         * Initialize array
         */
        this.TabItems = [];
    }

    /**
     * Add / remove styles on menu tab click
     **/
     protected menuTabSelected(event: any): void {

        // add this for now, just to ignore it - shannon
        if (!this.shadowRoot) {
            return;
        }

        const all = this.shadowRoot.querySelectorAll(".tab-menu ul li");
    
        /**
         * all this does is set the font in the tab to bold
        */
        for (var i = 0; i < all.length; i++) {
          all[i].classList.remove('selected');
        }
  
        event.target.classList.add('selected');
    }

    /**
     * 
     * @param module new module to load
     * @param e 
     */
    protected tabItemClicked(module: string, e: Event): void {
        this.ChangeModuleEvent(module);
        this.menuTabSelected(e);
    }

    //  <link rel="stylesheet" href="./assets/styles/global-scss.min.css">
    public render(): TemplateResult {
        return html 
        `
        <div class="tab-menu">
            <ul>
                ${ this.TabItems.map((item: ModuleMenuModel) => {
                    return html 
                    `
                        <li 
                       sdfds
                        </li>
                    `
                }) }
            </ul>
        </div>
        `
    }

     /**
     * Overrides the shadow DOM (turns it off) - one reason for this is to use 
     * global styles 
     * 
     * @returns this control
     */
    public createRenderRoot(): TabMenuControl {
        return this;
    }
}