import PoiButton from './button/index';
import PoiConfirm from './confirm/index';
import PoiCountDown from './count-down/index';
import PoiDialog from './dialog/index';
import PoiInfinite from './infinite/index';
import PoiInput from './input/index';
import PoiMessage from './message/index';
import PoiNavbar from './navbar/index';
import PoiPopover from './popover/index';
import PoiPopup from './popup/index';
import PoiSearch from './search/index';
import PoiSvgIcon from './svg-icon/index';
import PoiTriggerMenu from './trigger-menu/index';
import PoiTriggerMenuItem from './trigger-menu-item/index';
import PoiWaterfull from './waterfull/index';
export { PoiButton, PoiConfirm, PoiCountDown, PoiDialog, PoiInfinite, PoiInput, PoiMessage, PoiNavbar, PoiPopover, PoiPopup, PoiSearch, PoiSvgIcon, PoiTriggerMenu, PoiTriggerMenuItem, PoiWaterfull, };
declare const All: {
    PoiButton: {
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
    PoiConfirm: (title: any, content: any, cancelText?: string, confirmText?: string) => Promise<unknown>;
    PoiCountDown: {
        props: {
            time: {
                type: NumberConstructor;
                required: boolean;
            };
            format: {
                type: StringConstructor;
                default: string;
            };
        };
        emits: string[];
        setup(__props: any, { expose, emit }: {
            expose: any;
            emit: any;
        }): {
            EMITS_FINISH: string;
            EMITS_CHANGE: string;
            INTERVAL_COUNT: number;
            props: any;
            emits: any;
            duration: any;
            interval: undefined;
            start: () => void;
            durationFn: () => void;
            close: () => void;
            showTime: any;
            ref: any;
            onUnmounted: any;
            watch: any;
            computed: any;
            dayjs: any;
        };
    };
    PoiDialog: {
        props: {
            modelValue: {
                type: BooleanConstructor;
                required: boolean;
            };
            title: {
                type: StringConstructor;
            };
            cancelText: {
                type: StringConstructor;
                default: string;
            };
            confirmText: {
                type: StringConstructor;
                default: string;
            };
            cancelHandler: {
                type: FunctionConstructor;
            };
            confirmHandler: {
                type: FunctionConstructor;
            };
            close: {
                type: FunctionConstructor;
            };
        };
        emits: string[];
        setup(__props: any, { expose }: {
            expose: any;
        }): {
            props: any;
            isVisable: any;
            onCancelClick: () => void;
            onConfirmClick: () => void;
            close: () => void;
            PoiButton: {
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
            useVModel: any;
        };
    };
    PoiInfinite: {
        props: {
            modelValue: {
                type: BooleanConstructor;
                required: boolean;
            };
            isFinished: {
                type: BooleanConstructor;
                required: boolean;
            };
        };
        emits: string[];
        setup(__props: any, { expose, emit }: {
            expose: any;
            emit: any;
        }): {
            props: any;
            emits: any;
            loading: any;
            loadingTarget: any;
            targetIsIntersection: any;
            emitLoad: () => void;
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
            watch: any;
            useVModel: any;
            useIntersectionObserver: any;
        };
    };
    PoiInput: {
        props: {
            modelValue: {
                required: boolean;
                type: StringConstructor;
            };
            type: {
                type: StringConstructor;
                default: string;
                validator(value: any): true;
            };
            max: {
                type: (StringConstructor | NumberConstructor)[];
            };
        };
        emits: string[];
        setup(__props: any, { expose }: {
            expose: any;
        }): {
            TYPE_TEXT: string;
            TYPE_TEXTAREA: string;
            props: any;
            text: any;
            currentNumber: any;
            useVModel: any;
            computed: any;
        };
    };
    PoiMessage: (type: any, content: any, duration?: number) => void;
    PoiNavbar: {
        props: {
            clickLeft: FunctionConstructor;
            clickRight: FunctionConstructor;
            sticky: BooleanConstructor;
        };
        setup(__props: any, { expose }: {
            expose: any;
        }): {
            props: any;
            router: any;
            onClickLeft: () => void;
            onClickRight: () => void;
            useRouter: any;
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
    PoiPopover: {
        props: {
            placement: {
                type: StringConstructor;
                default: string;
                validator(val: any): true;
            };
        };
        setup(__props: any, { expose }: {
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
    };
    PoiPopup: {
        props: {
            modelValue: {
                required: boolean;
                type: BooleanConstructor;
            };
        };
        setup(__props: any, { expose }: {
            expose: any;
        }): {
            props: any;
            isVisable: any;
            isLocked: any;
            watch: any;
            useScrollLock: any;
            useVModel: any;
        };
    };
    PoiSearch: {
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
    };
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
    PoiTriggerMenu: any;
    PoiTriggerMenuItem: {
        props: {
            icon: {
                type: StringConstructor;
                required: boolean;
            };
            iconClass: {
                type: StringConstructor;
            };
            textClass: {
                type: StringConstructor;
                default: string;
            };
            to: {
                type: StringConstructor;
            };
        };
        setup(__props: any, { expose }: {
            expose: any;
        }): {
            props: any;
            router: any;
            onItemClick: () => void;
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
            useRouter: any;
        };
    };
    PoiWaterfull: {
        props: {
            data: {
                type: ArrayConstructor;
                required: boolean;
            };
            nodeKey: {
                type: StringConstructor;
            };
            column: {
                type: NumberConstructor;
                default: number;
            };
            columnSpacing: {
                default: number;
                type: NumberConstructor;
            };
            rowSpacing: {
                default: number;
                type: NumberConstructor;
            };
            picturePreReading: {
                default: boolean;
                type: BooleanConstructor;
            };
        };
        setup(__props: any, { expose }: {
            expose: any;
        }): {
            props: any;
            containerHeight: any;
            columnHeightObj: any;
            useColumnHeightObj: () => void;
            containerTarget: any;
            containerWidth: any;
            containerLeft: any;
            useContainerWidth: () => void;
            columnWidth: any;
            columnSpacingTotal: any;
            useColumnWidth: () => void;
            itemHeights: any[];
            waitImgComplate: () => void;
            useItemHeight: () => void;
            useItemLocation: () => void;
            getItemLeft: () => any;
            getItemTop: () => number;
            increasingHeight: (index: any) => void;
            reset: () => void;
            ref: any;
            computed: any;
            onMounted: any;
            nextTick: any;
            watch: any;
            onUnmounted: any;
            getImgElements: (itemElements: any) => any[];
            getAllImg: (imgElements: any) => any;
            getMinHeightColumn: (columnHeightObj: any) => string;
            getMinHeight: (columnHeightObj: any) => number;
            getMaxHeight: (columnHeightObj: any) => number;
        };
    };
};
export default All;
