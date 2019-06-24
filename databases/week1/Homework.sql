-- (1) Find out how many tasks are in the task table
    SELECT COUNT(*) 
    FROM task;
-- Answer: 35 


-- (2) Find out how many tasks in the task table do not have a valid due date
    SELECT COUNT(*) 
    FROM task
    WHERE due_date is NULL;
-- Answer: 8 


-- (3) Find all the tasks that are marked as done
    SELECT task.title, 
    status.name
    FROM task
    INNER JOIN status ON status.id = task.status_id
    WHERE status.name = 'Done'; 
-- Answer: 12 row(s) returned. 


-- (4) Find all the tasks that are not marked as done
    SELECT task.title, 
    status.name
    FROM task
    INNER JOIN status ON status.id = task.status_id
    WHERE NOT status.name ='Done';
-- Answer: 23 row(s) returned. 


-- (5) Get all the tasks, sorted with the most recently created first
    SELECT * 
    FROM task
    ORDER BY created DESC;
-- Answer: 35 row(s) returned. Most recent created 2017-10-30 09:47:00. 


-- (6) Get the single most recently created task
    SELECT * FROM task
    ORDER BY created DESC
    LIMIT 1;
-- Answer: Most recent created id:24 title:Look at apartments in Ørestad. 


-- (7) Get the title and due date of all tasks where the title or description contains database 
    SELECT task.title, 
    due_date
    FROM task
    WHERE title LIKE '%database%';
-- Answer: 5 row(s) returned.


-- (8) Get the title and status (as text) of all tasks
    SELECT task.title, 
    status.name AS status
    FROM task
    INNER JOIN status ON status.id = task.status_id;
-- Answer: 35 row(s) returned.


-- (9) Get the name of each status, along with a count of how many tasks have that status
    SELECT status.name, 
    count(status.name )AS count -- count(*)AS count
    FROM task
    INNER JOIN status ON status.id = task.status_id
    GROUP BY status.name ;
-- Answer: Not started: 8, In progress: 15, Done: 12 


-- (10) Get the names of all statuses, sorted by the status with most tasks first   
    SELECT status.name, 
    count(*)AS count
    FROM task
    INNER JOIN status ON status.id = task.status_id
    GROUP BY status.name 
    ORDER BY count DESC;
-- Answer: In progress: 15, Done: 12, Not started: 8 