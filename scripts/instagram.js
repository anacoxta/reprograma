let token = '7590032172.06057e8.172b13d3568740c1af42d0e98d54dafb',
    qtd = 9,
    get = document.getElementById( 'photofeed' ),
    create = document.createElement( 'script' );
 
window.resultado = function( data ) {
	for( x in data.data ){
		get.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
	}
}
 
create.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + qtd + '&callback=resultado' );
document.body.appendChild( create );