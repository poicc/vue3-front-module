export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        const clickLeft: FunctionConstructor;
        const clickRight: FunctionConstructor;
        const sticky: BooleanConstructor;
    }
    function setup(__props: any, { expose }: {
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
    function setup(__props: any, { expose }: {
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
}
