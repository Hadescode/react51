// state của bài tập game xuc xac

const stateDefault ={
    banChon:'Tài',
    mangXucXac:[
        {so:1,hinhAnh:"./img/BaiTapXucXac/1.png"},
        {so:1,hinhAnh:"./img/BaiTapXucXac/2.png"},
        {so:1,hinhAnh:"./img/BaiTapXucXac/6.png"},
    ],
    soBanThang:0,
    tongSobanChoi:0,
}


const BaiTapGameXucXacReducer =(state = stateDefault,action) =>{

    switch(action.type){
        case 'DAT_CUOC':{
            state.banChon =action.taiXiu;
            return{...state};
        }
        case 'RANDOM_XUC_XAC' :{
            //Xử lý tạo ra 3 con xúc xắc ngẫu nhiên gán lại cho mangXucXac
            let mangXucXacNgauNhien =[];
            //Chạy vòng lặp 3 lần
            for(var i=0; i<3; i++){
                //Mồi lần lập tạo ra 1 số ngẫu nhiên
                const soNgauNhien = Math.floor(Math.random() *6) +1;
                //Từ só ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
                const xucXacNgauNhien ={
                    so:soNgauNhien,
                    hinhAnh: `./img/BaiTapXucXac/${soNgauNhien}.png`
                };
                //push vao mang Xuc Xac Ngau Nhien
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac =mangXucXacNgauNhien;
            return{...state};
        }
        case 'END_GAME' : {
            console.log(action);
            // TÍnh tộng diểm các số trong mảng xúc xắc
            let tongDiem = state.mangXucXac.reduce((tongDiemXX,xucXac,index) =>{
                return tongDiemXX += xucXac.so;
            },0);

            if((tongDiem > 9 && state.banChon === 'Tài')||(tongDiem <= 9 && state.banChon === 'Xỉu')){
                state.soBanThang += 1;
            }
            state.tongSobanChoi += 1;
            return{...state}
        }
    }

    return{...state}
}

export default BaiTapGameXucXacReducer