import DefaultTheme from 'vitepress/theme';

import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import 'poicc-components/es/style.css';
// import '../../../styles/index.scss'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
// import {
//     PoiButton,
//     PoiCountDown,
//     PoiDialog,
//     PoiInfinite,
//     PoiInput,
//     PoiNavbar,
//     PoiPopover,
//     PoiPopup,
//     PoiSearch,
//     PoiTriggerMenu,
//     PoiTriggerMenuItem,
//     PoiWaterfull,
// } from 'poicc-components';

import PoiButton  from 'poicc-components/src/button/index.vue';
import PoiCountDown  from 'poicc-components/src/count-down/index.vue';
import PoiDialog  from 'poicc-components/src/dialog/index.vue';
import PoiInfinite  from 'poicc-components/src/infinite/index.vue';
import PoiInput  from 'poicc-components/src/input/index.vue';
import PoiNavbar  from 'poicc-components/src/navbar/index.vue';
import PoiPopover  from 'poicc-components/src/popover/index.vue';
import PoiPopup  from 'poicc-components/src/popup/index.vue';
import PoiSearch  from 'poicc-components/src/search/index.vue';
import PoiTriggerMenu  from 'poicc-components/src/trigger-menu/index.vue';
import PoiTriggerMenuItem  from 'poicc-components/src/trigger-menu-item/index.vue';
import PoiWaterfull  from 'poicc-components/src/waterfull/index.vue';
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
        app.component('PoiNavbar', PoiNavbar);
        app.component('PoiInfinite', PoiInfinite);
        app.component('PoiPopover', PoiPopover);
        app.component('PoiPopup', PoiPopup);
        app.component('PoiSearch', PoiSearch);
        app.component('PoiTriggerMenu', PoiTriggerMenu);
        app.component('PoiTriggerMenuItem', PoiTriggerMenuItem);
        app.component('PoiWaterfull', PoiWaterfull);

        
        app.component('Demo', Demo);
        app.component('DemoBlock', DemoBlock);
    },
};
