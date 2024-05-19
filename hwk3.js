// ================ Multi-Dimentional-Array /Nested-Array =================
/*
1. Define a TypeScript type alias named Student to represent a student with the
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.
2. Create an array named students containing at least three student objects. Each student
object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as
input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array,
calculate the average grade for each student using the calculateAverageGrade
function, and print their name and average grade.*/
let students = [
    {
        name: "Rabia",
        grades: [70, 45, 80, 65],
    },
    {
        name: "Iqra",
        grades: [70, 90, 50, 64],
    },
    {
        name: "Saba",
        grades: [60, 90, 80, 75],
    },
];
// Implementing a function that calculates students grades
function calculateAverageGrade(student) {
    const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
    return totalGrades / student.grades.length;
}
// displaying each student name and grade
students.forEach((students) => {
    let averageGrade = calculateAverageGrade(students);
    console.log(`${students.name}
      Average Grade = ${averageGrade}`);
});
export {};
