let serverURL = document.location.toString();
let URL=serverURL.split('?')[1];
console.log(URL);



$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	var parameter = {};
		$.get(URL, function(data) {
			console.log(data);
			init(data);
			photo(data);
		});
}

function init(data){
        let $template = $('#template01');
		let $node = $template.html();
        $node = $node.replace('IMGURL_HERE',data.imgurl);
		$node = $node.replace('NAME_HERE',data.name);
		$node = $node.replace('INFO_HERE',data.info);
        $node = $node.replace('PHOTONUM_HERE',data.photoNum);
        $node = $node.replace('VIEWNUM_HERE',data.viewNum);
		$node = $node.replace('AUTHOR_HERE',data.author);
		$node = $node.replace('AUTHORIMG_HERE',data.authorImg);
		$('header .container').append($node);
		
}

function photo(data){
	for(var i=0;i<15;i++){
		let $template = $('#template02');
		let $node = $template.html();
		$node = $node.replace('IMG_HERE',data.images[i]["imgurl"]);
		$node = $node.replace('TITLE_HERE',data.images[i]["title"]);
		$node = $node.replace('AUTHOR_HERE',data.images[i]["author"]);
		$node = $node.replace('LIKENUM_HERE',data.images[i]["likeNum"]);
		$node = $node.replace('COMMENTNUM_HERE',data.images[i]["commentNum"]);
		$('section .row').append($node);
	}

}
