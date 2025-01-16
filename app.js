const editor = document.getElementById('editor')
const editorDesc = document.getElementById('editor-desc')
const preview = document.getElementById('preview')
const previewDesc = document.getElementById('preview-desc')
const expandEditorBtn = document.getElementById('editor-btn')
const expandPreviewBtn = document.getElementById('preview-btn')
const expandEditorIcon = document.querySelector('#expand-editor')
const expandPreviewIcon = document.querySelector('#expand-preview')
const trashBtn = document.getElementById('trash')

const rotate = document.getElementById('rotate')

var editorWidth = '800px'
var previewWidth = '1200px'

var editorExpanded = false
var previewExpanded = false
var rotated = false

editor.addEventListener('keyup', viewChange)
expandEditorBtn.addEventListener('click', expandEditor)
expandPreviewBtn.addEventListener('click', expandPreview)
rotate.addEventListener('click', rotateView)
trashBtn.addEventListener('click', deleteView)

editor.placeholder = `START TYPING HERE TO HIDE THESE
# Heading1
## Heading2
and so on..
**Bold**
_Italic_
\`code\`
\`\`\` multiline code \`\`\`
~~strikethrough~~
and many more...`;
editor.value = '';


function viewChange(event) {
    markdown = marked(event.target.value, {breaks: true})
    preview.innerHTML = markdown
}

function expandEditor (event) {
    if(editorExpanded === false && rotated === true){
    expandEditorIcon.classList = ''
    expandEditorIcon.classList.add('fas', 'fa-compress')
    editor.style.width = "90vw";
    editor.style.height = "90vh";
    editorDesc.style.width = "90vw";
    editorExpanded = true;
    } else if (editorExpanded === true && rotated === true){
    expandEditorIcon.classList = ''
    expandEditorIcon.classList.add('fas', 'fa-expand')
    editor.style.width = "40vw";
    editor.style.height = "90vh";
    editorDesc.style.width = "40vw";
    editorExpanded = false;
}

    if (editorExpanded === false && rotated === false) {
    expandEditorIcon.classList = ''
    expandEditorIcon.classList.add('fas', 'fa-compress')
    editor.style.width = "90vw";
    editor.style.height = "90vh";
    editorDesc.style.width = "90vw";
    // previewDesc.style.display = "none";
    // preview.style.display = "none";
    editorExpanded = true;
} else if (editorExpanded === true && rotated === false){
    expandEditorIcon.classList = ''
    expandEditorIcon.classList.add('fas', 'fa-expand')
    editor.style.width = null;
    editor.style.height = null;
    editorDesc.style.width = null;
    // previewDesc.style.display = null;
    // preview.style.display = null;
    editorExpanded = false;
}
}

function expandPreview (event) {
    if (previewExpanded === false && rotated=== true) {
    expandPreviewIcon.classList = ''
    expandPreviewIcon.classList.add('fas', 'fa-compress')
    preview.style.width = "90vw";
    preview.style.height = "85vh";
    preview.style.position = "absolute";
    preview.style.top = "8vh";
    preview.style.left = "5vw";
    preview.style.overflowY = "auto";
    previewDesc.style.width = "90vw";
    previewDesc.style.position = "absolute";
    previewDesc.style.height = "5vh";
    previewDesc.style.top = "3vh";
    previewDesc.style.left = "5vw";
    editorDesc.style.display = "none";
    editor.style.display = "none";
    document.querySelector('footer').style.paddingBottom = "-5px";
    previewExpanded = true;
} else if(previewExpanded === true && rotated === true) {
    expandPreviewIcon.classList = ''
    expandPreviewIcon.classList.add('fas', 'fa-expand')
    preview.style.width = "55vw";
    preview.style.height = "90vh";
    preview.style.position = null;
    preview.style.top = null;
    preview.style.left = null;
    preview.style.overflowY = null;
    previewDesc.style.width = "55vw";
    previewDesc.style.position = null;
    previewDesc.style.height = null;
    previewDesc.style.top = null;
    previewDesc.style.left = null;
    editorDesc.style.display = null;
    editor.style.display = null;
    document.querySelector('footer').style.paddingBottom = null;
    previewExpanded = false;
}
    if (previewExpanded === false && rotated === false) {
    expandPreviewIcon.classList = ''
    expandPreviewIcon.classList.add('fas', 'fa-compress')
    preview.style.width = "90vw";
    preview.style.height = "85vh";
    preview.style.position = "absolute";
    preview.style.top = "8vh";
    preview.style.left = "5vw";
    preview.style.overflowY = "auto";
    previewDesc.style.width = "90vw";
    previewDesc.style.position = "absolute";
    previewDesc.style.height = "5vh";
    previewDesc.style.top = "3vh";
    previewDesc.style.left = "5vw";
    // editorDesc.style.display = "none";
    // editor.style.display = "none";
    document.querySelector('footer').style.paddingBottom = "-5px";
    previewExpanded = true;
} else if(previewExpanded === true && rotated === false) {
    expandPreviewIcon.classList = ''
    expandPreviewIcon.classList.add('fas', 'fa-expand')
    preview.style.width = null;
    preview.style.height = null;
    preview.style.position = null;
    preview.style.top = null;
    preview.style.left = null;
    preview.style.overflowY = null;
    previewDesc.style.width = null;
    previewDesc.style.position = null;
    previewDesc.style.height = null;
    previewDesc.style.top = null;
    previewDesc.style.left = null;
    // editorDesc.style.display = null;
    // editor.style.display = null;
    document.querySelector('footer').style.paddingBottom = null;
    previewExpanded = false;
}
}

function rotateView() {
    if(rotated === false) {
       editorDesc.style.width = "40vw"
       editor.style.width = "40vw"
       editor.style.height = "90vh"
       previewDesc.style.width = "55vw"
       preview.style.width = "55vw";
       preview.style.height = "90vh";
       preview.style.overflowY = "auto";
       document.querySelector('main').style.flexDirection = "row"
       rotated = true
    }else{
        editorDesc.style.width = editorWidth
        editor.style.width = editorWidth
       editor.style.height = null
       previewDesc.style.width = previewWidth
       preview.style.width = previewWidth
       preview.style.height = null
       preview.style.overflowY = null;
       document.querySelector('main').style.flexDirection = "column"
       rotated = false
    }
}

function deleteView() {
    editor.value = '';
    preview.innerHTML = '';
}
