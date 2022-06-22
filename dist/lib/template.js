// 元素
class x extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var html = this.innerHTML;
        this.innerHTML = "";
        var bar = document.createElement("div");
        bar.id = "x-x_bar";
        var size = document.createElement("input");
        var d = document.createElement("div");
        bar.append(size);
        bar.append(d);
        this.append(bar);
        var o_e;
        var o_rect;
        var o_rects = [];
        this.addEventListener("mousedown", (e) => {
            if (e.button != 2)
                return;
            o_e = e;
            o_rect = { x: this.offsetLeft, y: this.offsetTop };
            document.getElementById("画布").style.cursor = "move";
            if (selected_el.length != 0 && selected_el.includes(this)) {
                o_rects = [];
                for (const el of selected_el) {
                    o_rects.push({ el, x: el.offsetLeft, y: el.offsetTop });
                }
            }
        });
        document.addEventListener("mousemove", (e) => {
            mouse(e);
            if (o_e)
                move = true;
        });
        document.addEventListener("mouseup", (e) => {
            mouse(e);
            o_e = null;
            move = false;
            document.getElementById("画布").style.cursor = "auto";
            o_rects = [];
        });
        var mouse = (e) => {
            if (o_e) {
                if (o_rects.length != 0) {
                    for (const xel of o_rects) {
                        let x = xel.x + (e.clientX - o_e.clientX), y = xel.y + (e.clientY - o_e.clientY);
                        xel.el.style.left = x + "px";
                        xel.el.style.top = y + "px";
                    }
                }
                else {
                    let x = o_rect.x + (e.clientX - o_e.clientX), y = o_rect.y + (e.clientY - o_e.clientY);
                    this.style.left = x + "px";
                    this.style.top = y + "px";
                }
            }
        };
        size.oninput = () => {
            let l = size.value.split(",");
            this.style.width = l[0];
            this.style.height = l[1];
        };
        d.onclick = () => {
            this.remove();
            selected_el = selected_el.filter((el) => el != this);
        };
        this.insertAdjacentHTML("beforeend", html);
        if (this.childNodes[1])
            add_event(this.childNodes[1]);
        var md = document.createElement("x-md");
        this.append(md);
        md.focus();
    }
}
window.customElements.define("x-x", x);
// markdown
class md extends HTMLElement {
    constructor() {
        super();
        this.value = "";
    }
    connectedCallback() {
        this.contentEditable = "true";
    }
}
window.customElements.define("x-md", md);