/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PowerLogin {
    }
    interface PowerPwaIndicator {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPowerLoginElement extends Components.PowerLogin, HTMLStencilElement {
    }
    var HTMLPowerLoginElement: {
        prototype: HTMLPowerLoginElement;
        new (): HTMLPowerLoginElement;
    };
    interface HTMLPowerPwaIndicatorElement extends Components.PowerPwaIndicator, HTMLStencilElement {
    }
    var HTMLPowerPwaIndicatorElement: {
        prototype: HTMLPowerPwaIndicatorElement;
        new (): HTMLPowerPwaIndicatorElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "power-login": HTMLPowerLoginElement;
        "power-pwa-indicator": HTMLPowerPwaIndicatorElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PowerLogin {
    }
    interface PowerPwaIndicator {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "power-login": PowerLogin;
        "power-pwa-indicator": PowerPwaIndicator;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "power-login": LocalJSX.PowerLogin & JSXBase.HTMLAttributes<HTMLPowerLoginElement>;
            "power-pwa-indicator": LocalJSX.PowerPwaIndicator & JSXBase.HTMLAttributes<HTMLPowerPwaIndicatorElement>;
        }
    }
}
