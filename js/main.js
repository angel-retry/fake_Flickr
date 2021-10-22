let serverURL = [];

serverURL.push("110719014.json");
serverURL.push("110719016.json");
serverURL.push("110719030-2.json");
serverURL.push("110719032.json");
serverURL.push("110719033.json");
serverURL.push("110719035.json");
serverURL.push("110719041.json");
serverURL.push("110719042.json");
serverURL.push("110819013.json");
serverURL.push("110819015.json");
serverURL.push("110819023.json");
serverURL.push("110819042.json");

$(document).ready(function() {
	readFromServer();
});

function readFromServer(){
	var parameter = {};
	for(let i=0;i<serverURL.length;i++){
		$.get(serverURL[i], function(data) {
			console.log(data);
			stu=serverURL[i];
			console.log(serverURL[i]);
			init(data);
		});
	}
}

function init(data){
        let $template = $('#template01');
		let $node = $template.html();

		const url = "index2.html?"+stu;

		$node = $node.replace('ID',url);

        $node = $node.replace('IMGURL_HERE',data.imgurl);
		$node = $node.replace('NAME_HERE',data.name);
        $node = $node.replace('PHOTONUM_HERE',data.photoNum);
        $node = $node.replace('VIEWNUM_HERE',data.viewNum);
		$('section .row').append($node);
		
}