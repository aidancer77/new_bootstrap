
// debugger
// const GpuNav = document.getElementById("gpu_nav")
// GpuNav.style.display = "none";
// const GpuVolt = document.getElementById("gpu_voltage")
// GpuVolt.style.display = "none";

// btn1.onclick = function () {    
//         GpuNav.style.display = "block";
//         GpuVolt.style.display = "none";
// };

// btn2.onclick = function () {
//     GpuNav.style.display = "none";
//     GpuVolt.style.display = "block";
// };


//--------------------------------------------------------------------------------
//graphic's gpu data visibility

const GraphGpu4_1 = document.getElementById("graph_gpu_4_1")
var myCollapse = new bootstrap.Collapse(GraphGpu4_1)

const Gpu4_1 = document.getElementById("gpu_4_1")
Gpu4_1.addEventListener('click', function() {
    myCollapse.show();
  });
const VoltVal4_1 = document.getElementById("voltage_value_4_1")




const Gpu4_2 = document.getElementById("gpu_4_2")
const GraphGpu4_2 = document.getElementById("graph_gpu_4_2")
const VoltVal4_2 = document.getElementById("voltage_value_4_2")

const Gpu4_3 = document.getElementById("gpu_4_3")
const GraphGpu4_3 = document.getElementById("graph_gpu_4_3")
const VoltVal4_3 = document.getElementById("voltage_value_4_3")

const Gpu4_4 = document.getElementById("gpu_4_4")
const GraphGpu4_4 = document.getElementById("graph_gpu_4_4")
const VoltVal4_4 = document.getElementById("voltage_value_4_4")

const Gpu4_5 = document.getElementById("gpu_4_5")
const GraphGpu4_5 = document.getElementById("graph_gpu_4_5")
const VoltVal4_5 = document.getElementById("voltage_value_4_5")

const Gpu4_6 = document.getElementById("gpu_4_6")
const GraphGpu4_6 = document.getElementById("graph_gpu_4_6")
const VoltVal4_6 = document.getElementById("voltage_value_4_6")

const Gpu4_7 = document.getElementById("gpu_4_7")
const GraphGpu4_7 = document.getElementById("graph_gpu_4_7")
const VoltVal4_7 = document.getElementById("voltage_value_4_7")

const Gpu4_8 = document.getElementById("gpu_4_8")
const GraphGpu4_8 = document.getElementById("graph_gpu_4_8")
const VoltVal4_8 = document.getElementById("voltage_value_4_8")

const Gpu4_9 = document.getElementById("gpu_4_9")
const GraphGpu4_9 = document.getElementById("graph_gpu_4_9")
const VoltVal4_9 = document.getElementById("voltage_value_4_9")

const Gpu4_10 = document.getElementById("gpu_4_10")
const GraphGpu4_10 = document.getElementById("graph_gpu_4_10")
const VoltVal4_10 = document.getElementById("voltage_value_4_10")

const Gpu4_11 = document.getElementById("gpu_4_11")
const GraphGpu4_11 = document.getElementById("graph_gpu_4_11")
const VoltVal4_11 = document.getElementById("voltage_value_4_11")

const Gpu4_12 = document.getElementById("gpu_4_12")
const GraphGpu4_12 = document.getElementById("graph_gpu_4_12")
const VoltVal4_12 = document.getElementById("voltage_value_4_12")

const Gpu5_1 = document.getElementById("gpu_5_1")
const GraphGpu5_1 = document.getElementById("graph_gpu_5_1")
const VoltVal5_1 = document.getElementById("voltage_value_5_1")

const Gpu5_2 = document.getElementById("gpu_5_2")
const GraphGpu5_2 = document.getElementById("graph_gpu_5_2")
const VoltVal5_2 = document.getElementById("voltage_value_5_2")

const Gpu5_3 = document.getElementById("gpu_5_3")
const GraphGpu5_3 = document.getElementById("graph_gpu_5_3")
const VoltVal5_3 = document.getElementById("voltage_value_5_3")

const Gpu5_4 = document.getElementById("gpu_5_4")
const GraphGpu5_4 = document.getElementById("graph_gpu_5_4")
const VoltVal5_4 = document.getElementById("voltage_value_5_4")

const Gpu5_5 = document.getElementById("gpu_5_5")
const GraphGpu5_5 = document.getElementById("graph_gpu_5_5")
const VoltVal5_5 = document.getElementById("voltage_value_5_5")

const Gpu5_6 = document.getElementById("gpu_5_6")
const GraphGpu5_6 = document.getElementById("graph_gpu_5_6")
const VoltVal5_6 = document.getElementById("voltage_value_5_6")

const GpuVoltVis4 = document.getElementById("gpu_voltage_grid_4")
const GpuVoltVis5 = document.getElementById("gpu_voltage_grid_5")

function showOrHide4_1() {
    if (Gpu4_1.checked) {
        // GraphGpu4_1.style.display = "flex";
        // VoltVal4_1.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_1.style.display = "none";
        VoltVal4_1.style.display = "none";
    }
}

function showOrHide4_2() {
    if (Gpu4_2.checked) {
        GraphGpu4_2.style.display = "flex";
        VoltVal4_2.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_2.style.display = "none";
        VoltVal4_2.style.display = "none";
    }
}

function showOrHide4_3() {
    if (Gpu4_3.checked) {
        GraphGpu4_3.style.display = "flex";
        VoltVal4_3.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_3.style.display = "none";
        VoltVal4_3.style.display = "none";
    }
}

function showOrHide4_4() {
    if (Gpu4_4.checked) {
        GraphGpu4_4.style.display = "flex";
        VoltVal4_4.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_4.style.display = "none";
        VoltVal4_4.style.display = "none";
    }
}

function showOrHide4_5() {
    if (Gpu4_5.checked) {
        GraphGpu4_5.style.display = "flex";
        VoltVal4_5.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_5.style.display = "none";
        VoltVal4_5.style.display = "none";
    }
}

function showOrHide4_6() {
    if (Gpu4_6.checked) {
        GraphGpu4_6.style.display = "flex";
        VoltVal4_6.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_6.style.display = "none";
        VoltVal4_6.style.display = "none";
    }
}

function showOrHide4_7() {
    if (Gpu4_7.checked) {
        GraphGpu4_7.style.display = "flex";
        VoltVal4_7.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_7.style.display = "none";
        VoltVal4_7.style.display = "none";
    }
}

function showOrHide4_8() {
    if (Gpu4_8.checked) {
        GraphGpu4_8.style.display = "flex";
        VoltVal4_8.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_8.style.display = "none";
        VoltVal4_8.style.display = "none";
    }
}

function showOrHide4_9() {
    if (Gpu4_9.checked) {
        GraphGpu4_9.style.display = "flex";
        VoltVal4_9.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_9.style.display = "none";
        VoltVal4_9.style.display = "none";
    }
}

function showOrHide4_10() {
    if (Gpu4_10.checked) {
        GraphGpu4_10.style.display = "flex";
        VoltVal4_10.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_10.style.display = "none";
        VoltVal4_10.style.display = "none";
    }
}

function showOrHide4_11() {
    if (Gpu4_11.checked) {
        GraphGpu4_11.style.display = "flex";
        VoltVal4_11.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_11.style.display = "none";
        VoltVal4_11.style.display = "none";
    }
}

function showOrHide4_12() {
    if (Gpu4_12.checked) {
        GraphGpu4_12.style.display = "flex";
        VoltVal4_12.style.display = "flex";

        Gpu5_1.checked = false;
        GraphGpu5_1.style.display = "none";
        Gpu5_2.checked = false;
        GraphGpu5_2.style.display = "none";
        Gpu5_3.checked = false;
        GraphGpu5_3.style.display = "none";
        Gpu5_4.checked = false;
        GraphGpu5_4.style.display = "none";
        Gpu5_5.checked = false;
        GraphGpu5_5.style.display = "none";
        Gpu5_6.checked = false;
        GraphGpu5_6.style.display = "none";

        GpuVoltVis4.style.display = "grid";
        GpuVoltVis5.style.display = "none";
    }
    else {
        GraphGpu4_12.style.display = "none";
        VoltVal4_12.style.display = "none";
    }
}

function showOrHide5_1() {
    if (Gpu5_1.checked) {
        GraphGpu5_1.style.display = "flex";
        VoltVal5_1.style.display = "flex";

        Gpu4_1.checked = false;
        GraphGpu4_1.style.display = "none";
        VoltVal4_1.style.display = "none";
        Gpu4_2.checked = false;
        GraphGpu4_2.style.display = "none";
        VoltVal4_2.style.display = "none";
        Gpu4_3.checked = false;
        GraphGpu4_3.style.display = "none";
        VoltVal4_3.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_4.style.display = "none";
        VoltVal4_4.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_5.style.display = "none";
        VoltVal4_5.style.display = "none";
        Gpu4_6.checked = false;
        GraphGpu4_6.style.display = "none";
        VoltVal4_6.style.display = "none";
        Gpu4_7.checked = false;
        GraphGpu4_7.style.display = "none";
        VoltVal4_7.style.display = "none";
        Gpu4_8.checked = false;
        GraphGpu4_8.style.display = "none";
        VoltVal4_8.style.display = "none";
        Gpu4_9.checked = false;
        GraphGpu4_9.style.display = "none";
        VoltVal4_9.style.display = "none";
        Gpu4_10.checked = false;
        GraphGpu4_10.style.display = "none";
        VoltVal4_10.style.display = "none";
        Gpu4_11.checked = false;
        GraphGpu4_11.style.display = "none";
        VoltVal4_11.style.display = "none";
        Gpu4_12.checked = false;
        GraphGpu4_12.style.display = "none";
        VoltVal4_12.style.display = "none";

        GpuVoltVis4.style.display = "none";
        GpuVoltVis5.style.display = "grid";
    }
    else {
        GraphGpu5_1.style.display = "none";
        VoltVal5_1.style.display = "none";
    }
}

function showOrHide5_2() {
    if (Gpu5_2.checked) {
        GraphGpu5_2.style.display = "flex";
        VoltVal5_2.style.display = "flex";

        Gpu4_1.checked = false;
        GraphGpu4_1.style.display = "none";
        VoltVal4_1.style.display = "none";
        Gpu4_2.checked = false;
        GraphGpu4_2.style.display = "none";
        VoltVal4_2.style.display = "none";
        Gpu4_3.checked = false;
        GraphGpu4_3.style.display = "none";
        VoltVal4_3.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_4.style.display = "none";
        VoltVal4_4.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_5.style.display = "none";
        VoltVal4_5.style.display = "none";
        Gpu4_6.checked = false;
        GraphGpu4_6.style.display = "none";
        VoltVal4_6.style.display = "none";
        Gpu4_7.checked = false;
        GraphGpu4_7.style.display = "none";
        VoltVal4_7.style.display = "none";
        Gpu4_8.checked = false;
        GraphGpu4_8.style.display = "none";
        VoltVal4_8.style.display = "none";
        Gpu4_9.checked = false;
        GraphGpu4_9.style.display = "none";
        VoltVal4_9.style.display = "none";
        Gpu4_10.checked = false;
        GraphGpu4_10.style.display = "none";
        VoltVal4_10.style.display = "none";
        Gpu4_11.checked = false;
        GraphGpu4_11.style.display = "none";
        VoltVal4_11.style.display = "none";
        Gpu4_12.checked = false;
        GraphGpu4_12.style.display = "none";
        VoltVal4_12.style.display = "none";

        GpuVoltVis4.style.display = "none";
        GpuVoltVis5.style.display = "grid";
    }
    else {
        GraphGpu5_2.style.display = "none";
        VoltVal5_2.style.display = "none";
    }
}

function showOrHide5_3() {
    if (Gpu5_3.checked) {
        GraphGpu5_3.style.display = "flex";
        VoltVal5_3.style.display = "flex";

        Gpu4_1.checked = false;
        GraphGpu4_1.style.display = "none";
        VoltVal4_1.style.display = "none";
        Gpu4_2.checked = false;
        GraphGpu4_2.style.display = "none";
        VoltVal4_2.style.display = "none";
        Gpu4_3.checked = false;
        GraphGpu4_3.style.display = "none";
        VoltVal4_3.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_4.style.display = "none";
        VoltVal4_4.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_5.style.display = "none";
        VoltVal4_5.style.display = "none";
        Gpu4_6.checked = false;
        GraphGpu4_6.style.display = "none";
        VoltVal4_6.style.display = "none";
        Gpu4_7.checked = false;
        GraphGpu4_7.style.display = "none";
        VoltVal4_7.style.display = "none";
        Gpu4_8.checked = false;
        GraphGpu4_8.style.display = "none";
        VoltVal4_8.style.display = "none";
        Gpu4_9.checked = false;
        GraphGpu4_9.style.display = "none";
        VoltVal4_9.style.display = "none";
        Gpu4_10.checked = false;
        GraphGpu4_10.style.display = "none";
        VoltVal4_10.style.display = "none";
        Gpu4_11.checked = false;
        GraphGpu4_11.style.display = "none";
        VoltVal4_11.style.display = "none";
        Gpu4_12.checked = false;
        GraphGpu4_12.style.display = "none";
        VoltVal4_12.style.display = "none";

        GpuVoltVis4.style.display = "none";
        GpuVoltVis5.style.display = "grid";

    }
    else {
        GraphGpu5_3.style.display = "none";
        VoltVal5_3.style.display = "none";
    }
}

function showOrHide5_4() {
    if (Gpu5_4.checked) {
        GraphGpu5_4.style.display = "flex";
        VoltVal5_4.style.display = "flex";

        Gpu4_1.checked = false;
        GraphGpu4_1.style.display = "none";
        VoltVal4_1.style.display = "none";
        Gpu4_2.checked = false;
        GraphGpu4_2.style.display = "none";
        VoltVal4_2.style.display = "none";
        Gpu4_3.checked = false;
        GraphGpu4_3.style.display = "none";
        VoltVal4_3.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_4.style.display = "none";
        VoltVal4_4.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_5.style.display = "none";
        VoltVal4_5.style.display = "none";
        Gpu4_6.checked = false;
        GraphGpu4_6.style.display = "none";
        VoltVal4_6.style.display = "none";
        Gpu4_7.checked = false;
        GraphGpu4_7.style.display = "none";
        VoltVal4_7.style.display = "none";
        Gpu4_8.checked = false;
        GraphGpu4_8.style.display = "none";
        VoltVal4_8.style.display = "none";
        Gpu4_9.checked = false;
        GraphGpu4_9.style.display = "none";
        VoltVal4_9.style.display = "none";
        Gpu4_10.checked = false;
        GraphGpu4_10.style.display = "none";
        VoltVal4_10.style.display = "none";
        Gpu4_11.checked = false;
        GraphGpu4_11.style.display = "none";
        VoltVal4_11.style.display = "none";
        Gpu4_12.checked = false;
        GraphGpu4_12.style.display = "none";
        VoltVal4_12.style.display = "none";

        GpuVoltVis4.style.display = "none";
        GpuVoltVis5.style.display = "grid";

    }
    else {
        GraphGpu5_4.style.display = "none";
        VoltVal5_4.style.display = "none";
    }
}

function showOrHide5_5() {
    if (Gpu5_5.checked) {
        GraphGpu5_5.style.display = "flex";
        VoltVal5_5.style.display = "flex";

        Gpu4_1.checked = false;
        GraphGpu4_1.style.display = "none";
        VoltVal4_1.style.display = "none";
        Gpu4_2.checked = false;
        GraphGpu4_2.style.display = "none";
        VoltVal4_2.style.display = "none";
        Gpu4_3.checked = false;
        GraphGpu4_3.style.display = "none";
        VoltVal4_3.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_4.style.display = "none";
        VoltVal4_4.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_5.style.display = "none";
        VoltVal4_5.style.display = "none";
        Gpu4_6.checked = false;
        GraphGpu4_6.style.display = "none";
        VoltVal4_6.style.display = "none";
        Gpu4_7.checked = false;
        GraphGpu4_7.style.display = "none";
        VoltVal4_7.style.display = "none";
        Gpu4_8.checked = false;
        GraphGpu4_8.style.display = "none";
        VoltVal4_8.style.display = "none";
        Gpu4_9.checked = false;
        GraphGpu4_9.style.display = "none";
        VoltVal4_9.style.display = "none";
        Gpu4_10.checked = false;
        GraphGpu4_10.style.display = "none";
        VoltVal4_10.style.display = "none";
        Gpu4_11.checked = false;
        GraphGpu4_11.style.display = "none";
        VoltVal4_11.style.display = "none";
        Gpu4_12.checked = false;
        GraphGpu4_12.style.display = "none";
        VoltVal4_12.style.display = "none";

        GpuVoltVis4.style.display = "none";
        GpuVoltVis5.style.display = "grid";
    }
    else {
        GraphGpu5_5.style.display = "none";
        VoltVal5_5.style.display = "none";
    }
}

function showOrHide5_6() {
    if (Gpu5_6.checked) {
        GraphGpu5_6.style.display = "flex";
        VoltVal5_6.style.display = "flex";

        Gpu4_1.checked = false;
        GraphGpu4_1.style.display = "none";
        VoltVal4_1.style.display = "none";
        Gpu4_2.checked = false;
        GraphGpu4_2.style.display = "none";
        VoltVal4_2.style.display = "none";
        Gpu4_3.checked = false;
        GraphGpu4_3.style.display = "none";
        VoltVal4_3.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_4.style.display = "none";
        VoltVal4_4.style.display = "none";
        Gpu4_4.checked = false;
        GraphGpu4_5.style.display = "none";
        VoltVal4_5.style.display = "none";
        Gpu4_6.checked = false;
        GraphGpu4_6.style.display = "none";
        VoltVal4_6.style.display = "none";
        Gpu4_7.checked = false;
        GraphGpu4_7.style.display = "none";
        VoltVal4_7.style.display = "none";
        Gpu4_8.checked = false;
        GraphGpu4_8.style.display = "none";
        VoltVal4_8.style.display = "none";
        Gpu4_9.checked = false;
        GraphGpu4_9.style.display = "none";
        VoltVal4_9.style.display = "none";
        Gpu4_10.checked = false;
        GraphGpu4_10.style.display = "none";
        VoltVal4_10.style.display = "none";
        Gpu4_11.checked = false;
        GraphGpu4_11.style.display = "none";
        VoltVal4_11.style.display = "none";
        Gpu4_12.checked = false;
        GraphGpu4_12.style.display = "none";
        VoltVal4_12.style.display = "none";

        GpuVoltVis4.style.display = "none";
        GpuVoltVis5.style.display = "grid";
    }
    else {
        GraphGpu5_6.style.display = "none";
        VoltVal5_6.style.display = "none";
    }
}