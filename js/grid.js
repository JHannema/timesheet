/**
 * Created by jhannema on 28-5-15.
 */
/**
 * function setFieldForSelect can be called from each cell in the grid
 * and is used to select the field on which the value will be set
 * */

var users = new Array();

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

    alert(fieldToUpdate);
    // write back to Json
    persist();
}

function persist(){
    for(k=0; k<users.length; k++) {
        alert(users[k].name + " (" + users[k].userid + ")");
    }
    return;
    $.ajax({
        type: "POST",
        url: "post_json.php",
        data: {json : JSON.stringify(jsonData)},

    });
}

function clearFieldValue(){
    var fieldToUpdate = "#"+$("#savedField").val();
    if(fieldToUpdate != "#x"){
        $(fieldToUpdate).html("&nbsp;");
    }

    // write back
    persist();
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
    //fileName = "TEST.json";
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
    console.log("Building table from Json file");
    var tableHtml = "";

    /*Write the table head*/
    tableHtml += "<div class=\"wrapperHeader\">";
    tableHtml += "<div class=\"nameHeader bold\">";
    tableHtml += "Naam";
    tableHtml += "</div>";
    for (t=1;t<=days;t++) {
        tableHtml += "<div class=\"dayHeader\">"+t+"</div>";
    }
    tableHtml += "</div>";

    for(i=0;i<jsonData.length;i++){
        tableHtml +="<div class=\"wrapper\">";
        var nameFieldId = "name_"+i;
        tableHtml +="<div class=\"name\" id=\""+nameFieldId+"\">";
        tableHtml += jsonData[i].name;
        tableHtml += "</div>";

        //alert(jsonData[i]['userid']);
        alert(JSON.stringify(jsonData[i]));


        // Build a global list of users
        user = {name:jsonData[i].name, userid:jsonData[i].id};
        users[i] = user;

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
    var daysInCurrentMonth = new Date(year, month, 0).getDate();
    return daysInCurrentMonth;
}