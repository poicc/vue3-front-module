export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace data {
            const type: ArrayConstructor;
            const required: boolean;
        }
        namespace nodeKey {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace column {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default: number;
            export { _default as default };
        }
        namespace columnSpacing {
            const _default_1: number;
            export { _default_1 as default };
            const type_3: NumberConstructor;
            export { type_3 as type };
        }
        namespace rowSpacing {
            const _default_2: number;
            export { _default_2 as default };
            const type_4: NumberConstructor;
            export { type_4 as type };
        }
        namespace picturePreReading {
            const _default_3: boolean;
            export { _default_3 as default };
            const type_5: BooleanConstructor;
            export { type_5 as type };
        }
    }
    function setup(__props: any, { expose }: {
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
    function setup(__props: any, { expose }: {
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
}
