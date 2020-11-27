<style lang="scss" scoped>
.card-header {
    background-color: #0000000f;
}

.card-footer{
    display: flex;
    justify-content: space-between;
}


input{
    padding: 2px 12px !important;
    height: 34px !important;
}

</style>

<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card" id="profile">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-2">
                            <label for="">Khách hàng</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-md-2">
                            <label for="">Ngày tạo</label>
                            <datepicker :default-value="new Date()" :default-Show="true" style="width: 150px;"></datepicker>
                        </div>
                        <div class="col-md-2">
                            <label for="">Hết hạn</label>
                            <datepicker :default-value="new Date()" :default-Show="true" style="width: 150px;"></datepicker>                  
                        </div>
                        <div class="col-md-2">
                            <label for="">Mã hóa đơn</label>
                            <input type="text" class="form-control" value="INV-0002">
                        </div>
                        <div class="col-md-3">
                            <label for="">Ghi chú</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="card-block">
                    <div class="row">

                        <div class="col-md-12 mb-15">
                            <kendo-grid
                                ref="issuesGrid" 
                                :data-source="ghData"
                                :selectable="'multiple row'"
                                :sortable="true"
                                :filterable="true"
                            >
                                <kendo-grid-column
                                    field="code"
                                    title="Mã sản phẩm"
                                    :width="120"
                                    :filterable="false"
                                    template="  <span class='name'>#: code #: #: name #</span>"
                                ></kendo-grid-column>
                                <kendo-grid-column
                                    field="name"
                                    title="Tên sản pẩm"
                                    :width="200"
                                    :filterable="false"
                                    template="  <span class='name'>#: name #</span>"
                                ></kendo-grid-column>
                                <kendo-grid-column
                                    field="sl"
                                    title="SL"
                                    :width="50"
                                    :filterable="false"
                                ></kendo-grid-column>
                                <kendo-grid-column
                                    field="price"
                                    title="Đơn giá"
                                    :width="100"
                                    :filterable="false"
                                ></kendo-grid-column>
                                <kendo-grid-column
                                    field="percent"
                                    title="%"
                                    :width="40"
                                    :filterable="false"
                                ></kendo-grid-column>
                                <kendo-grid-column
                                    field="account"
                                    title="Tài khoản"
                                    :width="70"
                                    :filterable="false"
                                ></kendo-grid-column>
                                <kendo-grid-column
                                    field="tax"
                                    title="Thuế"
                                    :width="120"
                                    :filterable="false"
                                ></kendo-grid-column>
                                <kendo-grid-column
                                    field="amount"
                                    title="Thành tiền"
                                    :width="70"
                                    :filterable="false"
                                ></kendo-grid-column>
                            </kendo-grid>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <nuxt-link to="/account" class="btn btn-main">
                        <span>Lưu</span>
                    </nuxt-link>
                    <div>
                        <button class="btn btn-approve">
                            <span>Duyệt</span>
                        </button>    
                        <button class="btn btn-main revert">
                            <span>Hủy</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { TabStrip } from "@progress/kendo-layout-vue-wrapper";
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: { "kendo-tabstrip": TabStrip, 'datepicker': DatePicker, },
    data(){
        return{
            ghData: [
                {
                    code: "IT003",
                    name: 'Sản phẩm 3',
                    sl: '1.00',
                    price: '50,200.00',
                    percent: '',
                    account: '200-Sales',
                    tax: 'Tax on Sales(0%)',
                    amount: '50,200.00',
                }
            ]
        }
    }
};
</script>