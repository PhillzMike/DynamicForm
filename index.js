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
        getInputBox(s[i]).style.animation = 'none';
    }
    var first = document.getElementById("1");
    ShowDiv(first,root.text);
}
getInputBox = function(element){
    return element.children[1];
}
checkValidity = function(){
    if(array.includes(this.parentNode.id) && array[array.length-1] != this.parentNode.id){
         let indexOfElement = array.indexOf(this.parentNode.id);
         let i = array.length - 1;
        // array.splice(i,array.length-i+1);
        while(i> indexOfElement){
            HideDiv(document.getElementById(array[i]),"");
            i--;
        }
    }
    let text = this.value;
    if(this.parentNode.id in s.getNodes()){
        let node = s.getNodes()[this.parentNode.id];
        if(text in node.getChildren()){
            ShowDiv(document.getElementById(node.getChildren()[text].name),node.getChildren()[text].text)
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
    setTimeout(()=>{
        getInputBox(element).style.animation = '';
    },10);

    getInputBox(element).style.animation = 'none';
}

ShowDiv = function(divElement,text){
    divElement.style.display = "block";
    if(!array.includes(divElement.id)){
        array.push(divElement.id);
    }
    getLabel(divElement).innerHTML = text;
}
HideDiv = function(divElement, text){
    getInputBox(divElement).value = "";
    divElement.style.display = "none";
    let i = array.indexOf(divElement.id);
    array.pop();
    getLabel(divElement).innerHTML = text;
}
// changeDisplay = function(divElement, text){
//     if(divElement.style.display == "none"){
//         divElement.style.display = "block";
//         array.push(divElement.id);
//     }else{
       
//         console.log("ii" + i + "  array" + array.length);
//     }
    
// }



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