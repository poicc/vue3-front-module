export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace title {
            const type: StringConstructor;
        }
        namespace content {
            const type_1: StringConstructor;
            export { type_1 as type };
            export const required: boolean;
        }
        namespace cancelText {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default: string;
            export { _default as default };
        }
        namespace confirmText {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace cancelHandler {
            const type_4: FunctionConstructor;
            export { type_4 as type };
        }
        namespace confirmHandler {
            const type_5: FunctionConstructor;
            export { type_5 as type };
        }
        namespace close {
            const type_6: FunctionConstructor;
            export { type_6 as type };
        }
    }
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        isVisable: any;
        show: () => void;
        duration: string;
        onCancelClick: () => void;
        onConfirmClick: () => void;
        close: () => void;
        ref: any;
        onMounted: any;
        PoiButton: {
            /**
             * 取消按钮
             */
            props: {
                icon: StringConstructor;
                iconColor: StringConstructor;
                iconClass: StringConstructor;
                type: {
                    type: StringConstructor;
                    default: string;
                    validator(val: any): true;
                };
                size: {
                    type: StringConstructor;
                    default: string;
                    validator(val: any): true;
                };
                isActiveAnim: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
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
        };
    };
    function setup(__props: any, { expose }: {
        expose: any;
    }): {
        props: any;
        isVisable: any;
        show: () => void;
        duration: string;
        onCancelClick: () => void;
        onConfirmClick: () => void;
        close: () => void;
        ref: any;
        onMounted: any;
        PoiButton: {
            /**
             * 取消按钮
             */
            props: {
                icon: StringConstructor;
                iconColor: StringConstructor;
                iconClass: StringConstructor;
                type: {
                    type: StringConstructor;
                    default: string;
                    validator(val: any): true;
                };
                size: {
                    type: StringConstructor;
                    default: string;
                    validator(val: any): true;
                };
                isActiveAnim: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            emits: string[];
            setup(__props: any, { expose, emit }: {
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
        };
    };
}
