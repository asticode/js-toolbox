if (typeof asticode === "undefined") {
    var asticode = {};
}
asticode.notifier = {
    error: function(message) {
        this.notify("error", message);
    },
    info: function(message) {
        this.notify("info", message);
    },
    init: function() {
        document.body.innerHTML = `<div class="astinotifier" id="astinotifier"></div>` + document.body.innerHTML
    },
    notify: function(type, message) {
        const item = document.createElement("div");
        item.className = "astinotifier-item " + type;
        const label = document.createElement("div");
        label.className = "astinotifier-label";
        label.innerHTML = message;
        const close = document.createElement("div");
        close.className = "astinotifier-close";
        close.innerHTML = `<i class="fa fa-close"></i>`;
        close.onclick = function() {
            item.remove();
        };
        item.appendChild(label);
        item.appendChild(close);
        document.getElementById("astinotifier").prepend(item);
        setTimeout(function() {
            close.click();
        }, 5000);
    },
    success: function(message) {
        this.notify("success", message);
    },
    warning: function(message) {
        this.notify("warning", message);
    }
};