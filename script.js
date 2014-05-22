$(document).ready(
    function()
    {
        $('td.editable').on('dblclick', function(event) {
            var dataID = $(event.target).attr('rel');
            var OriginalData = $(this).text();

            $(this).addClass("cellEditing");
            $(this).html("<input type='text' value='" + OriginalData + "' rel='" + dataID + "' />");
            $(this).children().first().focus();

            $(this).children().first().keypress(function (e) {
                if (e.which == 13) {
                    var newData = $(this).val();
                    $(this).parent().text(newData);
                    $(this).parent().removeClass("cellEditing");
                    var relData = $.parseJSON($(e.target).attr('rel'));
                    alert("Saving value <<" + newData + ">> to " + relData.field + " WHERE id = " + relData.id);
                }
            });

            $(this).children().first().blur(function() {
                $(this).parent().text(OriginalData);
                $(this).parent().removeClass("cellEditing");
            });
        });
    }
);
