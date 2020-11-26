import Vue from 'vue'

import '@progress/kendo-ui'
import { KendoButtonGroup, KendoButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { KendoDataSource, KendoDataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { KendoGrid, KendoGridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { KendoChart, KendoChartInstaller } from '@progress/kendo-charts-vue-wrapper'

Vue.use(KendoButtonsInstaller)
Vue.use(KendoGridInstaller)
Vue.use(KendoDataSourceInstaller)
Vue.use(KendoChartInstaller)

Vue.component(KendoButtonGroup);
Vue.component(KendoDataSource);
Vue.component(KendoGrid);
Vue.component(KendoChart);