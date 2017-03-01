var code2CollegeStudents = ["Basil", "Thomas", "Alexis", "Abi", "Isaac", 
"Evila", "Spencer", "Garrett", "Tumolac", "Tim", "George", "Adrian"];

var code2CollegeEducators = ["Sam", "Sam", "Dr. Dre", "Matt"];

$("#studentButton").click(function(){
$("#studentDisplay").html(code2CollegeStudents[Math.floor(Math.random()*code2CollegeStudents.length)]);
});

$("#teacherButton").click(function(){
$("#teacherDisplay").html(code2CollegeEducators[Math.floor(Math.random()*code2CollegeEducators.length)]);
});

//text box and button to add student to array
$("#putInAStudent").click(function(){
    code2CollegeStudents.push($("#grabThisStudent").val());
    $("#addStudent").append("You have successfully added " + ($("#grabThisStudent").val()) + "</br>");
});

$("#putInATeacher").click(function(){
    code2CollegeEducators.push($("#grabThisTeacher").val());
    $("#addTeacher").append("You have successfully added " + ($("#grabThisTeacher").val()) + "</br>");
});