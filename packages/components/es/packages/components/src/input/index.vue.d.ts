export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        export namespace modelValue {
            const required: boolean;
            const type: StringConstructor;
        }
        export namespace type_1 {
            const type_2: StringConstructor;
            export { type_2 as type };
            export { TYPE_TEXT as default };
            export function validator(value: any): true;
            export function validator(value: any): true;
        }
        export { type_1 as type };
        export namespace max {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
        }
    }
    const emits: string[];
    function setup(__props: any, { expose }: {
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
    function setup(__props: any, { expose }: {
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
}
declare const TYPE_TEXT: "text";
