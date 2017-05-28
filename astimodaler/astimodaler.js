if (typeof asticode === "undefined") {
    var asticode = {};
}
asticode.modaler = {
    hide: function() {
        document.getElementById("astimodaler").style.display = "none";
    },
    init: function() {
        document.body.innerHTML = `<div class="astimodaler" id="astimodaler">
            <div class="astimodaler-background"></div>
            <div class="astimodaler-table">
                <div class="astimodaler-wrapper">
                    <div class="astimodaler-body">
                        <i class="fa fa-close astimodaler-close" onclick="asticode.modaler.hide()"></i>
                        <div id="astimodaler-content"></div>
                    </div>
                </div>
            </div>
        </div>` + document.body.innerHTML;
    },
    setContent: function(content) {
        document.getElementById("astimodaler-content").innerHTML = '';
        document.getElementById("astimodaler-content").appendChild(content);
    },
    show: function() {
        document.getElementById("astimodaler").style.display = "block";
    }
};