function index_ctr($scope, $window){
	$scope.active_menu = [false,false];
	$scope.product_view_selected = 'block';
	$scope.filter_mode = 'driving';
	$scope.sel_mode = 'dist';
	$scope.user = {'img':'img/user.png','first_name':'Camila','last_name':'Silveira'};
	$scope.products = [{'name':'X-box One 1','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 2','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.930,00','shop':'Loja do Maria','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 3','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.830,00','shop':'Loja do Marcos','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 4','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Samara','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 1','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 2','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.930,00','shop':'Loja do Maria','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 3','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.830,00','shop':'Loja do Marcos','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 1','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 2','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.930,00','shop':'Loja do Maria','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 3','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.830,00','shop':'Loja do Marcos','street':'Rua 1 - 158, Centro','comment':[]}]
	
	$scope.list_product_selected = $scope.products[0];
	$scope.image_selected = $scope.list_product_selected['img'][0];

	$scope.change_filter = function(filter){ 
		$scope.filter_mode = filter; 
	}

	$scope.change_mode = function(mode){ 
		$scope.sel_mode = mode; 
	}

	$scope.change_type_view = function(option){
		$scope.product_view_selected = option;
	}

	$scope.change_image_slide = function(img){
		$scope.image_selected = img;
	}

	$scope.selected_new_product = function(product){
		$scope.list_product_selected = product;
		$scope.image_selected = product['img'][0];
	}

	$scope.houver_new_product = function(product){
		$scope.list_product_houver = product;
	}

	$scope.open_comment = function(){
		$scope.show_comment = !$scope.show_comment;
		$scope.product_comment_is_empty = $scope.produtos.comment.length == 0;
	}

	$scope.save_comment = function(comment, product){
		if(comment){
			for (var i = product.comment.length; i > 0; i--) {
				product.comment[i] = product.comment[i-1];
			}
			product.comment[0]={
				'img':$scope.user.img,
				'first_name':$scope.user.first_name,
				'last_name':$scope.user.last_name,
				'comment': comment
			}
		}
	}

	$scope.delete_comment = function(list_comment, comment){
		var index = list_comment.indexOf(comment);
		list_comment.splice(index,1);
	}

	$scope.comment_block = function(product){
		$scope.list_product_selected = product;
		$scope.open_comment_block = true;

	}
}