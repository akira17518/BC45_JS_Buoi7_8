var arrNumber = [];


document.getElementById('btnThem').onclick = function () {
    //input: arrNumber, soNguoiDungNhap
    var soNhap = +document.getElementById('nhap').value;
    //output: arrNumber
    //process
    arrNumber.push(soNhap);
    //in output ra giao diện
    document.getElementById('mom').innerHTML = 'Dãy số là :' + arrNumber;
}

//tabs
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


document.getElementById('btnTinhTong').onclick = function () {
    //input : arrNumber
    var tongsoDuong = 0
    for (var index = 0; index <= arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            tongsoDuong += arrNumber[index];
        }
    }
    document.getElementById('b1').innerHTML = tongsoDuong;
}

document.getElementById('btnDemSoDuong').onclick = function () {
    //input : arrNumber
    // var soNguyen = +document.getElementById ('nhap').value;
    var demSo = 0;
    viTriSoDuong = 0;
    for (var index = 0; index <= arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            viTriSoDuong = index;
            demSo++
        }

    }
    document.getElementById('b2').innerHTML = `Có ${demSo} số dương trong mảng `;
}

document.getElementById('btnTimMin').onclick = function () {
    //input : arrNumber

    //output : Giá trị 
    var min = arrNumber[0]
    for (var index = 1; index < arrNumber.length; index++) {
        if (arrNumber[index] < min) // so sánh min với các giá trị còn lại trong mảng, nếu có giá trị nào lớn hơn max thì max sẽ bằng giá trị đó 
        {
            min = arrNumber[index]
        }
    }
    document.getElementById('b3').innerHTML = min;
}

var mangSoDuong = [];
function soDuongMin() {
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            mangSoDuong.push(arrNumber[i]);
        }
    }
    var soDuongMin = mangSoDuong[0];
    for (var x = 0; x < mangSoDuong.length; x++) {
        if (mangSoDuong[x] < soDuongMin) {
            soDuongMin = mangSoDuong[x];
        }
    }
    return soDuongMin;
}
document.querySelector("#btnMinDuong").onclick = function () {
    document.querySelector("#ket-qua-b4").innerHTML = soDuongMin();
};

document.getElementById('btnTimSoChanCuoi').onclick = function () {
    var soChanCuoi = 0;

    for (var index = arrNumber.length - 1; index >= 0; index--) {
        if (arrNumber[index] % 2 === 0) {
            soChanCuoi = arrNumber[index];
            break;
        }

    }
    document.getElementById('b5').innerHTML = soChanCuoi;
}

document.getElementById('btnDoiCho').onclick = function () {
    //input

    var viTriSo1 = +document.getElementById('p1').value;
    var viTriSo2 = +document.getElementById('p2').value;
    var giaTri1 = 0;
    var giaTri2 = 0;
    //output 

    //process
    for (var index = 0; index < arrNumber.length; index++) {
        if (viTriSo1 == index) {
            var giaTri3 = arrNumber[viTriSo1];
            giaTri1 = arrNumber[index];
            arrNumber[viTriSo1] = arrNumber[viTriSo2];
        }
        if (viTriSo2 == index) {
            arrNumber[viTriSo2] = giaTri3;
        }
    }
    document.getElementById('b6').innerHTML = arrNumber;
}
function sapXep() {
    for (var i = 1; i < arrNumber.length; i++) {
        for (var n = 0; n < i; n++) {
            if (arrNumber[n] > arrNumber[i]) {
                var a = arrNumber[n];
                arrNumber[n] = arrNumber[i];
                arrNumber[i] = a;
            }
        }
    }
    return arrNumber;
}
document.querySelector("#btnSapXep").onclick = function () {
    document.querySelector("#ket-qua-b7").innerHTML = sapXep();
};

document.getElementById('btnTimSoNguyen').onclick = function () {
    var soNguyenTo = 0;

    for (let i = 0; i < arrNumber.length; i++) {
        let isPrime = true;

        for (let j = 2; j < arrNumber[i]; j++) {
            if (arrNumber[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && arrNumber[i] > 1) {
            soNguyenTo = arrNumber[i];
            break;
        }
    }
    document.getElementById('b8').innerHTML = soNguyenTo;

}

document.getElementById('btnThemSoRandom').onclick = function () {
    var soRanDom = +document.getElementById('nhap-so-random').value;

    arrNumber.push(soRanDom);

    document.getElementById('array').innerHTML = arrNumber;

    document.getElementById('mom').innerHTML = arrNumber;

}

document.getElementById('btnDemSoNguyen').onclick = function () {

    var soNguyen = 0;
    for (var index = 0; index < arrNumber.length; index++) {

        if (Number.isInteger(arrNumber[index])) {
            soNguyen++;

        }

    }
    document.getElementById('b9').innerHTML = soNguyen;

}

document.getElementById('btnSoSanh').onclick = function () {

    var soDuong = 0;
    var soAm = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            soDuong++;
        } else if (arrNumber[index] < 0) {
            soAm++;
        }
        if (soDuong === soAm) {
            htmlString = 'Số dương bằng số âm';
        } else if (soDuong < soAm) {
            htmlString = "Số dương ít hơn số âm";
        } else if (soDuong > soAm) {
            htmlString = 'Số dương nhiều hơn số âm';
        }
    }
    document.getElementById('b10').innerHTML = htmlString;
}