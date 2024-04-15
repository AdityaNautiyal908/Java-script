# What is DOM?
When a web page is loaded, the browser creates a `Document Object Model` (DOM) of the page

![DOM image](1.png) 

## DOM Manipulation

>[!Note]
>`Selecting with id` <br>
>document.getElementByiD("myId") <br> <br>
>`Selecting with class` <br>
>document.getELementsByClassName("myClass") <br> <br>
>`Selecting with tag` <br>
>document.getElementsByTagName("p") <br>

>[!IMPORTANT]
>`Query Selector` // best way to access element <br> 
>document.querySelector("myId/myClass/tag) <br>
>//return first element <br> <br>
>document.querySelector("myid/myClass/tag") <br>
>//returns a NodeList

### Properties
* tagName: returns tag for element nodes
* innerText : returns the text content of the element and all its children
* innerHTML : returns the plain text or HTML contents in the element
* textContent: returns textual content even for hidden elements



