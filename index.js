let root = new Node("1", null,"What area of life do you like(Science, Engineering)");
    let array = [];
    s = new Tree();
    s.addNode("1",root);
    let secondNode1 = new Node("2",root,"What area in science(Physical, chemical...)");
    let secondNode2 = new Node("2",root,"What department exactly in engineering");
    
    root.addChild("science",secondNode1);
    root.addChild("engineering",secondNode2);
    let thirdNode1 = new Node("3",secondNode1,"Which department in physical sciences(Maths, computer..)");
    let thirdNode2 = new Node("3",secondNode1,"Which department in chemical sciences(chemistry, biochemistry..)");
    let thirdNode3 = new Node("3",secondNode1,"Which department in biological sciences(botany, ziology, genetics)");
    secondNode1.addChild("physical", thirdNode1);
    secondNode1.addChild("chemical", thirdNode2);
    secondNode1.addChild("biological", thirdNode3);
    let thirdNode4 = new Node("3",secondNode2,"Are you an applied mechanics, thermodynamics or fluid mechanics person?");
    let thirdNode5 = new Node("3",secondNode2,"power, telecommunication or electronics??");
    let thirdNode6 = new Node("3",secondNode2,"mechatronics, control or software engineering??");
    secondNode2.addChild("mechanical", thirdNode4);
    secondNode2.addChild("electrical", thirdNode5); 
    secondNode2.addChild("systems", thirdNode6);
    let fourthNode1 = new Node("4", thirdNode1,"What do you in computer sciences?(web programming, ML or Networking)")
    let fourthNode2 = new Node("4", thirdNode1, "Focus: optics, mechanics  or electricity??");
    let fourthNode3 = new Node("4", thirdNode1, "pure, applied or maths and comp?");
    thirdNode1.addChild("computer sciences", fourthNode1);
    thirdNode1.addChild("physics", fourthNode2);
    thirdNode1.addChild("mathematics", fourthNode3);
    s.addNode("2",secondNode1);
    s.addNode("3",secondNode2);
    s.addNode("4", thirdNode1);
    s.addNode("5", thirdNode2);
    s.addNode("6", thirdNode3);
    s.addNode("7", thirdNode4);
    s.addNode("8", thirdNode5);
    s.addNode("9", thirdNode6);
    s.addNode("10", fourthNode1);
    s.addNode("11", fourthNode2);
    s.addNode("12", fourthNode3);
    let fourthNode4 = new Node("4", thirdNode2, "")
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
    if(this.parentNode.children[0].innerText in s.getNodes()){
        let node = s.getNodes()[this.parentNode.children[0].innerText];
        if(text in node.getChildren()){
            ShowDiv(document.getElementById(node.getChildren()[text].name),node.getChildren()[text].text)
        }else{
            changeBorder(document.getElementById(node.name));
        }
    }
    
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

function FillTree(){
    let root = new Node("1", null,"What area of life do you like(Science, Engineering)");
    let array = [];
    s = new Tree();
    s.addNode("1",root);
    let secondNode1 = new Node("2",root,"What area in science(Physical, chemical...)");
    let secondNode2 = new Node("2",root,"What department exactly in engineering");
    s.addNode("2",secondNode1);
    s.addNode("2",secondNode2);
    root.addChild("science",secondNode1);
    root.addChild("engineering",secondNode2);
    let thirdNode1 = new Node("3",secondNode1,"Which department in physical sciences(Maths, computer..)");
    let thirdNode2 = new Node("3",secondNode1,"Which department in chemical sciences(chemistry, biochemistry..)");
    let thirdNode3 = new Node("3",secondNode1,"Which department in biological sciences(botany, ziology, genetics)");
    secondNode1.addChild("physical", thirdNode1);
    secondNode1.addChild("chemical", thirdNode2);
    secondNode1.addChild("biological", thirdNode3);
    let thirdNode4 = new Node("3",secondNode2,"Are you an applied mechanics, thermodynamics or fluid mechanics person?");
    let thirdNode5 = new Node("3",secondNode2,"power, telecommunication or electronics??");
    let thirdNode6 = new Node("3",secondNode2,"mechatronics, control or software engineering??");
    secondNode2.addChild("mechanics", thirdNode4);
    secondNode2.addChild("electrical", thirdNode5); 
    secondNode2.addChild("systems", thirdNode6);
    let fourthNode1 = new Node("4", thirdNode1,"What do you in computer sciences?(web programming, ML or Networking)")
    let fourthNode2 = new Node("4", thirdMode1, "Focus: optics, mechanics  or electricity??");
    let fourthNode3 = new Node("4", thirdNode1, "pure, applied or maths and comp?");
    thirdNode1.addChild("computer sciences", fourthNode1);
    thirdNode1.addChild("physics", fourthNode2);
    thirdNode1.addChild("mathematics", fourthNode3);
}
function Tree(){
    this.node= Array();
    this.getRoot = () => {
        return this.root;
    }

    this.addNode = function(id,nod) {
        this.node[nod.text] = nod;
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