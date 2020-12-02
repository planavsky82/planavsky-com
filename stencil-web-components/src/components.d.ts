/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Navigation, NavigationItem, } from "@models/navigation";
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
    interface PowerNav {
        "data": Navigation;
    }
    interface PowerPwaIndicator {
        "display": boolean;
        "image": string;
    }
    interface PowerReadMore {
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
    interface HTMLPowerNavElement extends Components.PowerNav, HTMLStencilElement {
    }
    var HTMLPowerNavElement: {
        prototype: HTMLPowerNavElement;
        new (): HTMLPowerNavElement;
    };
    interface HTMLPowerPwaIndicatorElement extends Components.PowerPwaIndicator, HTMLStencilElement {
    }
    var HTMLPowerPwaIndicatorElement: {
        prototype: HTMLPowerPwaIndicatorElement;
        new (): HTMLPowerPwaIndicatorElement;
    };
    interface HTMLPowerReadMoreElement extends Components.PowerReadMore, HTMLStencilElement {
    }
    var HTMLPowerReadMoreElement: {
        prototype: HTMLPowerReadMoreElement;
        new (): HTMLPowerReadMoreElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "power-login": HTMLPowerLoginElement;
        "power-nav": HTMLPowerNavElement;
        "power-pwa-indicator": HTMLPowerPwaIndicatorElement;
        "power-read-more": HTMLPowerReadMoreElement;
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
    interface PowerNav {
        "data"?: Navigation;
        "onSelectItem"?: (event: CustomEvent<NavigationItem>) => void;
    }
    interface PowerPwaIndicator {
        "display"?: boolean;
        "image"?: string;
    }
    interface PowerReadMore {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "power-login": PowerLogin;
        "power-nav": PowerNav;
        "power-pwa-indicator": PowerPwaIndicator;
        "power-read-more": PowerReadMore;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "power-login": LocalJSX.PowerLogin & JSXBase.HTMLAttributes<HTMLPowerLoginElement>;
            "power-nav": LocalJSX.PowerNav & JSXBase.HTMLAttributes<HTMLPowerNavElement>;
            "power-pwa-indicator": LocalJSX.PowerPwaIndicator & JSXBase.HTMLAttributes<HTMLPowerPwaIndicatorElement>;
            "power-read-more": LocalJSX.PowerReadMore & JSXBase.HTMLAttributes<HTMLPowerReadMoreElement>;
        }
    }
}
