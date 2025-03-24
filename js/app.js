// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Order',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},

		{
		path: '/search/',
      	url: 'buscar.html',
		name: 'search',
		},

		{
		path: '/library/',
      	url: 'biblioteca.html',
		name: 'library',
		},

		{
		path: '/cart/',
      	url: 'carrito.html',
		name: 'cart',
		},

		{
		path: '/aboutus/',
      	url: 'acercade.html',
		name: 'aboutus',
		},

		{
		path: '/games/',
      	url: 'juegos.html',
		name: 'games',
		},
		
		{
		path: '/software/',
      	url: 'software.html',
		name: 'software',
		},

		{
		path: '/giftcards/',
      	url: 'giftcards.html',
		name: 'giftcards',
  		},

		{
		path: '/details/',
		url: 'detalles.html',
		name: 'details',
			},

		{
			path: '/emptycart/',
			url: 'carrito-vacio.html',
			name: 'emptycart',
		},
		{
			path: '/biblioteca/',
			url: 'biblioteca.html',
			name: 'biblioteca',
		},
		{
			path: '/sonic/',
			url: 'sonic.html',
			name: 'sonic',
		}
		,
		{
			path: '/adobe/',
			url: 'adobe.html',
			name: 'adobe',
		}
		,
		{
			path: '/canva/',
			url: 'canva.html',
			name: 'canva',
		}
		,
		{
			path: '/forza/',
			url: 'forza.html',
			name: 'forza',
		}
		,
		{
			path: '/google/',
			url: 'google.html',
			name: 'google',
		}
		,
		{
			path: '/itunes/',
			url: 'itunes.html',
			name: 'itunes',
		}
		,
		{
			path: '/kirby/',
			url: 'kirby.html',
			name: 'kirby',
		}
		,
		{
			path: '/mario/',
			url: 'mario.html',
			name: 'mario',
		}
		,
		{
			path: '/mcaffe/',
			url: 'mcaffe.html',
			name: 'mcaffe',
		}
		,
		{
			path: '/microsoft/',
			url: 'microsoft.html',
			name: 'microsoft',
		}
		,
		{
			path: '/minecraft/',
			url: 'minecraft.html',
			name: 'minecraft',
		}
		,
		{
			path: '/ps/',
			url: 'ps.html',
			name: 'ps',
		}
		,
		{
			path: '/steam/',
			url: 'steam.html',
			name: 'steam',
		}
		
	],
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});
