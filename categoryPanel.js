// Javascript for Category Panel of Armageddon - 2013

// Global Variables
var previousActiveCategory = 0;												// Initializes previousActiveCategory for future events as 'Home' Category
var imageExtension = ".png";
var timeElapsed = 0;
var timeToChangeCategory = 7;

function activeCategory(activeCategory, callingFunction)					// callingFunction = 0 => User Click | callingFunction = 1 => Auto Timed Category Change
{
	changeCategoryText(activeCategory);
	changeCategoryImage(activeCategory);
	changeCategoryDescription(activeCategory, callingFunction);
	
	// Update Active Category
	previousActiveCategory = activeCategory;
	
	// Reset Time Elapsed
	timeElapsed = 0;
}

function changeCategoryText(activeCategory)
{
	//Close Earlier Category
	categoryText = "#category" + previousActiveCategory + "Text";
	$(categoryText).slideUp();
	
	//Open New Category
	activeCategoryNameText = "#category" + activeCategory + "Text";	
	$(activeCategoryNameText).slideDown();
}

function changeCategoryImage(activeCategory)
{
	activeCategoryPanelImage = "./images/category" + activeCategory + imageExtension;
	
	$("#categoryImage").fadeTo(500, 0, function(){
		$("#categoryImage").attr("src", activeCategoryPanelImage);
	});
	$("#categoryImage").fadeTo(500, 1);
}

function changeCategoryDescription(activeCategory, callingFunction)
{
	if(callingFunction == 0)
	{
		activeCategoryDescription = "#category" + activeCategory + "Description";
		
		// Hide all Category Descriptions
		for(i = 0 ; i <= 6 ; i++)
		{
			previousCategoryDescription = "#category" + i + "Description";
			$(previousCategoryDescription).hide();
		}
		
		// Open Active Category Description
		$(activeCategoryDescription).fadeIn();
	}
}

function categoryAutoChange()
{
	timeElapsed += 1;
	
	if(timeElapsed >= timeToChangeCategory)
	{
		if(previousActiveCategory == 6)
			activeCategory(0, 1);								// Change to Home Category.
		else
			activeCategory(previousActiveCategory + 1, 1);
	}
}