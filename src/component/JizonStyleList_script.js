var elements = document.getElementsByClassName("treeExpandIcon");
for (var item of elements) {
    let nitem = item.parentElement.parentElement.children[1];
    nitem.addEventListener("transitionend", (e) => {
        treeSpreadDone(e, nitem);
    });
    item.onclick = (e) => {
        toggleHeight(e, nitem);
    };
}

function getElementOriginalHeight(element) {
    let resultheight = 0;
    for (let item of element.children) {
        resultheight += item.clientHeight;
    }
    return resultheight;
}

function toggleHeight(e, elementList) {
    if (elementList.style.height !== "0px") {
        elementList.style.height = getElementOriginalHeight(elementList) + "px";
        setTimeout(() => { elementList.style.height = "0px"; }, 5);
    }
    else {
        elementList.style.height = "0px";
        elementList.style.display = "flex";
        setTimeout(() => { elementList.style.height = getElementOriginalHeight(elementList) + "px"; }, 5);
    }
}

function treeSpreadDone(e, elementList) {
    if (elementList.style.height !== "0px")
        elementList.style.height = "auto";
    else
        elementList.style.display = "none";
}