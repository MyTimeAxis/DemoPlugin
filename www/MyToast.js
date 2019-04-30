var exec = require('cordova/exec');

//showToast为安装后js调用的方法名，参数可以为任意多个
exports.showToast = function(msg, success, error) {
    //"showToast"为给MyToast.java判断的action名
    exec(success, error, "MyToast", "showToast", [msg]);
};