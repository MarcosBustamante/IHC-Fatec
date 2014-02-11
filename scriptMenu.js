function MyCtr($scope){
	$scope.showMainMenu = false;
	$scope.showMenuConfig = false;
	
	$scope.statusMainMenu = function(){
		$scope.showMainMenu = !$scope.showMainMenu;
	}

	$scope.statusMenuConfig = function(){
		$scope.showMenuConfig = !$scope.showMenuConfig;
	}



	$scope.selectItem = function(produto){
		produto.is_selected = !produto.is_selected;	
	}

	//isso ira ser um JSON
	$scope.list = [
	{
		"id":0,
		"store":"Loja do Marcao",
		"name":"Bola 1",
		"url":"img/bola1.jpg",
		"distance":"1500 m",
		"price":"R$ 20,00",
	},
	{
		"id":1,
		"store":"Loja do Bustamante",
		"name":"Bola 2",
		"url":"img/bola2.jpg",
		"distance":"1000 m",
		"price":"R$ 30,00",
	},
	{
		"id":2,
		"store":"Loja do VIadao",
		"name":"Bola 3",
		"url":"img/bola3.jpg",
		"distance":"500 m",
		"price":"R$ 31,99",
	}
	];
}