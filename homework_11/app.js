var rootNode = document.getElementById("root");

function createTree(structure, root) {
    var ul = document.createElement("ul");
    
    root.appendChild(ul);

    for(var i = 0; i < structure.length; i++) {
        var li = document.createElement("li");
        var divTag = document.createElement("div");
        var iTag = document.createElement("i");
        var span = document.createElement("span");

        divTag.className = "folder";
        span.innerHTML = structure[i].title;

        ul.appendChild(li);
        li.appendChild(divTag);
        divTag.appendChild(iTag);
        divTag.appendChild(span);
        divTag.addEventListener("click", openChildren);

        if (structure[i].folder) {
            iTag.innerHTML = "folder";
            iTag.className = "material-icons material-icons-folder";
        } else {
            iTag.innerHTML = 'insert_drive_file';
            iTag.className = "material-icons material-icons-file";
        }
        if (structure[i].children) {
	        createTree(structure[i].children, li);
            li.lastChild.style.display = "none";
	    } 
        if (!structure[i].children && structure[i].folder) {
            var p = document.createElement("p");
            p.className = "message";
            p.innerHTML = "Folder is empty";
            p.style.display = "none";
            li.appendChild(p);
        }
    }
}
function openChildren() {
    if(this.nextSibling.style.display === "none") {
        this.nextSibling.style.display = "block";
        this.childNodes[0].innerHTML = "folder_open";
    } else {
        this.nextSibling.style.display = "none";
        this.childNodes[0].innerHTML = "folder"
    }
}

createTree(structure, rootNode);

rootNode.appendChild(rootNode);