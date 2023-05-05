import DefaultTheme from 'vitepress/theme';

import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import 'poicc-components/es/style.css';
// import '../../../styles/index.scss'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import {
    PoiButton,
    PoiConfirm,
    PoiCountDown,
    PoiDialog,
    PoiInfinite,
    PoiInput,
    PoiMessage,
    PoiNavbar,
    PoiPopover,
    PoiPopup,
    PoiSearch,
    PoiSvgIcon,
    PoiTriggerMenu,
    PoiTriggerMenuItem,
    PoiWaterfull,
} from 'poicc-components';
// import PoiButton  from '../../../../components/src/button';

import './styles/var.css';
import './styles/index.scss';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('PoiButton', PoiButton);
        app.component('PoiDialog', PoiDialog);
        app.component('PoiCountDown', PoiCountDown);
        app.component('PoiInput', PoiInput);
        app.component('Demo', Demo);
        app.component('DemoBlock', DemoBlock);
    },
};
