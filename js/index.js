app = angular.module('FastFindApp', [] )

app.controller('intexCtrl', function($scope, $window){

	$scope.active_menu = [false,false];
	$scope.product_view_selected = 'list';
	$scope.filter_mode = 'driving';
	$scope.sel_mode = 'distance';
	$scope.map_is_visible = false;
	$scope.user = {'img':'img/user.png','first_name':'Camila','last_name':'Silveira'};
	$scope.products = [{'name':'X-box One 1','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'500m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 2','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'550m','price':'R$ 2.930,00','shop':'Loja do Maria','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 3','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'560m','price':'R$ 2.830,00','shop':'Loja do Marcos','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 4','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'570m','price':'R$ 2.230,00','shop':'Loja do Samara','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 1','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'580m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 2','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'590m','price':'R$ 2.930,00','shop':'Loja do Maria','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 3','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'100m','price':'R$ 2.830,00','shop':'Loja do Marcos','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 1','img':['imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'450m','price':'R$ 2.230,00','shop':'Loja do Jão','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 2','img':['imgsTabela/xbox2.jpg','imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'10000m','price':'R$ 2.930,00','shop':'Loja do Maria','street':'Rua 1 - 158, Centro','comment':[]},
					   {'name':'X-box One 3','img':['imgsTabela/xbox3.jpg','imgsTabela/xbox1.jpg','imgsTabela/xbox2.jpg'],'logo':'imgsTabela/americanas.jpg','distance':'90m','price':'R$ 2.830,00','shop':'Loja do Marcos','street':'Rua 1 - 158, Centro','comment':[]}]
	
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

	$scope.close_comment = function(){
		$scope.open_comment_block=false;
	}
	
	$scope.show_map = function(){		
		$scope.directionsDisplay = new google.maps.DirectionsRenderer();
		var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);

		var options = {
			zoom: 7,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("mapa"), options);

		$scope.directionsDisplay.setMap(map);

		$scope.gps();
		if($scope.myPosition == null)
			$scope.myPosition = "Bahia, BR";
		else{
			var aux = $scope.myPosition; 
			$scope.myPosition = new google.maps.LatLng( aux.lat, aux.lng );
		}

		var travelMode
		if ($scope.filter_mode == 'driving')
			travelMode = google.maps.TravelMode.DRIVING;
		else
			travelMode = google.maps.TravelMode.WALKING;

		var request = {
			origin: $scope.myPosition,
			destination: "Jardim Santa Inês I, São José dos Campos - SP, Brasil",
			travelMode: travelMode,
		};

		new google.maps.DirectionsService().route(request, function(result, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				$scope.directionsDisplay.setDirections(result);
			}
		});

		$scope.map_is_visible = true;
	}

	$scope.close_map = function(){
		$scope.map_is_visible = false;
	};

	$scope.gps = function(){
		navigator.geolocation.getCurrentPosition(success, error);
	}

	$scope.gps()

	function success(pos) {
	  var crd = pos.coords;
	  $scope.myPosition = {'lat': crd.latitude, 'lng': crd.longitude};
	};

	function error(err) {
	  $scope.myPosition = null;
	};

	atualizaUser = function(nameFacebook, imageFacebook){
		nameFacebook = nameFacebook.split(" ")
		$scope.user.img = imageFacebook;
		$scope.user.first_name = nameFacebook[0];
		$scope.user.last_name = nameFacebook[1];
	}



	//Speech.js


	$scope.open_div = false;
	$scope.cor = false;
	$scope.speech_message;
	$scope.open_menu = function(){
		$scope.open_div = !$scope.open_div;		
	}
	$scope.drive_mode_active=true;
//mudar aqui
	var interim_transcript = '';
	var time;
	var recognizing = false;
	var ignore_onend;
	if (!('webkitSpeechRecognition' in window)) {
	  $scope.speech_message = 'Não foi encontrado o comando de voz - atualize o seu browser.'
	} else {
	  var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = true;

	  recognition.onstart = function() {
	    recognizing = true;
	  };

	  recognition.onerror = function(event) {
	    if (event.error == 'no-speech') {
	      ignore_onend = true;
	    }
	    if (event.error == 'audio-capture') {
	      ignore_onend = true;
	    }
	    if (event.error == 'not-allowed') {
	      ignore_onend = true;
	    }
	  };

	  recognition.onend = function() {
	    recognizing = false;
	    if (ignore_onend) {
	      return;
	    }
	    if ($scope.speech_message) {
	    	$scope.speech_message = 'Aguardando...'
			return;
	    }
	    $scope.speech_message = 'Modo soneca diga algo';
	    $scope.$digest();
	  };

	  recognition.onresult = function(event) {
	  	$scope.speech_message = "Processando ..."
	    var final_transcript = '';
	    for (var i = event.resultIndex; i < event.results.length; ++i) {
	      if (event.results[i].isFinal) {
	        final_transcript += event.results[i][0].transcript;
	      } else {
	        interim_transcript += event.results[i][0].transcript;
	      }
	    }

	    if(final_transcript){
	    	$scope.speech_message = 'Comandos: '+ final_transcript;
	    	if(final_transcript.indexOf('config') != -1)
				$scope.active_menu[1] = !$scope.active_menu[1];
	    	if(final_transcript.indexOf('menu') != -1)
	    		$scope.active_menu[0] = !$scope.active_menu[0];
	    	if(final_transcript.indexOf('and') != -1 && $scope.active_menu[1]) 
	    		$scope.filter_mode = 'walking';
	    	if(final_transcript.indexOf('dir') != -1 && $scope.active_menu[1]) 
	    		$scope.filter_mode = 'driving';
	    	if(final_transcript.indexOf('list') != -1 && $scope.active_menu[1]) 
	    		$scope.product_view_selected = 'list';
	    	if(final_transcript.indexOf('bloc') != -1 && $scope.active_menu[1]) 
	    		$scope.product_view_selected = 'block';
	    	if(final_transcript.indexOf('pre') != -1 && $scope.active_menu[1]) 
	    		$scope.sel_mode = 'price';
	    	if(final_transcript.indexOf('dist') != -1 && $scope.active_menu[1]) 
	    		$scope.sel_mode = 'dist';
	    	if( !$scope.active_menu[0] && !$scope.active_menu[1]) 
	    		$scope.search = final_transcript;
	    }
	    $scope.$digest();

	  };
	}

	$scope.init_Speech = function(event) {
	  if (recognizing) {
	    recognition.stop();
	    return;
	  }
	  recognition.lang = 'pt-BR';
	  recognition.start();
	  ignore_onend = false;
	  $scope.speech_message = 'Microfone Ativo: '
	}
});