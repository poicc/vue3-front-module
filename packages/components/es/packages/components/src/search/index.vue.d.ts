export default _sfc_main;
declare const _sfc_main: {
    name: string;
} & {
    props: {
        modelValue: {
            required: boolean;
            type: StringConstructor;
        };
    };
    emits: string[];
    setup(__props: any, { expose, emit }: {
        expose: any;
        emit: any;
    }): {
        EMIT_UPDATE_MODELVALUE: string;
        EMIT_SEARCH: string;
        EMIT_CLEAR: string;
        EMIT_INPUT: string;
        EMIT_FOCUS: string;
        EMIT_BLUR: string;
        props: any;
        emits: any;
        inputValue: any;
        onClearClick: () => void;
        onSearchHandler: () => void;
        isFocus: any;
        containerTarget: any;
        onFocusHandler: () => void;
        onBlurHandler: () => void;
        onClickOutside: any;
        useVModel: any;
        ref: any;
        watch: any;
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
        PoiButton: {
            props: {
                icon: StringConstructor;
                iconColor: StringConstructor;
                iconClass: StringConstructor;
                type: {
                    type: StringConstructor; /**
                     * 搜索
                     */
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
};
