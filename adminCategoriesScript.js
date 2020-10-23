function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var province=document.getElementById("province_row"+no);
 var capital=document.getElementById("capital_row"+no);
 var restaurant=document.getElementById("restaurant_row"+no);
	
 var province_data=province.innerHTML;
 var capital_data=capital.innerHTML;
 var restaurant_data=restaurant.innerHTML;
	
 province.innerHTML="<input type='text' id='province_text"+no+"' value='"+province_data+"'>";
 capital.innerHTML="<input type='text' id='capital_text"+no+"' value='"+capital_data+"'>";
 restaurant.innerHTML="<input type='text' id='restaurant_text"+no+"' value='"+restaurant_data+"'>";
}

function save_row(no)
{
 var province_val=document.getElementById("province_text"+no).value;
 var capital_val=document.getElementById("capital_text"+no).value;
 var restaurant_val=document.getElementById("restaurant_text"+no).value;

 document.getElementById("province_row"+no).innerHTML=province_val;
 document.getElementById("capital_row"+no).innerHTML=capital_val;
 document.getElementById("restaurant_row"+no).innerHTML=restaurant_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_province=document.getElementById("new_province").value;
 var new_capital=document.getElementById("new_capital").value;
 var new_restaurant=document.getElementById("new_restaurant").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_province+"</td><td id='country_row"+table_len+"'>"+new_capital+"</td><td id='age_row"+table_len+"'>"+new_restaurant+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'><input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'><input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_province").value="";
 document.getElementById("new_capital").value="";
 document.getElementById("new_restaurant").value="";
}