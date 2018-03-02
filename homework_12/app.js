var rootNode = document.getElementById("root");

function tankPreview() {
	var container = document.createElement("div");
	container.className = "thumbnails";
	
	var mainContent = root.appendChild(container);

	var header1 = document.createElement("h1");
	header1.innerText = "Most popular tanks";
	mainContent.appendChild(header1);

	var divPreview = document.createElement("div");
	divPreview.className = "container-preview";
	container.appendChild(divPreview);

  tanks.forEach(function(tank) {
    var thumbnailElement = document.createElement("div");
    thumbnailElement.className = "thumbnail";
    thumbnailElement.title = "Click to details";

		var img = document.createElement("img");
		img.src = tank.preview;
		img.className = "img-preview";

		var divTitle = document.createElement("div");
		divTitle.className = "title";

		var countryImage = document.createElement("img");
		countryImage.src = tank.country_image;
    countryImage.title = tank.country;

		var levelDiv = document.createElement("div");
    levelDiv.className = "level";
		levelDiv.innerText = tank.level;

		var modelDiv = document.createElement("div");
		modelDiv.innerText = tank.model;
    modelDiv.className = "model-title";
    modelDiv.title = tank.model;
	
		divTitle.appendChild(countryImage);
		divTitle.appendChild(levelDiv);
		divTitle.appendChild(modelDiv);

		thumbnailElement.appendChild(img);
		thumbnailElement.appendChild(divTitle);
	  divPreview.appendChild(thumbnailElement);

		thumbnailElement.addEventListener("click", () => {
      location.hash = tank.model;
    });
	});
	mainContent.appendChild(divPreview);
	return mainContent;
}

function createTank(tank) {
  var tankDetail = document.createElement("div");
  tankDetail.className = "tank-details";

  var headline = document.createElement("div");
  headline.className = "headline";
  
  var countryImage = document.createElement("img");
  countryImage.src = tank.country_image;
  countryImage.title = tank.country;
  headline.appendChild(countryImage);
  
  var tankDetailModel = document.createElement("div");
  tankDetailModel.innerText = tank.model;
  tankDetailModel.className = "title-detail-model";
  
  var tankDetailLevel = document.createElement("div");
  tankDetailLevel.innerText = "(level " + tank.level + ")";

  var containerContent = document.createElement("div");
  containerContent.className = "container-content";
  
  var colFirst = document.createElement("div");
  colFirst.className = "col-first";
  
  var colSecond = document.createElement("div");
  colSecond.className = "col-second";

  var imgTitle = document.createElement("div");
  imgTitle.innerText = "Preview";
  imgTitle.className = "detail-title";
  
  var mainImg = document.createElement("img");
  mainImg.src = tank.preview;

  colFirst.appendChild(imgTitle);
  colFirst.appendChild(mainImg);
  
  var tableTitle = document.createElement("div");
  tableTitle.innerText = "Characteristic";
  tableTitle.className = "detail-title";
  colSecond.appendChild(tableTitle);
  
  var tankTable = document.createElement("table");
  tankTable.idName = "tank-table";
  
  var tableBody = document.createElement("tbody");
  
  for (var key in tank.details) {	
    var row = tableBody.insertRow();
    row.className = "table-row";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = tank.details[key];
    row.appendChild(cell1);
    row.appendChild(cell2);
    tankTable.appendChild(tableBody);
    colSecond.appendChild(tankTable);   	
  }
  
  containerContent.appendChild(colFirst);
  containerContent.appendChild(colSecond);
  headline.appendChild(tankDetailModel);
  headline.appendChild(tankDetailLevel);
  tankDetail.appendChild(headline);
  tankDetail.appendChild(containerContent);  

  var backButton = document.createElement("div");
  backButton.innerText = "Back to list view";
  backButton.addEventListener("click", () => {
    location.hash = "";
    window.history.go();
  });

  tankDetail.appendChild(backButton);  
  return tankDetail;
}

function tankDetail() {
	var model = location.hash.slice(1);
  for(var i in tanks) {
    if(tanks[i].model === model) {
      var container = createTank(tanks[i]);
      rootNode.innerHTML = "";
      rootNode.appendChild(container);
    }
  }
}

window.addEventListener("hashchange", tankDetail);
rootNode.appendChild(tankPreview());