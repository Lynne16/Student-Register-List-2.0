var name_of_student_array=[];

var display_students_array=[];

var display_students_sorted_array=[];

function submit(){
    for(var j = 1; j <= 4; j++){
        
        var name_of_student=document.getElementById("name_of_the_student_" + j).value;

        console.log(name_of_student);

        name_of_student_array.push(name_of_student);
    }
var l=name_of_student_array.length;
console.log(l);
  

    for(var i = 0; i < l; i++){
        display_students_array.push("<h1> name of "+ (i+1) +" student is " + name_of_student_array[i]+"</h1>");

    }

    console.log(display_students_array);
        document.getElementById("display_name_with_commas").innerHTML=display_students_array;

    var display_name_without_comma= display_students_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=display_name_without_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}

function sorting(){
    name_of_student_array.sort();
    console.log(name_of_student_array);

    var len=name_of_student_array.length;
    console.log(len);

    for(var i = 0; i < len; i++){
        display_students_sorted_array.push("<h1> name of "+ (i+1) +" student is " + name_of_student_array[i]+"</h1>");

    }
    document.getElementById("display_name_with_commas").innerHTML=display_students_sorted_array;

    var display_name_without_comma= display_students_sorted_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=display_name_without_comma;
}
