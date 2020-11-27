<style lang="scss" scoped>
.card-header {
    background-color: #0000000f;
}
</style>

<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card" id="profile">
                <h3 class="card-header">Danh sách tài khoản</h3>
                <div class="card-block">
                    <div class="row">
                        <div class="col-md-12">
                            <nuxt-link to="account/detail" type="button" class="btn btn-main mr-10">
                                <i></i>
                                <span>Thêm TK</span>
                            </nuxt-link>
                            <button class="btn btn-main mr-10">
                                <span>Thêm TK NH</span>
                            </button>
                            <button class="btn btn-main mr-10">
                                <span>Import</span>
                            </button>
                            <button class="btn btn-main mr-10">
                                <span>Print PDF</span>
                            </button>
                            <button class="btn btn-main mr-10">
                                <span>Export</span>
                            </button>
                        </div>

                        <div class="col-md-12 mt-15">
                            <kendo-tabstrip>
                                <ul>
                                    <li class="k-state-active">Tất cả</li>
                                    <li>Tài sản</li>
                                    <li>TK nợ</li>
                                    <li>Chi phí</li>
                                    <li>Doanh thu</li>
                                </ul>
                                <div>
                                    <kendo-grid
                                        ref="issuesGrid" 
                                        :data-source="ghData"
                                        :sortable="true"
                                        :filterable="true"
                                        :pageable-refresh="true"
                                        :pageable-page-sizes="true"
                                        :pageable-button-count="5"
                                    >
                                        <kendo-grid-column 
                                            template="<input type='checkbox' id='exampleCheck1'/>" 
                                            :width="50" :sortable="false">
                                        </kendo-grid-column>
                                        <kendo-grid-column
                                            field="code"
                                            title="Code"
                                            :width="90"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="name"
                                            title="Tên tài khoản"
                                            :width="350"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue'>#: name #</span><br>
                                                        <span class='description' style='font-size: 14px;'>#: description #</span>"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="type"
                                            title="Kiểu TK"
                                            :width="120"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="tax_code"
                                            title="Mã thuế"
                                            :width="150"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="ytd"
                                            title="YTD"
                                            :width="90"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue; text-align: right'>#: ytd #</span>"
                                        ></kendo-grid-column>
                                    </kendo-grid>
                                </div>
                                <div>
                                    <kendo-grid
                                        ref="issuesGrid1" 
                                        :data-source="ghData1"
                                        :sortable="true"
                                        :filterable="true"
                                        :pageable-refresh="true"
                                        :pageable-page-sizes="true"
                                        :pageable-button-count="5"
                                    >
                                        <kendo-grid-column 
                                            template="<input type='checkbox' id='exampleCheck1'/>" 
                                            :width="50" :sortable="false">
                                        </kendo-grid-column>
                                        <kendo-grid-column
                                            field="code"
                                            title="Code"
                                            :width="90"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="name"
                                            title="Tên tài khoản"
                                            :width="350"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue'>#: name #</span><br>
                                                        <span class='description' style='font-size: 14px;'>#: description #</span>"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="type"
                                            title="Kiểu TK"
                                            :width="120"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="tax_code"
                                            title="Mã thuế"
                                            :width="150"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="ytd"
                                            title="YTD"
                                            :width="90"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue; text-align: right'>#: ytd #</span>"
                                        ></kendo-grid-column>
                                    </kendo-grid>
                                </div>
                                <div>
                                    <kendo-grid
                                        ref="issuesGrid" 
                                        :data-source="ghData2"
                                        :sortable="true"
                                        :filterable="true"
                                        :pageable-refresh="true"
                                        :pageable-page-sizes="true"
                                        :pageable-button-count="5"
                                    >
                                        <kendo-grid-column 
                                            template="<input type='checkbox' id='exampleCheck1'/>" 
                                            :width="50" :sortable="false">
                                        </kendo-grid-column>
                                        <kendo-grid-column
                                            field="code"
                                            title="Code"
                                            :width="90"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="name"
                                            title="Tên tài khoản"
                                            :width="350"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue'>#: name #</span><br>
                                                        <span class='description' style='font-size: 14px;'>#: description #</span>"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="type"
                                            title="Kiểu TK"
                                            :width="120"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="tax_code"
                                            title="Mã thuế"
                                            :width="150"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="ytd"
                                            title="YTD"
                                            :width="90"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue; text-align: right'>#: ytd #</span>"
                                        ></kendo-grid-column>
                                    </kendo-grid>
                                </div>
                                <div>
                                    <kendo-grid
                                        ref="issuesGrid" 
                                        :data-source="ghData3"
                                        :sortable="true"
                                        :filterable="true"
                                        :pageable-refresh="true"
                                        :pageable-page-sizes="true"
                                        :pageable-button-count="5"
                                    >
                                        <kendo-grid-column 
                                            template="<input type='checkbox' id='exampleCheck1'/>" 
                                            :width="50" :sortable="false">
                                        </kendo-grid-column>
                                        <kendo-grid-column
                                            field="code"
                                            title="Code"
                                            :width="90"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="name"
                                            title="Tên tài khoản"
                                            :width="350"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue'>#: name #</span><br>
                                                        <span class='description' style='font-size: 14px;'>#: description #</span>"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="type"
                                            title="Kiểu TK"
                                            :width="120"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="tax_code"
                                            title="Mã thuế"
                                            :width="150"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="ytd"
                                            title="YTD"
                                            :width="90"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue; text-align: right'>#: ytd #</span>"
                                        ></kendo-grid-column>
                                    </kendo-grid>
                                </div>
                                <div>
                                    <kendo-grid
                                        ref="issuesGrid" 
                                        :data-source="ghData4"
                                        :sortable="true"
                                        :filterable="true"
                                        :pageable-refresh="true"
                                        :pageable-page-sizes="true"
                                        :pageable-button-count="5"
                                    >
                                        <kendo-grid-column 
                                            template="<input type='checkbox' id='exampleCheck1'/>" 
                                            :width="50" :sortable="false">
                                        </kendo-grid-column>
                                        <kendo-grid-column
                                            field="code"
                                            title="Code"
                                            :width="90"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="name"
                                            title="Tên tài khoản"
                                            :width="350"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue'>#: name #</span><br>
                                                        <span class='description' style='font-size: 14px;'>#: description #</span>"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="type"
                                            title="Kiểu TK"
                                            :width="120"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="tax_code"
                                            title="Mã thuế"
                                            :width="150"
                                            :filterable="false"
                                        ></kendo-grid-column>
                                        <kendo-grid-column
                                            field="ytd"
                                            title="YTD"
                                            :width="90"
                                            :filterable="false"
                                            template="  <span class='name' style='color: blue; text-align: right'>#: ytd #</span>"
                                        ></kendo-grid-column>
                                    </kendo-grid>
                                </div>
                            </kendo-tabstrip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { TabStrip } from "@progress/kendo-layout-vue-wrapper";

export default {
    components: { "kendo-tabstrip": TabStrip },
    data(){
        return{
            ghData: [
                {
                    code: "200",
                    name: 'Sales',
                    description: 'Income from any normal business activity',
                    type: 'Bank',
                    tax_code: 'Tax on Sales(0%)',
                    ytd: '200.00',
                },
                {
                    code: "260",
                    name: 'Other Revenue',
                    description: 'Any other income that does not relate to nomal business activities and is not recurring',
                    type: 'Revenue',
                    tax_code: 'Tax on Sales(0%)',
                    ytd: '0.00',
                },
                {
                    code: "270",
                    name: 'Interest Income',
                    description: 'Interest income',
                    type: 'Revenue',
                    tax_code: 'Tax Exempt(0%)',
                    ytd: '0.00',
                },
                {
                    code: "310",
                    name: 'Cost of Good Sold',
                    description: 'Cost of good sold by the business',
                    type: 'Direct Cost',
                    tax_code: 'Tax on Purchases(0%)',
                    ytd: '0.00',
                },
                {
                    code: "400",
                    name: 'Advertising',
                    description: 'Expenses incurred for advertising while trying to increase sales',
                    type: 'Expense',
                    tax_code: 'Tax on Purchases(0%)',
                    ytd: '0.00',
                },
                {
                    code: "404",
                    name: 'Bank Fee',
                    description: 'Fee charged by your bank for transactions regarding your bank account(s)',
                    type: 'Expense',
                    tax_code: 'Tax Exempt(0%)',
                    ytd: '0.00',
                }
            ],
            ghData1: [
                {
                    code: "200",
                    name: 'Sales',
                    description: 'Income from any normal business activity',
                    type: 'Bank',
                    tax_code: 'Tax on Sales(0%)',
                    ytd: '200.00',
                }
            ],
            ghData2: [
                {
                    code: "310",
                    name: 'Cost of Good Sold',
                    description: 'Cost of good sold by the business',
                    type: 'Direct Cost',
                    tax_code: 'Tax on Purchases(0%)',
                    ytd: '0.00',
                }
            ],
            ghData3: [
                {
                    code: "400",
                    name: 'Advertising',
                    description: 'Expenses incurred for advertising while trying to increase sales',
                    type: 'Expense',
                    tax_code: 'Tax on Purchases(0%)',
                    ytd: '0.00',
                },
                {
                    code: "404",
                    name: 'Bank Fee',
                    description: 'Fee charged by your bank for transactions regarding your bank account(s)',
                    type: 'Expense',
                    tax_code: 'Tax Exempt(0%)',
                    ytd: '0.00',
                }
            ],
            ghData4: [
                {
                    code: "260",
                    name: 'Other Revenue',
                    description: 'Any other income that does not relate to nomal business activities and is not recurring',
                    type: 'Revenue',
                    tax_code: 'Tax on Sales(0%)',
                    ytd: '0.00',
                },
                {
                    code: "270",
                    name: 'Interest Income',
                    description: 'Interest income',
                    type: 'Revenue',
                    tax_code: 'Tax Exempt(0%)',
                    ytd: '0.00',
                }
            ]
        }
    }
};
</script>