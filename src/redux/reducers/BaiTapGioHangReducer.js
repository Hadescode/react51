const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "https://picsum.photos/50",
      soLuong: 1,
      donGia: 1000,
    },
  ],
};
// Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //Xử lý cập nhật lại state
      let gioHangUpdate = [...state.gioHang];
      //Tìm San phẩm có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index != -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGH);
      }
      // Gán lại stae cũ =giá trị mới tương đương vie65v setState tại component
      //   return { ...state, gioHang : gioHangUpdate};
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case 'XOA_GIO_HANG':{
        let gioHangUpdate = [... state.gioHang];
        const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);

        if(index != -1){
            gioHangUpdate.splice(index,1);
        }
        //Cap nhật lai state.gioHang
        state.gioHang = gioHangUpdate;
        return{...state};
    }
    case 'TANG_GIAM_SOLUONG':{
        let gioHangUpdate =[...state.gioHang];
          //Tìm ra sp có mã tương ứng với sp trong giỏ hàng tiến hành tăng giảm
        let spGioHang = gioHangUpdate.find(sp => sp.maSP === action.maSP);
      
        if(action.tangGiam) {
            spGioHang.soLuong += 1
        }else{
            if(spGioHang.soLuong > 1){
                spGioHang.soLuong -=1;
            }
        }
        // Cập nhật lại state gio hang
        state.gioHang =gioHangUpdate;
        return {... state}
    }
  }
  return { ...state };
};
export default BaiTapGioHangReducer;
