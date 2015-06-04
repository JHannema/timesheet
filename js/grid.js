/**
 * Created by jhannema on 28-5-15.
 */
/**
 * function setFieldForSelect can be called from each cell in the grid
 * and is used to select the field on which the value will be set
 * */
function setFieldForSelect(fieldId) {
    // Save the field that was clicked in 'savedField'
    // If the field clicked (fieldId) is different than the one saved,
    // or the one saved is empty, change the background color so that we know it is selected
    // Otherwise, make the BG white
    var savedField = $("#savedField").val();
    if(savedField != fieldId || savedField == "") {
        $("#"+fieldId).addClass("selectedField");
        $("#"+fieldId).removeClass("deSelectedField");
        $("#"+savedField).addClass("deSelectedField");
        $("#"+savedField).removeClass("selectedField");
        $("#savedField").val(fieldId);
        return;
    }

    if($("#savedField").val() == fieldId){
        $("#"+fieldId).addClass("deSelectedField");
        $("#"+fieldId).removeClass("selectedField");
        $("#savedField").val("x");
        return;
    }

}

function processLeaveTypeSelect(){
    var fieldToUpdate = "#"+$("#savedField").val();
    if ($("#selectType").val() == "") {
        $(fieldToUpdate).html("&nbsp;");
    } else {
        $(fieldToUpdate).text($("#selectType").val());
    }
    $("#selectType").prop('selectedIndex',0);

    // write back to Json
    persist();
}

function persist(){
    var jsonData = buildJsonFromHtml();
    var rosterData = "[{ \"name\": \"Joram\", \"days\":{ \"day\":[{\"dayNumber\": 1, \"typeOfLeave\": \"atv\"},{\"dayNumber\": 2, \"typeOfLeave\": \"vrij\"},{\"dayNumber\": 3,\"typeOfLeave\": \"vri\"},{\"dayNumber\": 15, \"typeOfLeave\": \"atv\"}]}},{\"name\": \"Eline\",\"days\":{\"day\":[{\"dayNumber\": 14, \"typeOfLeave\": \"atv\"},{\"dayNumber\": 15, \"typeOfLeave\": \"vri\"},{\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},{\"dayNumber\": 28, \"typeOfLeave\": \"atv\"}]    }  },  {    \"name\": \"Marlies\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 11, \"typeOfLeave\": \"atv\"},       {\"dayNumber\": 15, \"typeOfLeave\": \"z\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"z\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Melvin\",    \"days\":    {      \"day\":      [        {\"dayNumbe\":11, \"typeOfLeave\": \"atv\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Kathy\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 11, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  }]"
    $.post("post_json.php", {json : JSON.stringify(rosterData)});
}

function buildJsonFromHtml(){
    var rosterData = "[{ \"name\": \"Joram\", \"days\":{ \"day\":             [                {\"dayNumber\": 1, \"typeOfLeave\": \"atv\"},                {\"dayNumber\": 2, \"typeOfLeave\": \"vrij\"},                {\"dayNumber\": 3, \"typeOfLeave\": \"vri\"},                {\"dayNumber\": 15, \"typeOfLeave\": \"atv\"}              ]    }  },  {    \"name\": \"Eline\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 14, \"typeOfLeave\": \"atv\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vri\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 28, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Marlies\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 11, \"typeOfLeave\": \"atv\"},       {\"dayNumber\": 15, \"typeOfLeave\": \"z\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"z\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Melvin\",    \"days\":    {      \"day\":      [        {\"dayNumbe\":11, \"typeOfLeave\": \"atv\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Kathy\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 11, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  }]"

    //alert($('.wrapper').length);

    /*var data = $('.wrapper').map(function() {
        return {
            classname: 'name',
            content: $(this).text()
        };
    }).get();

    console.log(data);*/

    $( ".name" ).each(function( index ) {
        console.log( index + ": name=" + $( this ).text() );
    });

    $( ".day" ).each(function( index ) {
        if ($( this ).text() != " "){
            console.log( index + ": |" + $( this ).text() +"|");
            alert("|" + $( this ).text() +"|");
        }
    });

    return rosterData;
}


function buildJsonFromHtml2(){
    var rosterData = "[{ \"name\": \"Joram\", \"days\":{ \"day\":             [                {\"dayNumber\": 1, \"typeOfLeave\": \"atv\"},                {\"dayNumber\": 2, \"typeOfLeave\": \"vrij\"},                {\"dayNumber\": 3, \"typeOfLeave\": \"vri\"},                {\"dayNumber\": 15, \"typeOfLeave\": \"atv\"}              ]    }  },  {    \"name\": \"Eline\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 14, \"typeOfLeave\": \"atv\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vri\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 28, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Marlies\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 11, \"typeOfLeave\": \"atv\"},       {\"dayNumber\": 15, \"typeOfLeave\": \"z\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"z\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Melvin\",    \"days\":    {      \"day\":      [        {\"dayNumbe\":11, \"typeOfLeave\": \"atv\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  },  {    \"name\": \"Kathy\",    \"days\":    {      \"day\":      [        {\"dayNumber\": 11, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 15, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 16, \"typeOfLeave\": \"vrij\"},        {\"dayNumber\": 25, \"typeOfLeave\": \"atv\"}      ]    }  }]"

    //alert($('.wrapper').length);

    /*var tbl = $('.wrapper').map(function() {
        return $(this).find('.day').map(function() {
            return $(this).html();
        }).get();
    }).get();

    console.log(tbl);*/

    return rosterData;
}

function clearFieldValue(){
    var fieldToUpdate = "#"+$("#savedField").val();
    if(fieldToUpdate != "#x"){
        $(fieldToUpdate).html("&nbsp;");
    }
}

function selectMonth(){
    $("#labelJsonError").text("");
    var monthName = ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];
    var monthSelected = $("#monthSelected").val();
    var yearSelected = $("#yearSelected").val();
    $("#labelMonth").text(monthName[monthSelected-1]);
    $("#labelYear").text(yearSelected);
    loadJsonAndBuildTable(monthSelected, yearSelected);
}

function loadJsonAndBuildTable(month, year){
//    var fileName = "verlof_"+month+"_"+year;
    var fileName = "people.json";
    var fileDir = "data/";
    console.log("trying to load json file: " + fileDir + fileName);

    $.getJSON(fileDir+fileName, function(jsonData) {
        console.log("json file successfully loaded");
        buildTableFromJson(jsonData, daysInMonth(month, year));
    }).fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error);
        $("#labelJsonError").text("Het verlofbestand " + fileName + " kon niet worden gevonden");
    });
}

function buildTableFromJson(jsonData, days) {
    alert("dagen:" + days);
    console.log("Building table from Json file");
    var tableHtml = "";

    /*Write the table head*/
    tableHtml += "<div class=\"wrapperHeader\">";
    tableHtml += "<div class=\"name bold\">";
    tableHtml += "Naam";
    tableHtml += "</div>";
    for (t=1;t<=days;t++) {
        tableHtml += "<div class=\"day\">"+t+"</div>";
    }
    tableHtml += "</div>";

    for(i=0;i<jsonData.length;i++){
        tableHtml +="<div class=\"wrapper\">";
        var nameFieldId = "name_"+i;
        tableHtml +="<div class=\"name\" id=\""+nameFieldId+"\">";
        tableHtml += jsonData[i].name;
        tableHtml += "</div>";

        var fieldId;
        var row = i;
        for (k=1;k<=days;k++) {
            var fieldValue = "&nbsp;";
            // A bit dirty to loop over the days of this user. A 'lookup' kind of solution would be way nicer
            $.each(jsonData[i]['days'], function() {
                for(t=0; t<this.length; t++) {
                    if(this[t].dayNumber == k) {
                        fieldValue = this[t].typeOfLeave;
                    }
                }
            });

            fieldId = "day_"+row+"_"+k;
            tableHtml += "<div id=\"" + fieldId + "\"" + " class=\"day\" onclick=\"setFieldForSelect(this.id)\">"+fieldValue+"</div>";
        }

        tableHtml += "</div>"; // closing wrapper

        // Finally populate the div with our freshly built table
        $("#tablePlaceholder").html(tableHtml);

        console.log("Done building table from Json file");
    }
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}