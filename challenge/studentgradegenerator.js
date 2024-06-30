// Function to determine the grade based on marks
function determineGrade() {
    // Prompt the user to input the student's marks
    let marks = prompt("Please enter the student's marks (between 0 and 100):");

    // Convert the input to a number
    marks = Number(marks);

    // Check if the input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Please enter a number between 0 and 100.");
        return;
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the grade to the user
    alert("The student's grade is: " + grade);
}

// Call the function to run the grade generator
determineGrade();
