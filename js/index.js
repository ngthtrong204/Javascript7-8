//CSS cho mảng chính
let displayMainArray = document.getElementById("displaymainArray");
let mainArray = [];

//Fnc add number
document.querySelector("#addNumber").addEventListener("click", () => {
    let inputNumber = +document.getElementById("inputNumber").value;
    mainArray.push(inputNumber);
    displayMainArray.innerHTML = mainArray.join(", ")
    displayMainArray.innerHTML ? displayMainArray.classList.add("bg-dark") : {}
    document.getElementById("inputNumber").value = "";
})
//Button remove
document.getElementById("removeMainArray").onclick = () => {
    mainArray.splice(0, mainArray.length);
    displayMainArray.classList.remove("bg-dark");
}

//**************Bài 1******************//
function b1() {
    let kq = document.getElementById("kq1")
    if (mainArray[0] === 0 || mainArray[0]) { //tránh trường hợp mảng không có phần tử
        // //Cách 1:
        // let sum = 0;
        // mainArray.forEach((number) => {
        //     if (number > 0) {
        //         sum += number;
        //     }
        // })


        //Cách 2 (reduce)
        let arrayB1 = mainArray.filter((a) => a > 0)
        let sum = arrayB1.reduce((sumReduce, item) => sumReduce + item)
        kq.innerHTML = sum
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")
    }
}
//**************Bài 2******************//
function b2() {
    let kq = document.getElementById("kq2")
    if (mainArray[0] === 0 || mainArray[0]) {
        let demSoDuong = 0;
        //Cách 1
        // for (let i = 0; i < mainArray.length; i++) {
        //     if (mainArray[i] > 0) {
        //         demSoDuong += 1
        //     }
        // }

        //Cách 2:
        mainArray.forEach((number) => {
            if (number > 0) {
                demSoDuong += 1;
            }
        })

        kq.innerHTML = demSoDuong
        return demSoDuong;
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")
    }
}

//**************Bài 3******************//
function b3() {
    let kq = document.querySelector("#kq3")
    if (mainArray[0] === 0 || mainArray[0]) {
        //Cách1
        kq.innerHTML = Math.min(...mainArray)
        //Cách 2
        // let min = 0;
        // for (let i = 0; i < mainArray.length; i++) {
        //     if (min >= mainArray[i]) {
        //         min = mainArray[i]
        //     }
        // }
        // kq.innerHTML = min



    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")

    }
}


//**************Bài 4******************//
function b4() {
    let kq = document.querySelector("#kq4")
    if (mainArray[0] === 0 || mainArray[0]) {
        //Cách 3
        let positiveNumber = mainArray.filter((item) => item > 0)
        if (positiveNumber === [0] || positiveNumber[0]) {
            kq.innerHTML = Math.min(...positiveNumber)
        } else {
            alert("Mảng không có số dương")
        }



        // let soDuong = b2();//Dùng cho cách 1 và 2
        // if (soDuong === 0) {
        //     alert("Mảng không có số dương")
        // } else {
        //     let min = mainArray[0]; // Biến min dùng cho cách 1 và 2

        //     //Cách 1
        //     // for (let i = 0; i < mainArray.length; i++) {
        //     //     if (mainArray[i] > 0 && min >= mainArray[i]) {
        //     //         min = mainArray[i]
        //     //     }
        //     // }

        //     //Cach 2: forEach
        //     mainArray.forEach((item) => {
        //         if (min >= item && item > 0) {
        //             min = item;
        //         }
        //     })

        //     kq.innerHTML = min;
        // }


    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")
    }
}


//**************Bài 5******************//
function b5() {
    let kq = document.querySelector("#kq5")
    if (mainArray[0] === 0 || mainArray[0]) {

        let evenNumber = mainArray.filter((a) => a % 2 === 0);
        kq.innerHTML = evenNumber.pop()


    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")

    }
}


//**************Bài 6******************//
function b6() {
    let kq = document.querySelector("#kq6")
    if (mainArray[0] === 0 || mainArray[0]) {
        let b6Array = mainArray

        let po1 = +document.getElementById("position1").value;
        let po2 = +document.getElementById("position2").value;

        if (po1 < 0 || po2 < 0 || po1 !== Math.round(po1) || po2 !== Math.round(po2)) {
            alert("Giá trị của vị trí sai định dạng")
        } else {

            let va1 = b6Array[po1];
            let va2 = b6Array[po2];

            b6Array.splice(po1, 1, va2)
            b6Array.splice(po2, 1, va1)

            kq.innerHTML = b6Array.join(", ")
            kq.innerHTML ? kq.classList.add("bg-dark") : {};
        }
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")

    }
}

//**************Bài 7******************//
function b7() {
    let kq = document.querySelector("#kq7")
    if (mainArray[0] === 0 || mainArray[0]) {
        let b7Array = mainArray

        b7Array.sort((a, b) => a - b);
        kq.innerHTML = b7Array.join(", ")
        kq.innerHTML ? kq.classList.add("bg-dark") : {};
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")
    }
}


//**************Bài 8******************//
function b8() {
    let kq = document.querySelector("#kq8")
    if (mainArray[0] === 0 || mainArray[0]) {
        for (let i = 0; i < mainArray.length && !kq.innerHTML; i++) { //kq.innerHTML được thêm vào để kết thúc vòng lập khi đã tìm được số nguyên tố
            if (mainArray[i] < 2 || mainArray[i] !== Math.round(mainArray[i])) {
                continue;
            } else {
                for (let n = 2; n <= mainArray[i]; n++) {
                    if (mainArray[i] % n !== 0) {
                        continue;
                    } else if (n === mainArray[i]) {
                        kq.innerHTML = mainArray[i];
                        break;
                    } else { break; }
                }
            }
        }
        kq.innerHTML ? {} : kq.innerHTML = -1;
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")
    }
}

//**************Bài 9******************//
let displayB9 = document.getElementById("displayB9")
let arrayB9 = [];

//Fnc add number
document.querySelector("#addNumberB9").addEventListener("click", () => {
    let inputNumberB9 = +document.getElementById("inputNumberB9").value;
    arrayB9.push(inputNumberB9);
    displayB9.innerHTML = arrayB9.join(", ")
    displayB9.innerHTML ? displayB9.classList.add("bg-dark") : {};
    document.getElementById("inputNumberB9").value = ""

})
//Remove number
document.querySelector("#removeMainArrayB9").addEventListener("click", () => {
    arrayB9 = []
    displayB9.innerHTML = "";
    displayB9.classList.remove("bg-dark")
})

//Main function
function b9() {

    let kq = document.getElementById("kq9");
    if (arrayB9[0] === 0 || arrayB9[0]) {
        let integer = 0;
        arrayB9.forEach((a) => {
            if (a === Math.round(a)) {
                integer++;
            }
        })
        if (integer === 0) {
            alert("Mảng không có số nguyên")
        } else {
            kq.innerHTML = integer;
        }

    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")

    }
}

//**************Bài 10******************//
function b10() {
    let kq = document.querySelector("#kq10")
    if (mainArray[0] === 0 || mainArray[0]) {
        let underZero = 0;
        let overZero = 0;
        mainArray.forEach((a) => {
            if (a > 0) {
                overZero++;
            } else if (a < 0) {
                underZero++;
            }
        })
        if (underZero === 0 && overZero === 0) {
            alert("Mảng chỉ có giá trị 0");
        } else if (underZero > overZero) {
            kq.innerHTML = "Số dương (" + overZero + ") < Số âm (" + underZero + ")";
        } else if (underZero < overZero) {
            kq.innerHTML = "Số dương (" + overZero + ") > Số âm (" + underZero + ")";
        } else if (underZero === overZero) {
            kq.innerHTML = "Số am và số dương bằng nhau (" + underZero + "=" + overZero + ")";
        }




    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")

    }
}
