//debugger

const volt_4_1 = document.getElementById("volt_4_1")
const volt_4_2 = document.getElementById("volt_4_2")
const volt_4_3 = document.getElementById("volt_4_3")
const volt_4_4 = document.getElementById("volt_4_4")
const volt_4_5 = document.getElementById("volt_4_5")
const volt_4_6 = document.getElementById("volt_4_6")
const volt_4_7 = document.getElementById("volt_4_7")
const volt_4_8 = document.getElementById("volt_4_8")
const volt_4_9 = document.getElementById("volt_4_9")
const volt_4_10 = document.getElementById("volt_4_10")
const volt_4_11 = document.getElementById("volt_4_11")
const volt_4_12 = document.getElementById("volt_4_12")

const volt_5_1 = document.getElementById("volt_5_1")
const volt_5_2 = document.getElementById("volt_5_2")
const volt_5_3 = document.getElementById("volt_5_3")
const volt_5_4 = document.getElementById("volt_5_4")
const volt_5_5 = document.getElementById("volt_5_5")
const volt_5_6 = document.getElementById("volt_5_6")

const btn_4_1 = document.getElementById("btn_4_1")
const btn_4_2 = document.getElementById("btn_4_2")
const btn_4_3 = document.getElementById("btn_4_3")
const btn_4_4 = document.getElementById("btn_4_4")
const btn_4_5 = document.getElementById("btn_4_5")
const btn_4_6 = document.getElementById("btn_4_6")
const btn_4_7 = document.getElementById("btn_4_7")
const btn_4_8 = document.getElementById("btn_4_8")
const btn_4_9 = document.getElementById("btn_4_9")
const btn_4_10 = document.getElementById("btn_4_10")
const btn_4_11 = document.getElementById("btn_4_11")
const btn_4_12 = document.getElementById("btn_4_12")

const btn_5_1 = document.getElementById("btn_5_1")
const btn_5_2 = document.getElementById("btn_5_2")
const btn_5_3 = document.getElementById("btn_5_3")
const btn_5_4 = document.getElementById("btn_5_4")
const btn_5_5 = document.getElementById("btn_5_5")
const btn_5_6 = document.getElementById("btn_5_6")

const line4_1_top = document.getElementById("line4_1_top")
const line4_2_top = document.getElementById("line4_2_top")
const line4_3_top = document.getElementById("line4_3_top")
const line4_4_top = document.getElementById("line4_4_top")
const line4_5_top = document.getElementById("line4_5_top")
const line4_6_top = document.getElementById("line4_6_top")
const line5_1_top = document.getElementById("line5_1_top")
const line5_2_top = document.getElementById("line5_2_top")
const line5_3_top = document.getElementById("line5_3_top")

const line4_1_bottom = document.getElementById("line4_1_bottom")
const line4_2_bottom = document.getElementById("line4_2_bottom")
const line4_3_bottom = document.getElementById("line4_3_bottom")
const line4_4_bottom = document.getElementById("line4_4_bottom")
const line4_5_bottom = document.getElementById("line4_5_bottom")
const line4_6_bottom = document.getElementById("line4_6_bottom")
const line5_1_bottom = document.getElementById("line5_1_bottom")
const line5_2_bottom = document.getElementById("line5_2_bottom")
const line5_3_bottom = document.getElementById("line5_3_bottom")

const btn_active_4 = document.getElementById("btn_active_4")
const btn_active_5 = document.getElementById("btn_active_5")

function show4() {
    btn_4_1.classList.remove("d-none");
    btn_4_1.classList.add("d-block");
    btn_4_2.classList.remove("d-none");
    btn_4_2.classList.add("d-block");
    btn_4_3.classList.remove("d-none");
    btn_4_3.classList.add("d-block");
    btn_4_4.classList.remove("d-none");
    btn_4_4.classList.add("d-block");
    btn_4_5.classList.remove("d-none");
    btn_4_5.classList.add("d-block");
    btn_4_6.classList.remove("d-none");
    btn_4_6.classList.add("d-block");
    btn_4_7.classList.remove("d-none");
    btn_4_7.classList.add("d-block");
    btn_4_8.classList.remove("d-none");
    btn_4_8.classList.add("d-block");
    btn_4_9.classList.remove("d-none");
    btn_4_9.classList.add("d-block");
    btn_4_10.classList.remove("d-none");
    btn_4_10.classList.add("d-block");
    btn_4_11.classList.remove("d-none");
    btn_4_11.classList.add("d-block");
    btn_4_12.classList.remove("d-none");
    btn_4_12.classList.add("d-block");

    btn_5_1.classList.add("d-none");
    btn_5_1.classList.remove("d-block");
    btn_5_2.classList.add("d-none");
    btn_5_2.classList.remove("d-block");
    btn_5_3.classList.add("d-none");
    btn_5_3.classList.remove("d-block");
    btn_5_4.classList.add("d-none");
    btn_5_4.classList.remove("d-block");
    btn_5_5.classList.add("d-none");
    btn_5_5.classList.remove("d-block");
    btn_5_6.classList.add("d-none");
    btn_5_6.classList.remove("d-block");

    btn_active_4.classList.add("disabled");
    btn_active_5.classList.remove("disabled");

    line4_1_top.classList.remove("d-none");
    line4_2_top.classList.remove("d-none");
    line4_3_top.classList.remove("d-none");
    line4_4_top.classList.remove("d-none");
    line4_5_top.classList.remove("d-none");
    line4_6_top.classList.remove("d-none");    
    line5_1_top.classList.add("d-none");
    line5_2_top.classList.add("d-none");
    line5_3_top.classList.add("d-none");

    line4_1_bottom.classList.remove("d-none");
    line4_2_bottom.classList.remove("d-none");
    line4_3_bottom.classList.remove("d-none");
    line4_4_bottom.classList.remove("d-none");
    line4_5_bottom.classList.remove("d-none");
    line4_6_bottom.classList.remove("d-none");    
    line5_1_bottom.classList.add("d-none");
    line5_2_bottom.classList.add("d-none");
    line5_3_bottom.classList.add("d-none");
}
function show5() {
    btn_4_1.classList.remove("d-block");
    btn_4_1.classList.add("d-none");
    btn_4_2.classList.remove("d-block");
    btn_4_2.classList.add("d-none");
    btn_4_3.classList.remove("d-block");
    btn_4_3.classList.add("d-none");
    btn_4_4.classList.remove("d-block");
    btn_4_4.classList.add("d-none");
    btn_4_5.classList.remove("d-block");
    btn_4_5.classList.add("d-none");
    btn_4_6.classList.remove("d-block");
    btn_4_6.classList.add("d-none");
    btn_4_7.classList.remove("d-block");
    btn_4_7.classList.add("d-none");
    btn_4_8.classList.remove("d-block");
    btn_4_8.classList.add("d-none");
    btn_4_9.classList.remove("d-block");
    btn_4_9.classList.add("d-none");
    btn_4_10.classList.remove("d-block");
    btn_4_10.classList.add("d-none");
    btn_4_11.classList.remove("d-block");
    btn_4_11.classList.add("d-none");
    btn_4_12.classList.remove("d-block");
    btn_4_12.classList.add("d-none");

    btn_5_1.classList.add("d-block");
    btn_5_1.classList.remove("d-none");
    btn_5_2.classList.add("d-block");
    btn_5_2.classList.remove("d-none");
    btn_5_3.classList.add("d-block");
    btn_5_3.classList.remove("d-none");
    btn_5_4.classList.add("d-block");
    btn_5_4.classList.remove("d-none");
    btn_5_5.classList.add("d-block");
    btn_5_5.classList.remove("d-none");
    btn_5_6.classList.add("d-block");
    btn_5_6.classList.remove("d-none");
    
    btn_active_5.classList.add("disabled");
    btn_active_4.classList.remove("disabled");    

    line4_1_top.classList.add("d-none");
    line4_2_top.classList.add("d-none");
    line4_3_top.classList.add("d-none");
    line4_4_top.classList.add("d-none");
    line4_5_top.classList.add("d-none");
    line4_6_top.classList.add("d-none");    
    line5_1_top.classList.remove("d-none");
    line5_2_top.classList.remove("d-none");
    line5_3_top.classList.remove("d-none");    

    line4_1_bottom.classList.add("d-none");
    line4_2_bottom.classList.add("d-none");
    line4_3_bottom.classList.add("d-none");
    line4_4_bottom.classList.add("d-none");
    line4_5_bottom.classList.add("d-none");
    line4_6_bottom.classList.add("d-none");    
    line5_1_bottom.classList.remove("d-none");
    line5_2_bottom.classList.remove("d-none");
    line5_3_bottom.classList.remove("d-none");
}

function show4_1() {
    if (volt_4_1.classList.contains("d-none")) {
        volt_4_1.classList.remove("d-none");
        volt_4_1.classList.add("d-block");
    }
    else {
        volt_4_1.classList.remove("d-block");
        volt_4_1.classList.add("d-none");
    }
}

function show4_2() {
    if (volt_4_2.classList.contains("d-none")) {
        volt_4_2.classList.remove("d-none");
        volt_4_2.classList.add("d-block");
    }
    else {
        volt_4_2.classList.remove("d-block");
        volt_4_2.classList.add("d-none");
    }
}

function show4_3() {
    if (volt_4_3.classList.contains("d-none")) {
        volt_4_3.classList.remove("d-none");
        volt_4_3.classList.add("d-block");
    }
    else {
        volt_4_3.classList.remove("d-block");
        volt_4_3.classList.add("d-none");
    }
}

function show4_4() {
    if (volt_4_4.classList.contains("d-none")) {
        volt_4_4.classList.remove("d-none");
        volt_4_4.classList.add("d-block");
    }
    else {
        volt_4_4.classList.remove("d-block");
        volt_4_4.classList.add("d-none");
    }
}

function show4_5() {
    if (volt_4_5.classList.contains("d-none")) {
        volt_4_5.classList.remove("d-none");
        volt_4_5.classList.add("d-block");
    }
    else {
        volt_4_5.classList.remove("d-block");
        volt_4_5.classList.add("d-none");
    }
}

function show4_6() {
    if (volt_4_6.classList.contains("d-none")) {
        volt_4_6.classList.remove("d-none");
        volt_4_6.classList.add("d-block");
    }
    else {
        volt_4_6.classList.remove("d-block");
        volt_4_6.classList.add("d-none");
    }
}

function show4_7() {
    if (volt_4_7.classList.contains("d-none")) {
        volt_4_7.classList.remove("d-none");
        volt_4_7.classList.add("d-block");
    }
    else {
        volt_4_7.classList.remove("d-block");
        volt_4_7.classList.add("d-none");
    }
}

function show4_8() {
    if (volt_4_8.classList.contains("d-none")) {
        volt_4_8.classList.remove("d-none");
        volt_4_8.classList.add("d-block");
    }
    else {
        volt_4_8.classList.remove("d-block");
        volt_4_8.classList.add("d-none");
    }
}

function show4_9() {
    if (volt_4_9.classList.contains("d-none")) {
        volt_4_9.classList.remove("d-none");
        volt_4_9.classList.add("d-block");
    }
    else {
        volt_4_9.classList.remove("d-block");
        volt_4_9.classList.add("d-none");
    }
}

function show4_10() {
    if (volt_4_10.classList.contains("d-none")) {
        volt_4_10.classList.remove("d-none");
        volt_4_10.classList.add("d-block");
    }
    else {
        volt_4_10.classList.remove("d-block");
        volt_4_10.classList.add("d-none");
    }
}

function show4_11() {
    if (volt_4_11.classList.contains("d-none")) {
        volt_4_11.classList.remove("d-none");
        volt_4_11.classList.add("d-block");
    }
    else {
        volt_4_11.classList.remove("d-block");
        volt_4_11.classList.add("d-none");
    }
}

function show4_12() {
    if (volt_4_12.classList.contains("d-none")) {
        volt_4_12.classList.remove("d-none");
        volt_4_12.classList.add("d-block");
    }
    else {
        volt_4_12.classList.remove("d-block");
        volt_4_12.classList.add("d-none");
    }
}

function show5_1() {
    if (volt_5_1.classList.contains("d-none")) {
        volt_5_1.classList.remove("d-none");
        volt_5_1.classList.add("d-block");
    }
    else {
        volt_5_1.classList.remove("d-block");
        volt_5_1.classList.add("d-none");
    }
}

function show5_2() {
    if (volt_5_2.classList.contains("d-none")) {
        volt_5_2.classList.remove("d-none");
        volt_5_2.classList.add("d-block");
    }
    else {
        volt_5_2.classList.remove("d-block");
        volt_5_2.classList.add("d-none");
    }
}

function show5_3() {
    if (volt_5_3.classList.contains("d-none")) {
        volt_5_3.classList.remove("d-none");
        volt_5_3.classList.add("d-block");
    }
    else {
        volt_5_3.classList.remove("d-block");
        volt_5_3.classList.add("d-none");
    }
}

function show5_4() {
    if (volt_5_4.classList.contains("d-none")) {
        volt_5_4.classList.remove("d-none");
        volt_5_4.classList.add("d-block");
    }
    else {
        volt_5_4.classList.remove("d-block");
        volt_5_4.classList.add("d-none");
    }
}

function show5_5() {
    if (volt_5_5.classList.contains("d-none")) {
        volt_5_5.classList.remove("d-none");
        volt_5_5.classList.add("d-block");
    }
    else {
        volt_5_5.classList.remove("d-block");
        volt_5_5.classList.add("d-none");
    }
}

function show5_6() {
    if (volt_5_6.classList.contains("d-none")) {
        volt_5_6.classList.remove("d-none");
        volt_5_6.classList.add("d-block");
    }
    else {
        volt_5_6.classList.remove("d-block");
        volt_5_6.classList.add("d-none");
    }
}