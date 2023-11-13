function createAndShowHtml(color, text, fontSize, border){
    document.getElementById('mainDiv').innerHTML = `
    <div ${createStyle(color, fontSize, border)}>${text}</div>
    `;
}

function createStyle(color, fontSize, border){
    return `style="${createbackgroundColor(color)} ${createFontSize(fontSize)} ${createBorder(border)}"`;
}
function createbackgroundColor(color){
    return `background-color: ${color};`;
}
function createFontSize(fontSize){
    return `font-size: ${fontSize}px;`;
}
function createBorder(border){
    return `border: ${border}px;`;
}