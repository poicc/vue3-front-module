export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace modelValue {
            const type: BooleanConstructor;
            const required: boolean;
        }
        namespace isFinished {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
    }
    const emits: string[];
    function setup(__props: any, { expose, emit }: {
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
    function setup(__props: any, { expose, emit }: {
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
}
