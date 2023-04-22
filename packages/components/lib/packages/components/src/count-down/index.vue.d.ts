export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace time {
            const type: NumberConstructor;
            const required: boolean;
        }
        namespace format {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default: string;
            export { _default as default };
        }
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
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
    function setup(__props: any, { expose, emit }: {
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
}
