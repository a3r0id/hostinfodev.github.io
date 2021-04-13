(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
}("|  \"Spin around...\" | Web Art By @hostinfodev | Music: Perfect in a Way (Kaktus Einarsson Rework) by Booka Shade"));