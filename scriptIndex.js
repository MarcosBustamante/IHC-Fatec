function index_ctr($scope){
	$scope.active_menu = [false,false];
	$scope.open_searchs = false;
	$scope.product_view_selected = 'list';
	$scope.produtos = [{'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},
					   {'name':'X-box One','img':'imgsTabela/xbox1.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro'},]

	$scope.change_product_view = function(element){
		$scope.product_view_selected = element;
	}
}