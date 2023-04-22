export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace type {
            const type_1: StringConstructor;
            export { type_1 as type };
            export const required: boolean;
            export function validator(val: any): true;
            export function validator(val: any): true;
        }
        namespace content {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace duration {
            const type_3: NumberConstructor;
            export { type_3 as type };
        }
        namespace destory {
            const type_4: FunctionConstructor;
            export { type_4 as type };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        SUCCESS: string;
        WARN: string;
        ERROR: string;
        typeEnum: string[];
        props: any;
        styles: {
            warn: {
                icon: string;
                fillClass: string;
                textClass: string;
                containerClass: string;
            };
            error: {
                icon: string;
                fillClass: string;
                textClass: string;
                containerClass: string;
            };
            success: {
                icon: string;
                fillClass: string;
                textClass: string;
                containerClass: string;
            };
        };
        isVisable: any;
        animDuration: string;
        PoiSvgIcon: {
            props: {
                name: {
                    type: StringConstructor;
                    required: boolean;
                };
                color: {
                    type: StringConstructor;
                };
                fillClass: {
                    type: StringConstructor;
                };
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                props: any;
                symbolId: any;
                computed: any;
            };
        };
        ref: any;
        onMounted: any;
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        SUCCESS: string;
        WARN: string;
        ERROR: string;
        typeEnum: string[];
        props: any;
        styles: {
            warn: {
                icon: string;
                fillClass: string;
                textClass: string;
                containerClass: string;
            };
            error: {
                icon: string;
                fillClass: string;
                textClass: string;
                containerClass: string;
            };
            success: {
                icon: string;
                fillClass: string;
                textClass: string;
                containerClass: string;
            };
        };
        isVisable: any;
        animDuration: string;
        PoiSvgIcon: {
            props: {
                name: {
                    type: StringConstructor;
                    required: boolean;
                };
                color: {
                    type: StringConstructor;
                };
                fillClass: {
                    type: StringConstructor;
                };
            };
            setup(__props: any, { expose }: {
                expose: any;
            }): {
                props: any;
                symbolId: any;
                computed: any;
            };
        };
        ref: any;
        onMounted: any;
    };
}
