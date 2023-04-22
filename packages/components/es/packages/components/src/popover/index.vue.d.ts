export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace placement {
            export const type: StringConstructor;
            export { PROP_BOTTOM_LEFT as default };
            export function validator(val: any): true;
            export function validator(val: any): true;
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        DALEY_TIME: number;
        PROP_TOP_LEFT: string;
        PROP_TOP_RIGHT: string;
        PROP_BOTTOM_LEFT: string;
        PROP_BOTTOM_RIGHT: string;
        placementEnum: string[];
        props: any;
        isVisable: any;
        timeout: undefined;
        onMouseenter: () => void;
        onMouseleave: () => void;
        referenceTarget: any;
        contentTarget: any;
        useElementSize: (target: any) => {
            width?: undefined;
            height?: undefined;
        } | {
            width: any;
            height: any;
        };
        contentStyle: any;
        ref: any;
        nextTick: any;
        watch: any;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        DALEY_TIME: number;
        PROP_TOP_LEFT: string;
        PROP_TOP_RIGHT: string;
        PROP_BOTTOM_LEFT: string;
        PROP_BOTTOM_RIGHT: string;
        placementEnum: string[];
        props: any;
        isVisable: any;
        timeout: undefined;
        onMouseenter: () => void;
        onMouseleave: () => void;
        referenceTarget: any;
        contentTarget: any;
        useElementSize: (target: any) => {
            width?: undefined;
            height?: undefined;
        } | {
            width: any;
            height: any;
        };
        contentStyle: any;
        ref: any;
        nextTick: any;
        watch: any;
    };
}
declare const PROP_BOTTOM_LEFT: "bottom-left";
