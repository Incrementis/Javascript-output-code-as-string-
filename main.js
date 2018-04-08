//Purpose: Inputs the function "changableCode" as string into the textarea
function getCode()
{
	var textarea = document.getElementById('edit');
	
	textarea.value = changableCode.toString();
}


//Purpose: Saves the code from the textarea to a file
function saveCode()
{
	var filename;
	var code = document.getElementById('edit').value;
	var content = new Blob([code], {type: 'application/javascript'});
	var file = document.getElementById('save');
	
	//Needed to open a folder which then the file could be renamed/selected and saved
	file.download = filename;
	
	//Generates an url
	file.href = URL.createObjectURL(content);	
	
}
