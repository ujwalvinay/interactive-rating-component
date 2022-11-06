const ratingDiv = $(".ratingDiv");
const thankDiv = $(".thankDiv");

const ratingBtn = $(".rating-btn");
const submitBtn = $(".submit-btn");
const rateValue = $("#rateValue");

let rating;


ratingBtn.click(function(e){
    if($(this).hasClass("ratinButtonPressed"))
    {
        $(ratingBtn).removeClass("ratingButtonPressed");
        $(this).addClass("ratinButtonDePressed");   
    }
    else
    {
        $(this).removeClass("ratingDeButtonPressed");
        $(this).addClass("ratinButtonPressed");
        rating = e.target.id;
    }
    
    
})


submitBtn.click(function()
{
    rateValue.text(""+rating);    
    ratingDiv.hide();
    thankDiv.css("display","block");

})
