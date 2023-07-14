// let studentDetails = (myName , id, totalMarks)=>{
//     this.myName = myName,
//     this.id = id,
//     this.totalMarks = totalMarks
// }
// const student1 = new studentDetails("amal PR",555,800);
// const student2 = new studentDetails('syam santhosh',666,900);
// const student3 = new studentDetails('sidharth sibi',766,850);
// const student4 = new studentDetails('abinav',866,800);

// let department1 = new Array;
// department1.push(student1);
// department1.push(student2);
// department1.push(student3);
// department1.push(student4);
// console.log(department1);
///////////////////////////////////////////////////////

// let student = {
// }
// Object.assign(student, { myName: 'sam alexander', id: '369', totalMarks: 88 });
// console.log(student);
// let nameSplit = student.myName.split(' ');
// let firstName = nameSplit[0];
// let secondName = nameSplit[1];
// console.log(firstName, secondName);
// delete student.myName
// var subName = {}
// subName.firstName = firstName;
// subName.secondName = secondName;
// Object.assign(student, { firstName: subName.firstName, secondName: subName.secondName });
// console.log(student);

// let department = new Array;
// department.push(student);
// console.log(department);

///////////////////////////////////////////////
// function studentDetails(myName, id, totalMarks) {
//     this.myName = myName;
//     this.id = id;
//     this.totalMarks = totalMarks;
// }

// const student1 = new studentDetails("amal PR", 555, 800);
// const student2 = new studentDetails("syam santhosh", 666, 900);
// const student3 = new studentDetails("sidharth sibi", 766, 850);
// const student4 = new studentDetails("abinav", 866, 800);

// let department1 = new Array;
// department1.push(student1);
// department1.push(student2);
// department1.push(student3);
// department1.push(student4);

// console.log(department1);


//////////////////////////////////////////////////////////////
// function classObj(teacherName){
//     name = className,
//     teacherName = teacherName,
//     student = []
// }

let userObject = (name, id, email, age, phoneNumber) => {
    return {
        name: name,
        email: email,
        id: id,
        age: age,
        phoneNumber: phoneNumber,
        marks: []
    }
}

let divObj= {
    name : 'test',
    classTeacher : 'leena',
    students : []
}
//Add a student 
let addStudent = (name, id) => {
//     return userObject(name, id)
let student = userObject(name, id);
divObj.students.push(student);
}
addStudent('jithu', 101);
addStudent('abinav', 102);
addStudent('syam', 103);
addStudent('sidhu', 104);

// let stud1 = userObject('amal', 101);



//Add subject and marks
let subjectMarks = (userId ,subject, mark) => {
   let addSub = divObj.students.find((element)=>element.id === userId)
    if(!addSub){
        console.log(`Enter valid id`) ;
        return;
       
    }
    addSub.marks.push({subject:subject,mark:mark})
}
    subjectMarks(101,'English',22);
    subjectMarks(101,'Maths', 48);
    subjectMarks(101,'Physics', 40);
    subjectMarks(101,'Chemistry', 30);
    subjectMarks(101,'Computer', 20);

    subjectMarks(102,'English',32);
    subjectMarks(102,'Maths', 43);
    subjectMarks(102,'Physics', 20);
    subjectMarks(102,'Chemistry', 32);
    subjectMarks(102,'Computer', 28);

    subjectMarks(103,'English',23);
    subjectMarks(103,'Maths', 41);
    subjectMarks(103,'Physics', 30);
    subjectMarks(103,'Chemistry', 12);
    subjectMarks(103,'Computer', 29);

    subjectMarks(104,'English',26);
    subjectMarks(104,'Maths', 48);
    subjectMarks(104,'Physics', 29);
    subjectMarks(104,'Chemistry', 42);
    subjectMarks(104,'Computer', 27);




    console.log(divObj);

    

    //Edit mark for a particular subject of a student 
    let editMarks = (inputId,preferedSubject,newMark)=>{
        let oneStudent = divObj.students.find((element)=>element.id === inputId)
        if(!oneStudent){
            console.log("Enter a valid id");
            return;
        }
        

        let selectedSubject = oneStudent.marks.find((element)=>element.subject === preferedSubject)
        if(!selectedSubject){
            console.log("Enter valid subject");
        }
    
        selectedSubject.mark = newMark;

    }
    editMarks(101,'English',0);
   

    //Change class teacher of  a class
    let changeTeacher =(teacherName)=>{
        divObj.classTeacher =teacherName
    }

    changeTeacher("aleena");
    console.log(divObj);

    //Remove the student from the class
    removeStudent = (studentId)=>{
        let findStudentId =divObj.students.find((element)=>element.id === studentId)
        if(!findStudentId){
            console.log('Enter a valid student ID')
        }
       let deletedElement = divObj.students.splice(findStudentId,1);
       console.log(deletedElement);
    
    }
    removeStudent(101);

    //Remove a subject from all student 
    let removeSubject =(subjectName)=>{
       divObj.students.forEach(student => {

          let removableSubject= student.marks.findIndex((element)=>element.subject === subjectName)
          console.log(removableSubject);
    student.marks
        .splice(removableSubject,1);

            //   let deletedSubject = student.element.splice(subjectName,1);
           
            
        });
       
    }
    removeSubject('Chemistry');
    console.log(divObj);



// average mark of a given subject
    let subAvg = (subject) =>{
        
        sum = 0;
        let avg = 0;
        let lengthOfArray = divObj.students.length;
        divObj.students.forEach((student)=>{
           let findSubject = student.marks.find((element)=>element.subject === subject)
           if(!findSubject){
            console.log('Enter a valid subject');
            return;
           }
            sum += findSubject.mark;
        } )
         avg = sum / lengthOfArray;

       console.log (avg);
       console.log(`The average mark of ${subject} is ${avg}`)   
    }
    subAvg('English');




   // Find topper of the class 
    let classTopper = () =>{
        highest = 0
        let topper = null
        sum = 0;
        divObj.students.forEach((student)=>{
            lengthOfArray = student.marks.length;
            student.marks.forEach((element)=>{
                sum += element.mark;
                
            })
           // console.log(sum);
            if(sum > highest){
                highest = sum ;
                topper = student.name;
            }
        }
        )
        return topper;
    
     
      
    }
   console.log( `Topper of the class = ${classTopper()}`);


    //Sort and display the list of students in any order
    
    sortElement = ()=>{
        divObj.students.sort((a,b)=>a.name.localeCompare(b.name))
    }

sortElement();
console.log(divObj);










  // Remove a subject from all students
// const removeSubject = (subjectName) => {
//     divObj.students.forEach((student) => {
//       const marksIndex = student.marks.findIndex((mark) => mark.subject === subjectName);
//       if (marksIndex !== -1) {
//         student.marks.splice(marksIndex, 1);
//       }
//     });
//   }
  
//   removeSubject('Computer');
 
    


    
//    let arrayMarks = [];
//     if (userObject.mark.find((element)=>element.id=== userId)){
//         return {
//             subject: subject,
//             mark: mark
//         }
       

//     }
    // return {
    //     subject: subject,
    //     mark: mark
    // }
//}
// let std1English = subjectMarks(101,'English', 25);
// let std1Maths = subjectMarks(101,'Maths', 48);
// let std1Physics = subjectMarks(101,'Physics', 40);
// let std1Chemistry = subjectMarks(101,'Chemistry', 30);
// let std1Computer = subjectMarks(101,'Computer', 20);
//stud1.marks.push(std1English, std1Maths, std1Physics, std1Chemistry, std1Computer);


