-- modifying purchased_on column on multiple row in book_copies table
UPDATE book_copies
   SET purchased_on = CASE id 
                      WHEN 2 THEN '2009-09-29 10:38:42' 
                      WHEN 3 THEN '1999-09-29 12:10:22' 
					  WHEN 4 THEN '2007-05-29 10:25:21' 
                      WHEN 5 THEN '2019-12-29 14:17:27' 
					  WHEN 6 THEN '2003-12-29 11:38:42' 
                      WHEN 7 THEN '2016-06-29 13:40:51' 
					  WHEN 8 THEN '2014-03-29 10:45:32' 
                      ELSE id
                      END
 WHERE id IN(2, 3, 4, 5, 6, 7, 8);

-- modifying email and phone column on specific id in the book_copies table
UPDATE users
SET email = 'mmeadows@gmail.com', phone = '491-524-6582'
WHERE id = 6;

-- delete 2 entries  from loan_transactions table
DELETE FROM loan_transactions
ORDER BY user_id DESC
LIMIT 2;

-- removing one column from table
ALTER TABLE users
DROP phone;

-- adding one column from in the table
ALTER TABLE users
ADD COLUMN address TEXT AFTER phone;

-- adding index on one of the column
CREATE INDEX users_name
ON users(name);