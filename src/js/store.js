const STORAGE_KEY = 'todolist-vuejs'
export default{
	fetch(){
		if(JSON.parse(window.localStorage.getItem(STORAGE_KEY||'[]'))){
			return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
		}else{
			var theItems = new Array();
			return theItems;
		}
	},
	save(items){
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}
//	delete(items){
//		window.localStorage.removeItem(STORAGE_KEY, JSON.stringify(items));
////		theItems.splice(item, 1);
//	}
}
