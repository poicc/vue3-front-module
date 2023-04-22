export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const icon: StringConstructor;
        const iconColor: StringConstructor;
        const iconClass: StringConstructor;
        namespace type {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default: string;
            export { _default as default };
            export function validator(val: any): true;
            export function validator(val: any): true;
        }
        namespace size {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_1: string;
            export { _default_1 as default };
            export function validator(val: any): true;
            export function validator(val: any): true;
        }
        namespace isActiveAnim {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace loading {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        EMITS_CLICK: string;
        typeEnum: {
            primary: string;
            main: string;
            info: string;
        };
        sizeEnum: {
            default: {
                button: string;
                icon: string;
            };
            'icon-default': {
                button: string;
                icon: string;
            };
            small: {
                button: string;
                icon: string;
            };
            'icon-small': {
                button: string;
                icon: string;
            };
        };
        props: any;
        emits: any;
        sizeKey: any;
        onBtnClick: () => void;
        computed: any;
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
    };
    function setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        EMITS_CLICK: string;
        typeEnum: {
            primary: string;
            main: string;
            info: string;
        };
        sizeEnum: {
            default: {
                button: string;
                icon: string;
            };
            'icon-default': {
                button: string;
                icon: string;
            };
            small: {
                button: string;
                icon: string;
            };
            'icon-small': {
                button: string;
                icon: string;
            };
        };
        props: any;
        emits: any;
        sizeKey: any;
        onBtnClick: () => void;
        computed: any;
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
    };
}
