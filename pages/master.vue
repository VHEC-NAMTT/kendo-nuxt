<template>
  <div class="page-master">
    <div class="row">
        <div class="col-3 form-group">
            <div><label for="">Mã sản phẩm</label></div>
            <div><input type="text" class="form-control"></div>
        </div>
        <div class="col-6 form-group">
            <div><label for="">Tên sản phẩm</label></div>
            <div><input type="text" class="form-control"></div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-3">
            <label><b><input type="checkbox" v-model="modeInOut" value="in"> Thông tin nhập</b></label>
        </div>
        <div class="col-9">
            <div class="row" v-show="modeInOut.indexOf('in')>-1">
                <div class="col-12 d-flex justify-content-between">
                    <div class="px-1 form-group" style="width: 20%">
                        <div><label for="">Đơn giá</label></div>
                        <div><input type="text" class="form-control"></div>
                    </div>
                    <div class="px-1 form-group" style="width: 40%">
                        <div><label for="">Tài khoản nhập</label></div>
                        <div><input type="text" class="form-control"></div>
                    </div>
                    <div class="px-1 form-group" style="width: 40%">
                        <div><label for="">Mức thuế</label></div>
                        <div><input type="text" class="form-control"></div>
                    </div>
                </div>
                <div class="col-12 form-group">
                    <div class="px-1">
                        <div><label for="">Mô tả</label></div>
                        <div>
                            <textarea name="" id="" rows="5" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>                    
    <hr>
    <div class="row">
        <div class="col-3">
            <label><b><input type="checkbox" v-model="modeInOut" value="out"> Thông tin bán</b></label>
        </div>
        <div class="col-9">
            <div class="row" v-show="modeInOut.indexOf('out')>-1">
                <div class="col-12 d-flex justify-content-sm-start">
                    <div class="px-1 form-group" style="width: 20%">
                        <div><label for="">Đơn giá</label></div>
                        <div><input type="text" class="form-control"></div>
                    </div>
                    <div class="px-1 form-group" style="width: 40%">
                        <div><label for="">Mức thuế</label></div>
                        <div><input type="text" class="form-control"></div>
                    </div>
                </div>
                <div class="col-12 form-group">
                    <div class="px-1">
                        <div><label for="">Mô tả</label></div>
                        <div>
                            <textarea name="" id="" rows="5" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-12 text-right">
            <button class="btn btn-success btn-size-md">Lưu</button>
            <button class="btn btn-secondary btn-size-md">Huỷ</button>
        </div>
    </div>
  </div>
</template>

<script>
import autoLayout from '@/middleware/autoLayout'
  
export default {
    layout: autoLayout,
    data(){
        return {
            modeInOut: ["in"]
        }
    },

}
</script>

<style>

</style>