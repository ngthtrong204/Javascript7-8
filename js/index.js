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
    if (mainArray[0]) {
        let sum = 0;
        mainArray.forEach((number) => {
            if (number > 0) {
                sum += number;
            }
        })
        kq.innerHTML = sum
        console.log(mainArray);
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")
    }
}
//**************Bài 2******************//
function b2() {
    let kq = document.getElementById("kq2")
    if (mainArray[0]) {
        let demSoDuong = 0;
        for (let i = 0; i < mainArray.length; i++) {
            if (mainArray[i] > 0) {
                demSoDuong += 1
            }
        }
        // mainArray.forEach((number) => {
        //     if (number > 0) {
        //         demSoDuong += 1;
        //     }
        // })
        kq.innerHTML = demSoDuong
        console.log(mainArray);
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")
    }
}

//**************Bài 3******************//
function b3() {
    let kq = document.querySelector("#kq3")
    if (mainArray[0]){
        //Cách1
        kq.innerHTML = Math.min(...mainArray)
        //Cách 2
    } else {
        kq.innerHTML = "";
        alert("Chưa có giá trị trong mảng")

    }
}
