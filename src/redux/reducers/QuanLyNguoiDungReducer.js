import {
  XOA_NGUOI_DUNG,
  SUA_NGUOI_DUNG,
} from "../constants/QuanLyNguoiDungConst";

const sateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyen van A",
      soDienThoai: "09090909",
      email: "nguyenvana@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Nguyen van B",
      soDienThoai: "08080808",
      email: "nguyenvanb@gmail.com",
    },
  ],
  nguoiDungChinhSua:{
    maNguoiDung: 2,
    tenNguoiDung: "  ",
    soDienThoai: "",
    email: "",
  },
  stateFrom : {
    value: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    maNguoiDungXoa: "",
  }
};



export const QuanLyNguoiDungReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "XOA_NGUOI_DUNG": {
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      //Xóa Phần tử trong mang = cach lấy ra các phần tử không phải phàn tử đó
      mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(
        (nguoiDung) => nguoiDung.maNguoiDung != action.maNguoiDung
      );
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      //lấy người dùng được click từ nút sửa
      let nguoiDungDuocClick = {
        ...action.nguoiDungChinhSua,
      };
  
      //Cập nhật state người dùng chỉnh sửa = người dùng dươc click
      state.nguoiDungChinhSua = nguoiDungDuocClick;
      //Xứ lý theo cách 2 <NewFromComponent></NewFromComponent>
      state.stateFrom ={...state.stateFrom,value:nguoiDungDuocClick};
      return { ...state };
     
    }
    case'HANDLE_CHANGE_INPUT':{
        state.stateFrom ={...action.newState};
        return{...state};
    }
    case'CAP_NHAT_THONG_TIN':{
       // cập nhật lại thông tin người dùng trong mảng
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      // Tìm ra người dùng có mã cần cập nhật thông tin
      let index = mangNguoiDungCapNhat.findIndex(nguoiDung => nguoiDung.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung);
      // Cập nhật thông tin của vị trí người dùng đó = người dùng mới
      mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return {...state}
    }
    case'THEM_NGUOI_DUNG':{
        const mangNguoiDungCapNhat = [...state.mangNguoiDung.action.nguoiDung];
        state.mamgNguoiDung = mangNguoiDungCapNhat
        return{...state}
    }

    default:
      return { ...state };
  }
};
