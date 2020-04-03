window.addEventListener ("load", start, false);

function start(evt){
	walk(document.body);
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCorona Virus|Corona virus|corona virus|Coronavirus|coronavirus\b/g, "My Butt");
	v = v.replace(/\bCovid19|covid19|Covid 19|covid 19|COVID 19|Covid-19|COVID-19\b/g, "b-u-t-t-o-m");
	v = v.replace(/\bNovel|novel\b/g, "Not");
	v = v.replace(/\bPandemic|pandemic\b/g, "situation");
	
	textNode.nodeValue = v;
}


