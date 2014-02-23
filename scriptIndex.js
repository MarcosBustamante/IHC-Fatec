function index_ctr($scope){
	$scope.active_menu = [false,false];
	$scope.open_searchs = false;
	$scope.product_view_selected = 'list';
	$scope.produtos = [{'name':'X-box One 1','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 2','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'distance':'500m','price':'R$ 2.930,00','shop':'Loja do Maria','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 3','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'distance':'500m','price':'R$ 2.830,00','shop':'Loja do Marcos','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 4','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Samara','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 5','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'distance':'500m','price':'R$ 2.270,00','shop':'Loja do Gustavo','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 6','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'distance':'500m','price':'R$ 2.250,00','shop':'Loja do Bia','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 7','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.200,00','shop':'Loja do Matheus','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 8','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'distance':'500m','price':'R$ 1.230,00','shop':'Loja do Adrielle','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One 9','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'distance':'500m','price':'R$ 2.130,00','shop':'Loja do Bustamante','street':'Rua 1 - 158, Centro'},]
	
	$scope.list_product_selected = $scope.produtos[0];
	$scope.product_selected = $scope.list_product_selected['img'][0];


	$scope.change_type_view = function(option){
		$scope.product_view_selected = option;
	}

	$scope.change_image_slide = function(img){
		$scope.product_selected = img;
	}

	$scope.selected_new_product = function(product){
		$scope.list_product_selected = product;
		$scope.product_selected = product['img'][0];
	}

	$scope.houver_new_product = function(product){
		$scope.list_product_houver = product;
	}
}