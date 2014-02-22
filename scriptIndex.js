function index_ctr($scope, $timeout, $window){
	$scope.active_menu = [false,false];
	$scope.open_searchs = false;
	$scope.product_view_selected = 'list';
	$scope.produtos = [{'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},]
	$scope.list_product_selected = $scope.produtos[0];
	$scope.product_selected = $scope.list_product_selected['img'][0];


	$scope.change_product_view = function(element){
		$scope.product_view_selected = element;
	}

	$scope.change_image_slide = function(img){
		$scope.product_selected = img;
	}
}