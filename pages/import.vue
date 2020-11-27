<template>
    <div class="page-import-file">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <h3 class="card-header">
                        Nhập hoá đơn bán hàng từ file
                    </h3>
                    <div class="card-block">                         
                        <fieldset class="border p-2 my-3">
                            <legend class="w-auto">Bước 1: Tải file dữ liệu mẫu</legend>
                            Tải xuống tệp mẫu CSV (Giá trị được phân tách bằng dấu phẩy) hoá đơn của chúng tôi. Tệp này có các tiêu đề cột chính xác cần để thiết lập dữ liệu
                            <div class="my-1">
                                <a href="#"><span class="k-icon k-i-file-csv k-i-csv" style="font-size: 1.5rem"></span> Download template file</a>
                            </div>
                        </fieldset>
                        <fieldset class="border p-2 my-3">
                            <legend class="w-auto">Bước 2: Nhập dữ liệu hoá đơn vào file mẫu</legend>
                            Xuất hoá đơn từ hệ thống cũ của bạn dưới dạng danh sách được phân tách bằng dấu phẩy. Sử dụng Excel hoặc một trình soạn thảo bảng tính khác, sao chép và dán hoá đơn của bạn từ tệp đã xuất vào mẫu. Đảm bảo dữ liệu hoá đơn của bạn sao chép khớp với các tiêu đề cột được cung cấp trong mẫu
                        </fieldset>
                        <fieldset class="border p-2 my-3">
                            <legend class="w-auto">Bước 3: Thực hiện import file đã cập nhật</legend>
                            <upload ref="upload"
                                    name="csv files"
                                    :async-save-url="'custom-save-url'"
                                    :async-remove-url="'custom-remove-url'"
                                    :validation-allowed-extensions='[".csv"]'>
                            </upload>
                            Chọn file có định dạng .csv
                        </fieldset>                        
                    </div>
                    <div class="card-footer text-right">
                        <button class="btn btn-success btn-size-md">Lưu</button>
                        <button class="btn btn-secondary btn-size-md">Huỷ</button>
                    </div>
                </div>
            </div>        
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>

</style>