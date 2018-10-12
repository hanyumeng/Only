//菜单类
function MenuItem(obj){
	this.title = obj.title;//菜单上的文字
	this.href = obj.href ;//菜单对应的页面
	this.className = obj.className;//
	//this.parentMenu = obj.parentMenu;//父节点
	this.subClassName = obj.subClassName;//子菜单容器的类名
	this.children = [];//所有的子菜单
}

MenuItem.prototype.createUI = function(ulDom){
	//1、创建菜单本身的dom
	let liDom = document.createElement("li");
	liDom.className = this.className;
	let aDom = document.createElement("a");
	aDom.href = this.href;
	aDom.innerHTML = this.title;
	liDom.appendChild(aDom);
	ulDom.appendChild(liDom);
	
	//2、创建子菜单的dom
	if(this.children.length>0){
		//1）、创建子菜单的容器
		let subUlDom = document.createElement("ul");
		subUlDom.className = this.subClassName;
		liDom.appendChild(subUlDom);
		//2）、循环children，让每一个子菜单创建自身
		for(let i in this.children){
			this.children[i].createUI(subUlDom);
		}
	}	
}

MenuItem.prototype.appendChild = function(menuItem){
	this.children.push(menuItem);
}