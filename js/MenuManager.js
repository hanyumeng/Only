
//菜单管理类
function MenuManage(menuData){
	this.menuData = menuData;
	this.children=[];//子菜单对象。
}

MenuManage.prototype.appendChild = function(menuItem){
	this.children.push(menuItem);
}

MenuManage.prototype.createUI = function(ulDom){
	//创建所有菜单的外观
	for(let i in this.children){
		this.children[i].createUI(ulDom);
	}
}

//功能：创建子菜单对象（JavaScript）；
//参数：父菜单对象，子菜单数据
MenuManage.prototype.createSubMenu = function(parentMenu,menuItemObj){
	let menuItem = new MenuItem({
		title:menuItemObj.title,
		href:menuItemObj.href,
		className:menuItemObj.className,
		subClassName:menuItemObj.subClassName
	});
	parentMenu.appendChild(menuItem);
	
	for(let i in menuItemObj.children){
		this.createSubMenu(menuItem,menuItemObj.children[i]);
	}
}

MenuManage.prototype.createMenu =function(){
	//创建所有的菜单对象，并建立关系
	for(let i in this.menuData){
		this.createSubMenu(this,this.menuData[i]);
	}
}
