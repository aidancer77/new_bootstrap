const volt_4_1 = document.getElementById("volt_4_1")
const volt_4_2 = document.getElementById("volt_4_2")

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