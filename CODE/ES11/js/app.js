 // import * as m1 from "./hello";

// 获取元素
const btn = document.getElementById('btn');

btn.onclick = function () {
    import('./hello.js').then(module => {
        // console.log(module);
        module.hello();
    });
};