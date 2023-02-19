import x_y_svg from "../../assets/icons/x_y.svg";
import y_svg from "../../assets/icons/y.svg";
import x_svg from "../../assets/icons/x.svg";
import cloud_up_svg from "../../assets/icons/cloud_up.svg";
import cloud_down from "../../assets/icons/cloud_down.svg";
import cloud from "../../assets/icons/cloud.svg";
import ding_svg from "../../assets/icons/ding.svg";
import close_svg from "../../assets/icons/close.svg";
import file_svg from "../../assets/icons/file.svg";
import handle_svg from "../../assets/icons/handle.svg";
import ul_show_svg from "../../assets/icons/ul_show.svg";
import ul_hide2_svg from "../../assets/icons/ul_hide2.svg";
import add_svg from "../../assets/icons/add.svg";
import minus_svg from "../../assets/icons/minus.svg";
import remove_svg from "../../assets/icons/remove.svg";
import update_svg from "../../assets/icons/update.svg";
import edit_svg from "../../assets/icons/edit.svg";
import ocr_svg from "../../assets/icons/ocr.svg";
import play_svg from "../../assets/icons/play.svg";
import down_svg from "../../assets/icons/down.svg";
import binding_svg from "../../assets/icons/binding_file.svg";
import pause_svg from "../../assets/icons/pause.svg";
import yl0_svg from "../../assets/icons/yl0.svg";
import yl1_svg from "../../assets/icons/yl1.svg";
import yl2_svg from "../../assets/icons/yl2.svg";
import asr_svg from "../../assets/icons/asr.svg";
import right_svg from "../../assets/icons/right.svg";
import left_svg from "../../assets/icons/left.svg";
import copy_svg from "../../assets/icons/copy.svg";
import save_svg from "../../assets/icons/save.svg";
import lock_svg from "../../assets/icons/lock.svg";
import unlock_svg from "../../assets/icons/unlock.svg";
import arrow_markers_svg from "../../assets/icons/arrow_markers.svg";

interface x_tag_map {
    "x-x": x;
    "x-md": markdown;
    "x-sinppet": symbols;
    "x-pro": progress;
    "x-progress": progress2;
    "x-file": file;
    "x-pdf": pdf_viewer;
    "x-draw": draw;
    "x-color": xcolor;
    "x-draw-width": xdraw_width;
    "x-link": xlink;
    "x-link-value": link_value;
    "x-record": record;
    "x-audio": audio;
    "x-three": three;
    "x-img": img;
    "x-ggb": ggb;
    "x-calendar": calendar;
    "time-b": time_s;
    "x-time": time;
    "x-link-arrow": link_arrow;
}
function createEl<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
function createEl<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K): HTMLElementDeprecatedTagNameMap[K];
function createEl<K extends keyof x_tag_map>(tagName: K): x_tag_map[K];
function createEl(tagName: string): HTMLElement;
function createEl(tagname: string) {
    return document.createElement(tagname);
}
function elFromId(id: string) {
    return document.getElementById(id);
}

function is_input_el(el: HTMLElement) {
    return el.tagName == "INPUT" || el.tagName == "TEXTAREA" || el.isContentEditable;
}

// el
var 设置_el = elFromId("设置");
var 侧栏 = elFromId("侧栏");
const 侧栏_tabs = document.querySelector("#侧栏 > #tabs");
const 侧栏_items = document.querySelector("#侧栏 > #items");
const toast = elFromId("toast");

var nav = elFromId("nav");

const 画布 = elFromId("画布");
const 画布s = elFromId("画布们");
var O = elFromId("O");

const select_con = elFromId("选择");

const link_value_bar = createEl("x-link-value");
画布.append(link_value_bar);

const breadcrumbs_el = elFromId("breadcrumbs");
const bc_sw_el = elFromId("bc_sw");

const 临时中转站 = elFromId("临时");

const 归位 = elFromId("归位");

const zoom_pel = elFromId("缩放");
const zoom_el = elFromId("zoom") as HTMLInputElement;
const zoom_list = elFromId("zooms");

const mini_map_el = elFromId("mini_map") as HTMLCanvasElement;

const 文件_el = elFromId("文件");

const assets_el = elFromId("资源");

const pen_pel = elFromId("draw_bar");
const color_yl = elFromId("color_yl");
const penc_el = <xcolor>elFromId("penc").querySelector("x-color");
const pen_el = elFromId("笔").querySelector("div");
const pen_width_el = elFromId("笔").querySelector("x-draw-width") as xdraw_width;
const pen_zoom_el = elFromId("缩放跟随") as HTMLInputElement;
const pen_type_el = elFromId("笔刷");

const 图层_el = elFromId("层");

var el_style = elFromId("el_style");
var style_list = elFromId("style_com_list");

var xywh_x_el = <HTMLInputElement>elFromId("xywh_x");
var xywh_y_el = <HTMLInputElement>elFromId("xywh_y");
var xywh_w_el = <HTMLInputElement>elFromId("xywh_w");
var xywh_h_el = <HTMLInputElement>elFromId("xywh_h");

const value_el = elFromId("值");

const about = elFromId("about");
const version_el = <HTMLElement>about.querySelector("#version");

var search_el = elFromId("search") as HTMLInputElement;
var search_r = elFromId("搜索结果");
var search_pel = elFromId("搜索");

const view_el = elFromId("viewer");

const ink_el = elFromId("ink") as HTMLCanvasElement;
let ink_cxt = ink_el.getContext("2d");
let ink_points: [number[], number[]][] = [];

const ys_list = elFromId("ys_list");
const ys_add = elFromId("ys_add");

function icon(src: string) {
    return `<img src="${src}" class="icon">`;
}

function xprompt(msg: string, d?: string) {
    let bg = createEl("div");
    let div = createEl("div");
    let text = createEl("span");
    let input = createEl("input");
    input.value = d;
    text.innerText = msg;
    let ok = createEl("div");
    let cancel = createEl("div");
    ok.innerText = "确定";
    cancel.innerText = "取消";
    div.append(text, input, cancel, ok);
    bg.append(div);
    bg.classList.add("dialog", "prompt");
    document.body.append(bg);
    input.focus();
    input.select();
    return new Promise((re: (value: string | null) => void) => {
        ok.onclick = () => {
            re(input.value);
            bg.remove();
        };
        cancel.onclick = () => {
            re(null);
            bg.remove();
        };
        input.onkeydown = (e) => {
            if (e.key == "Enter") {
                re(input.value);
                bg.remove();
            }
            if (e.key == "Escape") {
                re(null);
                bg.remove();
            }
        };
    });
}

function xconfirm(msg: string) {
    let bg = createEl("div");
    let div = createEl("div");
    let text = createEl("span");
    text.innerText = msg;
    let ok = createEl("div");
    let cancel = createEl("div");
    ok.innerText = "确定";
    cancel.innerText = "取消";
    div.append(text, cancel, ok);
    bg.append(div);
    bg.classList.add("dialog", "confirm");
    document.body.append(bg);
    return new Promise((re: (value: boolean) => void) => {
        ok.onclick = () => {
            re(true);
            bg.remove();
        };
        cancel.onclick = () => {
            re(false);
            bg.remove();
        };
    });
}

/**
 * 裁切值使之限定在一个范围
 * @param value 值
 * @param min 最小值
 * @param max 最大值
 * @returns 裁切后的值
 */
function clip(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}

// 获取设置
type setting = typeof default_setting;
var store: setting = JSON5.parse(localStorage.getItem("config"));
const default_setting = {
    webdav: { 网址: "", 用户名: "", 密码: "", 自动上传: "0", 加密密钥: "" },
    ink: {
        网址: "https://www.google.com/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8",
        语言: "zh_CN",
        延时: "0.6",
    },
    sort: { type: "change_time", reverse: false } as sort_type,
    asr: {
        url: "",
    },
};
if (!store) {
    localStorage.setItem("config", JSON.stringify(default_setting));
    store = default_setting;
} else {
    for (let i in default_setting) {
        if (!store[i]) {
            store[i] = default_setting[i];
        }
        for (let j in default_setting[i]) {
            if (store[i][j] === undefined) {
                store[i][j] = default_setting[i][j];
            }
        }
    }
    localStorage.setItem("config", JSON.stringify(store));
}

function uuid() {
    if (crypto.randomUUID) {
        return crypto.randomUUID();
    } else {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

/** 七位uuid */
function uuid_id() {
    return uuid().slice(0, 8);
}

if ("serviceWorker" in navigator) {
    if (import.meta.env.PROD) {
        navigator.serviceWorker.register("/sw.js");
    }
}

import pack from "../../package.json?raw";
const packagejson = JSON5.parse(pack);

// 工具栏

if (window.showOpenFilePicker) {
    elFromId("绑定文件").onclick = file_load;
} else {
    elFromId("绑定文件").style.display = "none";
}
elFromId("导出文件").onclick = () => {
    download_file(xln_out(get_data()));
};

elFromId("从云加载").onclick = async () => {
    if (集.meta.url) {
        let o = await get_xln_value(集.meta.url);
        set_data(o);
    }
};

const save_b = elFromId("保存");
save_b.onclick = save_file;
function set_save_icon() {
    if (db_can_save) {
        save_b.innerHTML = icon(cloud_up_svg);
        save_b.title = "上传到云";
    } else {
        save_b.innerHTML = icon(save_svg);
        save_b.title = "点击保存";
    }
}

elFromId("加载数据库").onclick = () => {
    elFromId("db_load").click();
};
elFromId("下载数据库").onclick = db_download;

elFromId("新建集").onclick = () => {
    window.open(location.origin);
};

elFromId("新建画布").onclick = () => {
    add_画布();
    data_changed();
};

elFromId("导入设置").onclick = () => {
    let file = createEl("input");
    file.type = "file";
    file.click();
    file.oninput = () => {
        let reader = new FileReader();
        reader.onload = () => {
            localStorage.setItem("config", <string>reader.result);
            show_setting();
        };
        reader.readAsText(file.files[0]);
    };
};
elFromId("导出设置").onclick = () => {
    let a = createEl("a");
    let blob = new Blob([localStorage.getItem("config")]);
    a.download = `xlinkote_config.json`;
    a.href = URL.createObjectURL(blob);
    a.click();
    URL.revokeObjectURL(String(blob));
};
elFromId("放弃设置").onclick = () => {
    show_setting();
};
elFromId("偏好设置").onclick = () => {
    save_setting();
};
elFromId("新建元素").onclick = () => {
    const margin = 8 / zoom;
    create_x_x(-el_offset2(O).x + margin, -el_offset2(O).y + margin);
};
elFromId("删除元素").onclick = () => {
    for (let i of selected_el) {
        z.remove(i);
    }
};

elFromId("撤销").onclick = () => {
    undo(true);
};
elFromId("重做").onclick = () => {
    undo(false);
};

elFromId("搜索操作").onclick = () => {
    show_g_search();
};

elFromId("资源tab").onclick = () => {
    assets_reflash();
};

侧栏.onclick = (e) => {
    document.querySelectorAll("#侧栏 > #tabs > div").forEach((el, i) => {
        if (el == e.target) {
            if (el.classList.contains("selected_item") && !el.classList.contains("selected_item_hide")) {
                el.classList.add("selected_item_hide");
                侧栏_items.classList.add("item_hide");
            } else {
                侧栏_tabs.querySelectorAll(".selected_item_hide").forEach((el) => {
                    el.classList.remove("selected_item_hide");
                });
                el.classList.remove("selected_item_hide");
                侧栏_items.classList.remove("item_hide");
            }
            document.querySelectorAll("#侧栏 > #items > div").forEach((iel: HTMLDivElement, j) => {
                if (i == j) {
                    iel.style.height = "100%";
                    侧栏.querySelectorAll("#tabs > .selected_item").forEach((el) => {
                        el.classList.remove("selected_item");
                    });
                    el.classList.add("selected_item");
                } else {
                    iel.style.height = "0";
                }
            });
        }
    });
};
elFromId("切换侧栏").onclick = () => {
    侧栏.classList.toggle("侧栏显示");
};
var handle_e: MouseEvent, handle_e1: MouseEvent, handle_a: number;

elFromId("handle").onpointerdown = (e) => {
    handle_e = e;
    侧栏.style.transition = "0s";
    let m = (e: MouseEvent) => {
        if (!handle_e) return;
        let dy = e.clientY - handle_e.clientY;
        if (dy < 0) dy = 0;
        侧栏.style.transform = `translateY(${dy}px)`;
        if (handle_e1) handle_a = e.clientY - handle_e1.clientY;
        handle_e1 = e;
    };
    let u = (e: MouseEvent) => {
        侧栏.style.transform = ``;
        侧栏.style.transition = "";
        handle_e = null;
        handle_e1 = null;
        if (handle_a > 0) 侧栏.classList.toggle("侧栏显示");
        document.removeEventListener("pointermove", m);
        document.removeEventListener("pointerup", u);
    };
    document.addEventListener("pointermove", m);
    document.addEventListener("pointerup", u);
};

for (let el of document.querySelectorAll(".tools")) {
    for (let i of el.children) {
        for (let u of document.querySelectorAll("#nav > div > div")) {
            if (i.id && i.id == u.id) {
                let x = i as HTMLElement;
                x.style.display = "none";
            }
        }
    }
}

elFromId("底层").onclick = () => {
    z.底层(z.聚焦元素);
};
elFromId("下一层").onclick = () => {
    z.下一层(z.聚焦元素);
};
elFromId("上一层").onclick = () => {
    z.上一层(z.聚焦元素);
};
elFromId("顶层").onclick = () => {
    z.顶层(z.聚焦元素);
};

elFromId("纵向堆叠").onclick = () => {
    to_flex(selected_el, "y");
};
elFromId("横向堆叠").onclick = () => {
    to_flex(selected_el, "x");
};
elFromId("成组").onclick = () => {
    to_none_layout(selected_el);
};
elFromId("转为一行").onclick = () => {
    to_one_line(selected_el);
};
elFromId("拆分为多行").onclick = () => {
    to_more_line(selected_el);
};

function put_toast(t: string, time?: number) {
    if (!time) time = 1;
    toast.innerText = t;
    toast.classList.add("toast_show");
    setTimeout(() => {
        toast.classList.remove("toast_show");
    }, time * 1000);
}

// 模式切换

var 模式: "浏览" | "设计" | "绘制";

elFromId("浏览").onclick = () => {
    set_模式("浏览");
};
elFromId("设计").onclick = () => {
    set_模式("设计");
};
elFromId("绘制").onclick = () => {
    set_模式("绘制");

    add_none_layout();
};
/** 切换模式 */
function set_模式(模式x: "浏览" | "设计" | "绘制") {
    if (模式 == "绘制") {
        reflash_none_layout(O.lastElementChild as x);
    }
    模式 = 模式x;
    nav.querySelectorAll("#mode_bar > div").forEach((v) => {
        v.classList.remove("模式突出");
    });
    nav.querySelector(`#${模式x}`).classList.add("模式突出");
    画布.className = 模式x;
    switch (模式x) {
        case "浏览":
            if (<draw>focus_draw_el) {
                focus_draw_el = null;
            }

            blur_all();
            画布.style.cursor = "auto";
            document.documentElement.style.setProperty("--x-x-handle-d", "none");
            if (link_value_bar) link_value_bar.style.display = "";

            ink_el.parentElement.style.display = "";
            pen_pel.style.display = "none";
            break;
        case "设计":
            if (<draw>focus_draw_el) {
                focus_draw_el = null;
            }
            document.querySelectorAll("x-md").forEach((el) => {
                (<markdown>el).edit = false;
            });
            画布.style.cursor = "crosshair";
            document.documentElement.style.setProperty("--x-x-handle-d", "block");
            if (link_value_bar) link_value_bar.style.display = "none";

            ink_reset();
            ink_el.classList.add("ink_hide");

            ink_el.parentElement.style.display = "none";
            pen_pel.style.display = "none";
            break;
        case "绘制":
            document.querySelectorAll("x-md").forEach((el) => {
                (<markdown>el).edit = false;
            });

            blur_all();
            画布.style.cursor = "crosshair";
            document.documentElement.style.setProperty("--x-x-handle-d", "none");
            if (link_value_bar) link_value_bar.style.display = "none";

            ink_reset();
            ink_el.classList.add("ink_hide");

            ink_el.parentElement.style.display = "none";
            pen_pel.style.display = "";
            break;
    }
}
set_模式("设计");

/** 移除所有选择 */
function blur_all() {
    selected_el = [];
    select_con.innerHTML = "";
}

// markdown
function set_md_v(s: string, e: string) {
    let text = (elFromId(selections[0].id).querySelector("x-md") as markdown).text;
    let sn = text.selectionStart,
        en = text.selectionEnd;
    let select_text = text.value.slice(sn, en);
    text.setRangeText(s + select_text + e);
    text.selectionStart = sn + s.length;
    text.selectionEnd = en + s.length + e.length;
    text.dispatchEvent(new InputEvent("input"));
}

elFromId("md_b").onclick = () => {
    set_md_v("**", "**");
};
elFromId("md_i").onclick = () => {
    set_md_v("*", "*");
};
elFromId("md_s").onclick = () => {
    set_md_v("~~", "~~");
};
elFromId("md_link").onclick = () => {
    set_md_v("[]()", "");
};
elFromId("md_img").onclick = () => {
    set_md_v("~[]()", "");
};
elFromId("md_mathi").onclick = () => {
    set_md_v("$", "$");
};

var drag_block = false;

elFromId("常驻").onpointerdown = (e) => {
    console.log((<HTMLElement>e.target).id);
    let v = null;
    let el_n = "";
    if ((<HTMLElement>e.target).id && e.target != elFromId("常驻")) {
        el_n = (<HTMLElement>e.target).id;
    } else {
        el_n = "x-md";
    }
    let x = e.clientX - O.getBoundingClientRect().x,
        y = e.clientY - O.getBoundingClientRect().y;

    let xel = createEl("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    var md = createEl(el_n);
    xel.append(md);
    set_模式("浏览");
    if (v) (<markdown>md).value = v;
    set_模式("设计");
    free_o_rects = [{ el: xel, x: x / zoom, y: y / zoom }];
    free_old_point = e2p(e);
    drag_block = true;
};

// 画布

/** 画布坐标 */
type p_point = { x: number; y: number };
var o_e: MouseEvent;
var o_ab_p: p_point;
var o_rect;
var o_vb_sb = { x0: 0, y0: 0, x1: 0, y1: 0 };
var move: boolean = false;
var select_id = "";
var fxsd_el = elFromId("方向锁定");
/**
 * - 0为全向移动
 * - 1为y
 * - 2为x
 * - 3为锁定
 */
var fxsd: 0 | 1 | 2 | 3 = 0;

function set_O_p(x: number | null, y: number | null) {
    if (x) {
        let dx = x - el_offset(O).x;
        link_value_bar.style.left = el_offset(link_value_bar).x + dx + "px";
        if (!search_pel.getAttribute("data-fid")) search_pel.style.left = el_offset(search_pel).x + dx + "px";
        O.style.left = x + "px";
    }
    if (y) {
        let dy = y - el_offset(O).y;
        link_value_bar.style.top = el_offset(link_value_bar).y + dy + "px";
        if (!search_pel.getAttribute("data-fid")) search_pel.style.top = el_offset(search_pel).y + dy + "px";
        O.style.top = y + "px";
    }
    render_map();
    render_select_rects();
}

fxsd_el.onclick = () => {
    let o = { 0: 1, 1: 2, 2: 3, 3: 0 };
    fxsd = o[fxsd] as 0 | 1 | 2 | 3;
    let os = { 0: x_y_svg, 1: y_svg, 2: x_svg, 3: lock_svg };
    fxsd_el.querySelector("img").src = os[fxsd];
};

/** 滚动或触摸在之上时，不改变画布，只作用于元素，使用query */
var ignore_el = [];

document.onmousedown = (e) => {
    if (e.target == document.querySelector("#画布")) {
        if (e.button == 0) {
            if (模式 != "设计") return;
            o_e = e;
            o_ab_p = e2p(e);
            let select = createEl("div");
            select_id = select.id = `s${new Date().getTime()}`;
            elFromId("选择框").append(select);
            画布.style.userSelect = "none";
        }
    }
};

document.onmousemove = (e) => {
    let el = e.target as HTMLElement;
    mouse(e);
    if (o_e) move = true;
};
document.onmouseup = (e) => {
    mouse(e);
    if (e.button == 0 && selected_el.length == 0 && move && o_e) {
        if (模式 != "设计") return;
        if (e.shiftKey) {
            add_blank(o_ab_p, e2p(e));
        } else {
            let r = p2rect(o_ab_p, e2p(e));
            create_x_x(r.x, r.y);
        }
    }
    o_e = null;
    move = false;
    画布.style.userSelect = "auto";
    if (select_id) elFromId(select_id).remove();
    select_id = "";
};

/** 鼠标事件处理，滚动，选择，画框创建 */
var mouse = (e: MouseEvent) => {
    render_select_rects();
    if (o_e) {
        let now_point: p_point = e2p(e);
        if (e.buttons == 2) {
            let x = o_rect.x + (fxsd == 0 || fxsd == 2 ? e.clientX - o_e.clientX : 0),
                y = o_rect.y + (fxsd == 0 || fxsd == 1 ? e.clientY - o_e.clientY : 0);
            set_O_p(x, y);
        } else if (e.button == 0) {
            if (select_id) {
                selected_el = [];
                render_select_rects();
                let rect = p2rect(o_ab_p, now_point);
                let select = <HTMLDivElement>elFromId(select_id);
                select.id = select_id;
                select.style.left = (rect.x + el_offset2(O, select.parentElement).x) * zoom + "px";
                select.style.top = (rect.y + el_offset2(O, select.parentElement).y) * zoom + "px";
                select.style.width = rect.w * zoom + "px";
                select.style.height = rect.h * zoom + "px";
                if (!e.shiftKey) select_x_x(rect);
            }
        }
    }
};

var o_touch_e: TouchEvent;
var o_touch_zoom_e: TouchEvent;
var o_zoom = NaN;
var o_touch_t = NaN;
画布.ontouchstart = (e) => {
    if (模式 == "绘制") return;
    let el = <HTMLElement>e.changedTouches[0].target;
    if (模式 == "设计" && el != 画布) return;
    if (
        !(
            el.isContentEditable ||
            el.tagName == "INPUT" ||
            el.tagName == "SELECT" ||
            el.tagName == "TEXTAREA" ||
            el.parentElement.tagName == "X-DRAW"
        ) &&
        !document.querySelector("x-sinppet").contains(el)
    ) {
        o_touch_t = new Date().getTime();
        O.style.transition = "";
        o_touch_e = o_touch_zoom_e = e;
        o_rect = { x: el_offset(O).x, y: el_offset(O).y };
        o_vb_sb = {
            x0: el_offset(link_value_bar).x,
            y0: el_offset(link_value_bar).y,
            x1: el_offset(search_pel).x,
            y1: el_offset(search_pel).y,
        };
        o_zoom = zoom;
        if (e.targetTouches.length == 1) {
        } else if (e.targetTouches.length == 2) {
        }
    }
};
画布.ontouchmove = (e) => {
    if (e.targetTouches.length == 1) {
        touch_move(e);
        if (o_touch_e) move = true;
    } else if (e.targetTouches.length == 2) {
        e.preventDefault();
        touch_zoom(e);
        if (o_touch_zoom_e) move = true;
    }
};
画布.ontouchend = (e) => {
    // 惯性滚动
    let dt = new Date().getTime() - o_touch_t;
    let dx = fxsd == 0 || fxsd == 2 ? e.changedTouches[0].clientX - o_touch_e.changedTouches[0].clientX : 0,
        dy = fxsd == 0 || fxsd == 1 ? e.changedTouches[0].clientY - o_touch_e.changedTouches[0].clientY : 0;
    let ds = Math.sqrt(dx ** 2 + dy ** 2);
    const m = 1,
        a = 0.0015;
    let p = 0.5 * m * (ds / dt / 2) ** 2;
    let s = p / (m * a);
    let t = Math.sqrt((2 * s) / a);
    console.log(ds);
    if (ds > 30) {
        let x = el_offset(O).x + s * (dx / ds),
            y = el_offset(O).y + s * (dy / ds);
        O.style.transition = `${t / 1000}s`;
        O.style.transitionTimingFunction = "cubic-bezier(.17, .89, .45, 1)";
        setTimeout(() => {
            O.style.transition = ``;
            render_select_rects();
            data_changed();
        }, t);
        set_O_p(x, y);
    }

    o_touch_e = null;
    move = false;
    o_touch_zoom_e = null;
    o_zoom = NaN;
    if (e.targetTouches.length == 1) {
        touch_move(e);
        if (select_id) elFromId(select_id).remove();
        select_id = "";
    } else if (e.targetTouches.length == 2) {
        touch_zoom(e);
        data_changed();
    }

    o_touch_e = e;
    o_rect = { x: el_offset(O).x, y: el_offset(O).y };
};

var pointer_move = true;

/** 触控事件处理，移动画布 */
var touch_move = (e: TouchEvent) => {
    if (o_touch_e) {
        if (pointer_move) {
            if (free_o_a == -1) return;
            let dx = fxsd == 0 || fxsd == 2 ? e.changedTouches[0].clientX - o_touch_e.changedTouches[0].clientX : 0,
                dy = fxsd == 0 || fxsd == 1 ? e.changedTouches[0].clientY - o_touch_e.changedTouches[0].clientY : 0;
            let x = o_rect.x + dx,
                y = o_rect.y + dy;
            set_O_p(x, y);
        }
    }
};

/** 双指缩放 */
var touch_zoom = (e: TouchEvent) => {
    if (zoom_lock) return;
    if (o_touch_zoom_e) {
        if (pointer_move) {
            if (free_o_a == -1) return;
            let r0 = Math.sqrt(
                (o_touch_zoom_e.targetTouches[0].clientX - o_touch_zoom_e.targetTouches[1].clientX) ** 2 +
                    (o_touch_zoom_e.targetTouches[0].clientY - o_touch_zoom_e.targetTouches[1].clientY) ** 2
            );
            let r1 = Math.sqrt(
                (e.targetTouches[0].clientX - e.targetTouches[1].clientX) ** 2 +
                    (e.targetTouches[0].clientY - e.targetTouches[1].clientY) ** 2
            );
            let z = (r1 / r0) * o_zoom;
            let p = [
                (o_touch_zoom_e.targetTouches[0].clientX + o_touch_zoom_e.targetTouches[1].clientX) / 2,
                (o_touch_zoom_e.targetTouches[0].clientY + o_touch_zoom_e.targetTouches[1].clientY) / 2,
            ];
            let ozoom = zoom,
                dzoom = z - zoom;
            let dx = p[0] - O.getBoundingClientRect().x,
                dy = p[1] - O.getBoundingClientRect().y;
            zoom_o(z);
            set_O_p(el_offset(O).x - dx * (dzoom / ozoom), el_offset(O).y - dy * (dzoom / ozoom));
        }
    }
};

/** 两个画布坐标转为框 */
function p2rect(r0: p_point, r1: p_point) {
    return { x: Math.min(r0.x, r1.x), y: Math.min(r0.y, r1.y), w: Math.abs(r0.x - r1.x), h: Math.abs(r0.y - r1.y) };
}

/**定位指针到画布坐标 */
function e2p(e: MouseEvent) {
    return {
        x: (e.clientX - el_offset(O, document.body).x) / zoom,
        y: (e.clientY - el_offset(O, document.body).y) / zoom,
    } as p_point;
}

var selected_el: x[] = [];

/**选择元素 */
function select_x_x(rect: { x: number; y: number; w: number; h: number }) {
    for (const el of O.querySelectorAll(":scope > x-x")) {
        let r = el_offset2(el);
        if (rect.x <= r.x && r.x + r.w <= rect.x + rect.w && rect.y <= r.y && r.y + r.h <= rect.y + rect.h) {
            selected_el.push(<x>el);
            render_select_rects();
        }
    }
}

function add_blank(op: p_point, p: p_point) {
    let r = p2rect(op, p);
    let a = 0; // 0123 上右下左
    if (r.w > r.h) {
        // 上下
        if (op.y < p.y) {
            a = 2;
        } else {
            a = 0;
        }
    } else {
        // 左右
        if (op.x < p.x) {
            a = 1;
        } else {
            a = 3;
        }
    }

    for (let xel of O.querySelectorAll(":scope > x-x")) {
        let el_o = el_offset2(xel);
        let el = xel as x;
        switch (a) {
            case 0:
                if (el_o.y + el_o.h < op.y && r.x <= el_o.x && el_o.x + el_o.w <= r.x + r.w) {
                    el.style.top = el_o.y - r.h + "px";
                }
                break;
            case 1:
                if (el_o.x > op.x && r.y <= el_o.y && el_o.y + el_o.h <= r.y + r.h) {
                    el.style.left = el_o.x + r.w + "px";
                }
                break;
            case 2:
                if (el_o.y > op.y && r.x <= el_o.x && el_o.x + el_o.w <= r.x + r.w) {
                    el.style.top = el_o.y + r.h + "px";
                }
                break;
            case 3:
                if (el_o.x + el_o.w < op.x && r.y <= el_o.y && el_o.y + el_o.h <= r.y + r.h) {
                    el.style.left = el_o.x - r.w + "px";
                }
                break;
        }
    }
}

function render_select_rects() {
    let xels: x[] = [];
    if (now_mouse_e) {
        let els = document.elementsFromPoint(now_mouse_e.clientX, now_mouse_e.clientY);
        if (els.length) {
            if (els[0].id == "x-x_bar") {
                els = document.elementsFromPoint(
                    els[0].parentElement.getBoundingClientRect().x,
                    els[0].parentElement.getBoundingClientRect().y
                );
            }
            if (els[1].id == "x-x_bar") {
                els = document.elementsFromPoint(
                    els[1].parentElement.getBoundingClientRect().x,
                    els[1].parentElement.getBoundingClientRect().y
                );
            }
        }
        for (let i of els) {
            if (i.tagName == "X-X") {
                xels.push(i as x);
                let select_bar = add_r(i as x);
                select_bar.classList.add("x-x_hover");
            }
        }
    }
    for (let i of selected_el) {
        let select_bar = add_r(i);
        select_bar.classList.add("x-x_selected");
    }
    document.querySelectorAll(".x-x_bar_show2").forEach((el) => {
        el.classList.remove("x-x_bar_show2");
    });
    if (selected_el.length == 1) {
        selected_el[0].querySelector(":scope > #x-x_bar").classList.add("x-x_bar_show2");
    }
    function add_r(i: x) {
        let rect = i.getBoundingClientRect();
        let select_bar = (select_con.querySelector(`[data-id="${i.id}"]`) as HTMLElement) || createEl("div");
        select_bar.setAttribute("data-id", i.id);
        select_bar.style.left = rect.x - select_con.getBoundingClientRect().left + "px";
        select_bar.style.top = rect.y - select_con.getBoundingClientRect().top + "px";
        select_bar.style.width = rect.width + "px";
        select_bar.style.height = rect.height + "px";
        if (select_con.querySelector(`[data-id="${i.id}"]`)) return select_bar;
        select_con.append(select_bar);
        var x_h = [
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
            createEl("div"),
        ];

        for (const i in x_h) {
            x_h[i].classList.add(`xxhandle${i}`);
        }

        select_bar.id = "x-x_handle";

        select_bar.classList.add("xxhandle");
        select_bar.append(...x_h);

        select_bar.onpointerdown = (e) => {
            let el = e.target as HTMLDivElement;
            if (x_h.includes(el)) {
                e.preventDefault();
                e.stopPropagation();
                free_o_a = x_h.indexOf(el);
                free_old_point = e2p(e);
                free_o_rects = [{ el: i, x: i.offsetLeft, y: i.offsetTop, w: i.offsetWidth, h: i.offsetHeight }];
                if (selected_el.length <= 1) {
                    z.focus(i);
                }
            }
            clearTimeout(free_db_time);
        };

        return select_bar;
    }
    for (let i of select_con.children) {
        let has = false;
        for (let x of xels) {
            if (x.id == i.getAttribute("data-id")) {
                has = true;
                break;
            }
        }
        if (!has) {
            i.classList.remove("x-x_hover");
        }
        for (let x of selected_el) {
            if (x.id == i.getAttribute("data-id")) {
                has = true;
                break;
            }
        }
        if (!has) {
            i.remove();
        }
    }
}
document.addEventListener("dblclick", (e) => {
    if (模式 == "设计") {
        console.log(free_o_a, z.聚焦元素);
        let el = z.聚焦元素;
        let xl = [1, 3, 4, 5, 6, 7],
            yl = [0, 2, 4, 5, 6, 7];
        if (xl.includes(free_o_a)) el.style.width = "";
        if (yl.includes(free_o_a)) el.style.height = "";
        render_select_rects();
    }
    clearTimeout(free_db_time);
});

归位.onclick = () => {
    O.style.transition = "0.4s";
    set_O_p(画布.offsetWidth / 2, 画布.offsetHeight / 2);
    setTimeout(() => {
        O.style.transition = "";
    }, 400);
    data_changed();
};

var zoom = 1;
var zoom_lock = false;

/** 缩放 */
function zoom_o(z: number) {
    z = Math.max(z, 0);
    zoom = z;
    O.style.transform = `scale(${z})`;
    zoom_el.value = `${(z * 100).toFixed(1)}`;
    zoom_el.style.width = zoom_el.value.length + "ch";
    document.documentElement.style.setProperty("--zoom", String(z));

    document.querySelectorAll("x-pdf").forEach((el: pdf_viewer) => {
        let r = el.getBoundingClientRect();
        let w = window.innerWidth,
            h = window.innerHeight;
        if (r.x < w && r.y < h && r.x + r.width > 0 && r.y + r.height > 0) el.set_m();
    });

    document.querySelectorAll("x-graph").forEach((el: graph) => {
        el.reflasth();
    });
}

zoom_el.oninput = () => {
    zoom_el.style.width = zoom_el.value.length + "ch";
};
zoom_el.onchange = () => {
    let nzoom = (Number(zoom_el.value) || 100) / 100;
    let ozoom = zoom,
        dzoom = nzoom - zoom;
    zoom += dzoom;
    let dx = window.innerWidth / 2 - O.getBoundingClientRect().x,
        dy = window.innerHeight / 2 - O.getBoundingClientRect().y;
    zoom_o(zoom);
    set_O_p(el_offset(O).x - dx * (dzoom / ozoom), el_offset(O).y - dy * (dzoom / ozoom));
    zoom_list.classList.add("zoom_list_hide");
};

zoom_el.onblur = zoom_pel.onblur = () => {
    zoom_list.classList.add("zoom_list_hide");
};
zoom_pel.onclick = () => {
    zoom_list.classList.toggle("zoom_list_hide");
};

let zoom_lock_b = createEl("div");
zoom_lock_b.innerHTML = icon(unlock_svg);
zoom_lock_b.onpointerdown = () => {
    zoom_lock = !zoom_lock;
    if (zoom_lock) {
        zoom_lock_b.innerHTML = icon(lock_svg);
    } else {
        zoom_lock_b.innerHTML = icon(unlock_svg);
    }
};
zoom_list.append(zoom_lock_b);
for (let i = 25; i <= 200; i += 25) {
    let op = createEl("div");
    op.innerText = `${i}%`;
    zoom_list.append(op);
    op.onpointerdown = () => {
        let nzoom = i / 100;
        let ozoom = zoom,
            dzoom = nzoom - zoom;
        let dx = window.innerWidth / 2 - O.getBoundingClientRect().x,
            dy = window.innerHeight / 2 - O.getBoundingClientRect().y;
        zoom_o(nzoom);
        set_O_p(el_offset(O).x - dx * (dzoom / ozoom), el_offset(O).y - dy * (dzoom / ozoom));
    };
}
set_O_p(画布.offsetWidth / 2, 画布.offsetHeight / 2);

mini_map_el.parentElement.classList.add("mini_map_hide");
mini_map_el.parentElement.parentElement.onclick = (e) => {
    if (e.target != mini_map_el.parentElement.parentElement) return;
    mini_map_el.parentElement.classList.toggle("mini_map_hide");
    render_map();
};
let mini_down = false;
mini_map_el.onpointerdown = (e) => {
    mini_down = true;
    e.stopPropagation();
    let els_rect = reflash_rect();
    let out_rect = get_out_rect(els_rect);
    let px = e.offsetX / mini_map_el.offsetWidth;
    let py = e.offsetY / mini_map_el.offsetHeight;

    let rx = px * (out_rect.right - out_rect.left) + out_rect.left;
    let ry = py * (out_rect.bottom - out_rect.top) + out_rect.top;
    set_O_p(-rx * zoom + 画布.offsetWidth / 2, -ry * zoom + 画布.offsetHeight / 2);
};
mini_map_el.onpointermove = (e) => {
    if (mini_down) {
        let els_rect = reflash_rect();
        let out_rect = get_out_rect(els_rect);
        let px = e.offsetX / mini_map_el.offsetWidth;
        let py = e.offsetY / mini_map_el.offsetHeight;

        let rx = px * (out_rect.right - out_rect.left) + out_rect.left;
        let ry = py * (out_rect.bottom - out_rect.top) + out_rect.top;
        set_O_p(-rx * zoom + 画布.offsetWidth / 2, -ry * zoom + 画布.offsetHeight / 2);
    }
};
mini_map_el.onpointerup = (e) => {
    e.stopPropagation();
    mini_down = false;
};
ignore_el.push("#mini_map");

/**元素相对位置（屏幕坐标） */
function el_offset(el: Element, pel?: Element) {
    if (!pel) pel = el.parentElement;
    let ox = el.getBoundingClientRect().x - pel.getBoundingClientRect().x,
        oy = el.getBoundingClientRect().y - pel.getBoundingClientRect().y;
    return { x: ox, y: oy, w: el.getBoundingClientRect().width, h: el.getBoundingClientRect().height };
}

/**元素大小和相对位置（画布坐标） */
function el_offset2(el: Element, pel?: Element) {
    if (!pel) pel = el.parentElement;
    let ox = el.getBoundingClientRect().x - pel.getBoundingClientRect().x,
        oy = el.getBoundingClientRect().y - pel.getBoundingClientRect().y;
    return {
        x: ox / zoom,
        y: oy / zoom,
        w: el.getBoundingClientRect().width / zoom,
        h: el.getBoundingClientRect().height / zoom,
    };
}

/** 获取元素框 */
function reflash_rect() {
    let els_rect: { el: x; rect: { x: number; y: number; w: number; h: number } }[] = [];
    O.querySelectorAll("x-x").forEach((xel: x) => {
        if (集.values?.[xel.id]?.fixed) return;
        els_rect.push({ el: xel, rect: el_offset2(xel, O) });
    });
    return els_rect;
}

/** 获取最大框 */
function get_out_rect(rect: { el: x; rect: { x: number; y: number; w: number; h: number } }[]) {
    let out_rect = { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity };
    for (let i of rect) {
        const r = i.rect;
        out_rect.left = Math.min(r.x, out_rect.left);
        out_rect.right = Math.max(r.x + r.w, out_rect.right);
        out_rect.top = Math.min(r.y, out_rect.top);
        out_rect.bottom = Math.max(r.y + r.h, out_rect.bottom);
    }
    return out_rect;
}

/** 渲染小地图 */
function render_map() {
    if (mini_map_el.parentElement.classList.contains("mini_map_hide")) return;
    let els_rect = reflash_rect();
    let out_rect = get_out_rect(els_rect);
    let z = 1;
    const min = 600,
        minstyle = "300px";
    if (out_rect.right - out_rect.left > out_rect.bottom - out_rect.top) {
        mini_map_el.height = min;
        mini_map_el.style.height = minstyle;
        mini_map_el.style.width = "";
        z = min / (out_rect.bottom - out_rect.top);
        mini_map_el.width = (out_rect.right - out_rect.left) * z;
    } else {
        mini_map_el.width = min;
        mini_map_el.style.width = minstyle;
        mini_map_el.style.height = "";
        z = min / (out_rect.right - out_rect.left);
        mini_map_el.height = (out_rect.bottom - out_rect.top) * z;
    }
    let ctx = mini_map_el.getContext("2d");
    ctx.clearRect(0, 0, mini_map_el.offsetWidth, mini_map_el.height);
    for (let i of els_rect) {
        const r = i.rect;
        let x = (r.x - out_rect.left) * z;
        let y = (r.y - out_rect.top) * z;
        let w = r.w * z;
        let h = r.h * z;
        ctx.fillStyle = "#0002";
        ctx.fillRect(x, y, w, h);
    }
    let main_rect = el_offset2(画布, O);
    ctx.strokeStyle = "#00f";
    ctx.fillStyle = "#00f2";
    ctx.lineWidth = 1;
    ctx.fillRect((main_rect.x - out_rect.left) * z, (main_rect.y - out_rect.top) * z, main_rect.w * z, main_rect.h * z);
    ctx.strokeRect(
        (main_rect.x - out_rect.left) * z,
        (main_rect.y - out_rect.top) * z,
        main_rect.w * z,
        main_rect.h * z
    );
}

elFromId("画布").onwheel = (e) => {
    if (e.ctrlKey) {
        e.preventDefault();

        if (zoom_lock) return;
        let ozoom = zoom,
            dzoom = -e.deltaY / (800 / zoom);
        zoom += dzoom;
        zoom = Math.abs(zoom);
        let dx = e.clientX - O.getBoundingClientRect().x,
            dy = e.clientY - O.getBoundingClientRect().y;
        zoom_o(zoom);
        set_O_p(el_offset(O).x - dx * (dzoom / ozoom), el_offset(O).y - dy * (dzoom / ozoom));
    } else {
        let el = <HTMLElement>e.target;
        if (el.tagName == "TEXTAREA") return;
        if (document.querySelector("x-sinppet").contains(el)) return;
        for (let q of ignore_el) {
            for (let qel of 画布.querySelectorAll(q)) {
                if (qel.contains(el)) return;
            }
        }
        if (document.fullscreenElement != 画布s) {
            let dx = 0,
                dy = 0;
            if (e.shiftKey && !e.deltaX) {
                if (fxsd == 0 || fxsd == 2) dx = -e.deltaY;
            } else {
                if (fxsd == 0 || fxsd == 2) dx = -e.deltaX;
                if (fxsd == 0 || fxsd == 1) dy = -e.deltaY;
            }
            set_O_p(el_offset(O).x + dx, el_offset(O).y + dy);
        } else {
            let a = e.deltaY > 0 ? "next" : "back";
            ys_bn(a as "next" | "back");
        }
    }
    data_changed();
};

/** 中键移动画布 */
let middle_b: PointerEvent;
let middle_p = { x: 0, y: 0 };
画布.addEventListener("pointerdown", (e) => {
    if (e.button == 1) {
        middle_b = e;
        middle_p.x = el_offset(O).x;
        middle_p.y = el_offset(O).y;
    }
});
document.addEventListener("pointermove", (e) => {
    if (middle_b) {
        let dx = e.clientX - middle_b.clientX,
            dy = e.clientY - middle_b.clientY;
        set_O_p(middle_p.x + dx, middle_p.y + dy);
    }
});
document.addEventListener("pointerup", (e) => {
    if (middle_b) {
        data_changed();
    }
    middle_b = null;
});

zoom_o(1);

var now_mouse_e: MouseEvent = null;
document.addEventListener("mousemove", (e: MouseEvent) => {
    now_mouse_e = e;
});

画布.oncontextmenu = (e) => {
    if (模式 != "浏览") e.preventDefault();
};

// 光标
type selection_type = {
    id: string; // md 父主元素
    start: number;
    end: number;
};
var selections = [{ id: "", start: 0, end: 0 }] as selection_type[];

// 自由元素移动
/** 触发调节时的位置 */
let free_old_point: p_point;
/** 所作用的元素及其原始位置大小 */
let free_o_rects = [] as { el: x; x: number; y: number; w?: number; h?: number }[];
/** 应该对元素执行的操作，移动还是调节大小 */
let free_o_a = NaN;
/** 是否移动过，可用于判断点击还是拖动 */
let free_move = false;
/** 是否在拖动元素 */
let free_drag = false;
/** 拖拽释放提示元素 */
let free_drag_tip: HTMLElement;
/** 箭头链接id */
let free_link: string;
/** 双击判断样式 */
let free_db_dtime = 300;
/** 双击计时器 */
let free_db_time;

/**
 * 是否按下shift
 * @param e 鼠标事件
 * @returns 是否按下shift
 */
function mu_sel_key(e: MouseEvent) {
    return e.shiftKey;
}
document.addEventListener("pointermove", (e: PointerEvent) => {
    if (模式 == "设计" && free_old_point) {
        e.preventDefault();
        free_mouse(e);
        free_move = true;
        if (free_drag) {
            let els = document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[];
            for (let el of els) {
                if (el.tagName == "X-X") {
                    let rect = el.getBoundingClientRect();
                    for (let x of selected_el) {
                        if (
                            el.parentElement.classList.contains("flex-column") ||
                            el.parentElement.classList.contains("flex-row")
                        ) {
                            free_drag_tip.style.opacity = "1";
                            if (el.parentElement.classList.contains("flex-column")) {
                                if (e.clientY - rect.y < rect.height / 2) {
                                    free_drag_tip.style.top = rect.top + "px";
                                } else {
                                    free_drag_tip.style.top = rect.bottom + "px";
                                }
                                free_drag_tip.style.left = rect.left + "px";
                                free_drag_tip.style.width = rect.width + "px";
                                free_drag_tip.style.height = "1px";
                            }
                            if (el.parentElement.classList.contains("flex-row")) {
                                if (e.clientX - rect.x < rect.width / 2) {
                                    free_drag_tip.style.left = rect.left + "px";
                                } else {
                                    free_drag_tip.style.left = rect.right + "px";
                                }
                                free_drag_tip.style.top = rect.top + "px";
                                free_drag_tip.style.width = "1px";
                                free_drag_tip.style.height = rect.height + "px";
                            }
                            return;
                        }
                    }
                }
            }
            free_drag_tip.style.opacity = "0";
        }
    }
    if (模式 == "设计") {
        if (free_link) {
            render_link_arrow(free_link, e);
        }
    }
});
document.addEventListener("pointerup", (e: PointerEvent) => {
    if (drag_block) {
        drag_block = false;
        data_changed();
    }

    free_mouse(e);

    if (free_drag) {
        画布.classList.remove("拖拽");
        free_drag_tip.remove();
        let els = document.elementsFromPoint(e.clientX, e.clientY);
        for (let el of els) {
            if (el.tagName == "X-X") {
                let rect = el.getBoundingClientRect();
                for (let x of selected_el) {
                    if (
                        el.parentElement.classList.contains("flex-column") ||
                        el.parentElement.classList.contains("flex-row")
                    ) {
                        if (el.parentElement.classList.contains("flex-column")) {
                            if (e.clientY - rect.y < rect.height / 2) {
                                cx(el, x, true);
                            } else {
                                cx(el, x, false);
                            }
                        }
                        if (el.parentElement.classList.contains("flex-row")) {
                            if (e.clientX - rect.x < rect.width / 2) {
                                cx(el, x, true);
                            } else {
                                cx(el, x, false);
                            }
                        }
                        selected_el = [];
                        break;
                    }
                }
                function cx(pel: Element, x: x, before: boolean) {
                    let xel = createEl("x-x");
                    xel.id = x.id;
                    xel.setAttribute("style", x.getAttribute("style"));
                    xel.style.left = "";
                    xel.style.top = "";
                    xel.className = x.className;
                    const xx = get_x_by_id(x.id);
                    if (before) {
                        pel.before(xel);
                    } else {
                        pel.after(xel);
                    }
                    xel.value = x.value;
                    xx.remove();
                }
            }
        }
        free_drag = false;
    }

    if (free_old_point && free_o_a == -1 && 临时中转站.contains(e.target as HTMLElement)) {
        for (let i of selected_el) {
            let had = false;
            for (let x of global_x) {
                if (x.data.id == i.id) {
                    had = true;
                    break;
                }
            }
            for (let x of 集.中转站) {
                if (x.id == i.id) {
                    had = true;
                    break;
                }
            }
            if (had) continue;
            集.中转站.push(get_x_out_value(i));
            i.remove();
        }
        free_o_rects = [];
        console.log(集.中转站);
        tmp_s_reflash();
        data_changed();
    }

    if (!free_move && free_old_point && !mu_sel_key(e)) {
        document.querySelectorAll("x-x").forEach((el: x) => {
            if (el.contains(e.target as x)) {
                z.focus(el);
                return;
            }
        });
        data_changed();
    }
    if (free_drag || free_old_point) z.reflash();
    if (
        !free_drag &&
        !free_move &&
        free_old_point &&
        free_o_a != -1 &&
        !free_o_rects[0].el.querySelector("x-link-arrow") &&
        is_smallest_el(free_o_rects[0].el)
    ) {
        if (!free_link) {
            let elid = free_o_rects[0].el.id;
            free_db_time = setTimeout(() => {
                let id = uuid_id();
                free_link = id;
                let x = createEl("x-x");
                x.id = id;
                z.push(x);
                let arrow = createEl("x-link-arrow");
                x.append(arrow);
                arrow._value.start.id = elid;
                arrow._value.start.a = free_o_a;
                x.style.stroke = "var(--color6)";
                x.style.strokeWidth = "1";
                x.classList.add("link_arrow_p");
                selected_el = selected_el.filter((el) => el != x);
            }, free_db_dtime);
        } else {
            let arrow = elFromId(free_link).querySelector("x-link-arrow") as link_arrow;
            arrow._value.end.id = free_o_rects[0].el.id;
            arrow._value.end.a = free_o_a;
            render_link_arrow(free_link, e);
            arrow.ob();
            link(arrow._value.start.id).add(free_o_rects[0].el.id);
            free_link = "";
        }
    }
    if (free_link) {
        let el = e.target as HTMLElement;
        if (
            !(
                typeof el?.className == "string" &&
                el.className.includes("xxhandle") &&
                is_smallest_el(elFromId(el.parentElement.getAttribute("data-id")) as x)
            )
        ) {
            z.remove(elFromId(free_link) as x);
        }
        free_link = "";
    }
    free_old_point = null;
    free_move = false;
    free_o_rects = [];
});

/** 调整元素大小、位置以及元素聚焦 */
var free_mouse = (e: MouseEvent) => {
    if (free_old_point) {
        for (const xel of free_o_rects) {
            let f =
                xel.el.parentElement.classList.contains("flex-column") ||
                xel.el.parentElement.classList.contains("flex-row");
            let np = e2p(e);
            let dx = np.x - free_old_point.x,
                dy = np.y - free_old_point.y;
            let x = xel.x,
                y = xel.y,
                w = xel.w,
                h = xel.h;
            switch (free_o_a) {
                case -1:
                    x = xel.x + dx;
                    y = xel.y + dy;
                    xel.el.style.left = x + "px";
                    xel.el.style.top = y + "px";
                    break;
                case 0:
                    c(0, -dy);
                    break;
                case 1:
                    c(1, dx);
                    break;
                case 2:
                    c(2, dy);
                    break;
                case 3:
                    c(3, -dx);
                    break;
                case 4:
                    // ↗
                    if (e.shiftKey) {
                        let j = dx * w - dy * h;
                        c(0, (j * h) / (w ** 2 + h ** 2));
                        c(1, (j * w) / (w ** 2 + h ** 2));
                    } else {
                        c(0, -dy);
                        c(1, dx);
                    }
                    break;
                case 5:
                    // ↘
                    if (e.shiftKey) {
                        let j = dx * w + dy * h;
                        c(1, (j * w) / (w ** 2 + h ** 2));
                        c(2, (j * h) / (w ** 2 + h ** 2));
                    } else {
                        c(1, dx);
                        c(2, dy);
                    }
                    break;
                case 6:
                    // ↙
                    if (e.shiftKey) {
                        let j = -dx * w + dy * h;
                        c(2, (j * h) / (w ** 2 + h ** 2));
                        c(3, (j * w) / (w ** 2 + h ** 2));
                    } else {
                        c(2, dy);
                        c(3, -dx);
                    }
                    break;
                case 7:
                    // ↖
                    if (e.shiftKey) {
                        let j = -dx * w - dy * h;
                        c(3, (j * w) / (w ** 2 + h ** 2));
                        c(0, (j * h) / (w ** 2 + h ** 2));
                    } else {
                        c(3, -dx);
                        c(0, -dy);
                    }
                    break;
            }
            function c(a: number, d: number) {
                let x = NaN,
                    y = NaN,
                    w = NaN,
                    h = NaN;
                let i = 1,
                    j = 0;
                if (e.ctrlKey) {
                    i = 2;
                    j = 1;
                }
                switch (a) {
                    case 0:
                        y = xel.y - d;
                        h = xel.h + i * d;
                        xel.el.style.height = h + "px";
                        if (!f) xel.el.style.top = y + "px";
                        break;
                    case 1:
                        w = xel.w + i * d;
                        x = xel.x - j * d;
                        xel.el.style.width = w + "px";
                        if (!f) xel.el.style.left = x + "px";
                        break;
                    case 2:
                        h = xel.h + i * d;
                        y = xel.y - j * d;
                        xel.el.style.height = h + "px";
                        if (!f) xel.el.style.top = y + "px";
                        break;
                    case 3:
                        x = xel.x - d;
                        w = xel.w + i * d;
                        xel.el.style.width = w + "px";
                        if (!f) xel.el.style.left = x + "px";
                        break;
                }
            }
            if (xel.el == z.聚焦元素) {
                set_style(xel.el);
                load_xywh();
            }
        }
        render_select_rects();
    }
};

function new_free_drag_tip() {
    free_drag_tip = createEl("div");
    free_drag_tip.classList.add("free_drag_tip");
    document.body.append(free_drag_tip);
}

function render_link_arrow(id: string, e: PointerEvent) {
    let xel = elFromId(id);
    if (!xel) {
        free_link = "";
        return;
    }
    let svg = xel.querySelector("x-link-arrow") as link_arrow;
    svg.render(e);
}

type free_a = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

function get_link_arrow_p(id: string, a: free_a): p_point {
    let xel = elFromId(id);
    let x = 0,
        y = 0,
        rect = el_offset2(xel, O);
    if (a == 7 || a == 3 || a == 6) x = rect.x;
    if (a == 0 || a == 2) x = rect.x + rect.w / 2;
    if (a == 4 || a == 1 || a == 5) x = rect.x + rect.w;
    if (a == 7 || a == 0 || a == 4) y = rect.y;
    if (a == 3 || a == 1) y = rect.y + rect.h / 2;
    if (a == 6 || a == 2 || a == 5) y = rect.y + rect.h;
    return { x, y };
}
function get_link_arrow_a(p: p_point, a: free_a): p_point {
    let dx = 0,
        dy = 0;
    const x = 60,
        y = 60;
    if (a == 7 || a == 3 || a == 6) dx = -x;
    if (a == 0 || a == 2) dx = 0;
    if (a == 4 || a == 1 || a == 5) dx = x;
    if (a == 7 || a == 0 || a == 4) dy = -y;
    if (a == 3 || a == 1) dy = 0;
    if (a == 6 || a == 2 || a == 5) dy = y;
    return { x: p.x + dx, y: p.y + dy };
}

/** 通过画布坐标创建主元素 */
function create_x_x(x: number, y: number) {
    let xel = createEl("x-x");
    xel.style.left = x + "px";
    xel.style.top = y + "px";
    z.push(xel);
    var md = createEl("x-md");
    xel.append(md);
    (<markdown>md).edit = true;
}

/** 中转站刷新 */
function tmp_s_reflash() {
    临时中转站.innerHTML = "";
    let l = [...集.中转站];
    for (let i of global_x) {
        l.push(i.data);
    }
    for (let x of l) {
        let t = createEl("div");
        临时中转站.append(t);
        let xel = createEl("x-x");
        xel.id = x.id;
        t.append(xel);
        xel.setAttribute("style", x.style);
        xel.style.left = "0px";
        xel.style.top = "0px";
        xel.className = x.class;
        xel.value = x.子元素;
    }
}

var global_x: { pid: string; data: data[0] }[] = [];

/** 移除全局中转 */
function remove_global(id: string) {
    let l: typeof global_x = [];
    for (let i of global_x) {
        if (i.data.id == id) {
            let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
            let r = customerObjectStore.get(i.pid);
            r.onsuccess = () => {
                let obj = r.result as 集type;
                for (let i of obj.中转站) {
                    if (i.id == id) {
                        i.global = false;
                    }
                }
                customerObjectStore.put(obj);
            };
        } else {
            l.push(i);
        }
    }
}

// 快捷键
document.onkeydown = (e) => {
    const target = e.target as HTMLElement;
    switch (e.key) {
        case "Delete":
            if (模式 != "设计") return;
            if (!is_input_el(target))
                for (let el of selected_el) {
                    z.remove(el);
                }
            selected_el = [];
            break;
        case "Home":
            if (e.ctrlKey) {
                归位.click();
            }
            break;
        case "0":
            if (e.ctrlKey) {
                let ozoom = zoom,
                    dzoom = 1 - zoom;
                zoom += dzoom;
                let dx = now_mouse_e.clientX - O.getBoundingClientRect().x,
                    dy = now_mouse_e.clientY - O.getBoundingClientRect().y;
                zoom_o(1);
                set_O_p(el_offset(O).x - dx * (dzoom / ozoom), el_offset(O).y - dy * (dzoom / ozoom));
                data_changed();
            }
            break;
        case "k":
            if (e.ctrlKey) {
                e.preventDefault();
                let s = document.getSelection().getRangeAt(0).toString();
                show_g_search();
                if (s) {
                    search_el.value = s;
                    search_el.select();
                }
            }
            break;
        case "z":
            if (e.ctrlKey) {
                e.preventDefault();
                undo(true);
            }
            break;
        case "y":
            if (e.ctrlKey) {
                e.preventDefault();
                undo(false);
            }
            break;
        case "i":
            if (模式 != "浏览") {
                if (!is_input_el(target)) {
                    set_模式("浏览");
                    e.preventDefault();
                    if (z.聚焦元素.querySelector("x-md")) (z.聚焦元素.querySelector("x-md") as markdown).edit = true;
                }
            }
            break;
        case "Escape":
            if (模式 == "浏览") {
                if (!侧栏.contains(target)) set_模式("设计");
            }
            if (free_link) {
                z.remove(elFromId(free_link) as x);
                free_link = "";
            }
            break;
        case "ArrowUp":
            ys_bn("back");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "up");
                jump_to_x_link(el, true);
            }
            break;
        case "ArrowDown":
            ys_bn("next");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "down");
                jump_to_x_link(el, true);
            }
            break;
        case "ArrowLeft":
            ys_bn("back");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "left");
                jump_to_x_link(el, true);
            }
            break;
        case "ArrowRight":
            ys_bn("next");
            if (!is_input_el(target) && document.fullscreenElement != 画布s) {
                let el = get_nearest_x(z.聚焦元素, "right");
                jump_to_x_link(el, true);
            }
            break;
        case "s":
            if (e.ctrlKey) {
                e.preventDefault();
                save_file();
            }
            break;
    }
};

// 文件数据
let pname = `画布${uuid_id()}`;
/** 文件 */
type 集type = {
    meta: meta;
    extra: {
        style: string;
        slide?: ys_type;
    };
    数据: 画布type[];
    链接: { [key: string]: { [key: string]: { value?: number; time?: number; s: number } } };
    assets: { [key: string]: { url: string; base64: string; sha: string } };
    中转站: data;
    values: { [key: string]: { [key: string]: any } };
};

type meta = {
    focus_page: string;
    url: string;
    UUID: string;
    file_name: string;
    version: string;
    create_time: number;
    change_time: number;
    author?: string;
    dependencies?: { url: string; version: string }[];
};

/** 主元素 */
type data = Array<{
    id: string;
    style: string;
    class: string;
    type: string;
    子元素?: data;
    value?: string;
    global?: boolean;
}>;
/** 画布 */
type 画布type = {
    id: string;
    name: string;
    p: { x: number; y: number; zoom: number };
    data: data;
};

var 集 = new_集(pname);

/** 新建默认集 */
function new_集(pname: string): 集type {
    if (!pname) pname = `画布${uuid_id()}`;
    const pid = uuid_id();
    return {
        meta: {
            focus_page: pid,
            url: "",
            UUID: uuid(),
            file_name: "",
            version: packagejson.version,
            create_time: new Date().getTime(),
            change_time: new Date().getTime(),
        },
        extra: {
            style: "",
        },
        数据: [{ id: pid, name: pname, p: { x: 0, y: 0, zoom: 1 }, data: [] }],
        链接: { 0: {} },
        assets: {},
        中转站: [],
        values: {},
    };
}

/** 获取集 */
function get_data() {
    let l = 集;
    let p = {};
    for (let i of 集.数据) {
        p[i.id] = i.p;
    }
    集.数据 = [];
    for (let O of 画布s.children) {
        let data = [] as data;
        let els = O.querySelectorAll(":scope > *");
        let map: { index: number; z: number }[] = [];
        els.forEach((el: HTMLElement, i) => {
            map.push({ index: i, z: Number(el.style.zIndex) || 1 });
        });
        map = map.sort((a, b) => a.z - b.z);
        for (let i of map) {
            let el = <x>els[i.index];
            let type = "X-X";
            data.push({ id: el.id, style: "", 子元素: el.value, type, class: "" });
            if (el.getAttribute("style")) data[data.length - 1].style = el.getAttribute("style");
            data[data.length - 1].class = el.className;
        }
        if ((O as HTMLElement).style.display == "block") {
            p[O.id] = { x: el_offset(O).x - 画布.offsetWidth / 2, y: el_offset(O).y - 画布.offsetHeight / 2, zoom };
            集.meta.focus_page = O.id;
        }
        let 画布数据 = {
            id: O.id,
            data,
            name: O.getAttribute("data-name"),
            p: p[O.id],
        };
        集.数据.push(画布数据);
        if (O.id == 当前画布.id) {
            当前画布 = 画布数据;
        }
    }
    window["xln"]["集"] = l;
    return l;
}

function rename_el() {
    let el = createEl("input");
    el.type = "text";
    el.readOnly = true;
    el.onkeydown = (e) => {
        if (e.key == "F2") {
            el.readOnly = false;
            el.select();
        }
    };
    el.onblur = () => {
        el.readOnly = true;
    };
    return el;
}

/**
 * 判断版本>=
 * @param v 版本
 * @param v2 版本
 * @returns if v>=v2
 */
function version_is_big(v: string, v2: string) {
    let vl = v.split(".").map((n) => Number(n));
    let vl2 = v2.split(".").map((n) => Number(n));
    return Boolean(vl[0] >= vl2[0] && vl[1] >= vl2[1] && vl[2] >= vl2[2]);
}

/**
 * 判断版本是否处于区间
 * @param v 版本
 * @param min 最小
 * @param max 最大
 */
function version_in(v: string, min: string, max: string) {
    return Boolean(version_is_big(v, min) && version_is_big(max, v));
}

/**
 * 转换旧版本集到新版本
 * @param obj 输入集
 * @returns 输出集
 */
function version_tr(obj): 集type {
    let v = obj.meta.version || "";
    switch (true) {
        case v == "":
            if (!obj.链接) obj["链接"] = { 0: {} };
            if (!obj.链接["0"]) obj.链接[0] = {};
            if (!obj.assets) obj["asstes"] = {};
            if (!obj.中转站) obj["中转站"] = [];
            for (let i in obj.链接) {
                if (!obj.链接[i].目标) continue;
                let o = {};
                for (let m of obj.链接[i].目标) {
                    o[m.key] = { value: m.value, time: m.time };
                }
                obj.链接[i] = o;
            }
            obj.meta["version"] = "0.4.2";
        case version_in(v, "0.4.2", "0.4.2"):
            for (let i of obj.数据) {
                for (let j of i.data) {
                    let type = "";
                    let value = "";
                    for (let v in j.values) {
                        if (v.includes("X")) {
                            type = v;
                            value = j.values[v].value;
                            break;
                        }
                    }
                    j.type = "X-X";
                    j.子元素 = [
                        {
                            id: "",
                            style: "",
                            value: value,
                            type: type,
                        },
                    ];
                    delete j.values;
                }
            }
            obj.meta.version = "0.5.0";
        case version_in(v, "0.5.0", "0.6.5"):
            for (let i of obj.数据) {
                i["id"] = uuid_id();
                if (obj.meta.focus_page == i.name) {
                    obj.meta.focus_page = i.id;
                }
            }
            obj.meta.version = "0.6.6";
        case version_in(v, "0.6.6", "0.10.3"):
            obj["extra"] = { style: "" };
            obj.meta.version = "0.10.4";
        case version_in(v, "0.10.4", "0.10.5"):
            for (let i of obj.数据) {
                w(i.data);
            }
            w(obj.中转站);
            function w(data) {
                for (let i of data) {
                    if (i.type == "X-MD") {
                        let text = i.value;
                        let o = { type: "text", text: text };
                        i.value = JSON.stringify(o);
                    } else {
                        if (i.子元素) w(i.子元素);
                    }
                }
            }
            obj.meta.version = "0.11.0";
        case version_in(v, "0.11.0", "0.11.1"):
            obj["values"] = {};
            obj.meta.version = "0.11.2";
        case version_in(v, "0.11.2", "0.13.0"):
            obj.meta["create_time"] = new Date().getTime();
            obj.meta["change_time"] = new Date().getTime();
            obj.meta.version = "0.13.1";
        case version_in(v, "0.13.1", "0.17.1"):
            {
                for (let i of obj.数据) {
                    w(i.data);
                }
                w(obj.中转站);
                function w(data) {
                    for (let i of data) {
                        delete i.fixed;
                    }
                }
            }
            obj.meta.version = "0.17.2";
        case version_in(v, "0.17.2", "0.17.3"):
            delete obj.链接[""];
            delete obj.链接["0"][""];
            delete obj.链接["0"]["0"];
            obj.meta.version = "0.17.4";
        case version_in(v, "0.17.4", "0.19.4"):
            const one_k = Math.E;
            for (let i in obj.链接) {
                for (let j in obj.链接[i]) {
                    // 归一
                    if (i == "0") {
                        obj.链接[i][j].value = Math.min(obj.链接[i][j].value, 1);
                    } else {
                        obj.链接[i][j].value = -one_k / (obj.链接[i][j].value + one_k) + 1;
                    }
                }
            }
            obj.meta.version = "0.20.0";
        case version_in(v, "0.20.0", "0.21.8"):
            for (let i in obj.链接) {
                for (let j in obj.链接[i]) {
                    obj.链接[i][j]["s"] = default_down_s;
                }
            }
            obj.meta.version = "0.22.0";
        case version_in(v, "0.22.0", "0.22.0"):
            return obj;
        default:
            put_toast(`文件版本是 ${v}，与当前软件版本 ${packagejson.version} 不兼容，请升级软件`);
    }
}

var 当前画布 = 集.数据[0] as 画布type;

import diff from "deep-diff";

window["diff"] = diff;

/** 设置集 */
async function set_data(l: 集type) {
    l = version_tr(l);
    for (let i in l) {
        if (集[i]) 集[i] = l[i];
    }
    画布s.innerHTML = "";

    await set_dependencies(集.meta.dependencies || []);

    let ps = {};
    for (const p of 集.数据) {
        ps[p.id] = render_data(p);
        if (集.meta.focus_page == p.id) {
            当前画布 = p;
            集.meta.focus_page = p.id;
            O = ps[p.id];
            O.style.display = "block";
            zoom_o(Number(O.style.transform.match(/scale\((.*)\)/)[1] || p.p.zoom));
            reload_side();
        }
    }
    location.hash = `#${集.meta.UUID}`;
    document.title = get_title();

    set_css(l.extra.style || "./md.css");
    if (l.extra?.slide) ys_init(l.extra.slide);
}

/** 侧栏刷新 */
function reload_side() {
    if (O.children[O.children.length - 1]) {
        z.focus(O.children[O.children.length - 1] as x);
    }
    z.reflash(true);
    l_math();
    tmp_s_reflash();
    assets_reflash();
}

/** 渲染画布 */
function render_data(inputdata: 画布type) {
    let el = createEl("div");
    el.style.display = "none";
    el.id = inputdata.id;
    el.setAttribute("data-name", inputdata.name);
    let values = {};
    function w(data: data, pid?: string) {
        let text = "";
        for (let i of data) {
            let style = i.style ? `style='${i.style}'` : "";
            let _class = i.class ? `class='${i.class}'` : "";
            if (i.value) {
                values[pid] = i.value;
            }
            let s = i.子元素 ? w(i.子元素, i.id) : "";
            if (i.type == "X-X" && !i.id) i.id = uuid_id();
            text += `<${i.type} id='${i.id}' ${style} ${_class}>${s}</${i.type}>`;
            link(i.id).add();
        }
        return text;
    }
    let t = w(inputdata.data);
    el.innerHTML = t;
    el.style.left = (inputdata?.p?.x || 0) + 画布.offsetWidth / 2 + "px";
    el.style.top = (inputdata?.p?.y || 0) + 画布.offsetHeight / 2 + "px";
    el.style.transform = `scale(${inputdata.p.zoom})`;
    画布s.append(el);

    fixed_el();

    function v(data: data, pid?: string) {
        try {
            for (let i of data) {
                if (values[pid]) {
                    (<markdown>get_x_by_id(pid).querySelector(i.type)).value = values[pid];
                }
                if (i.子元素) v(i.子元素, i.id);
            }
        } catch (error) {
            console.log(pid);
        }
    }
    v(inputdata.data);
    values = null;
    return el;
}

/** 选择画布 */
function select_p(id: string) {
    for (let el of 画布s.children) {
        if (el.id == id) {
            O = el as HTMLElement;
            O.style.display = "block";
            set_zoom(O.style.transform);
        } else {
            (el as HTMLElement).style.display = "none";
        }
    }
    z.focus(O.children[O.children.length - 1] as x);
    z.reflash(true);
}

function set_zoom(zooms: string) {
    zoom_o(Number(zooms.match(/scale\((.*)\)/)[1]) || zoom);
}

type diff_i = diff.Diff<any, any>;

function set_diff_data(diffl: diff_i[], undo_data: 集type) {
    if (!diffl) return;
    console.log(diffl);
    const main_data = get_data();
    for (let d of diffl) {
        if (!d.path) continue;
        switch (d.path[0]) {
            case "meta":
                if (d.path.length == 1) {
                    集.meta = d["rhs"];
                } else {
                    let last = d.path[d.path.length - 1];
                    if (last == "focus_page") {
                        let id = d["rhs"];
                        集.meta.focus_page = id;
                        for (let el of 画布s.children) {
                            if (el.id == id) {
                                (el as HTMLElement).style.display = "block";
                                O = el as HTMLElement;
                            } else {
                                (el as HTMLElement).style.display = "none";
                            }
                        }
                    }
                    if (last == "file_name") {
                        set_title(d["rhs"]);
                        load_file_side_bar();
                        reload_file_list();
                    }
                }
                break;
            case "链接":
                集.链接 = undo_data.链接;
                break;
            case "assets":
                集.assets = undo_data.assets;
                assets_reflash();
                break;
            case "中转站":
                集.中转站 = undo_data.中转站;
                tmp_s_reflash();
                break;
            case "数据":
                if (d.path.includes("data")) {
                    if (d.path.includes("子元素")) {
                        let offset = -1 - 2;
                        if (d.path[d.path.length - 1] != "value") {
                            offset = -1;
                        }
                        let t = main_data;
                        for (let i = 0; i < d.path.length + offset; i++) {
                            t = t[d.path[i]];
                        }

                        const id = t["id"];
                        console.log(id);

                        let el = get_x_by_id(id);
                        if (d.kind == "E") {
                            if (d.path[d.path.length - 1] == "value") {
                                let t = main_data;
                                for (let i = 0; i < d.path.length - 1; i++) {
                                    t = t[d.path[i]];
                                }
                                (el.querySelector(`${t["type"]}`) as markdown).value = d["rhs"];
                            } else if (d.path[d.path.length - 1] == "style") {
                                el.setAttribute("style", d["rhs"]);
                            } else if (d.path[d.path.length - 1] == "class") {
                                el.className = d["rhs"];
                            } else if (d.path[d.path.length - 1] == "id") {
                                el.id = d["rhs"];
                            } else if (d.path[d.path.length - 1] == "子元素") {
                                el.value = d["rhs"];
                            } else if (d.path[d.path.length - 1] == "type") {
                                let new_el = createEl(d["rhs"]) as x;
                                new_el.id = el.id;
                                new_el.className = el.className;
                                new_el.setAttribute("style", el.getAttribute("style"));
                                let v = el.value;
                                el.parentElement.replaceChild(new_el, el);
                                if (v) {
                                    new_el.value = el.value;
                                }
                            }
                        }
                    }
                }
                break;
            case "values":
                集.values = undo_data.values;
                if (d.path[1]) {
                    (elFromId(d.path[1]).querySelector("x-md") as markdown).reload();
                }
                break;
            default:
                break;
        }
    }
}

set_css("./md.css");

/** 设置文件css样式 */
function set_css(t: string) {
    let style: HTMLElement;
    const css = elFromId("css");
    if (t.includes("\n")) {
        if (css && css.tagName == "STYLE") {
            css.innerHTML = t;
        } else {
            style = createEl("style");
            style.innerHTML = t;
            _new();
        }
    } else {
        if (css && css.tagName == "LINK") {
            (css as HTMLLinkElement).href = t;
        } else {
            style = createEl("link");
            (style as HTMLLinkElement).href = t;
            (style as HTMLLinkElement).rel = "stylesheet";
            _new();
        }
    }
    function _new() {
        css?.remove();
        style.id = "css";
        document.body.append(style);
    }
}

function set_dependencies(ds: meta["dependencies"]) {
    let p = [];
    for (let i of ds) {
        let sc = createEl("script");
        sc.src = i.url;
        p.push(
            new Promise((re) => {
                sc.onload = () => {
                    re("");
                };
            })
        );
    }
    return Promise.all(p);
}

function xln_out(obj: 集type) {
    let t = JSON.stringify(obj, null, 2);
    return t;
}

function xln_in(t: string) {
    let obj = JSON5.parse(t);
    return obj;
}

// 绑定文件
var fileHandle;

async function file_load() {
    let file: File;
    if (window.showOpenFilePicker) {
        [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "xlinkote 文件",
                    accept: {
                        "text/*": [".xln"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
        });
        if (fileHandle.kind != "file") return;
        fileHandle.requestPermission({ mode: "readwrite" });
        file = await fileHandle.getFile();
    }
    集.meta.file_name = file.name.replace(/\.xln$/, "");
    document.title = get_title();

    let reader = new FileReader();
    reader.onload = () => {
        let o = xln_in(<string>reader.result) as any;
        set_data(o);
        data_changed();
    };
    reader.readAsText(file);
}

var saved = true;

function get_file_name() {
    return 集.meta.file_name || document.querySelector("h1")?.innerText || `xlinkote`;
}

function get_title() {
    return `${集.meta.file_name} - xlinkote`;
}

function set_title(t: string) {
    document.title = `${t} - xlinkote`;
}

async function write_file(text: string) {
    saved = true;
    document.title = get_title();
    if (fileHandle && (await fileHandle.requestPermission({ mode: "readwrite" })) === "granted") {
        const writable = await fileHandle.createWritable();
        await writable.write(text);
        await writable.close();
    }
}

// 数据库
var request = indexedDB.open("files");
var db_store_name = "files";
var db: IDBDatabase;

request.onsuccess = (event) => {
    db = (<any>event.target).result;
    db_get();
};
request.onerror = (event) => {
    console.error(new Error((<any>event.target).error));
};
request.onupgradeneeded = (event) => {
    db = (<any>event.target).result;
    db.createObjectStore(db_store_name, { keyPath: "meta.UUID" });
};

var db_writing = false;
function db_put(obj: object) {
    if (db_writing) return;
    db_writing = true;
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.put(obj);
    r.onerror = (event) => {
        console.error(new Error((<any>event.target).error));
    };
    r.onsuccess = () => {
        db_writing = false;
    };
}

var file_list: meta[] = [];

function load_file_side_bar() {
    文件_el.innerHTML = "";
    let load_dav = createEl("div");
    load_dav.innerHTML = icon(cloud_down);
    文件_el.append(load_dav);
    load_dav.onclick = () => {
        get_all_xln();
    };
}

/** 获取文件并渲染 */
function db_get() {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.getAll();

    load_file_side_bar();

    r.onsuccess = () => {
        const result: 集type[] = r.result;
        for (let f of result) {
            file_list.push(f.meta);
        }

        reload_file_list();

        let ihash = false;
        global_x = [];

        for (let f of r.result) {
            if ((f as 集type)?.中转站)
                for (let x of (f as 集type).中转站) {
                    if (x.global) global_x.push({ pid: (f as 集type).meta.UUID, data: x });
                }

            if (`#${f.meta.UUID}` == location.hash) {
                ihash = true;
                set_data(f);
                文件_el.querySelector(`[data-uuid="${f.meta.UUID}"]`).classList.add("selected_item");
                db_can_save = true;
                set_save_icon();
            }
        }

        if (!ihash) {
            set_data(集);
        }
    };
}

let collator = new Intl.Collator("cn");
type sort_type = { type: "change_time" | "create_time" | "name"; reverse: boolean };

function reload_file_list() {
    file_list = file_list.sort((a, b) => {
        let n = 0;
        switch (store.sort.type) {
            case "change_time":
                n = b.change_time - a.change_time;
                break;
            case "create_time":
                n = b.create_time - a.create_time;
                break;
            case "name":
                n = collator.compare(a.file_name, b.file_name);
                break;
        }
        if (store.sort.reverse) {
            return -1 * n;
        } else {
            return 1 * n;
        }
    });
    for (let f of file_list) {
        let d = createEl("div");
        d.setAttribute("data-uuid", f.UUID);
        let t = createEl("a");
        t.target = "_blank";
        let url = new URL(location.origin);
        url.hash = f.UUID;
        t.href = url.toString();
        t.innerText = f.file_name;
        if (f.url) t.title = f.url;
        let dav = createEl("div");
        let more = createEl("div");
        more.classList.add("more");
        let rename = createEl("div");
        rename.innerHTML = icon(edit_svg);
        rename.onclick = async () => {
            let n = await xprompt("重命名文件", f.file_name);
            if (n) {
                let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
                let r = customerObjectStore.get(f.UUID);
                let j: 集type = null;
                r.onsuccess = () => {
                    j = r.result as 集type;
                    j.meta.file_name = n;
                    r = customerObjectStore.put(j);
                    r.onsuccess = () => {
                        t.innerText = n;
                    };
                };
            }
        };
        let rm = createEl("div");
        rm.innerHTML = icon(remove_svg);
        rm.onclick = async () => {
            let x = await xconfirm(`确定删除文件 ${f.file_name}`);
            if (!x) return;
            let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
            let r = customerObjectStore.delete(f.UUID);
            r.onsuccess = () => {
                d.remove();
                if (f.UUID == 集.meta.UUID) window.close();
            };
        };
        more.append(rm, rename);
        d.append(dav, t, more);
        文件_el.append(d);
    }
}

/** 通过uuid设置文件 */
function set_db_file(uuid: string) {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.get(uuid);
    r.onsuccess = () => {
        set_data(r.result);
    };
}

/** 下载数据库 */
function db_download() {
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    let r = customerObjectStore.getAll();
    r.onsuccess = () => {
        let t = JSON.stringify(r.result);
        let a = createEl("a");
        let blob = new Blob([t]);
        a.download = `xlinkote_db.json`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    };
}

/** 上传数据库 */
function db_load(t: string) {
    let o = JSON5.parse(t);
    let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
    for (let obj of o) {
        let r = customerObjectStore.put(obj);
        r.onerror = (event) => {
            console.error(new Error((<any>event.target).error));
        };
    }
    db_get();
}

elFromId("db_load").onchange = () => {
    let file = (<HTMLInputElement>elFromId("db_load")).files[0];
    let reader = new FileReader();
    reader.onload = () => {
        db_load(<string>reader.result);
    };
    reader.readAsText(file);
};

// 撤销
type undo_diff_data = { s: any; diff: diff.Diff<any, any>[] };
var undo_stack: undo_diff_data[] = [],
    undo_i = -1;

function undo(v: boolean) {
    if (v) {
        undo_i--;
        if (undo_i < 0) undo_i = 0;
    } else {
        undo_i++;
        if (undo_i >= undo_stack.length) undo_i = undo_stack.length - 1;
    }
    let data = get_undo_s(undo_i);
    let now_data = get_data();
    set_diff_data(diff.diff(now_data, data.data), data.data);
    console.log(diff.diff(get_data(), now_data));

    selections = data.s;
    if (selections[0].id) {
        (elFromId(selections[0].id).querySelector("x-md") as markdown).edit = true;
        let text = (elFromId(selections[0].id).querySelector("x-md") as markdown).text;
        text.selectionStart = selections[0].start;
        text.selectionEnd = selections[0].end;
    }
}

function get_undo_s(i: number): { s: selection_type[]; data: 集type } {
    let z = {};
    for (let n = 0; n <= i; n++) {
        for (let d of undo_stack[n].diff) {
            diff.applyChange(z, null, d);
        }
    }
    return { s: undo_stack[i].s, data: z as 集type };
}

function clone(obj: object) {
    return JSON5.parse(JSON.stringify(obj));
}

function push_undo() {
    if (undo_i != undo_stack.length - 1 && undo_i != -1) {
        // 把当前位置的数据移到末
        let pre_data = get_undo_s(undo_i);
        let last_data = get_undo_s(undo_stack.length - 1);
        let d = diff.diff(last_data.data, pre_data.data);
        if (!d) return;
        let data: undo_diff_data = { s: clone(pre_data.s), diff: d };
        undo_stack.push(data);
        undo_i = undo_stack.length - 1;
    }

    let per = undo_i == -1 ? {} : get_undo_s(undo_i).data;
    let now_data = clone(get_data());
    let d = diff.diff(per, now_data);
    if (!d) return;
    undo_stack.push({ s: clone(selections), diff: d });
    undo_i = undo_stack.length - 1;

    console.log(undo_stack);
}

/** 下载文件 */
async function download_file(text: string) {
    if (window.showSaveFilePicker) {
        fileHandle = await window.showSaveFilePicker({
            suggestedName: get_file_name(),
            types: [
                {
                    description: "xlinkote 文件",
                    accept: { "text/*": [".xln"] },
                },
            ],
        });
        const writable = await fileHandle.createWritable();
        await writable.write(text);
        await writable.close();
    } else {
        let a = createEl("a");
        let blob = new Blob([text]);
        let name = get_file_name();
        a.download = `${name}.xln`;
        a.href = URL.createObjectURL(blob);
        a.click();
        URL.revokeObjectURL(String(blob));
    }
}

var save_timeout = NaN,
    save_dt = 200;

/**
 * # 文件是否可以被保存
 * - 一般db文件可保存；
 * - 新建集不保存，除非设定保存；
 * - 网络来源不保存，除非设定保存；
 * - 本地文件不保存，除非设定保存；
 */
var db_can_save = false;

/**
 * 保存文件，can save时上传到云
 */
async function save_file() {
    if (db_can_save) {
        data_changed();
        put_xln_value();
    } else {
        if (!集.meta.file_name) {
            let fn = await xprompt("文件名", `新建集${uuid_id()}`);
            if (fn) {
                集.meta.file_name = fn;
            }
        }
        db_can_save = true;
        data_changed();
        file_list.push(集.meta);
        load_file_side_bar();
        reload_file_list();
        文件_el.querySelector(`[data-uuid="${集.meta.UUID}"]`).classList.add("selected_item");
    }
    set_save_icon();
}

/** 文件状态改变触发 */
function data_changed() {
    clearTimeout(save_timeout);
    save_timeout = window.setTimeout(() => {
        if (saved) {
            saved = false;
        }
        const data = get_data();
        data.meta.change_time = new Date().getTime();
        write_file(xln_out(data));
        if (db_can_save) {
            db_put(data);
        }
        push_undo();
    }, save_dt);
}

/** 添加画布 */
function add_画布(xname?: string) {
    get_data(); /* 保存之前的画布 */
    let name = xname || `画布${uuid_id()}`;
    let id = uuid_id();
    集.数据.push({ id: id, name, p: { x: 0, y: 0, zoom: 1 }, data: [] });
    集.meta.focus_page = id;
    set_data(集);
    data_changed();
}

/** 拖放数据处理 */
function put_datatransfer(data: DataTransfer, x: number, y: number) {
    if (data.files.length != 0) {
        for (let f of data.files) {
            let type = f.type.split("/")[0];
            if (type == "text") {
                let reader = new FileReader();
                reader.readAsText(f);
                reader.onload = () => {
                    add_file(f.type, reader.result as string, null, x, y);
                };
            } else {
                let reader = new FileReader();
                reader.readAsDataURL(f);
                reader.onload = () => {
                    add_file(f.type, null, reader.result as string, x, y);
                };
            }
        }
    } else {
        let html = data.getData("text/html");
        add_file("text/html", html, null, x, y);
    }
}

画布.ondragover = (e) => {
    if (e.target != 画布) return;
    e.preventDefault();
};
画布.ondrop = (e) => {
    if (e.target != 画布) return;
    e.preventDefault();
    put_datatransfer(e.dataTransfer, e.offsetX - el_offset(O).x, e.offsetY - el_offset(O).y);
};

// 添加文件或文字
import TurndownService from "turndown";
/** 添加文件或文字到画布 */
function add_file(type: string, text: string, data: string, x: number, y: number) {
    let types = type.split("/");
    let xel = createEl("x-x");
    xel.style.left = x / zoom + "px";
    xel.style.top = y / zoom + "px";
    z.push(xel);
    if (types[0] == "text") {
        let md = createEl("x-md");
        xel.append(md);
        if (type == "text/html") {
            let turndownService = new TurndownService({ headingStyle: "atx" });
            md.value = JSON.stringify({ type: "text", text: turndownService.turndown(text) });
        } else {
            md.value = JSON.stringify({ type: "p", text });
        }
    } else {
        let id = put_assets("", data);
        let file = createEl("x-file");
        xel.append(file);
        file.value = JSON.stringify({ r: true, id });
    }
}

/** 摘录 */
document.addEventListener("message", (msg: any) => {
    alert(msg.data);
    const data = JSON5.parse(msg.data);
    if (data.m == "add") {
        if (集.meta.file_name != "摘录") {
            // 是否存在摘录文件
            for (let i of file_list) {
                if (i.file_name == "摘录") {
                    set_db_file(i.UUID);
                }
            }
            // 新建摘录文件
            if (集.meta.file_name != "摘录") {
                let j: 集type;
                // 避免影响当前已打开文件
                if (集.meta.file_name) {
                    j = new_集("");
                } else {
                    j = 集;
                }
                j.meta.file_name = "摘录";
                j.中转站.push({
                    id: uuid_id(),
                    style: "",
                    class: "",
                    value: data.text,
                    type: "X-MD",
                });
                set_data(j);
            }
        }
        data_changed();
    }
});

import CryptoJS from "crypto-js";

/** 添加资源到assets */
function put_assets(url: string, base64: string) {
    let id = uuid_id();
    let sha = "";
    if (base64) {
        sha = CryptoJS.SHA256(base64).toString();
        for (let id in 集.assets) {
            if (集.assets[id].sha == sha) return id;
        }
    }
    集.assets[id] = { url, base64, sha };
    assets_reflash();
    return id;
}

/** 刷新资源栏 */
function assets_reflash() {
    assets_el.innerHTML = "";
    for (let i in 集.assets) {
        let div = createEl("div");
        assets_el.append(div);
        let file = createEl("x-file");
        div.append(file);
        file.value = JSON.stringify({ r: true, id: i });

        let bar = createEl("div");
        let r = createEl("div");
        r.innerHTML = icon(remove_svg);
        let id_el = createEl("div");
        id_el.innerText = i;
        div.append(bar);
        r.onclick = () => {
            delete 集.assets[i];
            div.remove();
        };

        画布s.querySelectorAll("x-file").forEach((el: file) => {
            if (el._value.id == i) {
                r.classList.add("not_click");
            }
        });

        let add = createEl("div");
        add.onclick = (e) => {
            let p = e2p(e);
            let xel = createEl("x-x");
            xel.style.left = p.x + "px";
            xel.style.top = p.y + "px";
            z.push(xel);
            let file = createEl("x-file");
            xel.append(file);
            file.value = JSON.stringify({ r: true, id: i });
        };
        add.innerHTML = icon(add_svg);

        let fileHandle;
        let download = createEl("div");
        download.onclick = async () => {
            if (window.showSaveFilePicker) {
                fileHandle = await window.showSaveFilePicker({
                    suggestedName: `${get_file_name()}资源文件${i}`,
                });
                const writable = await fileHandle.createWritable();

                let arr = 集.assets[i].base64.split(","),
                    mime = arr[0].match(/:(.*?);/)[1],
                    bstr = window.atob(arr[1]),
                    n = bstr.length,
                    u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                let blob = new Blob([u8arr], { type: mime });
                await writable.write(blob);
                await writable.close();
                async.style.display = "";
                async_init = true;
                async_file();
            } else {
                let a = createEl("a");
                let name = get_file_name();
                a.download = `${name}资源文件${i}`;
                a.href = 集.assets[i].base64;
                a.click();
                URL.revokeObjectURL(集.assets[i].base64);
            }
        };
        download.innerHTML = icon(down_svg);

        let async_init = false;
        let async = createEl("div");
        async.onclick = async () => {
            if (!fileHandle) return;
            if (async_init) {
                async_init = false;
            } else {
                async_init = true;
                async_file();
            }
        };
        async.innerHTML = icon(binding_svg);
        async function async_file() {
            let r: File = await fileHandle.getFile();
            let a = new FileReader();
            a.onload = () => {
                let t = a.result as string;
                if (t != 集.assets[i].base64) {
                    集.assets[i].base64 = t;
                    集.assets[i].sha = CryptoJS.SHA256(a.result as string).toString();
                }
            };
            a.readAsDataURL(r);
            if (async_init) {
                setTimeout(async_file, 1000);
            }
        }
        async.style.display = "none";

        bar.append(id_el, add, download, async, r);
    }
}

/** 新建绘制元素 */
function new_draw() {
    let xel = createEl("x-x");
    xel.id = uuid_id();
    xel.style.left = -el_offset(O).x / zoom + "px";
    xel.style.top = -el_offset(O).y / zoom + "px";
    let draw = createEl("x-draw");
    draw.setAttribute("width", String(画布.offsetWidth / zoom));
    draw.setAttribute("height", String(画布.offsetHeight / zoom));
    xel.append(draw);

    focus_draw_el = draw;
    z.push(xel, O.lastElementChild as x);
}
var focus_draw_el = null as draw;
画布.onpointerdown = (e) => {
    if (模式 == "绘制") {
        penc_el.classList.remove("color_show");
        pen_el.classList.remove("pen_show");
        new_draw(); // 一个笔画就创建一个元素
        penc_el.value = (<draw>focus_draw_el).pen.color;
    }
};

画布.onpointermove = (e) => {
    if (focus_draw_el) {
        (<draw>focus_draw_el).draw(e);
    }
};
画布.onpointerup = (e) => {
    if (focus_draw_el) {
        (<draw>focus_draw_el).draw(e);
        (<draw>focus_draw_el).points = [{ x: NaN, y: NaN, p: NaN }];
        (<draw>focus_draw_el).complete();
        (<draw>focus_draw_el).clip();
        data_changed();
    }
};

// 色盘
color_yl.style.background = "#000";
color_yl.onclick = (e) => {
    if (e.target == color_yl) penc_el.classList.toggle("color_show");
};
penc_el.addEventListener("input", () => {
    let el = z.聚焦元素?.querySelector("x-draw") as draw;
    if (el && 模式 == "设计") {
        el.main_svg.querySelectorAll("*").forEach((el) => {
            if (el.getAttribute("fill")) {
                el.setAttribute("fill", penc_el.value);
            }
            if (el.getAttribute("stroke-width")) {
                el.setAttribute("stroke-width", penc_el.value);
            }
        });
    }
    color_yl.style.background = penc_el.value;
    pen_width_el.color = penc_el.value;
});

elFromId("笔").onclick = (e) => {
    if (e.target == pen_el.parentElement) pen_el.classList.toggle("pen_show");
};

window.onbeforeunload = () => {
    if (!集.meta.file_name && !(画布s.childElementCount == 1 && O.innerHTML == "")) return true;
};

// 导出
import html2canvas from "html2canvas";
elFromId("导出图片").onclick = to_canvas;
function to_canvas() {
    for (let m of document.querySelectorAll("mjx-assistive-mml")) {
        m.remove();
    }
    html2canvas(画布, { scale: 1 / zoom }).then(function (canvas: HTMLCanvasElement) {
        let url = canvas.toDataURL();
        let a = createEl("a");
        let name = get_file_name();
        a.download = `${name}.png`;
        a.href = url;
        a.click();
    });
}

function get_x_by_id(id: string) {
    return elFromId(id) as x;
}

/** 获取存在链接值的元素 */
function get_link_el_by_id(id: string) {
    return elFromId(id) as x | xlink;
}

class 图层 {
    聚焦元素 = <x>null;

    create_li(i: data[0]) {
        let li = createEl("li");
        let c = createEl("input");
        c.type = "checkbox";
        let s = createEl("span");
        s.innerText = i.id;
        li.setAttribute("data-id", i.id);
        li.append(c);
        li.append(s);
        c.onclick = () => {
            li.querySelectorAll("input").forEach((el) => {
                el.checked = c.checked;
            });
            selected_el = [];
            图层_el.querySelectorAll("input").forEach((el) => {
                if (el.checked) {
                    let x = get_x_by_id(el.parentElement.getAttribute("data-id"));
                    selected_el.push(x);
                    render_select_rects();
                }
            });
        };
        s.onclick = () => {
            jump_to_x_link(get_x_by_id(i.id));
            图层_el.querySelectorAll("input").forEach((el) => {
                if (el.checked) {
                    this.focus(get_x_by_id(el.parentElement.getAttribute("data-id")));
                }
            });
        };
        li.onpointerenter = (e) => {
            move_to_x_link(get_x_by_id(i.id));
        };
        li.onpointermove = (e) => {
            window.requestAnimationFrame(() => {
                set_viewer_posi(li.offsetWidth + li.getBoundingClientRect().left + 8, e.clientY);
            });
        };
        if (this.聚焦元素?.id == i.id && selected_el.length == 1) {
            this.focus(get_x_by_id(i.id));
            c.checked = true;
        }
        if (i?.子元素?.length > 0) {
            if (i.子元素[0].type != "X-X") {
                const type = {
                    "x-md": "md",
                    "x-draw": "墨迹",
                    "x-file": "文件",
                    "x-record": "录音机",
                    "x-calendar": "日历",
                    "x-time": "计时器",
                    "x-link-arrow": "箭头链接",
                };
                s.innerText += ` ${type[i.子元素[0].type.toLowerCase()]}`;
            } else {
                let x = createEl("img");
                x.src = ul_show_svg;
                s?.before(x);
                x.onclick = () => {
                    li.classList.toggle("层ul_hide");
                };
            }
        }
        return li;
    }

    /**
     * 从数据渲染图层侧栏
     * @param nosave 不触发data change
     */
    reflash(nosave?: boolean) {
        图层_el.innerHTML = "";
        /**
         * 遍历walker
         * @param data 数据
         * @param pel 要把ul添加到的目标元素
         */
        let w = (data: data, pel: HTMLElement) => {
            let ul = createEl("ul");
            let ulf = document.createDocumentFragment();
            for (let n in data) {
                const i = data[n];

                if (i.id && get_x_by_id(i.id)) get_x_by_id(i.id).style.zIndex = String(Number(n) + 1);
                if (i.type != "X-X") {
                    return;
                } else {
                    if (i.id && get_x_by_id(i.id) && is_flex(get_x_by_id(i.id)) == "flex")
                        get_x_by_id(i.id).style.setProperty("--z", String(i.子元素.length));
                }
                图层_el.querySelectorAll("input").forEach((el) => {
                    let x = get_x_by_id(el.parentElement.getAttribute("data-id"));
                    if (selected_el.includes(x)) {
                        el.checked = true;
                    } else {
                        el.checked = false;
                    }
                });

                const li = this.create_li(i);

                if (i?.子元素?.length > 0) {
                    w(i.子元素, li);
                }
                if (ulf.firstElementChild) {
                    ulf.firstElementChild.before(li);
                } else {
                    ulf.append(li);
                }
            }
            ul.append(ulf);
            if (pel.children.length > 0) {
                pel.querySelector("span").after(ul);
            } else {
                pel.append(ul);
            }
        };
        let root_ul = createEl("ul");
        图层_el.append(root_ul);
        root_ul.onpointerleave = () => {
            view_el.classList.add("viewer_hide");
        };
        for (let i of 集.数据) {
            let li = createEl("li");
            let s = createEl("span");
            let text = createEl("span");
            text.innerText = `${i.name}`;
            s.append(text);
            li.setAttribute("data-id", i.id);
            let ul_img = createEl("img");
            ul_img.src = ul_show_svg;
            ul_img.onclick = () => {
                li.classList.toggle("层ul_hide");
            };
            s.onclick = () => {
                for (let el of 画布s.children) {
                    let this_li = root_ul.querySelector(`li[data-id="${el.id}"]`);
                    if (el.id == i.id) {
                        O = el as HTMLElement;
                        O.style.display = "block";
                        set_zoom(O.style.transform);
                        this_li.classList.remove("层ul_hide");
                    } else {
                        (el as HTMLElement).style.display = "none";
                        this_li.classList.add("层ul_hide");
                    }
                }
            };
            li.append(ul_img, s);
            w(i.data, li);
            if (i.id != 当前画布.id) {
                li.classList.add("层ul_hide");
            }
            let more = createEl("div");
            more.classList.add("more");
            let idel = createEl("span");
            idel.innerText = i.id;
            let rename = createEl("div");
            rename.innerHTML = icon(edit_svg);
            rename.onclick = async () => {
                let n = await xprompt("重命名画布", i.name);
                if (n) {
                    elFromId(i.id).setAttribute("data-name", n);
                    get_data();
                    z.reflash();
                }
            };
            let rm = createEl("div");
            rm.innerHTML = icon(remove_svg);
            rm.onclick = async () => {
                if (画布s.children.length == 1) return;
                let x = await xconfirm(`确定删除画布 ${i.name}`);
                if (!x) return;
                z.remove(elFromId(i.id).querySelector(":scope > x-x") as x);
                elFromId(i.id).remove();
                if (i.id == 当前画布.id) {
                    let id = 画布s.children[0].id;
                    select_p(id);
                }
                li.remove();
                get_data();
                z.reflash();
            };
            more.append(idel, rm, rename);
            s.append(more);
            root_ul.append(li);
        }
        document.documentElement.style.setProperty("--zest-index", String(当前画布.data.length));

        if (!nosave) data_changed();

        if (O.querySelectorAll("x-x").length > 128) {
            O.style.willChange = "left, top, transform";
        } else {
            O.style.willChange = "";
        }
    }

    push(el: x, pel?: x) {
        el.id = el.id === "undefined" || !el.id ? `${uuid_id()}` : el.id;
        let ppel = pel || O;
        if (!el.style.zIndex && !(is_flex(ppel) == "flex")) {
            el.style.zIndex = String(ppel.childElementCount + 1);
        }
        ppel.append(el);
        let li = this.create_li(get_x_out_value(el));
        let pli = 图层_el.querySelector(`li[data-id="${ppel.id}"]`);
        if (pli.querySelector(":scope > ul")) {
            pli.querySelector(":scope > ul").insertAdjacentElement("afterbegin", li);
        } else {
            get_data();
            this.reflash();
        }
        this.focus(el);
        link(el.id).add();
    }

    remove(el: x) {
        link(el.id).rm();
        el.querySelectorAll("x-x, x-link").forEach((el) => {
            link(el.id).rm();
            breadcrumbs_el.querySelector(`div[data-id="${el.id}"]`)?.remove();
        });
        el.remove();
        delete 集.values[el.id];
        图层_el.querySelector(`li[data-id="${el.id}"]`)?.remove();
        breadcrumbs_el.querySelector(`div[data-id="${el.id}"]`)?.remove();
        render_select_rects();
        data_changed();
    }

    focus(el: x) {
        this.聚焦元素 = el;
        for (let l of 图层_el.querySelectorAll("input")) {
            if (el.id == l.parentElement.getAttribute("data-id")) {
                l.checked = true;
            } else {
                l.checked = false;
            }
        }
        focus_draw_el = null;
        if (el.querySelector("x-draw") && 模式 == "绘制") focus_draw_el = el.querySelector("x-draw") as draw;

        selected_el = [];
        selected_el.push(el);
        render_select_rects();
        set_style(el);
        load_xywh();
        load_value();

        add_bci(el);

        link(el.id).value("0", link_value_min_d());

        if (模式 == "设计") {
            let d = el.querySelector("x-draw") as draw;
            if (d) {
                penc_el.value = d.pen.color;
            }
        }
    }

    get(el: x) {
        let w = (data: data) => {
            for (let n in data) {
                const i = data[n];
                if (i.id == el.id) return { n: Number(n), data };
                if (i?.子元素?.length > 0) {
                    w(i.子元素);
                }
            }
        };
        return w(当前画布.data);
    }

    mv(array: data, i: number, t: number) {
        if (t < 0 || t >= array.length) return;
        array.splice(t, 0, array.splice(i, 1)[0]);
    }

    底层(el: x) {
        let v = this.get(el);
        this.mv(v.data, v.n, 0);
        this.reflash();
    }
    下一层(el: x) {
        let v = this.get(el);
        this.mv(v.data, v.n, v.n - 1);
        this.reflash();
    }
    上一层(el: x) {
        let v = this.get(el);
        this.mv(v.data, v.n, v.n + 1);
        this.reflash();
    }
    顶层(el: x) {
        let v = this.get(el);
        this.mv(v.data, v.n, v.data.length - 1);
        this.reflash();
    }
}

var z = new 图层();

xywh_x_el.oninput = () => {
    z.聚焦元素.style.left = xywh_x_el.value + "px";
    data_changed();
};
xywh_y_el.oninput = () => {
    z.聚焦元素.style.top = xywh_y_el.value + "px";
    data_changed();
};
xywh_w_el.oninput = () => {
    z.聚焦元素.style.width = xywh_w_el.value + "px";
    data_changed();
};
xywh_h_el.oninput = () => {
    z.聚焦元素.style.height = xywh_h_el.value + "px";
    data_changed();
};
function load_xywh() {
    let fe = z.聚焦元素;
    xywh_x_el.value = String(fe.offsetLeft);
    xywh_y_el.value = String(fe.offsetTop);
    xywh_w_el.value = String(fe.offsetWidth);
    xywh_h_el.value = String(fe.offsetHeight);
}

import css_properties_file from "../../lib/css/CSSProperties.json?raw";
const css_properties = JSON5.parse(css_properties_file) as {
    pv: { [key: string]: { values: string[]; type?: string } };
    color: string[];
};

let cssp = css_properties.pv;
let css_t: string[] = [];
for (let i in css_properties.pv) {
    if (css_properties.pv[i].type == "color") {
        cssp[i].values = cssp[i].values.concat(css_properties.color);
    }
    for (let j of cssp[i].values) {
        css_t.push(`${i}: ${j}`);
    }
}

style_list.classList.add("style_com_list_hide");
function add_style_item() {
    let key = createEl("input");
    let value = createEl("input");
    let p = createEl("div");
    p.append(key, ": ", value);
    key.oninput = key.onfocus = () => {
        change_input_w(key);
        set_list(key);
        style_list.innerHTML = "";
        search(Object.keys(cssp), key.value, (t) => {
            key.value = t;
            change_input_w(key);
            value.focus();
            style_to_el();
        });
        search(css_t, key.value, (t) => {
            key.value = t.split(":")[0].trim();
            value.value = t.split(":")[1].trim();
            change_input_w(key);
            change_input_w(value);
            value.focus();
            style_to_el();
        });
        style_to_el();
    };
    value.oninput = value.onfocus = () => {
        change_input_w(value);
        set_list(value);
        style_list.innerHTML = "";
        if (cssp[key.value.trim()]) {
            search(cssp[key.value.trim()].values, value.value, (t) => {
                value.value = t;
                change_input_w(value);
                style_to_el();
            });
        }
        style_to_el();
    };
    key.onblur = value.onblur = () => {
        style_list.classList.add("style_com_list_hide");
        if (key.value == "") {
            p.remove();
        }
    };
    function set_list(el: HTMLElement) {
        let r = el_offset(el, style_list.parentElement);
        style_list.style.top = r.y + r.h + "px";
        style_list.style.left = r.x + "px";
        style_list.classList.remove("style_com_list_hide");
    }
    function search(list: string[], text: string, fn?: (text: string) => void) {
        const fuse = new Fuse(list, {
            includeMatches: true,
            findAllMatches: true,
            useExtendedSearch: true,
            includeScore: true,
        });
        let fr = fuse.search(text);
        let result: { l: readonly Fuse.FuseResultMatch[] }[] = [];
        for (let i of fr) {
            result.push({
                l: i.matches,
            });
        }
        if (fr.length == 0) {
            for (let i of list) {
                result.push({
                    l: [{ indices: [[0, -1]], value: i }],
                });
            }
        }
        for (let i of result) {
            let div = createEl("div");
            let span = mt(i.l);
            div.append(span);
            if (css_properties.color.includes(span.innerText)) {
                let el = createEl("span");
                el.style.backgroundColor = span.innerText;
                span.before(el);
                el.classList.add("style_color");
            }
            style_list.append(div);
            if (fn)
                div.onpointerdown = () => {
                    fn(span.innerText);
                    style_list.classList.add("style_com_list_hide");
                };
        }
    }
    function mt(m: readonly Fuse.FuseResultMatch[]) {
        let p = createEl("span");
        for (let j of m) {
            let indices = [...j.indices].sort((a, b) => a[0] - b[0]);
            for (let i = 0; i < indices.length; i++) {
                const k = indices[i];
                let h = createEl("span");
                h.innerText = j.value.slice(k[0], k[1] + 1);
                if (Number(i) == indices.length - 1) {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h, j.value.slice(k[1] + 1));
                } else {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h);
                }
            }
        }
        return p;
    }
    return { el: p, key, value };
}

function change_input_w(el: HTMLInputElement) {
    el.style.width = `${el.value.length}ch`;
}

function set_style(el: x) {
    let style = el.getAttribute("style");
    el_style.setAttribute("data-id", el.id);
    el_style.innerHTML = "";
    let l = style.split(";");
    for (let i of l) {
        if (!i) continue;
        let item = add_style_item();
        el_style.append(item.el);
        item.key.value = i.split(":")[0].trim();
        item.value.value = i.split(":")[1].trim();
        change_input_w(item.key);
        change_input_w(item.value);
    }

    let add_style_item_el = createEl("div");
    add_style_item_el.innerHTML = icon(add_svg);
    el_style.append(add_style_item_el);
    add_style_item_el.onclick = () => {
        let item = add_style_item();
        add_style_item_el.before(item.el);
        item.key.focus();
    };
}

function style_to_el() {
    let t = "";
    for (let i of el_style.children) {
        if (i.querySelector("input"))
            t += `${i.querySelectorAll("input")[0].value}:${i.querySelectorAll("input")[1].value};`;
    }
    elFromId(el_style.getAttribute("data-id")).setAttribute("style", t);
    data_changed();
}

// url
if (location.search) {
    let p = new URLSearchParams(location.search);
    if (p.get("src")) {
        fetch(p.get("src"))
            .then((v) => v.text())
            .then((v) => {
                let o = xln_in(v) as any;
                set_data(o);
            });
    }
}

// 云
import { createClient } from "webdav";
var client = createClient(store.webdav.网址, {
    username: store.webdav.用户名,
    password: store.webdav.密码,
});

/** 获取云文件列表并渲染 */
async function get_all_xln() {
    let dav_files = (await client.getDirectoryContents("/", { deep: true, glob: "**.xln" })) as any[];
    let rp = await client.getDirectoryContents("/");
    let 删除路径 = "";
    // @ts-ignore
    let rplf = rp[rp.length - 1];
    let b = new RegExp(`${rplf.basename}$`);
    删除路径 = rplf.filename.replace(b, "");
    for (let f of file_list) {
        let dav: HTMLElement;
        for (let el of 文件_el.querySelectorAll(":scope > div")) {
            if (el.getAttribute("data-uuid") == f.UUID) {
                dav = el.firstElementChild as HTMLElement;
                break;
            }
        }
        for (let fi of dav_files) {
            if ("/" + fi.filename.replace(new RegExp(`^${删除路径}`), "") == f.url) {
                dav.onclick = () => {
                    get_file(fi.filename);
                };
                dav.innerHTML = icon(cloud_down);
                dav_files = dav_files.filter((v) => v != fi);
                break;
            }
        }
    }
    for (let fi of dav_files) {
        let d = createEl("div");
        let t = rename_el();
        t.value = fi.basename.replace(/\.xln$/, "") || "";
        t.title = "/" + fi.filename.replace(new RegExp(`^${删除路径}`), "");
        let dav = createEl("div");
        dav.innerHTML = icon(cloud);
        d.append(dav, t);
        文件_el.append(d);
        t.onclick = dav.onclick = () => {
            get_file(fi.filename);
        };
    }
    async function get_file(filename: string) {
        let o = await get_xln_value("/" + filename.replace(new RegExp(`^${删除路径}`), ""));
        let customerObjectStore = db.transaction(db_store_name, "readwrite").objectStore(db_store_name);
        let r = customerObjectStore.get(o.meta.UUID);
        r.onsuccess = () => {
            let r = customerObjectStore.put(o);
            r.onsuccess = () => {
                open_in_win(o.meta.UUID);
            };
        };
        r.onerror = () => {
            let r = customerObjectStore.put(o);
            r.onsuccess = () => {
                open_in_win(o.meta.UUID);
            };
        };
    }
}

var now_dav_data = "";

/** 获取云文件数据 */
async function get_xln_value(path: string) {
    show_upload_pro();
    let str = (await client.getFileContents(path, {
        format: "text",
        onDownloadProgress: (e) => {
            show_upload_pro(e.loaded, e.total);
        },
    })) as string;
    let o: any;
    try {
        o = JSON5.parse(<string>str);
    } catch (e) {
        if (store.webdav.加密密钥) {
            let b = (await client.getFileContents(path, {
                onDownloadProgress: (e) => {
                    show_upload_pro(e.loaded, e.total);
                },
            })) as ArrayBuffer;
            let blob = new Blob([b]);
            const zipFileReader = new zip.BlobReader(blob);
            const zipWriter = new zip.TextWriter();
            const zipReader = new zip.ZipReader(zipFileReader);
            const firstEntry = (await zipReader.getEntries())[0];
            str = await firstEntry.getData(zipWriter, { password: store.webdav.加密密钥 });
            await zipReader.close();
            o = JSON5.parse(<string>str);
        }
    }
    now_dav_data = str;
    return o as 集type;
}

/** 上传到云 */
async function put_xln_value() {
    let path = 集.meta.url;
    if (!path) {
        let n = await xprompt("上传的文件名", get_file_name());
        if (!n) return;
        set_title(n);
        path = `/${n}.xln`;
        集.meta.url = path;
        data_changed();
    }
    let t = JSON.stringify(get_data());
    if (store.webdav.加密密钥) {
        let b = await 压缩(t);
        let reader = new FileReader();
        reader.onload = async function () {
            console.log(this.result);
            show_upload_pro();
            let v = await client.putFileContents(path, this.result, {
                onUploadProgress: (e) => {
                    show_upload_pro(e.loaded, e.total);
                },
            });
            show_upload_v(v);
        };
        reader.readAsArrayBuffer(b);
    } else {
        let v = await client.putFileContents(path, t);
        show_upload_v(v);
    }
}
function show_upload_v(v: boolean) {
    if (v) {
        put_toast("✅文件上传成功");
    } else {
        put_toast("❌文件上传失败", 5);
    }
}
function show_upload_pro(l?: number, t?: number) {
    let p = createEl("progress");
    if (l) p.value = l / t;
    toast.classList.add("toast_show");
    toast.innerHTML = "";
    toast.append(p);
    if (l == t) {
        toast.classList.remove("toast_show");
    }
}

var auto_put_xln_t = NaN;

/** 自动上传到云 */
function auto_put_xln() {
    if (Number(store.webdav.自动上传)) {
        auto_put_xln_t = window.setTimeout(() => {
            if (now_dav_data != JSON.stringify(get_data())) {
                put_xln_value();
                now_dav_data = JSON.stringify(get_data());
            }
        }, Number(store.webdav.自动上传) * 60 * 1000);
    }
}

import * as zip from "@zip.js/zip.js";

async function 压缩(t: string) {
    const zipFileWriter = new zip.BlobWriter("application/zip");
    const textReader = new zip.TextReader(t);
    const zipWriter = new zip.ZipWriter(zipFileWriter, { password: store.webdav.加密密钥 });
    await zipWriter.add(get_file_name() + ".xln", textReader);
    await zipWriter.close();
    const zipFileBlob = await zipFileWriter.getData();
    return zipFileBlob;
}

function open_in_win(uuid: string) {
    let url = new URL(location.origin);
    url.hash = uuid;
    window.open(url);
}

// 设置

function save_setting() {
    let o = {};
    for (let f of 设置_el.querySelectorAll("form")) {
        o[f.name] = {};
        let form = new FormData(f);
        for (let v of form) {
            o[f.name][v[0]] = v[1];
        }
    }
    store = o as setting;
    localStorage.setItem("config", JSON.stringify(o));

    arter_save_setting();
}

function arter_save_setting() {
    client = createClient(store.webdav.网址, {
        username: store.webdav.用户名,
        password: store.webdav.密码,
    });

    clearTimeout(auto_put_xln_t);
    auto_put_xln();
}

function show_setting() {
    let setting = JSON5.parse(localStorage.getItem("config"));
    for (let f in setting) {
        let fel = document.querySelector(`form[name="${f}"]`);
        for (let k in setting[f]) {
            fel[k].value = setting[f][k];
        }
    }
}
show_setting();

version_el.innerHTML = `${packagejson.version}<img src="${update_svg}">`;
version_el.onclick = async () => {
    const cacheKeepList = ["v2"];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(
        cachesToDelete.map(async (key) => {
            await caches.delete(key);
        })
    );
};

// 搜索
import Fuse from "fuse.js";
type search_result = {
    id: string;
    l?: readonly Fuse.FuseResultMatch[];
    text?: string;
    n?: number;
    type?: "str" | "regex";
    score: number;
}[];
function search(input: string[], type: "str" | "regex") {
    let x = search_cmd(input);
    let s = x.str;
    let result = [] as search_result;
    let sr: search_result = [];
    let chainr: search_result = [];
    let other: search_result = [];
    let has_id = {};
    画布s.querySelectorAll("x-md, x-pdf").forEach((el: HTMLElement) => {
        let text = "";
        if (el.tagName == "X-MD") {
            text = JSON5.parse((el as markdown).value).text;
        } else if (el.tagName == "X-PDF") {
            text = (el as pdf_viewer).text.innerText;
        } else {
            text = el.innerText;
        }
        switch (type) {
            case "str":
                const fuse = new Fuse(text.split("\n"), {
                    includeMatches: true,
                    findAllMatches: true,
                    useExtendedSearch: true,
                    includeScore: true,
                });
                let fr = fuse.search(s);
                for (let i of fr) {
                    sr.push({
                        id: el.parentElement.id,
                        l: i.matches,
                        n: i.refIndex,
                        type: "str",
                        score: search_score(el.parentElement.id, 1 - i.score, x.t, x.v, x.s, x.opsit),
                    });
                }
                break;
            case "regex":
                let r: RegExp;
                try {
                    r = eval("/" + s + "/g");
                } catch (error) {
                    console.error(error);
                }
                let rl = Array.from(new Set(text.match(r)));
                let l = [];
                for (let i of rl) {
                    l.push({ value: i, indices: s_i(i, text).map((v) => [v, v + i.length]) });
                }
                if (l.length != 0) {
                    sr.push({
                        id: el.parentElement.id,
                        l,
                        score: search_score(el.parentElement.id, 1, x.t, x.v, x.s, x.opsit),
                    });
                }
                break;
        }
        // 链式搜索
        let c = link(el.parentElement.id).get(1);
        for (let i in c) {
            chainr.push({
                id: i,
                score: search_score(el.parentElement.id, 0, x.t, x.v, x.s, x.opsit),
            });
        }

        other.push({
            id: el.parentElement.id,
            score: search_score(el.parentElement.id, 0, x.t, x.v, x.s, x.opsit),
            text: text,
        });
    });

    function s_i(t: string, st: string) {
        let l = [];
        if (t == "") return l;
        let n = 0;
        while (st.indexOf(t, n) != -1) {
            n = st.indexOf(t, n);
            l.push(n);
            n++;
        }
        return l;
    }
    for (let i of sr) {
        has_id[i.id] = true;
        result.push(i);
    }
    for (let i of chainr) {
        if (!has_id[i.id]) {
            result.push(i);
            has_id[i.id] = true;
        }
    }
    for (let i of other) {
        if (!has_id[i.id]) {
            result.push(i);
            has_id[i.id] = true;
        }
    }
    return result;
}

function search_cmd(str: string[]) {
    let op = false,
        s = 2,
        v = 1,
        t = 1;
    if (str[1]) {
        let ll = str.slice(1);
        if (ll[0] == "-") {
            op = true;
            ll.splice(0, 1);
        }
        if (ll[0]) {
            s = Number(ll[0]);
        }
        if (ll[1]) {
            v = Number(ll[1]);
        }
        if (ll[2]) {
            t = Number(ll[2]);
        }
    }
    return { str: str[0] || "", s, v, t, opsit: op };
}

/** 计算 时间 值 搜索匹配度 距离 */
function search_score(
    id: string,
    search_s: number,
    time_n?: number,
    value_n?: number,
    search_n?: number,
    op?: boolean
) {
    const now_t = new Date().getTime();
    const vt = 集.链接[0][id];
    let t = (now_t - vt.time) / 1000 / 60 / 60 / 24 / 7;
    t = 1 / (t + 1);
    let v = vt.value;
    let s = search_s;
    return (op ? -1 : 1) * Math.sqrt(((time_n || 1) * t) ** 2 + ((value_n || 1) * v) ** 2 + ((search_n || 2) * s) ** 2);
}

let select_index = 0;
search_el.oninput = search_el.click = () => {
    let arg = cmd(search_el.value);
    if (arg.name == "s") {
        let l = search(arg.args, "str");
        show_search_l(l);
        if (l.length == 0) {
            view_el.classList.add("viewer_hide");
            return;
        }
        select_index = clip(select_index, 0, l.length - 1); // 搜索记录上次定位
        let el = select_search(select_index);
        move_to_x_link(get_link_el_by_id(el.getAttribute("data-id")));
        let r = el.getBoundingClientRect();
        set_viewer_posi(r.x + r.width, r.y);
    }
    if (arg.name == "type") {
        show_md_type_l(arg.args);
    }
};
search_el.onblur = () => {
    search_pel.classList.remove("搜索展示");
    search_pel.setAttribute("data-fid", "");

    view_el.classList.add("viewer_hide");
};
search_el.onkeyup = (e) => {
    switch (e.key) {
        case "Escape":
            search_pel.classList.remove("搜索展示");
            search_pel.setAttribute("data-fid", "");

            view_el.classList.add("viewer_hide");
            break;
        case "ArrowUp":
            if (select_index == -1) {
                select_index = search_r.childElementCount - 1;
            } else {
                select_index--;
            }
            break;
        case "ArrowDown":
            if (select_index == search_r.childElementCount - 1) {
                select_index = -1;
            } else {
                select_index++;
            }
            break;
        case "Enter":
            if (select_index != -1) e.preventDefault();
            let id = (<HTMLElement>search_r.querySelector(".search_item_select")).getAttribute("data-id");
            click_search_item(id);
            break;
    }
    if (e.key == "ArrowUp" || e.key == "ArrowDown") {
        e.preventDefault();
        let el = select_search(select_index);
        let arg = cmd(search_el.value);
        if (el) {
            if (arg.name == "s") {
                move_to_x_link(get_link_el_by_id(el.getAttribute("data-id")));
                let r = el.getBoundingClientRect();
                set_viewer_posi(r.x + r.width, r.y);
            }
        }
    }
};

function select_search(i: number) {
    search_r.querySelectorAll(".search_item_select").forEach((el) => {
        el.classList.remove("search_item_select");
    });
    let el = <HTMLElement>search_r.children[i];
    if (!el) return;
    el.classList.add("search_item_select");
    let ri = search_r.children[i].getBoundingClientRect();
    let r = search_r.getBoundingClientRect();
    if (ri.top < r.top) {
        search_r.scrollTop = el.offsetTop - (<HTMLElement>search_r.children[0]).offsetTop;
    }
    if (ri.bottom > r.bottom) {
        search_r.scrollTop = el.offsetTop + el.offsetHeight - r.height - (<HTMLElement>search_r.children[0]).offsetTop;
    }
    return search_r.children[i];
}

function click_search_item(iid: string) {
    let arg = cmd(search_el.value);
    if (arg.name == "s") {
        let el = elFromId(iid);
        if (search_pel.getAttribute("data-fid") == "0") jump_to_x_link(el as x & xlink);
        else view_el.classList.add("viewer_hide");
        show_search_l([]);
        let id = search_pel.getAttribute("data-fid") || link_value_bar.elid;
        console.log(id);
        link(id).add(iid);
        search_el.blur();
        link_value_bar.elid = link_value_bar.elid;
    }
    if (arg.name == "type") {
        search_el.value = `type ${iid}`;
        run_cmd();
    }
}

search_r.onpointerleave = () => {
    view_el.classList.add("viewer_hide");
};

search_el.onchange = () => {
    run_cmd();
};

/** 展示搜索结果 */
function show_search_l(l: search_result, exid?: string) {
    l = l.sort((a, b) => {
        return a.score - b.score;
    });
    if (exid) l = l.filter((i) => i.id != exid);
    search_r.innerHTML = "";
    let els: HTMLElement[] = [];
    let ids = {};
    for (let i of l) {
        if (!ids[i.id]) {
            let div = create_r_item();
            div.setAttribute("data-id", i.id);
            els.push(div);
            ids[i.id] = els.length - 1;
        }
        let div = els[ids[i.id]];
        let line = createEl("div");
        let p = createEl("span");
        if (i.l) {
            for (let j of i.l) {
                let indices = [...j.indices].sort((a, b) => a[0] - b[0]);
                for (let i = 0; i < indices.length; i++) {
                    const k = indices[i];
                    let h = createEl("span");
                    h.innerText = j.value.slice(k[0], k[1] + 1);
                    if (Number(i) == indices.length - 1) {
                        p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h, j.value.slice(k[1] + 1));
                    } else {
                        p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h);
                    }
                }
            }
        } else {
            p.append(`#${i.id}`);
        }
        line.append(p);
        div.append(line);
        div.setAttribute("data-id", i.id);
        add_div_event(div, i.id);
    }

    function add_div_event(div: HTMLElement, id: string) {
        div.addEventListener("mouseenter", () => {
            let el = elFromId(id);
            move_to_x_link(el as x & xlink);
        });
        div.onmousemove = (e) => {
            window.requestAnimationFrame(() => {
                set_viewer_posi(e.clientX, e.clientY);
            });
        };
    }

    link("0").衰减();
    for (let div of els) {
        if (search_r.firstChild) {
            search_r.firstChild.before(div);
        } else {
            search_r.append(div);
        }
        let value = createEl("div");
        value.append(link_value_text(link(div.getAttribute("data-id")).get_v()));
        div.append(value);
    }
    r_i_r();
}

/** 创建项 */
function create_r_item() {
    let div = createEl("div");
    div.onpointerdown = (e) => {
        const id = div.getAttribute("data-id");
        click_search_item(id);
    };
    div.onmouseenter = (e) => {
        select_index = Number(div.getAttribute("data-i"));
        select_search(select_index);
    };
    return div;
}

/** 为项添加序列信息 */
function r_i_r() {
    [...search_r.children].forEach((div, i) => {
        div.setAttribute("data-i", String(i));
    });
}

/** 全局搜索栏 */
function show_g_search() {
    search_pel.classList.add("搜索展示");
    search_pel.style.left = "";
    search_pel.style.top = "";
    search_pel.style.width = "";
    search_el.focus();
    search_pel.setAttribute("data-fid", "0");
    let arg = cmd(search_el.value);
    if (arg.name != "s") {
        arg.args = [""];
        search_el.value = "s ''";
        search_el.setSelectionRange(3, 3);
    }
    let l = search(arg.args, "str");
    show_search_l(l);
}

let now_focus_id = "0";

function cmd(str: string) {
    let l = str.split(/\s+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/);
    return { name: l[0], args: l.slice(1).map((t) => t.replace(/^['"]/, "").replace(/['"]$/g, "")) };
}

function show_md_type_l(arg: string[]) {
    const fuse = new Fuse(md_type_l, {
        includeMatches: true,
        findAllMatches: true,
        useExtendedSearch: true,
    });
    let fr = fuse.search(arg[0]);
    search_r.innerHTML = "";
    for (let i of fr) {
        for (let j of i.matches) {
            let indices = [...j.indices].sort((a, b) => a[0] - b[0]);
            let line = create_r_item();
            let p = createEl("span");
            for (let i = 0; i < indices.length; i++) {
                const k = indices[i];
                let h = createEl("span");
                h.innerText = j.value.slice(k[0], k[1] + 1);
                if (Number(i) == indices.length - 1) {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h, j.value.slice(k[1] + 1));
                } else {
                    p.append(j.value.slice(indices[i - 1]?.[1] + 1 || 0, k[0]), h);
                }
            }
            line.append(p);
            line.setAttribute("data-id", j.value);
            search_r.append(line);
            line.onpointerdown = () => {
                search_el.value = "type " + j.value;
                run_cmd();
            };
        }
    }
    select_index = -1;
    r_i_r();
}

const md_type_l: md_type[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "code",
    "p",
    "text",
    "todo",
    "math",
    "iframe",
];
function run_cmd() {
    let arg = cmd(search_el.value);
    if (arg.name == "type") {
        const el = get_x_by_id(search_el.getAttribute("data-fid"));
        const md = el.querySelector("x-md") as markdown;
        let mtype = arg.args[0];
        if (md_type_l.includes(mtype as md_type)) {
            md.type = mtype as md_type;
            data_changed();
            search_pel.classList.remove("搜索展示");
            md.edit = true;
        }
        search_el.value = "";
    }
}

/** 判断是否是最小元素 */
function is_smallest_el(el: x | xlink) {
    if (el.tagName == "X-LINK") {
        return true;
    } else if (!el.querySelector("x-x")) {
        return true;
    } else {
        return false;
    }
}

/** 展示链接栏 */
function show_link_value_bar(el: x | xlink) {
    if (模式 != "浏览") return;
    if (search_pel.classList.contains("搜索展示")) return;
    link_value_bar.style.left = el_offset(el, 画布).x + "px";
    link_value_bar.style.top = el_offset(el, 画布).y - link_value_bar.offsetHeight + 4 + "px";
    link_value_bar.elid = el.id;
    if (!search_pel.getAttribute("data-fid") && el.id != now_focus_id) {
        search_el.blur();
        search_pel.classList.remove("搜索展示");
        now_focus_id = el.id;
        link_value_bar.querySelector(":scope > div:nth-child(2)").innerHTML = "";
    }

    // 不是最小元素不显示控件，只显示计算后的值
    link_value_bar.show_ctrl = is_smallest_el(el);
}

var view_width = 400,
    view_height = 400;

var portrait = window.matchMedia("screen and (max-width: 420px)");
portrait.matches;
set_viewer_size(portrait.matches);
portrait.addEventListener("change", (event) => {
    set_viewer_size(event.matches);
});

function set_viewer_size(portrait: boolean) {
    if (portrait) {
        view_width = 300;
        view_height = 300;
    } else {
        view_width = 400;
        view_height = 400;
    }
}

/** 定位预览栏 */
function set_viewer_posi(x: number, y: number) {
    view_el.style.left = clip(x, 0, window.visualViewport.width - view_width) + "px";
    view_el.style.top = clip(y, 0, window.visualViewport.height - view_height) + "px";
}

/** 跳转到元素位置 */
function move_to_x_link(el: x | xlink) {
    let pel: HTMLElement;
    画布s.querySelectorAll(":scope > div").forEach((xel) => {
        if (xel.contains(el)) {
            pel = xel as HTMLElement;
            return;
        }
    });
    let pel_display = pel.style.display;
    pel.style.display = "block";
    let center_rect = el_offset2(el, pel);

    let center_point = { x: center_rect.x + center_rect.w / 2, y: center_rect.y + center_rect.h / 2 };
    let dx = view_width / 2 / zoom,
        dy = view_height / 2 / zoom;
    let out_rect = {
        left: center_point.x - dx,
        right: center_point.x + dx,
        top: center_point.y - dy,
        bottom: center_point.y + dy,
    };

    let els: { el: x; x: number; y: number }[] = [];
    pel.querySelectorAll(":scope > x-x").forEach((el: x) => {
        let r = el_offset2(el);
        if (r.x < out_rect.right && out_rect.left < r.x + r.w && r.y < out_rect.bottom && out_rect.top < r.y + r.h) {
            els.push({ el: el, x: r.x, y: r.y });
        }
    });
    pel.style.display = pel_display;

    view_el.style.width = 2 * dx + "px";
    view_el.style.height = 2 * dy + "px";
    view_el.style.transform = `scale(${zoom})`;
    view_el.innerHTML = "";
    view_el.classList.remove("viewer_hide");
    for (let x of els) {
        let xel = createEl("x-x");
        xel.setAttribute("style", x.el.getAttribute("style"));
        xel.style.left = x.x - out_rect.left + "px";
        xel.style.top = x.y - out_rect.top + "px";
        xel.className = x.el.className;
        view_el.append(xel);
        xel.id = x.el.id;
        xel.value = x.el.value;
    }
    view_el.querySelectorAll("x-x").forEach((xcel: x) => {
        if (xcel.id == el.id) {
            xcel.classList.add("viewer_target");
            return;
        }
    });
}

var now_data_id = "0";

/** 跳转到元素位置并记录 */
function jump_to_x_link(el: x | xlink, nrc?: boolean) {
    view_el.classList.add("viewer_hide");

    for (let 画布el of 画布s.querySelectorAll(":scope > div")) {
        if (画布el.contains(el)) {
            O = 画布el as HTMLElement;
            for (let p of 集.数据) {
                if (p.id == O.id) {
                    当前画布 = p;
                    集.meta.focus_page = p.id;
                    O.style.display = "block";
                    let x = el_offset(el, O).x - 画布.offsetWidth / 2,
                        y = el_offset(el, O).y - 画布.offsetHeight / 2;
                    let ex = -x - (el.offsetWidth * zoom) / 2,
                        ey = -y - (el.offsetHeight * zoom) / 2;
                    let t = Math.sqrt((ex - O.offsetLeft) ** 2 + (ey - O.offsetTop) ** 2) / 1.6;
                    O.style.transitionDuration = `${t / 1000}s`;
                    O.ontransitioncancel = O.ontransitionend = () => {
                        O.style.transitionDuration = "";
                        render_select_rects();
                    };
                    zoom_o(Number(O.style.transform.match(/scale\((.*)\)/)[1] || p.p.zoom));
                    set_O_p(ex, ey);
                    if (el.tagName == "X-X") {
                        z.focus(el as x);
                    }
                    z.reflash(true);
                }
            }
        } else {
            (画布el as HTMLElement).style.display = "none";
        }
    }
    if (!nrc) add_bci(el);
}

/** 添加到面包屑栏 */
function add_bci(el: x | xlink) {
    if (breadcrumbs_el.querySelector(`div[data-id="${el.id}"]`)) return;
    if (breadcrumbs_el.offsetHeight == 0) breadcrumbs_el.style.height = "16px";
    let li = createEl("div");
    let main = createEl("div");
    li.append(main);
    li.classList.add("bci");
    main.innerText = `#${el.id}`;
    li.setAttribute("data-id", el.id);
    main.onpointerenter = (e) => {
        move_to_x_link(elFromId(el.id) as x);
    };
    main.onpointerdown = () => {
        jump_to_x_link(elFromId(el.id) as x);
    };
    main.onpointermove = (e) => {
        window.requestAnimationFrame(() => {
            set_viewer_posi(e.clientX, e.clientY);
        });
    };
    breadcrumbs_el.onpointerleave = () => {
        view_el.classList.add("viewer_hide");
    };
    breadcrumbs_el.append(li);
}

breadcrumbs_el.onwheel = (e) => {
    e.preventDefault();
    let i = e.deltaX + e.deltaY + e.deltaZ >= 0 ? 1 : -1;
    breadcrumbs_el.scrollLeft += i * Math.sqrt(e.deltaX ** 2 + e.deltaY ** 2 + e.deltaZ ** 2);
};

const default_down_s = 4;

/** 链接处理 */
function link(key0: string) {
    let t = new Date().getTime();
    // key1存在，作用于边，否则作用于点
    return {
        add: (key1?: string) => {
            if (!key0) return;
            if (key1) {
                if (key0 == key1) return;
                link(key0).add();
                link(key1).add();
                if (集.链接[key0][key1]?.value === undefined || 集.链接[key1][key0]?.value === undefined) {
                    // 只存储在边的一个方向上，以时间换空间
                    集.链接[key0][key1] = { value: 1, time: t, s: default_down_s };
                }
            } else {
                if (!集.链接[key0]) {
                    集.链接[key0] = {};
                }
                if (!集.链接[0][key0]) {
                    集.链接[0][key0] = { value: 1, time: t, s: default_down_s };
                }
            }
        },
        rm: (key1?: string) => {
            if (key1) {
                delete 集.链接[key0][key1];
                delete 集.链接[key1][key0];
            } else {
                delete 集.链接[0][key0];
                for (let i in link(key0).get()) {
                    link(key0).rm(i);
                }
                delete 集.链接[key0];
            }
        },
        /**
         * 获取链接
         * @param chain 关联链接
         * @returns 指向链接
         */
        get: (chain?: number) => {
            let l = { ...集.链接[key0] };
            for (let i in 集.链接[0]) {
                for (let x in 集.链接[i]) {
                    if (x == key0) {
                        l[i] = 集.链接[i][x];
                    }
                }
            }
            if (!chain) {
                return l;
            } else {
                let xl: typeof l = {};
                let walk = (list: typeof l, chain_n: number) => {
                    let next = null;
                    let maxn = 0;
                    for (let i in list) {
                        if (i == "0") continue;
                        if (xl[i]) continue;
                        if (list[i].value > maxn) {
                            next = i;
                            maxn = list[i].value;
                        }
                    }
                    if (!next) return;
                    let ln = chain_n - list[next].value;
                    if (ln > 0) {
                        walk(link(next).get(), ln);
                    } else {
                        xl[next] = list[next];
                    }
                };
                walk(l, chain);
                return xl;
            }
        },
        value: (key1: string, dv: number) => {
            if (key1) {
                // 尝试正向、反向寻找边的值，否则新建
                if (集.链接[key0]?.[key1]?.value !== undefined) {
                    集.链接[key0][key1].value = clip(集.链接[key0][key1].value + dv, 0, 1);
                    集.链接[key0][key1].time = t;
                } else if (集.链接[key1]?.[key0]?.value !== undefined) {
                    集.链接[key1][key0].value = clip(集.链接[key1][key0].value + dv, 0, 1);
                    集.链接[key1][key0].time = t;
                } else {
                    link(key0).add(key1);
                }
            }
        },
        /** 获取值 */
        get_v: (is_small?: boolean) => {
            if (is_small || !get_link_el_by_id(key0) || is_smallest_el(get_link_el_by_id(key0))) {
                if (集.链接[0][key0]) {
                    let l = link(key0).get();
                    let n = 0;
                    l["0"] = 集.链接[0][key0];
                    for (let i in l) {
                        n += l[i].value;
                    }
                    return n;
                }
            } else {
                let nl = [];
                get_link_el_by_id(key0)
                    .querySelectorAll("x-x, x-link")
                    .forEach((el) => {
                        if (集.链接[0][el.id]) {
                            let n = link(el.id).get_v(true);
                            nl.push(n);
                        }
                    });
                let n = 0;
                for (let i of nl) n += i;
                return n / nl.length;
            }
        },
        衰减: () => {
            for (let i in 集.链接) {
                for (let j in 集.链接[i]) {
                    let target = 集.链接[i][j];
                    集.链接[i][j].value = down(target.value, target.time, t, target.s || default_down_s);
                    集.链接[i][j].time = t;
                }
            }
            function down(value: number, t0: number, t1: number, xv_s: number) {
                const xv_c = 0.9;
                // 计算衰减值
                function x2v(x: number) {
                    return Math.exp((x * Math.log(xv_c)) / xv_s);
                }
                // 通过值反推原先输入的x
                function v2x(v: number) {
                    return Math.log(v) * (xv_s / Math.log(xv_c));
                }
                let old_x = v2x(value);
                // 半天为一个单位
                let t = (t1 - t0) / 1000 / 60 / 60 / 12;
                let new_x = t + old_x;
                let new_v = Math.max(x2v(new_x), link_value_min_d() / 2); // 下限为精度四舍五入后保留1，如2->0.005
                return new_v;
            }
        },
    };
}

/** 链接展示精度位数 */
let link_value_precision = 2;
/** 链接展示精度 */
function link_value_min_d() {
    return 1 / 10 ** link_value_precision;
}

/**
 * 返回裁切精度的数值元素，悬浮提示具体
 * @param num 链接值
 * @returns span元素
 */
function link_value_text(num: number) {
    let nt = String(num);
    let span = createEl("span");
    span.title = nt;
    let l = num.toFixed(link_value_precision).split(".");
    let t = "";
    if (l[0] == "0") {
        t = "." + l[1];
    } else {
        t = l.join(".");
    }
    if (l[1] == "00") t = l[0];
    span.innerText = t;
    return span;
}

/** 获取父根元素 */
function find_root_layout(el: HTMLElement) {
    for (let p of O.querySelectorAll(":scope > x-x")) {
        if (p.contains(el)) return p as x;
    }
}

/** 元素集转为父根元素集 */
function els_to_rels(els: x[]) {
    let xels = [] as x[];
    for (let el of els) {
        let rel = find_root_layout(el);
        if (!xels.includes(rel)) xels.push(rel);
    }
    return xels;
}

/** 获取主元素值 */
function get_x_out_value(el: x) {
    return {
        id: el.id,
        style: el.getAttribute("style") || "",
        class: el.className,
        子元素: el.value,
        type: el.tagName,
    };
}

function copy_x(x: x, pel?: x) {
    let new_x = createEl("x-x");
    z.push(new_x, pel);
    new_x.id = x.id;
    new_x.setAttribute("style", x.getAttribute("style"));
    new_x.className = x.className;
    new_x.value = x.value;
    return new_x;
}

/** 复制值 */
function copy_value(id: string, new_id: string) {
    let v = 集.values[id];
    if (v) {
        集.values[new_id] = JSON5.parse(JSON.stringify(v));
    }
}

/** 转化为堆叠布局 */
function to_flex(els: x[], d: "x" | "y") {
    if (els.length == 1) {
        if (els[0].classList.contains("flex-row") && d == "y") {
            els[0].classList.replace("flex-row", "flex-column");
        }
        if (els[0].classList.contains("flex-column") && d == "x") {
            els[0].classList.replace("flex-column", "flex-row");
        }
        get_data();
        z.reflash();
        return;
    }
    let xels = [] as x[];
    for (let el of els) {
        let rel = find_root_layout(el);
        if (!xels.includes(rel)) xels.push(rel);
    }
    let xel = createEl("x-x");
    xel.id = uuid_id();
    if (d == "x") {
        xel.classList.add("flex-row");
        xels.sort((a, b) => el_offset2(a).x - el_offset2(b).x);
    } else {
        xel.classList.add("flex-column");
        xels.sort((a, b) => el_offset2(a).y - el_offset2(b).y);
    }
    xel.style.left = el_offset2(xels[0]).x + "px";
    xel.style.top = el_offset2(xels[0]).y + "px";
    z.push(xel);
    let data = [] as data;
    for (let el of xels) {
        el.style.left = "";
        el.style.top = "";
        el.style.position = "relative";
        data.push(get_x_out_value(el));
        el.remove();
    }
    xel.value = data;
    get_data();
    z.reflash();
}

/** 判断是否为flex */
function is_flex(el: HTMLElement) {
    if (el.classList.contains("flex-column") || el.classList.contains("flex-row")) {
        return "flex";
    }
    if (el.classList.contains("flex-column")) {
        return "col";
    }
    if (el.classList.contains("flex-row")) {
        return "row";
    }
}

/** 添加一个固定布局元素 */
function add_none_layout() {
    let x = createEl("x-x");
    x.style.left = "0";
    x.style.top = "0";
    z.push(x);
    return x;
}

/** 固定布局修剪 */
function reflash_none_layout(el: x) {
    if (el.value.length == 0) {
        z.remove(el);
        data_changed();
        return;
    }
    let px = 16,
        py = 16;
    let dy = Infinity,
        dx = Infinity;
    for (let i of el.children) {
        if (i.tagName != "X-X") continue;
        let of = el_offset2(i, el);
        if (of.x < dx) dx = of.x;
        if (of.y < dy) dy = of.y;
    }
    for (let i of el.children) {
        if (i.tagName != "X-X") continue;
        (i as x).style.left = el_offset2(i, el).x - dx + px + "px";
        (i as x).style.top = el_offset2(i, el).y - dy + py + "px";
    }
    el.style.left = el_offset2(el).x + dx - px + "px";
    el.style.top = el_offset2(el).y + dy - py + "px";
}

/** 转化为固定布局 */
function to_none_layout(els: x[]) {
    let x = add_none_layout();
    let data = [] as data;
    let xels = els_to_rels(els);
    for (let el of xels) {
        data.push(get_x_out_value(el));
        z.remove(el);
    }
    x.value = data;
    reflash_none_layout(x);
}

/** 把flex所有文字转为一行 */
function to_one_line(xels: x[]) {
    for (let el of xels) {
        if (is_flex(el) == "flex") {
            let t = "";
            let type: md_type;
            el.querySelectorAll("x-md").forEach((md: markdown, i) => {
                t += md._value.text;
                if (i == 0) type = md._value.type;
            });
            el.querySelectorAll("x-x").forEach((el) => z.remove(el as x));
            let md = createEl("x-md");
            el.append(md);
            md.value = JSON.stringify({ text: t, type });
            data_changed();
        }
    }
}

/** 按换行拆分 */
function to_more_line(xels: x[], c?: string | RegExp) {
    for (let el of xels) {
        if (is_smallest_el(el) && el.querySelector("x-md")) {
            let v = (el.querySelector("x-md") as markdown)._value;
            let l = v.text.trim().split(c || "\n");
            el.querySelector("x-md").remove();
            el.classList.add("flex-column");
            for (let t of l) {
                if (!t) continue;
                let x = createEl("x-x");
                x.setAttribute("style", "");
                let md = createEl("x-md");
                x.append(md);
                z.push(x, el);
                md.value = JSON.stringify({ text: t, type: v.type });
            }
            data_changed();
        }
    }
}

/** 刷新定位元素 */
function fixed_el() {
    for (let i in 集.values) {
        if (集.values[i]?.fixed) {
            const el = elFromId(i);
            if (!el) return;
            let fixed: { left?: string; top?: string; right?: string; bottom?: string } = 集.values[i].fixed;
            try {
                let top = el_offset2(O).y,
                    left = el_offset2(O).x,
                    width = el_offset2(画布).w,
                    height = el_offset2(画布).h;
                if (fixed.left) {
                    el.style.left = `calc(${-left}px + ${fixed.left})`;
                }
                if (fixed.top) {
                    el.style.top = `calc(${-top}px + ${fixed.top})`;
                }
                if (fixed.right) {
                    el.style.left = `calc(${-left + width - el_offset2(el).w}px - ${fixed.right})`;
                }
                if (fixed.bottom) {
                    el.style.top = `calc(${-top + height - el_offset2(el).h}px - ${fixed.bottom})`;
                }
            } catch (error) {}
        }
    }
    requestAnimationFrame(fixed_el);
}

/** 获取从近到远元素列表 */
function match_nearest_x(x: x) {
    let l: { el: x; x: number; y: number; r: number }[] = [];
    let r = el_offset2(x, O);
    let center = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
    O.querySelectorAll("x-x").forEach((el: x) => {
        if (is_smallest_el(el)) {
            let r = el_offset2(el, O);
            let center2 = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
            l.push({
                el: el,
                x: center2.x - center.x,
                y: center2.y - center.y,
                r: Math.sqrt((center2.x - center.x) ** 2 + (center2.y - center.y) ** 2),
            });
        }
    });
    l.sort((a, b) => a.r - b.r);
    return l;
}

function get_nearest_x(x: x, a: "left" | "right" | "up" | "down") {
    console.log(match_nearest_x(x));
    for (let i of match_nearest_x(x)) {
        if (i.el == x) continue;
        switch (a) {
            case "down":
                if (i.y > 0) return i.el;
                break;
            case "up":
                if (i.y <= 0) return i.el;
                break;
            case "left":
                if (i.x <= 0) return i.el;
                break;
            case "right":
                if (i.x > 0) return i.el;
                break;
        }
    }
    return x;
}

function init_value(id: string, type: string) {
    if (!集.values[id]) 集.values[id] = {};
    if (!集.values[id][type]) 集.values[id][type] = {};
}

window["xln"] = {};

// 手写识别
elFromId("ink_icon").onpointerdown = (e) => {
    e.preventDefault();
    if (ink_el.classList.contains("ink_hide")) {
        if (!selections[0].id || 模式 != "浏览") return;
        ink_el.width = ink_el.offsetWidth * 2;
        ink_el.height = ink_el.offsetHeight * 2;
    }
    ink_el.classList.toggle("ink_hide");
};
var ink_color = "#000";
var mqList = window.matchMedia("(prefers-color-scheme: dark)");
var is_dark = Boolean(mqList.matches);
mqList.addEventListener("change", (event) => {
    is_dark = event.matches;
    if (event.matches) {
        ink_color = "#FFF";
    } else {
        ink_color = "#000";
    }
});
let ink_move = false;
var ink_t = {}; // 确保清除所有计时器
ink_el.onpointerdown = (e) => {
    e.preventDefault();

    ink_points.push([[e.offsetX], [e.offsetY]]);
    ink_move = true;

    ink_cxt.beginPath();
    ink_cxt.lineWidth = 3;
    ink_cxt.shadowBlur = 2;
    ink_cxt.strokeStyle = ink_cxt.shadowColor = ink_color;
    ink_cxt.moveTo(e.offsetX * 2, e.offsetY * 2);

    for (let t in ink_t) {
        clearTimeout(Number(t));
        delete ink_t[t];
    }
};
ink_el.onpointermove = (e) => {
    if (!ink_move) return;
    ink_points[ink_points.length - 1][0].push(e.offsetX);
    ink_points[ink_points.length - 1][1].push(e.offsetY);

    ink_cxt.lineTo(e.offsetX * 2, e.offsetY * 2);
    ink_cxt.stroke();
};
ink_el.onpointerup = () => {
    ink_move = false;

    let md = elFromId(selections[0].id).querySelector("x-md") as markdown;
    let textel = md.text;
    let data = JSON.stringify({
        options: "enable_pre_space",
        requests: [
            {
                writing_guide: {
                    writing_area_width: ink_el.offsetWidth,
                    writing_area_height: ink_el.offsetHeight,
                },
                ink: ink_points,
                language: store.ink.语言 || "zh_CN",
            },
        ],
    });
    ink_t[
        Number(
            setTimeout(() => {
                fetch(
                    store.ink.网址 ||
                        `https://www.google.com/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8`,
                    {
                        method: "POST",
                        body: data,
                        headers: { "content-type": "application/json" },
                    }
                )
                    .then((v) => v.json())
                    .then((v) => {
                        console.log(v);
                        let text_l = v[1][0][1];
                        set_text(text_l[0]);
                        ink_reset();
                    });
            }, Number(store.ink.延时) * 1000 || 600)
        )
    ] = "";
    function set_text(t: string) {
        textel.setRangeText(t);
        textel.selectionEnd += t.length;
        textel.selectionStart = textel.selectionEnd;
        selections[0].start = selections[0].end = textel.selectionStart;
        md.set_text();
    }
};
function ink_reset() {
    for (let t in ink_t) {
        clearTimeout(Number(t));
        delete ink_t[t];
    }
    ink_cxt.clearRect(0, 0, ink_el.width, ink_el.height);
    ink_points = [];
}

// 演示
type ys_item = {
    id?: string;
    position?: { O: string; p: { x: number; y: number; zoom: number } };
    transition: string;
};
type ys_type = {
    list: ys_item[];
};
var ys_page_i = -1;
function ys_init(data: ys_type) {
    let p = document.createDocumentFragment();
    for (let i in data.list) {
        let item = create_ys_item(data.list[i], Number(i));
        p.append(item);
    }
    ys_list.append(p);
}
function create_ys_item(item: ys_item, index?: number) {
    let div = createEl("div");
    let jump = createEl("div");
    let play = createEl("div");
    let remove = createEl("div");
    let tran = createEl("input");
    tran.contentEditable = "true";
    tran.classList.add("ys_tran");
    tran.value = item.transition;
    play.innerHTML = icon(play_svg);
    remove.innerHTML = icon(close_svg);
    play.onclick = () => {
        画布s.requestFullscreen();
        ys_page_i = index;
        ys_jump(item);
    };
    jump.onclick = () => {
        ys_jump(item);
    };
    remove.onclick = () => {
        div.remove();
        集.extra.slide.list = 集.extra.slide.list.filter((i) => i != item);
        data_changed();
    };
    tran.onchange = () => {
        item.transition = tran.value;
        data_changed();
    };

    div.append(play, jump, tran, remove);
    return div;
}
function ys_jump(item: ys_item) {
    if (item.position) {
        for (let el of 画布s.children) {
            if (el.id == item.position.O) {
                O = el as HTMLElement;
                O.style.display = "block";
            } else {
                (el as HTMLElement).style.display = "none";
            }
        }
        O.style.transition = item.transition;
        O.ontransitioncancel = O.ontransitionend = () => {
            O.style.transition = "";
        };
        let zoom = item.position.p.zoom;
        zoom_o(zoom);
        set_O_p(item.position.p.x * zoom - el_offset(画布).w / 2, item.position.p.y * zoom - el_offset(画布).h / 2);
    }
}
function ys_bn(fx: "back" | "next") {
    if (document.fullscreenElement != 画布s) return;
    if (fx == "back") {
        ys_page_i = Math.max(0, ys_page_i - 1);
    }
    if (fx == "next") {
        if (ys_page_i == 集.extra.slide.list.length - 1) {
            document.exitFullscreen();
            return;
        }
        ys_page_i = Math.min(集.extra.slide.list.length - 1, ys_page_i + 1);
    }
    ys_jump(集.extra.slide.list[ys_page_i]);
}
ys_add.onclick = () => {
    if (!集.extra?.slide) 集.extra["slide"] = { list: [] } as ys_type;
    let list = 集.extra.slide.list;
    let i: ys_item = { position: { O: "", p: { x: 0, y: 0, zoom: 1 } }, transition: "" };
    let x = (el_offset(O).x + el_offset(画布).w / 2) / zoom;
    let y = (el_offset(O).y + el_offset(画布).h / 2) / zoom;
    i.position = { O: O.id, p: { x, y, zoom } };
    list.push(i);
    let div = create_ys_item(i);
    ys_list.append(div);

    data_changed();
};

// 值
import JSON5 from "json5";

function load_value() {
    let el = z.聚焦元素;
    value_el.innerHTML = "";
    if (el.value && is_smallest_el(el)) {
        let t = createEl("textarea");
        let value = JSON5.stringify(el.value, null, 2);
        t.value = value;
        value_el.append(t);
        t.oninput = (e: InputEvent) => {
            const a = [
                ["'", "'"],
                ['"', '"'],
                ["{", "}"],
                ["(", ")"],
            ];
            if (e.inputType == "insertText") {
                for (let i of a) {
                    if (i[0] == t.value[t.selectionStart - 1]) {
                        t.setRangeText(i[1]);
                    }
                }
            }
            try {
                let v = JSON5.parse(t.value);
                el.value = v;
            } catch (error) {}
        };
    }
    if (集.values) {
        let t = createEl("textarea");
        let value = "";
        if (集.values[el.id]) {
            let t = JSON5.stringify(集.values[el.id], null, 2);
            value = t.slice(1, t.length - 2).replace(/^  /gm, "");
        }
        t.value = value;
        value_el.append(t);
        t.oninput = (e: InputEvent) => {
            const a = [
                ["'", "'"],
                ['"', '"'],
                ["{", "}"],
                ["(", ")"],
            ];
            if (e.inputType == "insertText") {
                for (let i of a) {
                    if (i[0] == t.value[t.selectionStart - 1]) {
                        t.setRangeText(i[1]);
                    }
                }
            }
            try {
                let v = JSON5.parse(`{${t.value}}`);
                集.values[el.id] = v;
                if (el.querySelector("x-md")) {
                    (el.querySelector("x-md") as markdown).reload();
                }
            } catch (error) {}
        };
    }
}

// MD
import markdownit from "markdown-it";
import markdownitTaskLists from "markdown-it-task-lists";
import markdownitEmoji from "markdown-it-emoji";
var md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
})
    .use(markdownitTaskLists, { enabled: true })
    .use(markdownitEmoji);

var defaultRender =
    md.renderer.rules.heading_open ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
let f = md.renderer.rules.fence;
import mermaid from "mermaid";
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "mermaid") {
        return mermaid_code(tokens[idx].content);
    }
    return f(tokens, idx, options, env, self);
};
function mermaid_code(content: string) {
    let o = "";
    mermaid.mermaidAPI.render("mgraph" + String(new Date().getTime()), content, (svg) => {
        o = svg;
    });
    return o;
}
// 代码来自 https://github.com/artisticat1/obsidian-tikzjax 和 https://github.com/kisonecat/tikzjax
var import_latex = false;
document.addEventListener("tikzjax-load-finished", (e) => {
    const svgEl = e.target as HTMLElement;
    if (is_dark) svgEl.style.filter = "invert(1)";
});
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "tikz") {
        return tikz_code(tokens[idx].content);
    }
    return f(tokens, idx, options, env, self);
};
function tikz_code(content: string) {
    if (!import_latex) {
        let script = createEl("script");
        import("../../lib/tikzjax.js?raw").then((v) => {
            const js = v.default;
            script.innerText = js;
            document.body.append(script);
        });
        import_latex = true;
        document.addEventListener("tikzjax-load-finished", tikz_svg);
    }
    let s = createEl("script");
    s.setAttribute("type", "text/tikz");
    s.setAttribute("data-show-console", "true");
    function tidyTikzSource(tikzSource: string) {
        const remove = "&nbsp;";
        tikzSource = tikzSource.replaceAll(remove, "");
        let lines = tikzSource.split("\n");
        lines = lines.map((line) => line.trim());
        lines = lines.filter((line) => line);
        const pack = [
            "chemfig",
            "tikz-cd",
            "circuitikz",
            "pgfplots",
            "array",
            "amsmath",
            "amstext",
            "amsfonts",
            "amssymb",
            "tikz-3dplot",
        ];
        for (let i of pack) {
            if (tikzSource.includes(i)) {
                let has = false;
                for (let t of lines) {
                    if (t == `\\usepackage{${i}}`) has = true;
                }
                if (!has) {
                    lines.unshift(`\\usepackage{${i}}`);
                }
            }
        }
        if (!tikzSource.includes("\\begin{document}")) {
            let packi = -1;
            for (let i in lines) {
                if (lines[i].includes(`\\usepackage{`)) packi = Number(i);
            }
            lines.splice(packi + 1, 0, "\\begin{document}");
        }
        if (!tikzSource.includes("\\end{document}")) {
            lines.push("\\end{document}");
        }
        return lines.join("\n");
    }
    s.innerHTML = tidyTikzSource(content);
    return s.outerHTML;
}
function jxg_code(c: string) {
    return `<x-graph>${c}</x-graph>`;
}
md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    if (tokens[idx].info == "jxg") {
        return jxg_code(tokens[idx].content);
    }
    return f(tokens, idx, options, env, self);
};

import { optimize } from "svgo";
/** 修复svg被遮挡 */
function tikz_svg(e: Event) {
    const svgEl = e.target as HTMLElement;
    let svg = svgEl.outerHTML;
    svg = optimize(svg, { plugins: ["preset-default", "removeViewBox"] }).data;
    let id = uuid();
    svg = svg.replace("svg", `svg id="${id}"`);
    svgEl.outerHTML = svg;
    let svg1 = elFromId(id);
    let rx = Infinity,
        ry = Infinity,
        rw = 0,
        rh = 0;
    svg1.querySelectorAll(":scope > *").forEach((el: SVGGElement) => {
        let r = el.getBBox();
        if (r.x < rx) rx = r.x;
        if (r.y < ry) ry = r.y;
        if (r.x + r.width > rw) rw = r.x + r.width;
        if (r.y + r.height > rh) rh = r.y + r.height;
    });
    rw = rw - rx;
    rh = rh - ry;
    svg1.setAttribute("viewBox", `${rx} ${ry} ${rw} ${rh}`);
    svg1.setAttribute("width", String(rw));
    svg1.setAttribute("height", String(rh));
    svg1.removeAttribute("id");
}

md.renderer.rules.image = function (tokens, idx, options, env, self) {
    let value = tokens[idx].attrGet("src");
    let b = 集.assets?.[value]?.base64;
    if (b) tokens[idx].attrSet("src", b);
    return defaultRender(tokens, idx, options, env, self);
};
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    var aIndex = tokens[idx].attrIndex("target");
    if (aIndex < 0) {
        tokens[idx].attrPush(["target", "_blank"]);
    } else {
        tokens[idx].attrs[aIndex][1] = "_blank";
    }
    return defaultRender(tokens, idx, options, env, self);
};

import "iconify-icon";

var will_load_math = false;
var mathjax_cache = {};
var math_loaded = false;
function get_svg(c: string) {
    let html: string,
        ca = mathjax_cache?.[c];
    if (ca) {
        html = ca[0];
        mathjax_cache[c][1] = 2;
    } else {
        if (math_loaded) {
            html = window.MathJax.tex2svg(c).outerHTML;
            mathjax_cache[c] = [window.MathJax.tex2svg(c).outerHTML, 1];
        } else {
            html = `<mjx-container>${c}</mjx-container>`;
        }
    }
    if (!math_loaded && !will_load_math) {
        window.MathJax = {
            tex: {
                inlineMath: [["$", "$"]],
            },
            options: {
                enableMenu: false,
            },

            startup: {
                pageReady: () => {
                    return window.MathJax.startup.defaultPageReady().then(() => {
                        console.log("MathJax initial typesetting complete");
                        math_loaded = true;
                        l_math();
                    });
                },
            },
        };
        (function () {
            if (will_load_math) return;
            let s = createEl("script");
            will_load_math = true;
            import("../../lib/mathjax@3.2.2-tex-svg-full.js?raw").then((v) => {
                s.innerText = v.default;
                document.body.append(s);
            });
        })();
    }
    return html;
}
function l_math() {
    画布.querySelectorAll("x-md").forEach((pel) => {
        if (pel.querySelector("mjx-container")) {
            (<markdown>pel).reload();
        }
    });
}
setInterval(() => {
    for (let i in mathjax_cache) {
        if (mathjax_cache[i][1] == 1) {
            delete mathjax_cache[i];
        }
    }
}, 10000);
setInterval(() => {
    mathjax_cache = {};
}, 100000);

md.renderer.rules["mathjax_inline"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_inline = (tokens, idx, options, env, self) => {
    return get_svg(tokens[idx].content).replace(`display="true"`, "");
};
md.inline.ruler.after("escape", "mathjax_inline", function (state, silent) {
    var found,
        content,
        token,
        max = state.posMax,
        start = state.pos;

    if (state.src.charCodeAt(start) !== 36 /* $ */) {
        return false;
    }
    if (silent) {
        return false;
    } // don't run any pairs in validation mode
    if (start + 2 >= max) {
        return false;
    }

    state.pos = start + 1;

    while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === 36 /* $ */) {
            found = true;
            break;
        }

        state.md.inline.skipToken(state);
    }

    if (!found || start + 1 === state.pos) {
        state.pos = start;
        return false;
    }

    content = state.src.slice(start + 1, state.pos);

    // found!
    state.posMax = state.pos;
    state.pos = start + 1;

    token = state.push("mathjax_open", "span", 1);
    token.markup = "$";
    token = state.push("mathjax_inline", "", 0);
    token.content = content;
    token = state.push("mathjax_close", "span", -1);
    token.markup = "$";

    state.pos = state.posMax + 1;
    state.posMax = max;
    return true;
});

md.renderer.rules["mathjax_block"] = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
md.renderer.rules.mathjax_block = (tokens, idx, options, env, self) => {
    return get_svg(`\\displaylines{${tokens[idx].content} }`);
};

function math_b(state, startLine, endLine, silent) {
    var nextLine,
        token,
        lineText,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
    }

    if (!state.md.options.html) {
        return false;
    }

    if (state.src.charCodeAt(pos) !== 36 /* $ */) {
        return false;
    }

    lineText = state.src.slice(pos, max);

    if (!lineText.includes("$$")) return false;

    if (silent) {
        return true;
    }

    nextLine = startLine + 1;

    if (lineText.match(/\$\$/g).length == 1) {
        for (; nextLine < endLine; nextLine++) {
            if (state.sCount[nextLine] < state.blkIndent) {
                break;
            }

            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];
            lineText = state.src.slice(pos, max);

            if (lineText.includes("$$")) {
                if (lineText.length !== 0) {
                    nextLine++;
                }
                break;
            }
        }
    }

    state.line = nextLine;

    token = state.push("mathjax_block", "mjx-container", 0);
    token.map = [startLine, nextLine];
    let t = state.getLines(startLine, nextLine, state.blkIndent, true).trim();

    token.content = t.slice(2, t.length - 2);

    return true;
}
md.block.ruler.after("blockquote", "mathjax_block", math_b, {
    alt: ["paragraph", "reference", "blockquote", "list"],
});

// https://github.com/jGleitz/markdown-it-kbd
const MARKER_OPEN = "[";
const MARKER_CLOSE = "]";
const ESCAPE_CHARACTER = "\\";
const TAG = "x-link";

md.inline.ruler.before("link", "x-link", (state, silent: boolean) => {
    if (silent) {
        return false;
    }

    const start = state.pos;
    const max = state.posMax;
    let now_char = state.src.charAt(start);
    let next_char = state.src.charAt(start + 1);

    // We are looking for two times the open symbol.
    if (now_char !== MARKER_OPEN || next_char !== MARKER_OPEN) {
        return false;
    }

    // Find the end sequence
    let openTagCount = 1;
    let end = -1;
    let skipNext = false;
    let id_l = 0;
    let id = "";
    for (let i = start + 1; i < max && end === -1; i++) {
        now_char = next_char;
        next_char = state.src.charAt(i + 1);
        if (skipNext) {
            skipNext = false;
            continue;
        }
        if (now_char === MARKER_CLOSE && next_char === MARKER_CLOSE) {
            openTagCount -= 1;
            if (openTagCount == 0) {
                // Found the end!
                end = i;
            }
            // Skip second marker char, it is already counted.
            skipNext = true;
        } else if (now_char === MARKER_OPEN && next_char === MARKER_OPEN) {
            openTagCount += 1;
            // Skip second marker char, it is already counted.
            skipNext = true;
        } else if (now_char === "\n") {
            // Found end of line before the end sequence. Thus, ignore our start sequence!
            return false;
        } else if (now_char === ESCAPE_CHARACTER) {
            skipNext = true;
        } else if (now_char == "#") {
            end = i;
            id_l = state.src.indexOf("]", i) - i;
            id = state.src.slice(i + 1, state.src.indexOf("]", i));
        }
    }

    // Input ended before closing sequence.
    if (end === -1) {
        return false;
    }

    // start tag
    let t = state.push("x-link_open", TAG, 1);
    t.markup = "[[";
    // parse inner
    state.pos += 2;
    state.posMax = end;
    state.md.inline.tokenize(state);
    t.attrPush(["id", id || state.tokens[state.tokens.length - 1].content]);
    state.pos = end + id_l + 2;
    state.posMax = max;
    // end tag
    let e = state.push("x-link_close", TAG, -1);
    e.markup = `#${id}]]`;

    return true;
});

function time_text(time: number) {
    return {
        ss() {
            return `${time % 1000}`;
        },
        s() {
            return `${Math.floor(time / 1000)}`;
        },
        m() {
            return `${Math.floor(time / 1000 / 60)}`;
        },
        ms() {
            return `${Math.floor(time / 1000 / 60)}:${Math.floor(time / 1000)}`;
        },
        hms() {
            let h = Math.floor(time / 1000 / 60 / 60);
            let m = Math.floor(time / 1000 / 60) % 60;
            let s = Math.floor(time / 1000) % 60;
            let t = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
            if (h > 0) t = `${h}:` + t;
            return t;
        },
        hms2() {
            let h = Math.floor(time / 1000 / 60 / 60);
            let m = Math.floor(time / 1000 / 60) % 60;
            let s = Math.floor(time / 1000) % 60;
            let t = `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
            return t;
        },
    };
}

// template
/** 主元素 */
class x extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var bar = createEl("div");
        bar.id = "x-x_bar";
        const m = createEl("div");
        m.innerHTML = icon(handle_svg);
        var f = createEl("div");
        f.innerHTML = icon(ding_svg);
        var d = createEl("div");
        d.innerHTML = icon(close_svg);
        let copy = createEl("div");
        copy.innerHTML = icon(copy_svg);

        bar.append(m);
        bar.append(copy);
        bar.append(f);
        bar.append(d);
        this.append(bar);

        var bar_hide_t = NaN;
        this.onmouseenter = () => {
            if (模式 == "设计" || 临时中转站.contains(this)) {
                clearTimeout(bar_hide_t);
                bar.classList.add("x-x_bar_show");
            }
        };
        this.onmouseleave = () => {
            if (模式 == "设计" || 临时中转站.contains(this)) {
                bar_hide_t = window.setTimeout(() => {
                    bar.classList.remove("x-x_bar_show");
                }, 200);
                画布.style.cursor = "crosshair";
            }
        };

        this.onpointerdown = (e) => {
            let el = e.target as HTMLDivElement;
            if (bar.contains(el) && el != m) return;
            if (el == m) {
                e.preventDefault();
                e.stopPropagation();
                free_drag = true;
                画布.classList.add("拖拽");
                new_free_drag_tip();
                if (this.parentElement != O) {
                    let x = e.clientX - O.getBoundingClientRect().x,
                        y = e.clientY - O.getBoundingClientRect().y + m.offsetHeight - e.offsetY;

                    let xel = copy_x(this);
                    xel.style.left = el_offset2(this, O).x + "px";
                    xel.style.top = el_offset2(this, O).y + "px";
                    xel.style.position = "absolute";
                    this.remove();
                    free_o_rects = [{ el: xel, x: x / zoom, y: y / zoom }];
                    free_old_point = e2p(e);
                    free_o_a = -1;

                    set_模式("设计");

                    for (let i of 集.中转站) {
                        if (xel.id == i.id) {
                            drag_block = true;
                            if (!i.global) {
                                集.中转站 = 集.中转站.filter((x) => x != i);
                                tmp_s_reflash();
                            }
                            data_changed();
                        }
                    }
                    return;
                }
            }
            if (!mu_sel_key(e) && selected_el.length <= 1) z.focus(this);
            if (模式 != "设计") return;
            e.preventDefault();
            free_old_point = e2p(e);
            free_o_a = -1;

            if (mu_sel_key(e)) {
                selected_el.push(this);
            }

            free_o_rects = [];
            for (const el of selected_el) {
                free_o_rects.push({ el, x: el.offsetLeft, y: el.offsetTop });
            }
        };

        f.onclick = () => {
            f.classList.toggle("buttom_a");
            if (f.classList.contains("buttom_a")) {
                global_x.push({
                    pid: 集.meta.UUID,
                    data: { id: this.id, 子元素: this.value, class: this.className, type: "X-X", style: "" },
                });
            } else {
                remove_global(this.id);
            }
        };

        for (let x of global_x)
            if (x.data.id == this.id)
                if (x.data.global) {
                    f.classList.add("buttom_a");
                    break;
                }

        copy.onpointerdown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            free_drag = true;
            画布.classList.add("拖拽");
            new_free_drag_tip();
            let x = e.clientX - O.getBoundingClientRect().x - copy.offsetLeft - e.offsetX,
                y = e.clientY - O.getBoundingClientRect().y + copy.offsetHeight - e.offsetY;
            let xel = copy_x(this);
            let nid = uuid_id();
            copy_value(this.id, nid);
            xel.id = nid;
            xel.style.left = el_offset2(this, O).x + "px";
            xel.style.top = el_offset2(this, O).y + "px";
            xel.style.position = "absolute";
            xel.querySelectorAll("x-x").forEach((el) => {
                let nid = uuid_id();
                copy_value(el.id, nid);
                el.id = nid;
                link(nid).add();
            });
            free_o_rects = [{ el: xel, x: x / zoom, y: y / zoom }];
            free_old_point = e2p(e);
            free_o_a = -1;
        };

        d.onclick = () => {
            selected_el = selected_el.filter((el) => el != this);
            z.remove(this);

            if (this.querySelector("x-file")) assets_reflash();
        };
        d.onpointerenter = () => {
            this.style.opacity = "0.5";
        };
        d.onpointerleave = () => {
            this.style.opacity = "";
        };

        if (this.getAttribute("value")) {
            this.set_v(JSON5.parse(this.getAttribute("value")));
        }

        this.onpointerover = (e) => {
            e.stopPropagation();
            show_link_value_bar(this);
        };
    }

    get value() {
        let list = [] as data;
        let els = this.querySelectorAll(":scope > *");
        let map: { index: number; z: number }[] = [];
        const _is_flex = is_flex(this);
        els.forEach((el: HTMLElement, i) => {
            if (el.id == "x-x_bar" || el.id == "x-x_handle") return;
            map.push({ index: i, z: Number(el.style.zIndex) || 1 });
        });
        if (!_is_flex) map = map.sort((a, b) => a.z - b.z);
        for (let n of map) {
            const l = els[n.index];
            let el = l as HTMLElement;
            if (el.tagName == "X-X") {
                list.push({
                    id: el.id,
                    style: el.getAttribute("style") || "",
                    class: el.className,
                    子元素: (el as x).value,
                    type: el.tagName,
                });
            } else {
                list.push({
                    id: el.id,
                    style: el.getAttribute("style") || "",
                    class: el.className,
                    value: (el as markdown).value,
                    type: el.tagName,
                });
            }
        }
        return list;
    }

    set_v(data: data) {
        for (let x of this.children) {
            if (x.tagName != "DIV") {
                x.remove();
            }
        }
        for (let d of data) {
            if (d.type == "X-X") {
                let el = createEl(d.type) as x;
                el.setAttribute("style", d.style);
                el.className = d.class;
                el.id = d.id;
                this.append(el);
                el.value = d.子元素;
            } else {
                let el = createEl(d.type) as markdown;
                el.setAttribute("style", d.style);
                el.className = d.class;
                el.id = d.id;
                this.append(el);
                el.value = d.value;
            }
        }
    }

    set value(data) {
        this.set_v(data);
    }
}

window.customElements.define("x-x", x);

type md_type =
    | "text"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "blockquote"
    | "code"
    | "todo"
    | "math"
    | "iframe";

/** markdown元素 */
class markdown extends HTMLElement {
    constructor() {
        super();
    }

    _value: { type: md_type; text: string } = { type: "p", text: "" };

    index: ReturnType<typeof md.parse>;

    text: HTMLTextAreaElement;

    h: HTMLElement;

    connectedCallback() {
        var s = createEl("div");
        s.id = "h";
        this.h = s;
        var text = createEl("textarea");
        this.text = text;
        this.append(s);
        this.append(text);

        if (this.getAttribute("value")) {
            let v = this.getAttribute("value");
            this._value = JSON5.parse(v);
            let t = this._value.text;
            this.text.value = t;
            this.render();
        }

        text.oninput = () => {
            this._value.text = text.value;
            data_changed();
            setTimeout(() => {
                this.render();
            }, 0);
        };
        text.onfocus = () => {
            selections[0] = { id: this.parentElement.id, start: text.selectionStart, end: text.selectionEnd };
        };
        text.onkeydown = (e) => {
            if (模式 != "浏览") e.preventDefault();
            if (e.key == "Enter") {
                e.preventDefault();
                if (this._value.type != "text" && this._value.type != "code")
                    set_O_p(null, O.offsetTop - this.offsetHeight * zoom);
                data_changed();
                if (this._value.type == "text") {
                    let last_line_start = text.value.lastIndexOf("\n", text.selectionStart - 1) + 1;
                    let last_line = text.value.slice(last_line_start, text.selectionStart);
                    let l_task = last_line.match(/^ *[-+*] +\[[x\s]\] +/i);
                    if (l_task) {
                        text.setRangeText("\n" + l_task[0]);
                        text.selectionStart = text.selectionEnd += l_task[0].length + 1;
                        text.dispatchEvent(new Event("input"));
                        return;
                    } else {
                        let l_l = last_line.match(/^ *[-+*] +/);
                        if (l_l) {
                            text.setRangeText("\n" + l_l[0]);
                            text.selectionStart = text.selectionEnd += l_l[0].length + 1;
                            text.dispatchEvent(new Event("input"));
                            return;
                        }
                    }
                    let l_n = last_line.match(/^ *\d+\. +/);
                    if (l_n) {
                        let t = "\n" + l_n[0].replace(/\d+/, (n) => String(Number(n) + 1));
                        text.setRangeText(t);
                        text.selectionStart = text.selectionEnd += t.length;
                        text.dispatchEvent(new Event("input"));
                        return;
                    }
                }

                if (e.ctrlKey) {
                    if (e.shiftKey) {
                        let rel = find_root_layout(this.parentElement);
                        let xel = createEl("x-x");
                        xel.style.left = rel.offsetLeft + "px";
                        xel.style.top = rel.offsetTop + rel.offsetHeight + 16 + "px";
                        z.push(xel);
                        var md = createEl("x-md");
                        xel.append(md);
                        md.edit = true;
                    }
                } else {
                    if (e.shiftKey || this._value.type == "text") {
                        text.setRangeText("\n");
                        text.selectionStart = text.selectionEnd = text.selectionStart + 1;
                    } else {
                        let t = this.text.value;
                        let t0 = t.slice(0, this.text.selectionStart),
                            t1 = t.slice(this.text.selectionEnd, t.length);
                        this._value.text = t0;
                        this.value = JSON.stringify(this._value);

                        let p = this.parentElement as x;
                        let pxel = null as x;
                        if (
                            p.parentElement.classList.contains("flex-column") ||
                            p.parentElement.classList.contains("flex-row")
                        ) {
                            pxel = p.parentElement as x;
                        } else {
                            // 不存在上级堆叠元素，需要新建并把此元素套进去
                            pxel = createEl("x-x");
                            pxel.id = uuid_id();
                            link(pxel.id).add();
                            pxel.style.left = p.offsetLeft + "px";
                            pxel.style.top = p.offsetTop + "px";
                            pxel.classList.add("flex-column");
                            z.push(pxel);
                            let x = createEl("x-x");
                            x.id = p.id;
                            x.setAttribute("style", p.getAttribute("style"));
                            pxel.append(x);
                            x.style.left = "";
                            x.style.top = "";
                            x.style.position = "relative";
                            x.value = p.value;
                            p.remove();
                            p = x;
                        }

                        let xel = createEl("x-x");
                        let md = createEl("x-md");
                        xel.append(md);
                        xel.id = uuid_id();
                        link(xel.id).add();
                        xel.style.position = "relative";
                        p.after(xel);
                        md.edit = true;
                        md.value = JSON.stringify({ type: this._value.type, text: t1 });
                        md.text.setSelectionRange(0, 0);

                        get_data();
                        z.reflash();
                    }
                }
            } else {
                let l_l = [
                    ["(", ")"],
                    ["[", "]"],
                    ["{", "}"],
                    ["<", ">"],
                    ["'", "'"],
                    ['"', '"'],
                    ["$", "$"],
                    ["*", "*"],
                    ["~", "~"],
                ];
                for (let i of l_l) {
                    if (e.key == i[0] && (i[0] == i[1] || e.key != i[1])) {
                        e.preventDefault();
                        let t = text.value.slice(text.selectionStart, text.selectionEnd);
                        let s = text.selectionStart;
                        text.setRangeText(i[0] + t + i[1]);
                        text.selectionStart = s + i[0].length;
                        text.selectionEnd = s + i[0].length + t.length;
                        if (e.key == "[" && text.value.charAt(text.selectionStart - 2) == "[") {
                            text.setRangeText(`${t}#${uuid_id()}`);
                            if (t) text.selectionEnd -= 8;
                        }
                        text.dispatchEvent(new Event("input"));
                    }
                }
            }
            if (e.key == "Tab") {
                e.preventDefault();
                if (e.ctrlKey || this.text.selectionStart != 0) {
                    let s = text.selectionStart;
                    text.setRangeText("\t");
                    text.selectionStart = s + 1;
                    text.selectionEnd = s + 1;
                    text.dispatchEvent(new Event("input"));
                } else {
                    let p = this.parentElement as x;
                    let t = this.text.value;
                    let x = createEl("x-x"),
                        md = createEl("x-md");
                    x.id = p.id;
                    x.setAttribute("style", p.getAttribute("style"));
                    p.classList.add("flex-column");
                    p.classList.add("list");
                    this.remove();
                    p.append(x);
                    x.append(md);
                    md.value = this.value;
                    p.id = uuid_id();
                    link(p.id).add();
                    md.edit = true;
                    md.text.setSelectionRange(0, 0);

                    z.reflash();
                }
            }
            if (e.key == "/" && e.ctrlKey) {
                e.preventDefault();
                let s = this.getBoundingClientRect();
                console.log(document.getSelection().getRangeAt(0), s);

                search_pel.style.left = s.left + "px";
                search_pel.style.top = s.top + "px";
                search_pel.classList.add("搜索展示");
                search_el.setAttribute("data-fid", this.parentElement.id);
                search_el.value = "type ";
                setTimeout(() => {
                    search_el.focus();
                }, 10);
            }
            if (e.key == " ") {
                if (this._value.type == "code" || this._value.type == "text") return;
                let mark = this.text.value.slice(0, text.selectionStart);
                console.log(mark);
                let t = this.text.value.slice(text.selectionStart, this.text.value.length);
                let type: md_type;
                let m2: { [key: string]: md_type } = {
                    "#": "h1",
                    "##": "h2",
                    "###": "h3",
                    "####": "h4",
                    "#####": "h5",
                    "######": "h6",
                    "[]": "todo",
                    $$: "math",
                    "```": "code",
                };
                for (let m in m2) {
                    if (m == mark) {
                        e.preventDefault();
                        type = m2[m];
                        break;
                    }
                }
                if (!type) return;
                this.text.value = t;
                text.selectionStart = text.selectionEnd = 0;
                this._value = { type, text: t };
                this.type = type;
                this.render();
            }
            if (e.key == "Backspace") {
                if (this._value.type != "text") {
                    if (text.selectionStart == 0 && text.selectionEnd == 0) {
                        this.type = "p";
                    }
                }
            }
            if (e.key == "ArrowUp") {
                if (this._value.type != "text" && this._value.type != "code") {
                    if (
                        is_flex(this.parentElement.parentElement) == "flex" &&
                        this.parentElement.previousElementSibling &&
                        this.parentElement.previousElementSibling.querySelector("x-md")
                    ) {
                        e.preventDefault();
                        let md = this.parentElement.previousElementSibling.querySelector("x-md") as markdown;
                        md.text.setSelectionRange(this.text.selectionStart, this.text.selectionStart);
                        md.edit = true;
                    } else {
                        z.focus(this.parentElement as x);
                        set_模式("设计");
                    }
                } else {
                    if (this.text.selectionStart == 0) {
                        z.focus(this.parentElement as x);
                        set_模式("设计");
                    }
                }
            }
            if (e.key == "ArrowDown") {
                if (this._value.type != "text" && this._value.type != "code") {
                    if (
                        is_flex(this.parentElement.parentElement) == "flex" &&
                        this.parentElement.nextElementSibling &&
                        this.parentElement.nextElementSibling.querySelector("x-md")
                    ) {
                        e.preventDefault();
                        let md = this.parentElement.nextElementSibling.querySelector("x-md") as markdown;
                        md.text.setSelectionRange(this.text.selectionStart, this.text.selectionStart);
                        md.edit = true;
                    } else {
                        z.focus(this.parentElement as x);
                        set_模式("设计");
                    }
                } else {
                    if (this.text.selectionEnd == this.text.value.length) {
                        z.focus(this.parentElement as x);
                        set_模式("设计");
                    }
                }
            }
            if (e.key == "ArrowLeft") {
                if (is_flex(this.parentElement.parentElement) == "flex" && this.text.selectionStart == 0) {
                    if (
                        this.parentElement.previousElementSibling &&
                        this.parentElement.previousElementSibling.querySelector("x-md")
                    ) {
                        e.preventDefault();
                        let md = this.parentElement.previousElementSibling.querySelector("x-md") as markdown;
                        md.edit = true;
                        md.text.setSelectionRange(md.text.value.length, md.text.value.length);
                    } else {
                        z.focus(this.parentElement as x);
                        set_模式("设计");
                    }
                }
            }
            if (e.key == "ArrowRight") {
                if (
                    is_flex(this.parentElement.parentElement) == "flex" &&
                    this.text.selectionEnd == this.text.value.length
                ) {
                    if (
                        this.parentElement.nextElementSibling &&
                        this.parentElement.nextElementSibling.querySelector("x-md")
                    ) {
                        e.preventDefault();
                        let md = this.parentElement.nextElementSibling.querySelector("x-md") as markdown;
                        md.edit = true;
                        md.text.setSelectionRange(0, 0);
                    } else {
                        z.focus(this.parentElement as x);
                        set_模式("设计");
                    }
                }
            }
        };
        text.onclick = text.onkeyup = () => {
            if (模式 != "浏览") return;
            let x = el_offset2(this.h).x,
                y = el_offset2(this.h).y + s.offsetHeight;
            text.style.left = x + "px";
            text.style.top = y + "px";

            selections[0] = { id: this.parentElement.id, start: text.selectionStart, end: text.selectionEnd };
        };
        text.onblur = () => {
            if (模式 == "浏览") this.edit = false;
        };
        text.onpaste = (e) => {
            if (e.clipboardData.files.length) {
                e.preventDefault();
                put_datatransfer(e.clipboardData, el_offset(this, O).x, el_offset(this, O).y);
                if (!text.value) {
                    link(this.parentElement.id).rm();
                    this.parentElement.remove();
                }
            } else {
                let t = e.clipboardData.getData("text/plain").trim();
                if (this._value.type == "code") {
                    if (!this._value.text && e.clipboardData.getData("text/html")) {
                        this.init_v("code");
                        集.values[this.parentElement.id].code["html"] = e.clipboardData.getData("text/html");
                    } else {
                        集.values[this.parentElement.id].code["html"] = "";
                    }
                    this.reload();
                    data_changed();
                } else {
                    if (this._value.type != "text" && (t.includes("\n") || t.includes("\r"))) {
                        e.preventDefault();
                        let el = this.parentElement as x;
                        let pel = el.parentElement;
                        let md: markdown;
                        if (!(pel.classList.contains("flex-column") || pel.classList.contains("flex-row"))) {
                            let nel = createEl("x-x");
                            nel.id = el.id;
                            el.id = uuid_id();
                            link(el.id).add();
                            this.remove();
                            el.append(nel);
                            md = createEl("x-md");
                            nel.append(md);
                            md.value = this.value;
                            md.text.setSelectionRange(this.text.selectionStart, this.text.selectionEnd);
                            pel = el;
                            el = nel;
                            pel.classList.add("flex-column");
                        } else {
                            md = this;
                        }
                        const l = t.split(/[\n\r]+/);
                        let last_el = el;
                        for (let i in l) {
                            const tt = l[i];
                            if (!tt) continue;
                            if (i == "0") {
                                md._value.text = tt;
                                md.text.setRangeText(tt);
                                md.reload();
                            } else {
                                let x = createEl("x-x");
                                let md = createEl("x-md");
                                last_el.after(x);
                                x.append(md);
                                x.id = uuid_id();
                                link(x.id).add();
                                md.value = JSON.stringify({ type: "p", text: tt });
                                last_el = x;
                            }
                        }
                        get_data();
                        z.reflash();
                    } else if (this._value.type != "text") {
                        e.preventDefault();
                        let t = e.clipboardData.getData("text/plain").replace("\n", "");
                        this.text.setRangeText(t);
                        let s = this.text.selectionStart;
                        if (s == this.text.selectionEnd) {
                            this.text.setSelectionRange(s + t.length, s + t.length);
                        }
                        this._value.text = this.text.value;
                        this.reload();
                    }
                }
            }
        };
        // 点击元素定位到源文本行
        s.onclick = (e) => {
            let el = <HTMLElement>e.target;
            if (el.tagName == "TEXTAREA") return;
            if ((<HTMLInputElement>el).type == "checkbox") {
                // 待办与源文本同步
                集.values[this.parentElement.id].todo.checked = (<HTMLInputElement>el).checked;
                data_changed();
                return;
            }
            if (el.tagName == "A") {
                e.preventDefault();
                let a = el as HTMLAnchorElement;
                if (e.ctrlKey) {
                    if (a.getAttribute("href")[0] == "#") {
                        let ml = a.getAttribute("href").split(":");
                        const id = ml[0].slice(1);
                        let el = elFromId(id);
                        jump_to_x_link(el as x);
                        let mel = el.querySelector("audio") || el.querySelector("video");
                        if (ml[1]) {
                            let ar = ml[1].split(",");
                            ar.forEach((x) => x.trim());
                            if (mel.tagName == "AUDIO" || mel.tagName == "VIDEO") {
                                (mel as HTMLMediaElement).currentTime = Number(ar[0]);
                            }
                        }
                    } else {
                        window.open((el as HTMLAnchorElement).href);
                    }
                }
            }
            text.style.left = el_offset2(this.h).x + "px";
            text.style.top = el_offset2(this.h).y + s.offsetHeight + "px";
        };
        s.spellcheck = false;
        s.onpointerup = (e) => {
            if (模式 != "浏览") return;
            let el = <HTMLElement>e.target;
            if (el.tagName != "INPUT") {
                s.contentEditable = "true";
            } else {
                return;
            }
            console.log(document.getSelection().getRangeAt(0));
            let r = document.getSelection().getRangeAt(0);
            function get_text(node: Node, of: number) {
                let before = "",
                    after = "",
                    x = false;
                let w = (pn: Node) => {
                    for (let n of pn.childNodes) {
                        let text = n.textContent;
                        if (n?.firstChild?.nodeName == "MJX-CONTAINER") text = "";
                        if (!n.contains(node)) {
                            if (!x) {
                                before += text;
                            } else {
                                after += text;
                            }
                        } else {
                            if (n == node) {
                                before += text.slice(0, of);
                                after += text.slice(of);
                                x = true;
                            } else {
                                w(n);
                            }
                        }
                    }
                };
                w(s);
                return { before, after };
            }
            let start_t = get_text(r.startContainer, r.startOffset);
            let end_t = get_text(r.endContainer, r.endOffset);
            console.log(start_t, end_t);
            let p2p = (of: number, start: boolean) => {
                let list = [];
                let w = (l: ReturnType<typeof md.parse>) => {
                    for (let i of l) {
                        if (i.children) {
                            w(i.children);
                        } else {
                            if (i.markup) {
                                if (i.type == "emoji") {
                                    list.push({ text: `:${i.markup}`, type: "mu" });
                                    // 删去一个冒号以匹配
                                } else if (i.markup.includes("#")) {
                                    list.push({ text: i.markup + " ", type: "mu" });
                                } else {
                                    list.push({ text: i.markup, type: "mu" });
                                }
                            } else if (i.type == "html_inline" || i.type == "html_block") {
                                list.push({ text: i.content, type: "mu" });
                            } else if (i.type == "mathjax_inline") {
                                list.push({ text: i.content, type: "mu" });
                            } else if (i.content) {
                                list.push({ text: i.content, type: "ct" });
                            }
                        }
                    }
                };
                if (this.index) w(this.index);
                if (this._value.type == "code") {
                    list = [{ text: this._value.text, type: "ct" }];
                }
                console.log(list);
                let true_o = 0;
                let tmp_o = 0;
                for (let n in list) {
                    const i = list[n];
                    if (i.type == "ct") {
                        if (tmp_o <= of && of <= tmp_o + i.text.length) {
                            let up = 0;
                            let nextn = Number(n) + 1;
                            if (list?.[nextn]?.type == "mu" && !start && tmp_o + i.text.length == of)
                                up = list[nextn].text.length;
                            return true_o + (of - tmp_o) + up;
                        }
                        tmp_o += i.text.length;
                    }
                    true_o += i.text.length;
                }
                return of;
            };
            let start_p = 0;
            let end_p = 0;
            start_p = p2p(start_t.before.length, true);
            end_p = p2p(end_t.before.length, false);
            if (start_p > end_p) {
                [start_p, end_p] = [end_p, start_p];
            }
            console.log(start_p, end_p);
            this.text.setSelectionRange(start_p, end_p);
            setTimeout(() => {
                this.edit = true;
            }, 10);
            s.contentEditable = "false";
        };
    }

    set edit(v: boolean | "cr") {
        var text = this.text;
        if (v) {
            text.classList.add("show_md");
            if (v != "cr") text.focus();
            set_模式("浏览");
        } else {
            text.classList.remove("show_md");
            text.blur();
        }
    }

    set value(v) {
        this._value = JSON5.parse(v);
        this.type = this._value.type;
        let t = this._value.text;
        this.text.value = t;
        this.render();
    }

    get value() {
        return JSON.stringify(this._value);
    }

    reload() {
        this.render();
    }

    render() {
        let type = this._value.type;
        let text = this.text.value;
        if (type == "text") {
            this.index = md.parse(text, {});
            this.h.innerHTML = md.render(text);
        } else if (type == "todo") {
            this.init_v("todo");
            if (!集.values[this.parentElement.id].todo["checked"])
                集.values[this.parentElement.id].todo["checked"] = false;
            let i = `<input type="checkbox" ${集.values[this.parentElement.id].todo.checked ? "checked" : ""}>`;
            this.index = md.parse(text, {});
            this.h.innerHTML = i + md.render(text);
        } else if (type == "math") {
            this.h.innerHTML = get_svg(`\\displaylines{${text} }`);
        } else if (type == "iframe") {
            this.h.innerHTML = `<iframe src="${text}"></iframe>`;
        } else if (type == "code") {
            this.init_v("code");
            if (!集.values[this.parentElement.id].code?.lan) 集.values[this.parentElement.id].code["lan"] = "";
            if (集.values?.[this.parentElement.id]?.code?.["html"]) {
                this.h.innerHTML = 集.values[this.parentElement.id].code["html"];
            } else {
                switch (集.values[this.parentElement.id].code["lan"]) {
                    case "mermaid":
                        this.h.innerHTML = mermaid_code(text);
                        break;
                    case "tikz":
                        this.h.innerHTML = tikz_code(text);
                        break;
                    case "jxg":
                        this.h.innerHTML = jxg_code(text);
                        break;
                    default:
                        this.h.innerText = text;
                        break;
                }
            }
        } else {
            this.index = md.parse(text, {});
            this.h.innerHTML = md.render(text);
        }
    }

    init_v(type: md_type) {
        if (!集.values[this.parentElement.id]) 集.values[this.parentElement.id] = {};
        if (!集.values[this.parentElement.id][type]) 集.values[this.parentElement.id][type] = {};
    }

    set type(type: md_type) {
        this._value.type = type;
        this.h.className = type;
        this.render();
    }

    set_text() {
        this._value.text = this.text.value;
        this.render();
    }
}

window.customElements.define("x-md", markdown);

// 几何图形
import JXG from "jsxgraph";
JXG.Options.text.useMathJax = true;
class graph extends HTMLElement {
    constructor() {
        super();
    }

    text: HTMLTextAreaElement;
    s: HTMLElement;
    resize_ob: ResizeObserver;

    connectedCallback() {
        const b = document.createElement("div");
        b.id = "t_md";
        const edit = createEl("div");
        const editor = createEl("div");
        this.s = document.createElement("div");
        this.s.id = `g${uuid_id()}`;
        this.text = document.createElement("textarea");
        const text_class = "hide_jxg_text";
        this.text.classList.add(text_class);
        this.text.value = this.getAttribute("value") || "";
        this.innerHTML = "";
        this.append(b);
        b.append(edit, editor);
        this.append(this.s);
        this.append(this.text);

        let x = this.parentElement as x;
        if (!x.style.width && !x.style.height) {
            x.style.width = "100px";
            x.style.height = "100px";
        }

        if (JXG) {
            if (this.text.value) {
                this.run(this.text.value);
            }
        }

        edit.onclick = () => {
            this.text.classList.toggle(text_class);
            this.text.focus();
        };
        editor.onclick = () => {
            let url = new URL("https://jxg-editor.netlify.app");
            url.searchParams.set("code", this.text.value);
            window.open(url.toString());
            this.text.classList.add(text_class);
        };
        this.text.onchange = () => {
            this.run(this.text.value);
        };
        this.resize_ob = new ResizeObserver(() => {
            this.run(this.text.value);
        });
        this.resize_ob.observe(this.parentElement);
    }

    disconnectedCallback() {
        this.resize_ob.disconnect();
    }

    reflasth() {
        if (JXG && this.s.id) JXG.getBoardByContainerId(this.s.id)?.updateCSSTransforms();
    }

    run(code: string) {
        if (this.s.innerHTML) JXG.JSXGraph.freeBoard(JXG.getBoardByContainerId(this.s.id));
        this.s.id = `g${uuid_id()}`;
        eval(`{let gid = '${this.s.id}';${code}}`);
        const svg = this.s.querySelector("svg");
        if (!svg) return;
        const ob = new MutationObserver(() => {
            svg.setAttribute("width", String(el_offset2(this).w));
            svg.setAttribute("height", String(el_offset2(this).h));
            ob.disconnect();
        });
        ob.observe(svg, { attributes: true, attributeFilter: ["width"] });
    }

    set value(v) {
        this.text.value = v;
        this.run(v);
    }

    get value() {
        return this.text.value;
    }
}

window.customElements.define("x-graph", graph);

ignore_el.push("x-graph");

import mathSymbols from "../../lib/tex/x.js";
class symbols extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var div = createEl("div");
        this.append(div);
        for (const i in mathSymbols) {
            for (const j of mathSymbols[i]) {
                let img = createEl("img");
                img.title = j.name;
                img.id = `snippet_${j.source}`;
                let b = btoa(j.svg);
                img.src = `data:image/svg+xml;base64,${b}`;
                div.append(img);
            }
        }

        this.onclick = (e) => {
            e.stopPropagation();
            f(<HTMLElement>e.target);
        };
        var f = (el: HTMLElement) => {
            let text = (get_x_by_id(selections[0].id).querySelector("x-md") as markdown).text;
            if (text.tagName != "TEXTAREA") return;
            if (el.id.includes("snippet")) {
                for (let i in mathSymbols) {
                    for (let j of mathSymbols[i]) {
                        if ("snippet_" + j.source == el.id) {
                            let v = text.value;
                            let se = v.substring(text.selectionStart, text.selectionEnd);
                            let s = <string>j.snippet;
                            let ss = s.replace(/\$\d/g, "");
                            let sss = ss.replace(/\${\d:(.*?)}/g, "$1");
                            let ssss = sss.replace(/\${(TM_SELECTED_TEXT)}/g, se);
                            let ts = text.selectionStart,
                                es = text.selectionEnd;
                            let e_v = v.substring(0, ts) + ssss + v.substring(es, v.length);
                            text.value = e_v;
                            text.selectionStart = ts;
                            text.selectionEnd = ts;
                            setTimeout(() => {
                                text.focus();
                            }, 10);
                            text.dispatchEvent(new InputEvent("input"));
                        }
                    }
                }
            }
        };
    }
}

window.customElements.define("x-sinppet", symbols);

/** 进度元素 */
class progress extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var v = this.getAttribute("value");
        var div = createEl("div");
        var p = createEl("span");
        this.append(div);
        this.append(p);

        div.style.width = `${v}%`;

        p.innerText = `${v}%`;
    }
}

window.customElements.define("x-pro", progress);

class progress2 extends HTMLElement {
    constructor() {
        super();
    }

    jd: HTMLElement;
    _value: number;

    connectedCallback() {
        this.jd = createEl("div");
        this.append(this.jd);
        let yle: PointerEvent;
        this.onpointerdown = (e) => {
            yle = e;
            ylf(e);
            e.preventDefault();
        };
        document.addEventListener("pointermove", (e) => {
            if (yle) {
                e.preventDefault();
                ylf(e);
            }
        });
        document.addEventListener("pointerup", (e) => {
            if (yle) {
                e.preventDefault();
                yle = null;
                ylf(e);
            }
        });

        let ylf = (e: PointerEvent) => {
            let r = this.getBoundingClientRect();
            let pw = e.clientX - r.x;
            let p = pw / r.width;
            p = clip(p, 0, 1);

            this.jd.style.width = p * 100 + "%";
            this._value = p;
            this.dispatchEvent(new InputEvent("input"));
        };
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
        this.jd.style.width = v * 100 + "%";
    }
}

window.customElements.define("x-progress", progress2);

/** 文件预览元素 */
class file extends HTMLElement {
    constructor() {
        super();
    }

    _value: { r: boolean; id: string };
    div: HTMLDivElement;

    connectedCallback() {
        this.ondblclick = () => {
            this._value.r = !this._value.r;
            this.set_m();
        };
        this.div = createEl("div");
        this.append(this.div);
        if (this.getAttribute("value")) {
            this._value = JSON5.parse(this.getAttribute("value"));
            this.set_m();
        }
    }

    set_m() {
        let f = 集.assets[this._value.id];
        if (!f) return;
        let type = f.base64.match(/data:(.*?);/)[1].split("/");
        if (
            type[0] != "image" &&
            type[0] != "audio" &&
            type[0] != "video" &&
            type[1] != "pdf" &&
            type[1] != "gltf-binary" &&
            type[1] != "vnd.geogebra.file"
        )
            this._value.r = false;
        this.div.innerHTML = "";
        if (this._value.r) {
            this.div.classList.remove("file");
            if (type[0] == "image") {
                let img = createEl("x-img");
                this.div.append(img);
                img.value = f.base64;
            }
            if (type[0] == "audio") {
                let audio = createEl("x-audio");
                this.div.append(audio);
                audio.value = f.base64;
            }
            if (type[0] == "video") {
                let video = createEl("video");
                video.controls = true;
                this.div.append(video);
                video.src = f.base64;
            }
            if (type[1] == "pdf") {
                let pdf = createEl("x-pdf");
                this.parentElement.append(pdf);
                pdf.value = JSON.stringify({ id: this._value.id, page: 1 });
                this.remove();
            }
            if (type[1] == "gltf-binary") {
                let td = createEl("x-three");
                this.div.append(td);
                td.value = this._value.id;
            }
            if (type[1] == "vnd.geogebra.file") {
                let ggb = createEl("x-ggb");
                this.div.append(ggb);
                ggb.value = this._value.id;
            }
        } else {
            this.div.classList.add("file");
            let i = createEl("div");
            i.innerHTML = icon(file_svg);
            let file_name_el = createEl("p");
            this.div.append(i);
            this.div.append(file_name_el);
        }
    }

    get value() {
        return JSON.stringify(this._value);
    }
    set value(s) {
        this._value = JSON5.parse(s);
        this.set_m();
    }
}

window.customElements.define("x-file", file);

import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js";

var pdf_cache = {} as { [key: string]: pdfjsLib.PDFDocumentProxy };

/** pdf浏览元素 */
class pdf_viewer extends HTMLElement {
    constructor() {
        super();
    }

    _value: { id: string; page: number };
    div: HTMLDivElement;
    pages: HTMLElement;
    canvas: HTMLCanvasElement;
    canvas1: HTMLCanvasElement;
    text: HTMLElement;
    old_id = "";
    tasks: { [key: string]: pdfjsLib.RenderTask } = {};

    load_pdf = async () => {
        let f = 集.assets[this._value.id];
        if (!f) return;
        var loadingTask = pdfjsLib.getDocument(f.base64);
        pdf_cache[this._value.id] = await loadingTask.promise;
        return pdf_cache[this._value.id];
    };
    connectedCallback() {
        this.div = createEl("div");
        this.append(this.div);
        let per = createEl("div"),
            next = createEl("div");
        this.pages = createEl("div");
        per.onclick = () => {
            this._value.page = Math.max(1, this._value.page - 1);
            this.set_m();
        };
        next.onclick = async () => {
            let pdf = pdf_cache[this._value.id] || (await this.load_pdf());
            this._value.page = Math.min(pdf.numPages, this._value.page + 1);
            this.set_m();
        };

        let page_i = createEl("input"),
            page_t = createEl("span"),
            page_bar = createEl("div"),
            pages = createEl("div");
        page_t.id = "page_i";
        pages.id = "pages";
        page_bar.append(page_i, page_t);
        this.pages.append(page_bar);
        this.pages.append(pages);
        pages.classList.add("hide_pdf_pages");
        pages.onwheel = (e) => {
            e.stopPropagation();
        };
        this.pages.onclick = () => {
            pages.classList.toggle("hide_pdf_pages");
        };
        this.div.append(per, this.pages, next);
        this.canvas = createEl("canvas");
        this.canvas.style.zIndex = "1";
        this.append(this.canvas);
        this.canvas1 = createEl("canvas");
        this.canvas1.style.zIndex = "2";
        this.append(this.canvas1);
        this.text = createEl("div");
        this.append(this.text);
        if (this.getAttribute("value")) {
            this._value = JSON5.parse(this.getAttribute("value"));
            this.set_m();
        }

        const ob = new ResizeObserver((entries) => {
            this.set_m();
        });
        ob.observe(this.parentElement);
    }

    async set_m() {
        let pdf = pdf_cache[this._value.id] || (await this.load_pdf());
        this.canvas.style.zIndex = "1";
        this.canvas1.style.zIndex = "2";
        pdf.getPage(this._value.page).then(async (page) => {
            let scale = 1.5;
            let viewport = page.getViewport({ scale: scale });

            let canvas = this.canvas;
            let context = canvas.getContext("2d");

            let cw = canvas.getBoundingClientRect().width * scale,
                ch = canvas.getBoundingClientRect().height * scale;

            let scalex = cw / viewport.width;
            let scaley = ch / viewport.height;

            canvas.width = Math.round(cw);
            canvas.height = Math.round(ch);

            let transform = scalex != 1 && scaley != 1 ? [scalex, 0, 0, scaley, 0, 0] : null;

            let renderContext = {
                canvasContext: context,
                transform: transform,
                viewport: viewport,
            };
            for (let t in this.tasks) {
                this.tasks[t].cancel();
                delete this.tasks[t];
            }
            let task = page.render(renderContext);
            let taskid = uuid_id();
            this.tasks[taskid] = task;
            task.promise.then(() => {
                this.canvas.style.zIndex = "2";
                this.canvas1.style.zIndex = "1";
                [this.canvas, this.canvas1] = [this.canvas1, this.canvas];
            });
            task.promise.finally(() => {
                delete this.tasks[taskid];
            });

            this.text.style.transform = `scaleX(${canvas.offsetWidth / viewport.width}) scaleY(${
                canvas.offsetHeight / viewport.height
            })`;
            this.text.innerHTML = "";
            let text = await page.getTextContent();
            pdfjsLib.renderTextLayer({ container: this.text, viewport, textContent: text }).promise.then(() => {
                setTimeout(() => {
                    if (this.old_id != this._value.id) {
                        this.old_id = this._value.id;
                        let div = this.pages.querySelector("#pages");
                        for (let i = 1; i <= pdf.numPages; i++) {
                            let page = createEl("div");
                            div.append(page);
                            page.onclick = () => {
                                this._value.page = i;
                                this.set_m();
                            };
                            let p = createEl("span");
                            p.innerText = `${i}`;
                            page.append(p);
                        }
                        for (let i = 1; i <= pdf.numPages; i++) {
                            pdf.getPage(i).then(async (page) => {
                                let viewport = page.getViewport({ scale: 0.1 });

                                let canvas = createEl("canvas");
                                let context = canvas.getContext("2d");

                                this.pages.querySelectorAll("#pages > div")[i - 1].append(canvas);

                                canvas.width = Math.floor(viewport.width);
                                canvas.height = Math.floor(viewport.height);
                                let renderContext = {
                                    canvasContext: context,
                                    transform: null,
                                    viewport: viewport,
                                };
                                page.render(renderContext);
                            });
                        }
                    }
                }, 100);
            });
        });
        let page_i = this.pages.querySelector("#page_i") as HTMLElement;
        this.pages.querySelector("input").value = String(this._value.page);
        page_i.innerHTML = `${pdf.numPages}`;
        this.pages.querySelector("input").style.width = page_i.offsetWidth + "px";
    }

    get value() {
        return JSON.stringify(this._value);
    }
    set value(s) {
        this._value = JSON5.parse(s);
        this.set_m();
    }
}

window.customElements.define("x-pdf", pdf_viewer);

/** 绘画元素 */
import nDollar from "ndollar-js";
let recognizer = new nDollar.Recognizer(false);

recognizer.AddGesture("line", [[new nDollar.Point(0, 0), new nDollar.Point(100, 0)]]);
recognizer.AddGesture("triangle", [
    [new nDollar.Point(30, 7), new nDollar.Point(103, 7)],
    [new nDollar.Point(103, 7), new nDollar.Point(66, 87)],
    [new nDollar.Point(66, 87), new nDollar.Point(30, 7)],
]);
recognizer.AddGesture("rect", [
    [new nDollar.Point(0, 0), new nDollar.Point(100, 0)],
    [new nDollar.Point(100, 0), new nDollar.Point(100, 100)],
    [new nDollar.Point(100, 100), new nDollar.Point(0, 100)],
    [new nDollar.Point(0, 100), new nDollar.Point(0, 0)],
]);
recognizer.AddGesture("circle", [
    [
        new nDollar.Point(382, 310),
        new nDollar.Point(377, 308),
        new nDollar.Point(373, 307),
        new nDollar.Point(366, 307),
        new nDollar.Point(360, 310),
        new nDollar.Point(356, 313),
        new nDollar.Point(353, 316),
        new nDollar.Point(349, 321),
        new nDollar.Point(347, 326),
        new nDollar.Point(344, 331),
        new nDollar.Point(342, 337),
        new nDollar.Point(341, 343),
        new nDollar.Point(341, 350),
        new nDollar.Point(341, 358),
        new nDollar.Point(342, 362),
        new nDollar.Point(344, 366),
        new nDollar.Point(347, 370),
        new nDollar.Point(351, 374),
        new nDollar.Point(356, 379),
        new nDollar.Point(361, 382),
        new nDollar.Point(368, 385),
        new nDollar.Point(374, 387),
        new nDollar.Point(381, 387),
        new nDollar.Point(390, 387),
        new nDollar.Point(397, 385),
        new nDollar.Point(404, 382),
        new nDollar.Point(408, 378),
        new nDollar.Point(412, 373),
        new nDollar.Point(416, 367),
        new nDollar.Point(418, 361),
        new nDollar.Point(419, 353),
        new nDollar.Point(418, 346),
        new nDollar.Point(417, 341),
        new nDollar.Point(416, 336),
        new nDollar.Point(413, 331),
        new nDollar.Point(410, 326),
        new nDollar.Point(404, 320),
        new nDollar.Point(400, 317),
        new nDollar.Point(393, 313),
        new nDollar.Point(392, 312),
    ],
]);

class draw extends HTMLElement {
    constructor() {
        super();
    }

    main_svg: SVGSVGElement;
    tmp_svg: SVGSVGElement;

    pen = {
        color: penc_el.value || "#000000",
        width: pen_width_el.value,
        zoom: pen_zoom_el.checked,
    };

    connectedCallback() {
        if (this.getAttribute("value")) {
            this.tmp_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.append(this.tmp_svg);
            this.main_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.append(this.main_svg);
            this.set_v(this.getAttribute("value"));
        } else {
            this.tmp_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

            if (this.getAttribute("width")) this.tmp_svg.setAttribute("width", this.getAttribute("width"));
            if (this.getAttribute("height")) this.tmp_svg.setAttribute("height", this.getAttribute("height"));
            this.append(this.tmp_svg);

            this.main_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

            if (this.getAttribute("width")) this.main_svg.setAttribute("width", this.getAttribute("width"));
            if (this.getAttribute("height")) this.main_svg.setAttribute("height", this.getAttribute("height"));
            this.append(this.main_svg);

            this.width = Number(this.getAttribute("width"));
            this.height = Number(this.getAttribute("height"));
        }
        this.ondrag = (e) => {
            e.preventDefault();
        };
    }

    points = [{ x: NaN, y: NaN, p: NaN }];

    ox = 0;
    oy = 0;
    width = NaN;
    height = NaN;
    t;
    xz: {
        rect: { center: { x: number; y: number }; a: number; w: number; h: number };
        xz: string;
        start_p: { x: number; y: number };
        end_p: { x: number; y: number };
    } = { rect: { center: { x: 0, y: 0 }, a: 0, w: 0, h: 0 }, xz: "", start_p: { x: 0, y: 0 }, end_p: { x: 0, y: 0 } };

    draw(e: PointerEvent) {
        if (!e.pressure) return;
        if (e.pointerType == "mouse" && e.buttons == 2) return;
        let x = e.clientX / zoom - this.getBoundingClientRect().x / zoom - this.ox,
            y = e.clientY / zoom - this.getBoundingClientRect().y / zoom - this.oy;
        this.main_svg.setAttribute("width", String(this.width));
        this.main_svg.setAttribute("height", String(this.height));
        this.tmp_svg.setAttribute("width", String(this.width));
        this.tmp_svg.setAttribute("height", String(this.height));

        for (let el of this.main_svg.children) {
            let t = `translate(${this.ox},${this.oy})`;
            el.setAttribute("transform", t);
        }

        clearTimeout(this.t);
        this.t = setTimeout(() => {
            let points = [];
            for (let p of this.points) {
                if (!p.p) continue;
                points.push(p);
            }
            console.log(points);
            let l = [];
            for (let p of points) {
                if (!p.p) continue;
                l.push(new nDollar.Point(p.x, p.y));
            }
            let result = recognizer.Recognize([l], false, false);
            console.log(result);
            if (result.Score < 0.89) return;
            function convexHull(points) {
                // 将点按照横坐标排序
                points.sort(function (a, b) {
                    return a.x != b.x ? a.x - b.x : a.y - b.y;
                });

                // 初始化下凸包
                var lower = [];
                for (var i = 0; i < points.length; i++) {
                    while (
                        lower.length >= 2 &&
                        cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0
                    ) {
                        lower.pop();
                    }
                    lower.push(points[i]);
                }

                // 初始化上凸包
                var upper = [];
                for (var i = points.length - 1; i >= 0; i--) {
                    while (
                        upper.length >= 2 &&
                        cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0
                    ) {
                        upper.pop();
                    }
                    upper.push(points[i]);
                }

                // 去除重复的点
                upper.pop();
                lower.pop();

                // 返回凸包
                return lower.concat(upper);
            }

            // 计算向量的叉积
            function cross(o, a, b) {
                return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
            }
            function getMinimumBoundingBox(points: { x: number; y: number }[]) {
                // 初始化变量
                let maxd = -Infinity,
                    maxd2 = -Infinity,
                    mind2 = Infinity;
                let maxd_p;
                let minArea = Infinity;
                let main_a: number;
                let main_b: number;
                let main_c: number;
                let main_sqrtab: number;
                let rect: { center: { x: number; y: number }; a: number; w: number; h: number };

                // 对于每个点对 (p, q)，计算矩形的最小面积
                for (let i = 0; i < points.length; i++) {
                    for (let j = i + 1; j < points.length; j++) {
                        // 计算点对 (p, q) 所在直线的方程
                        let p = points[i];
                        let q = points[j];
                        let a = p.y - q.y;
                        let b = q.x - p.x;
                        let c = p.x * q.y - q.x * p.y;
                        let sqrtab = Math.sqrt(a ** 2 + b ** 2);

                        let mmaxd = -Infinity,
                            mmaxd2 = -Infinity,
                            mmind2 = Infinity;
                        let mmaxd_p;

                        // 遍历点集并更新最小和最大 x 和 y 坐标
                        for (let k = 0; k < points.length; k++) {
                            let x = points[k].x;
                            let y = points[k].y;
                            let d = Math.abs(a * x + b * y + c) / sqrtab;
                            let d2 = (-b * x + a * y + c) / sqrtab; // 距离垂线
                            if (d > mmaxd) {
                                mmaxd = d;
                                mmaxd_p = points[k];
                            }
                            mmaxd2 = Math.max(mmaxd2, d2);
                            mmind2 = Math.min(mmind2, d2);
                        }

                        let area = (mmaxd2 - mmind2) * mmaxd;
                        if (area < minArea) {
                            minArea = area;
                            maxd = mmaxd;
                            maxd2 = mmaxd2;
                            mind2 = mmind2;
                            maxd_p = mmaxd_p;
                            main_a = a;
                            main_b = b;
                            main_c = c;
                            main_sqrtab = sqrtab;
                        }
                    }
                }
                let a = main_a,
                    b = main_b,
                    c = main_c,
                    sqrtab = main_sqrtab;
                // 新的c，矩形两条垂直平分线
                let cn = -(a * maxd_p.x + b * maxd_p.y + c) / 2 + c;
                let cn2 = -((maxd2 + mind2) / 2) * sqrtab + c;
                // 交点
                let x = (-a * cn + b * cn2) / (a ** 2 + b ** 2),
                    y = (-a * cn2 - b * cn) / (a ** 2 + b ** 2);
                rect = { center: { x, y }, w: maxd, a: Math.atan2(2 - 1, (-b * 2 + b * 1) / a), h: maxd2 - mind2 };

                return rect;
            }
            let conpoints = convexHull(points);

            let rect = getMinimumBoundingBox(conpoints);
            console.log(rect);
            this.xz.rect = rect;
            this.xz.xz = result.Name;
            this.xz.start_p = points[0];
            this.xz.end_p = points[points.length - 1];
            switch (result.Name) {
                case "line":
                    this.tmp_svg.innerHTML = `<line x1="${this.xz.start_p.x}" y1="${this.xz.start_p.y}" x2="${this.xz.end_p.x}" y2="${this.xz.end_p.y}" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px"/>`;
                    break;
                case "rect":
                    let x = this.xz.rect.center.x - Math.abs((this.xz.rect.w / 2) * Math.cos(this.xz.rect.a));
                    let y = this.xz.rect.center.y - Math.abs((this.xz.rect.h / 2) * Math.cos(this.xz.rect.a));
                    this.tmp_svg.innerHTML = `<rect x="${x}" y="${y}" width="${this.xz.rect.w}" height="${
                        this.xz.rect.h
                    }" transform="rotate(${this.xz.rect.a / (Math.PI / 180) + 90} ${this.xz.rect.center.x} ${
                        this.xz.rect.center.y
                    })" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px;fill:#0000"/>`;
                    break;
                case "circle":
                    if (this.xz.rect.w / this.xz.rect.h > 2 || this.xz.rect.h / this.xz.rect.w > 2) {
                        this.tmp_svg.innerHTML = `<ellipse cx="${rect.center.x}" cy="${rect.center.y}" rx="${
                            rect.h / 2
                        }" ry="${rect.w / 2}" transform="rotate(${rect.a / (Math.PI / 180)} ${rect.center.x} ${
                            rect.center.y
                        })" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px;fill:#0000;"></ellipse>`;
                    } else {
                        let r = (this.xz.rect.h + this.xz.rect.w) / 2 / 2;
                        this.tmp_svg.innerHTML = `<circle cx="${rect.center.x}" cy="${
                            rect.center.y
                        }" r="${r}" transform="rotate(${rect.a / (Math.PI / 180)} ${rect.center.x} ${
                            rect.center.y
                        })" style="stroke:${this.pen.color};stroke-width:${this.pen.width}px;fill:#0000;"></circle>`;
                    }
                    // this.tmp_svg.innerHTML = `<polygon points="10,0 60,0 35,50" style="stroke:${this.pen.color};" />`;
                    break;
                case "triangle":
                    // this.tmp_svg.innerHTML = `<polygon points="10,0 60,0 35,50" style="stroke:${this.pen.color};" />`;
                    break;
            }
            console.log(this.tmp_svg.innerHTML);
        }, 600);

        // 画
        let type = "p";
        if (pen_type_el.querySelectorAll("input")[0].checked) type = "p";
        if (pen_type_el.querySelectorAll("input")[1].checked) type = "s";
        if (type == "p") pen_p(this);
        if (type == "s") pen_s(this);

        function pen_p(d: draw) {
            if (d.points.length != 1) {
                let ps1 = [],
                    ps2 = [];
                let so = (i: number) => {
                    let w = d.points[i - 1].p * (d.pen.width / 2);
                    if (d.pen.zoom) w = w / zoom;
                    let x0 = d.points[i - 2].x,
                        y0 = d.points[i - 2].y,
                        x1 = d.points[i - 1].x,
                        y1 = d.points[i - 1].y,
                        x2 = d.points?.[i]?.x || x,
                        y2 = d.points?.[i]?.y || y;
                    let a = Math.atan2(y2 - y0, x2 - x0);
                    let p1 = { x: x1 + w * Math.cos(a + Math.PI / 2), y: y1 + w * Math.sin(a + Math.PI / 2) };
                    let p2 = { x: x1 + w * Math.cos(a - Math.PI / 2), y: y1 + w * Math.sin(a - Math.PI / 2) };
                    ps1.push(p1);
                    ps2.push(p2);
                };
                for (let i = 3; i < d.points.length; i++) {
                    so(i);
                }
                so(d.points.length);
                ps1.push({ x, y });

                let ps = [];
                for (let i of ps1) {
                    ps.push(i);
                }
                for (let i = ps2.length - 1; i >= 0; i--) {
                    ps.push(ps2[i]);
                }
                let at = draw_curve(ps);
                let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
                let t = `translate(${d.ox},${d.oy})`;
                p.setAttribute("transform", t);
                if (d.points.length != 2) p.setAttribute("d", at);
                p.setAttribute("fill", d.pen.color);

                d.tmp_svg.innerHTML = "";

                d.tmp_svg.append(p);
            }
            if (d.points.length == 1 || d.points.length == 2) {
                d.points.push({ x, y, p: e.pressure });
            } else {
                let a1 = Math.atan2(
                    d.points[d.points.length - 1].y - d.points[d.points.length - 2].y,
                    d.points[d.points.length - 1].x - d.points[d.points.length - 2].x
                );
                let a2 = Math.atan2(d.points[d.points.length - 1].y - y, d.points[d.points.length - 1].x - x);
                let s = Math.sqrt(
                    (d.points[d.points.length - 1].y - y) ** 2 + (d.points[d.points.length - 1].x - x) ** 2
                );
                if (
                    s >
                        ((d.pen.width / 2) * (e.pressure + d.points[d.points.length - 1].p)) /
                            (d.pen.zoom ? zoom : 1) ||
                    Math.abs(a1 - a2) < Math.PI / 2
                ) {
                    d.points.push({ x, y, p: e.pressure });
                }
            }
        }

        function pen_s(d: draw) {
            d.points.push({ x, y, p: e.pressure });
            if (d.points.length < 2) return;
            let ps = d.points.slice(1, d.points.length - 1);
            let at = draw_curve(ps);
            let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            let t = `translate(${d.ox},${d.oy})`;
            p.setAttribute("transform", t);
            p.setAttribute("d", at);
            p.setAttribute("fill", "none");
            p.setAttribute("stroke", d.pen.color);
            p.setAttribute("stroke-width", (d.pen.zoom ? d.pen.width / zoom : d.pen.width) + "px");
            p.setAttribute("stroke-linecap", "round");
            p.setAttribute("stroke-linejoin", "round");
            d.tmp_svg.innerHTML = "";

            d.tmp_svg.append(p);
        }

        function draw_curve(p: { x: number; y: number }[]) {
            let t = 1 / 5;
            let pc = [];
            for (let i = 1; i < p.length - 1; i++) {
                let dx = p[i - 1].x - p[i + 1].x;
                let dy = p[i - 1].y - p[i + 1].y;
                pc[i] = [
                    { x: p[i].x - dx * t, y: p[i].y - dy * t },
                    { x: p[i].x + dx * t, y: p[i].y + dy * t },
                ];
            }

            let d = `M${p[0].x},${p[0].y} Q${pc[1][1].x},${pc[1][1].y}, ${p[1].x},${p[1].y} `;
            if (p.length > 2) {
                for (var i = 1; i < p.length - 2; i++) {
                    d += `C${pc[i][0].x}, ${pc[i][0].y}, ${pc[i + 1][1].x}, ${pc[i + 1][1].y}, ${p[i + 1].x},${
                        p[i + 1].y
                    }`;
                }
                let n = p.length - 1;
                d += `Q${pc[n - 1][0].x}, ${pc[n - 1][0].y}, ${p[n].x}, ${p[n].y}`;
            }
            return d;
        }
    }

    complete() {
        this.main_svg.append(this.tmp_svg.childNodes[0]);
        this.pointer_ignore();
        clearTimeout(this.t);
    }

    pointer_ignore() {
        (this.main_svg.childNodes[0] as SVGPathElement).style.pointerEvents = "all";
        this.tmp_svg.style.pointerEvents = "none";
        this.style.pointerEvents = "none";
        this.parentElement.style.pointerEvents = "none";
    }

    set_v(v: string) {
        let x = JSON5.parse(v);
        this.width = x.w;
        this.height = x.h;
        this.main_svg.setAttribute("width", String(this.width));
        this.main_svg.setAttribute("height", String(this.height));
        this.tmp_svg.setAttribute("width", String(this.width));
        this.tmp_svg.setAttribute("height", String(this.height));
        this.main_svg.innerHTML = x.i;
        let tr = this.main_svg.children[0].getAttribute("transform");
        tr = tr.replace("translate(", "").replace(")", "");
        this.ox = Number(tr.split(",")[0]);
        this.oy = Number(tr.split(",")[1]);
        this.pointer_ignore();
    }

    get value() {
        return JSON.stringify({ i: this.main_svg.innerHTML, w: this.width, h: this.height });
    }

    set value(v: string) {
        this.set_v(v);
    }

    clip() {
        let w = 0;
        if (this.main_svg.children[0].getAttribute("stroke-width")) {
            w = Number(this.main_svg.children[0].getAttribute("stroke-width").match(/\d*/)[0]) / 2;
        }
        let min_x = this.main_svg.children[0].getBoundingClientRect().left,
            min_y = this.main_svg.children[0].getBoundingClientRect().top,
            max_x = this.main_svg.children[0].getBoundingClientRect().right,
            max_y = this.main_svg.children[0].getBoundingClientRect().bottom;
        let els = this.main_svg.children;
        for (let el of els) {
            let b = el.getBoundingClientRect();
            if (b.left < min_x) min_x = b.left;
            if (b.top < min_y) min_y = b.top;
            if (b.right > max_x) max_x = b.right;
            if (b.bottom > max_y) max_y = b.bottom;
        }
        min_x = (min_x - w) / zoom;
        min_y = (min_y - w) / zoom;
        max_x = (max_x + w) / zoom;
        max_y = (max_y + w) / zoom;
        let pb = this.getBoundingClientRect();
        if (this.parentElement.tagName == "X-X") {
            let pel = this.parentElement;
            pel.style.left = pel.offsetLeft + (min_x - pb.left / zoom) + "px";
            pel.style.top = pel.offsetTop + (min_y - pb.top / zoom) + "px";
        }
        this.ox -= min_x - pb.left / zoom;
        this.oy -= min_y - pb.top / zoom;
        for (let el of els) {
            let t = `translate(${this.ox},${this.oy})`;
            el.setAttribute("transform", t + " " + (el.getAttribute("transform") || ""));
        }

        this.width = max_x - min_x;
        this.height = max_y - min_y;
        this.main_svg.setAttribute("width", String(this.width));
        this.main_svg.setAttribute("height", String(this.height));
        this.tmp_svg.setAttribute("width", String(this.width));
        this.tmp_svg.setAttribute("height", String(this.height));
    }
}

window.customElements.define("x-draw", draw);

// 色彩选择器
import color from "color";

/** 取色器 */
class xcolor extends HTMLElement {
    constructor() {
        super();
    }

    c = "#ffffff";
    els = {
        broad: null as HTMLElement,
        bg0: null as HTMLElement,
        pb: null as HTMLElement,
        range: null as HTMLElement,
        pr: null as HTMLElement,
        arange: null as HTMLElement,
        par: null as HTMLElement,
        c0: null as HTMLElement,
        ci: null as HTMLInputElement,
    };

    connectedCallback() {
        if (this.getAttribute("value")) {
            this.c = this.getAttribute("value");
            this.set_v(this.c);
        }
        let color_e: { o: { x: number; y: number }; c: { x: number; y: number }; t: HTMLElement } = null;
        const hsva = { h: 0, s: 0, l: 0, a: 1 };

        const pel = this;
        const broad = (this.els.broad = createEl("div"));
        const bg0 = (this.els.bg0 = createEl("div"));
        const pb = (this.els.pb = createEl("div"));
        const range = (this.els.range = createEl("div"));
        const pr = (this.els.pr = createEl("div"));
        const arange = (this.els.arange = createEl("div"));
        const par = (this.els.par = createEl("div"));
        const cb = createEl("div");
        const c0 = (this.els.c0 = createEl("div"));
        const ci = (this.els.ci = createEl("input"));

        pel.classList.add("color");

        broad.classList.add("broad");
        range.classList.add("range");
        arange.classList.add("range");

        broad.append(bg0);
        bg0.style.background = `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(255, 255, 255) 0%, hsl(0,100%,50%) 100%)`;
        pel.append(broad);

        pb.classList.add("color_pointer");
        bg0.append(pb);

        pel.append(range);

        pr.classList.add("color_range_p");
        range.append(pr);

        arange.style.background = this.msk(
            `linear-gradient(to right, ${color.hsv(hsva.h, hsva.s, hsva.l).hex()} 0%, #0000 100%)`
        );
        pel.append(arange);

        par.classList.add("color_range_p");
        arange.append(par);

        pel.append(cb);
        cb.classList.add("color_bar");
        cb.append(c0);
        cb.append(ci);
        ci.onchange = () => {
            this.value = ci.value;
        };
        c0.onclick = () => {
            let div = createEl("div");
            const v = this.value;
            div.style.background = c0.style.background;
            div.onclick = () => {
                this.value = v;
            };
            ci.after(div);
        };

        range.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: range };
        };
        arange.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: arange };
        };
        bg0.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: bg0 };
        };
        const f = (e: PointerEvent) => {
            if (color_e.t == range) {
                let x = (e.clientX - color_e.c.x + color_e.o.x) / range.offsetWidth;
                if (x < 0) x = 0;
                if (x > 1) x = 1;
                pr.style.left = x * range.offsetWidth + "px";
                let h = Math.round(360 * x);
                if (h < 0) h = 0;
                if (h >= 360) h = 0;
                hsva.h = h;
                bg0.style.background = `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(255, 255, 255) 0%, hsl(${h},100%,50%) 100%)`;
            } else if (color_e.t == arange) {
                let x = (e.clientX - color_e.c.x + color_e.o.x) / arange.offsetWidth;
                if (x < 0) x = 0;
                if (x > 1) x = 1;
                par.style.left = x * arange.offsetWidth + "px";
                hsva.a = 1 - x;
            } else if (color_e.t == bg0) {
                let x = (e.clientX - color_e.c.x + color_e.o.x) / bg0.offsetWidth;
                let y = (e.clientY - color_e.c.y + color_e.o.y) / bg0.offsetHeight;
                if (x < 0) x = 0;
                if (x > 1) x = 1;
                if (y < 0) y = 0;
                if (y > 1) y = 1;
                pb.style.left = x * bg0.offsetWidth + "px";
                pb.style.top = y * bg0.offsetHeight + "px";
                hsva.s = x * 100;
                hsva.l = (1 - y) * 100;
            }
            arange.style.background = this.msk(
                `linear-gradient(to right, ${color.hsv(hsva.h, hsva.s, hsva.l).hex()} 0%, #0000 100%)`
            );
            let hsv = color.hsv(hsva.h, hsva.s, hsva.l).alpha(hsva.a);
            c0.style.background = this.msk(`linear-gradient(${hsv.hexa()},${hsv.hexa()})`);
            pb.style.backgroundColor = `${hsv.rgb().string()}`;
            this.c = hsv.hexa();

            ci.value = hsv.hexa();

            this.dispatchEvent(new InputEvent("input"));
        };
        document.addEventListener("pointermove", (e) => {
            if (!color_e) return;
            f(e);
            range.style.cursor = arange.style.cursor = broad.style.cursor = "none";
        });
        document.addEventListener("pointerup", (e) => {
            if (!color_e) return;
            f(e);
            color_e = null;
            range.style.cursor = arange.style.cursor = broad.style.cursor = "";
        });
        this.value = "#000";
    }

    msk(t: string) {
        return `${t},
        conic-gradient(
                rgb(204, 204, 204) 25%,
                rgb(255, 255, 255) 0deg,
                rgb(255, 255, 255) 50%,
                rgb(204, 204, 204) 0deg,
                rgb(204, 204, 204) 75%,
                rgb(255, 255, 255) 0deg
            )
            0% 0% / 8px 8px`;
    }

    set_v(c: string) {
        let x = color(c);
        let hsv = x.hsv().array();

        this.els.pr.style.left = (hsv[0] / 360) * this.els.range.offsetWidth + "px";
        this.els.bg0.style.background = `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(255, 255, 255) 0%, hsl(${hsv[0]},100%,50%) 100%)`;

        this.els.pb.style.left = (hsv[1] / 100) * this.els.bg0.offsetWidth + "px";
        this.els.pb.style.top = ((100 - hsv[2]) / 100) * this.els.bg0.offsetHeight + "px";

        this.els.c0.style.background = this.msk(`linear-gradient(${x.hexa()},${x.hexa()})`);
        this.els.pb.style.backgroundColor = `${x.hexa()}`;
        this.els.arange.style.background = this.msk(`linear-gradient(to right, ${x.hex()} 0%, #0000 100%)`);
        this.els.par.style.left = (1 - (hsv?.[3] || 1)) * this.els.arange.offsetWidth + "px";

        this.els.ci.value = x.hexa();
    }

    get value() {
        return this.c;
    }
    set value(s) {
        this.c = s;
        this.set_v(s);
    }
}

window.customElements.define("x-color", xcolor);
class xdraw_width extends HTMLElement {
    constructor() {
        super();
    }
    c = NaN;
    max = 20;
    min = 1;
    step = 1;
    els = {
        range: null as HTMLElement,
        pr: null as HTMLElement,
    };

    connectedCallback() {
        if (this.getAttribute("value")) {
            this.c = Number(this.getAttribute("value"));
            this.set_v(this.c);
        }
        let color_e: { o: { x: number; y: number }; c: { x: number; y: number }; t: HTMLElement } = null;
        const pel = this;
        const range = (this.els.range = createEl("div"));
        const pr = (this.els.pr = createEl("div"));

        pel.append(range);

        range.append(pr);

        range.onpointerdown = (e) => {
            e.preventDefault();
            color_e = { o: { x: e.offsetX, y: e.offsetY }, c: { x: e.clientX, y: e.clientY }, t: range };
        };
        const f = (e: PointerEvent) => {
            let x = (e.clientX - color_e.c.x + color_e.o.x) / range.offsetWidth;
            if (x < 0) x = 0;
            if (x > 1) x = 1;
            let v = (this.max - this.min) / this.step;
            x = Math.round(x * v) / v;
            pr.style.left = x * range.offsetWidth + "px";

            this.c = this.min + x * v;
            pr.style.width = pr.style.height = this.c + "px";

            this.dispatchEvent(new InputEvent("input"));
        };
        document.addEventListener("pointermove", (e) => {
            if (!color_e) return;
            f(e);
        });
        document.addEventListener("pointerup", (e) => {
            if (!color_e) return;
            f(e);
            color_e = null;
        });

        this.set_v(5);
    }

    set_v(c: number) {
        c = Math.min(this.max, Math.max(this.min, c));
        let v = (this.max - this.min) / this.step;
        let x = (c - this.min) / (this.max - this.min);
        x = Math.round(x * v) / v;
        this.els.pr.style.left = x * this.els.range.offsetWidth + "px";

        this.c = this.min + x * v;
        this.els.pr.style.width = this.els.pr.style.height = this.c + "px";
    }

    get value() {
        return this.c;
    }
    set value(s) {
        this.c = Number(s);
        this.set_v(s);
    }
    set color(s: string) {
        (<HTMLDivElement>this.querySelector("div > div")).style.background = s;
    }
}

window.customElements.define("x-draw-width", xdraw_width);

/** 双链元素 */
class xlink extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const id = this.getAttribute("id");
        if (!集.链接[id] && !this.getAttribute("naid")) {
            link(id).add();
        }
        this.onpointerenter = () => {
            show_link_value_bar(this);
        };
    }
}

window.customElements.define("x-link", xlink);

/** 展示元素值栏 */
class link_value extends HTMLElement {
    constructor() {
        super();
    }

    v: HTMLElement;
    _id: string;

    connectedCallback() {
        const add_el = createEl("img");
        const down_el = createEl("img");
        this.v = createEl("div");
        const c = createEl("div");
        c.append(down_el, this.v, add_el);
        this.append(c);

        add_el.src = add_svg;
        down_el.src = minus_svg;
        add_el.onclick = () => {
            link("0").value(this._id, 0.1);
            this.v.innerHTML = "";
            this.v.append(link_value_text(集.链接[0][this._id].value));
            now_data_id = "0";
            add_bci(get_link_el_by_id(this._id));
        };
        down_el.onclick = () => {
            link("0").value(this._id, -0.1);
            this.v.innerHTML = "";
            this.v.append(link_value_text(集.链接[0][this._id].value));
            now_data_id = "0";
            add_bci(get_link_el_by_id(this._id));
        };

        const vl = createEl("div");
        this.append(vl);
        let v_text = (i: string) => {
            let span = link_value_text(link(this._id).get()[i].value);
            span.innerText = `#${i} ` + span.innerText;
            return span;
        };
        this.v.onclick = () => {
            // 展示链接
            vl.innerHTML = "";
            for (let i in link(this._id).get()) {
                if (i == "0") continue;
                let el = createEl("div");
                vl.append(el);
                let n = createEl("div");
                n.append(v_text(i));
                el.onpointerover = (e) => {
                    set_viewer_posi(e.clientX, e.clientY);
                    move_to_x_link(get_x_by_id(i));
                };
                n.onpointerup = () => {
                    jump_to_x_link(get_x_by_id(i));
                };
                let rm = createEl("div");
                rm.innerHTML = icon(close_svg);
                rm.onclick = () => {
                    link(this._id).rm(i);
                    el.remove();
                };
                const add_el = createEl("div");
                const down_el = createEl("div");

                add_el.innerHTML = icon(add_svg);
                down_el.innerHTML = icon(minus_svg);
                add_el.onclick = () => {
                    link(this._id).value(i, 0.1);
                    n.innerHTML = "";
                    n.append(v_text(i));
                };
                down_el.onclick = () => {
                    link(this._id).value(i, -0.1);
                    n.innerHTML = "";
                    n.append(v_text(i));
                };
                el.append(n, add_el, rm, down_el);
            }

            this.style.top = el_offset(this).y - vl.offsetHeight + "px";

            // 搜索
            let v = "";
            let el = get_x_by_id(this._id);
            if (el.tagName == "X-X") {
                let w = (v: data) => {
                    for (let i of v) {
                        if (i.type == "X-MD") {
                            return JSON5.parse(i.value).text;
                        } else {
                            if (i.子元素) return w(i.子元素);
                            else return "";
                        }
                    }
                };
                v = w(get_x_by_id(this._id).value);
            } else {
                v = el.innerText;
            }
            let l = search([v], "str");
            show_search_l(l, this._id);

            search_el.value = `s '${v}'`;
            search_el.focus();
            search_el.selectionStart = 3;
            search_el.selectionEnd = search_el.value.length - 1;

            let x = el_offset(this, document.body).x,
                y = el_offset(this, document.body).y - search_pel.getBoundingClientRect().height;

            search_pel.style.left = x + "px";
            search_pel.style.top = y + "px";
            search_pel.style.width = "200px";
            search_pel.classList.add("搜索展示");
        };
    }

    set elid(id: string) {
        this._id = id;
        link("0").衰减();
        let v = link(id).get_v();
        if (v) {
            this.v.innerHTML = "";
            this.v.append(link_value_text(link(id).get_v()));
        } else {
            this.v.innerText = "/";
        }
    }
    get elid() {
        return this._id;
    }

    set show_ctrl(v: boolean) {
        if (v) {
            this.classList.remove("hide_link_ctrl");
        } else {
            this.classList.add("hide_link_ctrl");
        }
    }
}

window.customElements.define("x-link-value", link_value);

/** 录音元素 */
class record extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.id) this.id = uuid_id();
        let mediaRecorder: MediaRecorder = null;
        let i = createEl("input");
        i.type = "checkbox";
        let t = 0;
        i.onclick = () => {
            if (i.checked) {
                navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
                    let chunks = [];
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start();
                    mediaRecorder.onstart = () => {
                        console.log("开始录制");
                        t = new Date().getTime();
                        reflash();
                    };

                    mediaRecorder.ondataavailable = (e) => {
                        chunks.push(e.data);
                    };

                    mediaRecorder.onstop = () => {
                        console.log("录制结束");
                        let blob = new Blob(chunks, { type: "audio/webm;codecs=opus" });
                        let a = new FileReader();
                        a.onload = () => {
                            let id = put_assets("", a.result as string);
                            let file = createEl("x-file");
                            this.parentElement.append(file);
                            file.value = JSON.stringify({ r: true, id });
                            this.remove();
                        };
                        a.readAsDataURL(blob);
                        stream.getAudioTracks()[0].stop();
                    };
                });
                i.classList.add("recording");
            } else {
                mediaRecorder.stop();
                i.classList.remove("recording");
            }
        };
        let time = createEl("div");
        this.append(i);
        this.append(time);
        let reflash = () => {
            let now = new Date().getTime();
            time.innerText = time_text(now - t).hms();
            if (mediaRecorder.state == "recording") requestAnimationFrame(reflash);
        };
    }
}

window.customElements.define("x-record", record);
/** 录音元素 */
class audio extends HTMLElement {
    constructor() {
        super();
    }

    audio: HTMLAudioElement;
    _value: string;

    connectedCallback() {
        if (!this.id) this.id = uuid_id();
        this.audio = createEl("audio");
        this.audio.style.display = "none";
        let button = createEl("div");
        button.classList.add("audio_button");
        let playtime = createEl("div");
        let jd = createEl("x-progress");
        jd.classList.add("audio_jd");
        let yl = createEl("div");
        yl.classList.add("audio_yl");
        let yl2 = createEl("div"); // 按钮
        let yl3 = createEl("x-progress"); // 滑槽
        let asr = createEl("div");
        this.append(this.audio);
        this.append(button, jd, playtime, yl, asr);
        button.innerHTML = icon(play_svg);
        button.onclick = () => {
            if (this.audio.paused) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        };
        this.audio.onplay = () => {
            button.innerHTML = icon(pause_svg);
        };
        this.audio.onpause = () => {
            button.innerHTML = icon(play_svg);
        };
        let show_t = (n: number, t: number) => {
            let t0 = time_text(n * 1000).hms();
            let t1 = time_text(t * 1000).hms();
            return `${t0}/${t1}`;
        };
        this.audio.oncanplay = () => {
            playtime.innerText = show_t(this.audio.currentTime, this.audio.duration);
        };
        this.audio.ontimeupdate = () => {
            playtime.innerText = show_t(this.audio.currentTime, this.audio.duration);
            jd.value = this.audio.currentTime / this.audio.duration;
        };
        jd.oninput = () => {
            this.audio.currentTime = this.audio.duration * jd.value;
        };

        this.audio.volume = 1;
        yl3.title = "100%";
        this.audio.onvolumechange = () => {
            yl3.value = this.audio.volume;
            yl_icon();
        };
        let yl_icon = () => {
            if (this.audio.volume == 0 || this.audio.muted) {
                yl2.innerHTML = icon(yl0_svg);
            } else if (this.audio.volume < 0.5) {
                yl2.innerHTML = icon(yl1_svg);
            } else {
                yl2.innerHTML = icon(yl2_svg);
            }
        };
        yl.onwheel = (e) => {
            let p = this.audio.volume;
            if (e.deltaY < 0) {
                p += 0.1;
            } else {
                p -= 0.1;
            }
            p = clip(p, 0, 1);
            this.audio.volume = p;
        };
        yl.append(yl3, yl2);
        yl2.innerHTML = icon(yl2_svg);
        yl2.onclick = () => {
            this.audio.muted = !this.audio.muted;
            yl_icon();
        };
        yl3.oninput = () => {
            let p = yl3.value;
            this.audio.volume = p;

            yl3.title = `${Math.round(p * 100)}%`;
        };

        asr.innerHTML = icon(asr_svg);
        asr.classList.add("asr");
        asr.onclick = () => {
            audio_to_text(this.audio, this.id);
        };
    }

    set value(v) {
        this._value = v;
        this.audio.src = v;
    }
    get value() {
        return this._value;
    }
}

window.customElements.define("x-audio", audio);

ignore_el.push("x-audio");

function audio_to_text(el: HTMLAudioElement, id: string) {
    let arr = el.src.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = window.atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    let blob = new Blob([u8arr], { type: mime });

    const form = new FormData();
    form.append("file", blob, "x.flac");
    fetch(store.asr.url, {
        method: "POST",
        body: form,
    })
        .then((r) => r.json())
        .then(async (j) => {
            console.log(j);
            let pel = createEl("x-x");
            pel.style.left = el_offset2(el.parentElement, O).x + "px";
            pel.style.top = el_offset2(el.parentElement, O).y + el_offset2(el.parentElement, O).h + "px";
            z.push(pel);
            if (j.language == "zh" && navigator.language == "zh-CN") {
                let t = (await import("../../lib/hant2hans")).default;
                for (let i of j.segments) {
                    i.text = t(i.text);
                }
            }
            for (let i of j.segments) {
                let x = createEl("x-x");
                z.push(x, pel);
                let md = createEl("x-md");
                x.append(md);
                let mdtext = `[${i.start}](#${id}:${i.start})${i.text}`;
                md.value = JSON.stringify({ type: "p", text: mdtext });
            }
            pel.classList.add("flex-column");
        });
}

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/** 3d元素 */
class three extends HTMLElement {
    constructor() {
        super();
    }

    _value: string;
    div: HTMLDivElement;
    scene: THREE.Scene;
    loader: GLTFLoader;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.Renderer;

    connectedCallback() {
        this.div = createEl("div");
        this.append(this.div);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.loader = new GLTFLoader();
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.div.appendChild(this.renderer.domElement);

        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.camera.position.set(0, 0, 5);
        controls.update();

        let animate = () => {
            requestAnimationFrame(animate);
            if (模式 != "浏览") return;
            controls.update();
            this.renderer.setSize(this.offsetWidth, this.offsetHeight);
            this.camera.aspect = this.offsetWidth / this.offsetHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.render(this.scene, this.camera);
        };
        animate();

        this.camera.position.z = 5;

        this.renderer.render(this.scene, this.camera);
    }

    async set_m() {
        const url = 集.assets[this._value];
        this.loader.load(url.base64, (gltf) => {
            this.scene.add(gltf.scene);
            this.renderer.render(this.scene, this.camera);
        });
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-three", three);

ignore_el.push("x-three");
/** 3d元素 */
class img extends HTMLElement {
    constructor() {
        super();
    }

    img: HTMLImageElement;

    connectedCallback() {
        this.img = createEl("img");
        this.append(this.img);
        let ocr = createEl("div");
        ocr.innerHTML = icon(ocr_svg);
        ocr.onclick = () => {
            to_text(this.img);
        };
        this.append(ocr);
    }
    set value(s: string) {
        this.img.src = s;
    }
}

window.customElements.define("x-img", img);

async function to_text(img: HTMLImageElement | HTMLCanvasElement) {
    if (!ocr_init) await ocr_start();
    let canvas = createEl("canvas");
    let w = (img as HTMLImageElement).naturalWidth || img.width,
        h = (img as HTMLImageElement).naturalHeight || img.height;
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0);
    ocr.ocr(canvas.getContext("2d").getImageData(0, 0, w, h)).then((v) => {
        let tl = [];
        let p = el_offset2(img, O);
        let pxel = createEl("x-x");
        pxel.id = uuid_id();
        pxel.style.left = p.x + "px";
        pxel.style.top = p.y + "px";
        pxel.style.color = "transparent";
        pxel.style.textAlign = "justify";
        pxel.style.textAlignLast = "justify";
        pxel.style.fontSize = "12px";
        z.push(pxel);
        for (let i of v) {
            if (!i.text) continue;
            tl.push(i.text);
            let x0 = i.box[0][0];
            let y0 = i.box[0][1];
            let x1 = i.box[2][0];
            let y1 = i.box[2][1];
            let xel = createEl("x-x");
            xel.style.left = x0 + "px";
            xel.style.top = y0 + "px";
            xel.style.width = x1 - x0 + "px";
            xel.style.height = y1 - y0 + "px";
            z.push(xel, pxel);
            var md = createEl("x-md");
            xel.append(md);
            let v = JSON.stringify({ type: "p", text: i.text });
            md.value = v;
        }
        console.log(tl);
    });
}

var ocr_init = false;
var ocr;

var imported_index: { [key: string]: { loaded: boolean; el: HTMLScriptElement } } = {};

async function import_script(url: string) {
    if (imported_index[url])
        return new Promise((re, rj) => {
            if (imported_index[url].loaded) {
                re(true);
            } else
                imported_index[url].el.addEventListener("load", () => {
                    re(true);
                });
        });
    let script = createEl("script");
    script.src = url;
    console.log(url);
    document.body.append(script);
    imported_index[url] = { loaded: false, el: script };
    return new Promise((re, rj) => {
        script.addEventListener("load", () => {
            imported_index[url].loaded = true;
            re(true);
        });
    });
}

async function ocr_start() {
    await import_script("https://unpkg.com/opencv.js@1.2.1/opencv.js");
    await import_script("https://unpkg.com/onnxruntime-web@1.13.1/dist/ort.min.js");
    ocr = (await import("../../ai/ocr")).default;
    var dic = (await import("../../public/ocr/ppocr_keys_v1.txt?raw")).default;
    await ocr.init({
        det_path: "./ocr/ppocr_det.onnx",
        rec_path: "./ocr/ppocr_rec.onnx",
        dic: dic,
        dev: false,
        node: true,
    });
    ocr_init = true;
}

// geogebra
class ggb extends HTMLElement {
    constructor() {
        super();
    }

    _value;
    applet;
    p;
    div: HTMLElement;

    connectedCallback() {
        let xel = this.parentElement.parentElement.parentElement;
        this.p = {
            id: this.getid(),
            width: parseFloat(xel.style.width) || 500,
            height: parseFloat(xel.style.height) || 500,
            scale: 1,
            showResetIcon: true,
            borderColor: "white",
            language: "cn",
            ggbBase64: "",
            // showToolBar: true,
        };
        // import_script("https://www.geogebra.org/apps/deployggb.js").then(() => {
        //     this.applet = new window["GGBApplet"](this.p, "5.0");
        // });
        let bar = createEl("div");
        bar.classList.add("ggb_bar");
        let save = createEl("div");
        save.innerHTML = icon(save_svg);
        bar.append(save);
        this.append(bar);
        bar.onclick = () => {
            window[this.p.id]["getBase64"]((v) => {
                console.log(v);
                let obase = 集.assets[this._value].base64;
                集.assets[this._value].base64 = obase.match(/(data:.*?;base64,)/)[1] + v;
                let sha = CryptoJS.SHA256(集.assets[this._value].base64).toString();
                集.assets[this._value].sha = sha;
                data_changed();
            });
        };
        this.div = createEl("div");
        this.append(this.div);
        let r = new ResizeObserver((e) => {
            if (this.applet) {
                this.applet.getAppletObject().setSize(e[0].contentRect.width, e[0].contentRect.height);
            }
        });
        r.observe(this);
    }
    getid() {
        return `ggb${this._value}${临时中转站.contains(this) ? "zzz" : ""}${assets_el.contains(this) ? "zy" : ""}`;
    }
    async set_m() {
        const url = 集.assets[this._value];
        this.p.id = this.getid();
        this.p.ggbBase64 = url.base64;
        import_script("https://www.geogebra.org/apps/deployggb.js").then(() => {
            this.applet.inject(this.div);
        });
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-ggb", ggb);
ignore_el.push("x-ggb");

class calendar extends HTMLElement {
    constructor() {
        super();
    }

    _value;
    applet;
    p;

    connectedCallback() {
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();
        let day = today.getDate();
        let bar = createEl("div");
        bar.classList.add("calendar_bar");
        let last = createEl("div");
        let next = createEl("div");
        let text = createEl("div");
        last.innerHTML = icon(left_svg);
        next.innerHTML = icon(right_svg);
        bar.append(last, text, next);
        last.onclick = () => {
            month--;
            if (month == -1) {
                month = 11;
                year--;
            }
            render(year, month, day);
        };
        next.onclick = () => {
            month++;
            if (month == 12) {
                month = 0;
                year++;
            }
            render(year, month, day);
        };
        let c = createEl("div");
        c.classList.add("calendar");

        let render = (year: number, month: number, day: number) => {
            text.innerText = `${year} / ${month + 1} / ${day}`;
            let date_list: Date[] = [];
            let now_date = new Date(year, month, 1);
            while (now_date.getDay() != 0) {
                now_date = new Date(now_date.getTime() - 24 * 60 * 60 * 1000);
                date_list.unshift(now_date);
            }
            now_date = new Date(year, month, 1);
            while (now_date.getMonth() == month) {
                date_list.push(now_date);
                now_date = new Date(now_date.getTime() + 24 * 60 * 60 * 1000);
            }
            now_date = new Date(year, month, date_list[date_list.length - 1].getDate());
            while (now_date.getDay() != 6) {
                now_date = new Date(now_date.getTime() + 24 * 60 * 60 * 1000);
                date_list.push(now_date);
            }
            console.log(date_list);
            let pel = document.createDocumentFragment();
            let day_list = ["日", "一", "二", "三", "四", "五", "六"];
            for (let i of day_list) {
                let div = createEl("div");
                div.innerText = `${i}`;
                div.classList.add("calendar_week");
                pel.append(div);
            }
            for (let i of date_list) {
                let div = createEl("x-link");
                div.id = `${this.parentElement.id}:${i.toLocaleDateString()}`;
                div.setAttribute("naid", "true");
                div.innerText = `${i.getDate()}`;
                let schedule = createEl("div");
                schedule.classList.add("calendar_schedule");
                let links = link(div.id).get() || {};
                for (let i in links) {
                    if (i != "0") {
                        let x = createEl("div");
                        schedule.append(x);
                    }
                }
                div.append(schedule);
                if (i.getMonth() == month) {
                    div.classList.add("calendar_month");
                }
                if (
                    i.getDate() == today.getDate() &&
                    i.getMonth() == today.getMonth() &&
                    i.getFullYear() == today.getFullYear()
                ) {
                    div.classList.add("calendar_today");
                }
                pel.append(div);
            }
            c.innerHTML = "";
            c.append(pel);
        };

        render(year, month, day);

        this.append(bar, c);
    }
    async set_m() {}

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-calendar", calendar);

class time_s extends HTMLElement {
    constructor() {
        super();
    }

    _value: number;
    h: HTMLInputElement;
    m: HTMLInputElement;
    s: HTMLInputElement;

    connectedCallback() {
        this.h = document.createElement("input");
        this.m = document.createElement("input");
        this.s = document.createElement("input");
        this.h.style.width = "1ch";
        this.h.inputMode = "tel";
        this.m.inputMode = "tel";
        this.s.inputMode = "tel";
        this.h.value = "--";
        this.m.value = "--";
        this.s.value = "--";
        this.h.onfocus = () => {
            this.h.select();
        };
        this.m.onfocus = () => {
            this.m.select();
        };
        this.s.onfocus = () => {
            this.s.select();
        };
        this.h.oninput = () => {
            if (isNaN(Number(this.h.value))) {
                this.h.value = String(Math.floor(this._value / 1000 / 60 / 60));
            } else {
                this.h.style.width = this.h.value.length + "ch";
            }
        };
        this.m.oninput = () => {
            if (isNaN(Number(this.m.value))) {
                this.m.value = String(Math.floor(this._value / 1000 / 60) % 6).padStart(2, "0");
            } else {
                if (Number(this.m.value) >= 60) {
                    this.value = this.value;
                }
            }
        };
        this.s.oninput = () => {
            if (isNaN(Number(this.s.value))) {
                this.s.value = String(Math.floor(this._value / 1000) % 60).padStart(2, "0");
            } else {
                if (Number(this.s.value) >= 60) {
                    this.value = this.value;
                }
            }
        };
        this.m.onblur = () => {
            this.m.value = this.m.value.padStart(2, "0");
        };
        this.s.onblur = () => {
            this.s.value = this.s.value.padStart(2, "0");
        };
        this.h.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowRight":
                    this.m.select();
                    break;
            }
        };
        this.m.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowRight":
                    this.s.select();
                    break;
                case "ArrowLeft":
                    this.h.select();
                    break;
            }
        };
        this.s.onkeyup = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.m.select();
                    break;
            }
        };
        this.append(this.h, ":", this.m, ":", this.s);
    }

    set value(time: number) {
        this._value = time;
        let h = Math.floor(time / 1000 / 60 / 60);
        let m = Math.floor(time / 1000 / 60) % 60;
        let s = Math.floor(time / 1000) % 60;
        this.h.value = String(h);
        this.m.value = String(m).padStart(2, "0");
        this.s.value = String(s).padStart(2, "0");
        this.h.style.width = String(h).length + "ch";
    }

    get value() {
        return (
            ((Number(this.h.value) || 0) * 60 * 60 + (Number(this.m.value) || 0) * 60 + (Number(this.s.value) || 0)) *
            1000
        );
    }
}

window.customElements.define("time-b", time_s);

class time extends HTMLElement {
    constructor() {
        super();
    }

    _value: string;
    _value2: { pro: number; end: number; run: number[]; countdown: boolean } = {
        pro: 0,
        end: 0,
        run: [],
        countdown: false,
    };
    count_down: HTMLInputElement;
    process: time_s;
    end: HTMLInputElement;
    time_t: HTMLDivElement;
    start_b: HTMLElement;
    time_setting: HTMLElement;
    time_group: HTMLElement;
    jd: progress2;

    connectedCallback() {
        this.count_down = createEl("input");
        this.count_down.type = "checkbox";
        this.process = createEl("time-b");
        this.end = createEl("input");
        this.end.type = "datetime-local";
        this.count_down.oninput = () => {
            this._value2.countdown = this.count_down.checked;
            this._value = JSON.stringify(this._value2);
        };
        this.process.oninput = () => {
            if (this.process.value) {
                let t = this.process.value;
                this._value2.pro = t;
            } else {
                this._value2.pro = 0;
            }
            this._value = JSON.stringify(this._value2);
        };
        this.end.oninput = () => {
            if (this.end.value) {
                this._value2.end = new Date(this.end.value).getTime();
            } else {
                this._value2.end = 0;
            }
            this._value = JSON.stringify(this._value2);
        };
        this.start_b = createEl("div");
        this.start_b.innerHTML = icon(play_svg);
        this.start_b.classList.add("time_play");
        this.start_b.onclick = () => {
            this.classList.add("x-time");
            this._value2.run.push(new Date().getTime());
            this._value = JSON.stringify(this._value2);
            this.render();
        };
        this.time_t = createEl("div");

        let jdt = createEl("div");
        this.jd = createEl("x-progress");
        jdt.append(this.time_t, this.jd);
        jdt.classList.add("time_jdt");

        this.time_setting = createEl("div");
        this.time_group = createEl("div");
        this.time_group.append(this.process, this.end);
        this.time_setting.append(this.count_down, this.time_group);
        this.append(this.start_b, this.time_setting, jdt);
    }

    is_no = false;
    render() {
        let no = (t: string) => {
            if (this.is_no) return;
            this.is_no = true;
            put_toast(`计时器已${t}`);
            Notification.requestPermission(() => {
                new Notification(`计时器已${t}`, {
                    body: `${get_title()} 中的${this._value2.countdown ? "倒" : ""}计时器已${t}`,
                });
            });
        };
        let now = new Date().getTime();
        if (this._value2.countdown) {
            if (this._value2.end) {
                let t = this._value2.end - now;
                this.time_t.innerText = time_text(Math.max(0, t)).hms();
                this.jd.value = (this._value2.end - now) / (this._value2.end - this._value2.run[0]);
                if (t <= 0) {
                    no("停止");
                    this._value2.run = [];
                    this._value = JSON.stringify(this._value2);
                }
            } else {
                if (this._value2.run.length % 2 != 0) {
                    let t = this._value2.pro - this.add_times(this._value2.run, now);
                    this.time_t.innerText = time_text(Math.max(0, t)).hms();
                    this.jd.value = t / this._value2.pro;
                    if (t <= 0) {
                        no("停止");
                        this._value2.run = [];
                        this._value = JSON.stringify(this._value2);
                    }
                }
            }
        } else {
            if (this._value2.run.length % 2 != 0) {
                this.jd.value = this.add_times(this._value2.run, now) / this._value2.pro;
                this.time_t.innerText = time_text(this.add_times(this._value2.run, now)).hms();
                if (this.add_times(this._value2.run, now) > this._value2.pro) no("超时");
            }
        }
        if ((this._value2.countdown && this._value2.end) || this._value2.run.length % 2 != 0) {
            this.start_b.innerHTML = icon(pause_svg);
        } else {
            this.start_b.innerHTML = icon(play_svg);
        }
    }

    add_times(input_list: number[], now: number) {
        let list: number[] = [];
        for (let i of input_list) list.push(i);
        let t = 0;
        if (list.length % 2 != 0) {
            list.push(now);
        }
        for (let i = 0; i < list.length; i += 2) {
            t += list[i + 1] - list[i];
        }
        return t;
    }

    async set_m() {
        this._value2 = JSON5.parse(this._value);
        this.count_down.checked = this._value2.countdown;
        if (this._value2.pro) this.process.value = this._value2.pro;
        if (this._value2.end) {
            let t = new Date(this._value2.end).toLocaleString();
            t = t
                .slice(0, t.length - 3)
                .replaceAll("/", "-")
                .replace(" ", "T");
            this.end.value = t;
        }
    }

    get value() {
        return this._value;
    }
    set value(s) {
        this._value = s;
        this.set_m();
    }
}

window.customElements.define("x-time", time);

setInterval(() => {
    document.querySelectorAll("x-time").forEach((el: time) => {
        el.render();
    });
});

class link_arrow extends HTMLElement {
    constructor() {
        super();
    }
    svg: SVGSVGElement;
    r: MutationObserver;
    r2: ResizeObserver;
    _value: {
        start: { id: string; a: any; marker?: string };
        center: { id: string };
        end: { id: string; a: any; marker?: string };
    } = {
        start: { id: "", a: 0 },
        center: { id: "" },
        end: { id: "", a: null, marker: "point" },
    };
    connectedCallback() {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.append(this.svg);
        this.r = new MutationObserver((e) => {
            this.render(null);
        });
        this.r2 = new ResizeObserver((e) => {
            this.render(null);
        });
    }

    disconnectedCallback() {
        this.r.disconnect();
        this.r2.disconnect();
    }

    render(e: PointerEvent) {
        let xel = this.parentElement as x;
        let start_p = get_link_arrow_p(this._value.start.id, this._value.start.a);
        let end_p = this._value.end.id ? get_link_arrow_p(this._value.end.id, this._value.end.a) : e2p(e);
        let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let t = `translate(${-el_offset2(xel).x},${-el_offset2(xel).y})`;
        p.setAttribute("transform", t);
        let start_a = this._value.start.a;
        let end_a;
        if (typeof this._value?.end?.a == "number") end_a = this._value.end.a;
        else end_a = start_a < 4 ? (start_a + 2) % 4 : ((start_a - 4 + 2) % 4) + 4;
        if (e) {
            let el = e.target as HTMLElement;
            if (
                el.parentElement.getAttribute("data-id") != xel.id &&
                typeof el?.className == "string" &&
                el.className.includes("xxhandle") &&
                is_smallest_el(elFromId(el.parentElement.getAttribute("data-id")) as x)
            )
                end_a = Number(el.className.replace("xxhandle", "")) || end_a;
        }
        let start_ctrl = get_link_arrow_a(start_p, start_a),
            end_ctrl = get_link_arrow_a(end_p, end_a);
        let at = `M ${start_p.x} ${start_p.y} C ${start_ctrl.x} ${start_ctrl.y}, ${end_ctrl.x} ${end_ctrl.y}, ${end_p.x} ${end_p.y}`;
        p.setAttribute("d", at);
        if (this._value.start?.marker) {
            p.setAttribute("marker-start", `url(${arrow_markers_svg}#flowchart-${this._value.start?.marker}Start)`);
        }
        if (this._value?.end?.marker) {
            p.setAttribute("marker-end", `url(${arrow_markers_svg}#flowchart-${this._value?.end?.marker}End)`);
        }
        let cx = (start_p.x + 3 * start_ctrl.x + 3 * end_ctrl.x + end_p.x) / 8,
            cy = (start_p.y + 3 * start_ctrl.y + 3 * end_ctrl.y + end_p.y) / 8;
        if (this._value?.center?.id) {
            let el = elFromId(this._value?.center?.id);
            if (el) {
                let x = cx - el.offsetWidth / 2;
                let y = cy - el.offsetHeight / 2;
                el.style.left = x + "px";
                el.style.top = y + "px";
            }
        }
        this.svg.innerHTML = "";
        this.svg.append(p);
        let r = el_offset2(p, O);
        xel.style.left = r.x + "px";
        xel.style.top = r.y + "px";
        xel.style.width = r.w + "px";
        xel.style.height = r.h + "px";
        let t2 = `translate(${-r.x},${-r.y})`;
        p.setAttribute("transform", t2);

        p.ondblclick = () => {
            let x = createEl("x-x");
            x.id = uuid_id();
            z.push(x);
            if (!this._value["center"]) this._value["center"] = { id: "" };
            this._value.center.id = x.id;
            let md = createEl("x-md");
            x.append(md);
            md.edit = true;
            this.render(null);
        };
    }

    ob() {
        if (this._value.end.id) {
            this.r.observe(elFromId(this._value.start.id), { attributes: true, attributeFilter: ["style"] });
            this.r.observe(elFromId(this._value.end.id), { attributes: true, attributeFilter: ["style"] });
            this.r2.observe(elFromId(this._value.start.id));
            this.r2.observe(elFromId(this._value.end.id));
        }
    }

    get value() {
        return JSON.stringify(this._value);
    }

    set value(s) {
        this._value = JSON5.parse(s);
        this.ob();
    }
}

window.customElements.define("x-link-arrow", link_arrow);
