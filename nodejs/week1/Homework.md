/***************************************************************
 HYF Course: Build a CRUD app for hackyourfuture  
 Constains:  Use `class`,`JSON` and Modern javacript syntex (as much as possible)
************************************************************** */


const hyf_courses = new Courses();
const hyf_mentors = new Mentors();


/***************************************************************
 Step 1: Write a method that can return list of all HYF courses 
************************************************************** */
hyf_courses.getList();

/** 
Sample Result:
[
    {
        "title": "NodeJS",
        "duration": "5",
        "mentors": ["Abed", "Marco", "Radoslaw"]
    },
    {
        "title": "JS",
        "duration": "9",
        "mentors": ["Abed", "Marco", "Radoslaw"]
       
    },
    {
        "title": "HTML-CSS",
        "duration": "3",
        "mentors": ["Abed", "Benjamin"]
    }
]
*/

/********************************************************************************
 Step 2: Write a method that can return one course info
****************************************************************************** */
hyf_courses.getCourse("NodeJS")

/** 
Sample Result:
{
        "title": "NodeJS",
        "duration": "5",
        "mentors": ["Abed", "Marco", "Radoslaw"]
    }
*/

hyf_courses.getCourse("JAVA")

/** 
Sample Result:
        No match found
*/


/*****************************************************************************
 Step 3: Write a method that can add a new course to HYF library
 which receive the below course info as an input
*************************************************************************** */
const newCourse =   {
    "title": "Database",
    "duration": "4",
    "mentors": ["Benjamin","Niels Gregersen"]
};
hyf_courses.add(newCourse); // this method should add the new student in the list if not exits

hyf_students.getList(); // Verify the student added to the list

/** 
Sample Result:
[
    {
        "title": "NodeJS",
        "duration": "5",
        "mentors": ["Abed", "Marco", "Radoslaw"]
    },
    {
        "title": "JS",
        "duration": "9",
        "mentors": ["Abed", "Marco", "Radoslaw"]
       
    },
    {
        "title": "HTML-CSS",
        "duration": "3",
        "mentors": ["Abed", "Benjamin"]
    },
    {
        "title": "Database",
        "duration": "3",
        "mentors": []
    }
]
*/


/*****************************************************************
 Step 4: Write a method that can edit existing mentor information
*************************************************************** */

// Look at in the Benjamin's courses "HTML/CSS" is added
const mentor =  {
    "name": "Benjamin",
    "courses": ["HTML/CSS", "JS", "Database"], 
};

hyf_mentors.editMentor(mentor); // this method should modify mentor info



/*****************************************************************
 Step 5: Write a method that can delete existing mentor 
*************************************************************** */

hyf_mentors.delete("Abed"); // this method should delete mentor from list
/** 
Sample Result:
       Successfully deleted.
*/

hyf_mentors.delete("Maria"); 
/** 
Sample Result:
        Unable to perform the action. Not Found!
*/