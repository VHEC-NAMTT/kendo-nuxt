<style lang="scss" scoped>
.card-header {
    background-color: #0000000f;
}
.card-footer{
    display: flex;
    justify-content: space-between;
}

</style>

<template>
   <div class="row">
        <div class="col-md-12">
            <div class="card" id="profile">
                <h3 class="card-header">Thêm thông tin khách hàng</h3>
                <div class="card-block">
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Công ty</span>
                        <div class="col-md-6">
                            <input type="text" class="form-control ">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Mã khách hàng</span>
                        <div class="col-md-6">
                            <input type="text" class="form-control ">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Người liên lạc</span>
                        <div class="col-md-6 input-group">
                            <input type="text" class="form-control" placeholder="First">
                            <input type="text" class="form-control" placeholder="Last">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Email</span>
                        <div class="col-md-6">
                            <input type="email" class="form-control" placeholder="name@email.com">
                        </div>
                    </div>

                    <br><br>

                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Phone</span>
                        <div class="col-md-6 input-group">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 50%">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Fax</span>
                        <div class="col-md-6 input-group">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 50%">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Mobile</span>
                        <div class="col-md-6 input-group">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 50%">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Direct dial</span>
                        <div class="col-md-6 input-group">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 25%">
                            <input type="text" class="form-control" style="width: 50%">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Skype Name/Number</span>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Skype Name/Number">
                        </div>
                    </div>
                    <div class="row mb-10">
                        <span class="col-md-3 text-right">Website</span>
                        <div class="col-md-6">
                            <input type="text" class="form-control" value="http://">
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <nuxt-link to="/account" class="btn btn-main revert">
                        <span>Hủy</span>
                    </nuxt-link>
                    <button class="btn btn-main">
                        <span>Lưu</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
