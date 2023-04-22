export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace icon {
            const type: StringConstructor;
            const required: boolean;
        }
        namespace iconClass {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace textClass {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default: string;
            export { _default as default };
        }
        namespace to {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
    }
    function setup(__props: any, { expose }: {
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
    function setup(__props: any, { expose }: {
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
}
