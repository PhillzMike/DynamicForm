let root = new Node("1", null,"How old are you??");
let array = [];
s = new Tree();
s.addNode("1",root);
let secondNode = new Node("2",root,"Small Boy");
s.addNode("2",secondNode);
root.addChild("7",secondNode);
window.onload = () => {
    let s = document.getElementsByClassName("input");
    for(let i = 0;i<s.length;i++){
        getInputBox(s[i]).addEventListener("mouseout", checkValidity);
        s[i].style.display = "none";
    }
    var first = document.getElementById("1");
    changeDisplay(first,root.text);
}
getInputBox = function(element){
    return element.children[1];
}
checkValidity = function(){
    if(array.includes(this.parentNode.id) && array[array.length-1] != this.parentNode.id){
        // let i = array.indexOf(this.id) + 1;
        // array.splice(i,array.length-i+1);
        while(i<array.length){
            changeDisplay(document.getElementById(array[i]),"");
        }
    }
    let text = this.value;
    if(this.parentNode.id in s.getNodes()){
        let node = s.getNodes()[this.parentNode.id];
        if(text in node.getChildren()){
            changeDisplay(document.getElementById(node.getChildren()[text].name),node.getChildren()[text].text)
        }else{
            changeBorder(document.getElementById(node.name));
        }
    }
    // if(array.length == 1){
    //     if(text in s.getChildren()){
    //         changeDisplay(document.getElementById(s.getChildren[text].name),s.getChildren[text].text)
            
    //     }else{
    //         changeBorder(document.getElementById(s.getChildren[text].name));
    //     }
    // }
    // else{
    //     let getNode = s.getChildren(getLabel(document.getElementById(array[array.length-2])).value);
    //     if(text in getNode.getChildren()){
    //         changeDisplay(document.getElementById(getNode.getChildren[text].name),getNode.getChildren[text].text)
    //     }else{
    //         changeBorder(document.getElementById(getNode.getChildren[text].name));
    //     }
    // }
    
}
getLabel = (element) => {
    return element.children[0];
}
changeBorder = function(element){
    element.style.borderColor = "red";
    element.style.animationName = "error";
    element.style.animationIterationCount = "2";
    element.style.animationDuration = "2s";
    //add animation .start
}
changeDisplay = function(divElement, text){
    if(divElement.style.display == "none"){
        divElement.style.display = "block";
        array.push(divElement.id);
    }else{
        divElement.style.display = "none";
        let i = array.indexOf(divElement.id) + 1;
        array.splice(i,1);
    }
    
    getLabel(divElement).innerHTML = text;
}



function FillTree(){
    
}
function Tree(){
    this.node= Array();
    this.getRoot = () => {
        return this.root;
    }

    this.addNode = function(id,nod) {
        this.node[id.toString()] = nod;
    }
    this.getNodes = () => {
        return this.node;
    }
}
function Node(name,predecessor,text){
    this.name = name;
    this.text = text;
    this.predecessor = predecessor;
    this.children = Array();
    this.getName = () =>{
        return name;
    }
    this.hasChildren = () => {
        return this.children.length > 0
    }
    this.addChild = function(rep,node) {
        this.children[rep.toString()] = node;
    }
    this.getChildren = () => {
        return this.children;
    }
}