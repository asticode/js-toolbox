if (typeof asticode === "undefined") {
    var asticode = {};
}
asticode.modaler = {
    close: function() {
        document.getElementById("astimodaler").style.display = "none";
    },
    init: function() {
        document.body.innerHTML = `
        <div class="astimodaler" id="astimodaler">
            <div class="astimodaler-background" id="astimodaler-background"></div>
            <div class="astimodaler-table">
                <div class="astimodaler-wrapper">
                    <div class="astimodaler-body">
                        <i class="fa fa-close" id="astimodaler-close"></i>
                        <div class="astimodaler-content" id="astimodaler-content"></div>
                    </div>
                </div>
            </div>
        </div>
        ` + document.body.innerHTML;
        document.getElementById("astimodaler-close").onclick = function() {
            alert("bite");
            asticode.modaler.close();
        }
    },
    open: function(html) {
        var content = document.getElementById("astimodaler-content");
        content.innerHTML = '';
        content.appendChild(html);
        document.getElementById("astimodaler").style.display = "block";
    }
};