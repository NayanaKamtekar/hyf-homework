-- Library catalog data tables
/*
	"book_details" table has name of the book, it has one record per book title
*/
CREATE TABLE `books` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*
	"book_copy" table has one record per copy of the book i.e. a library can have multiple copies of the same book then this table
	will have one copy per book
*/
CREATE TABLE `book_copies` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  `edition` varchar(255) NOT NULL,
  `book_id` int unsigned NOT NULL UNIQUE,
  `purchased_on` DATETIME NOT NULL,
  `price` int(10) unsigned,
	CONSTRAINT `fk_books` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*
	"users" table will have library users name and contact details
*/
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*
	"loan_transaction" has one record per borrowing of the book copy. A user can borrow mutliple books, and a book can be borrowed by multiple
  users (in different transactions). Thus, this table establishes many to many relation between book_copies and users tables
*/

CREATE TABLE `loan_transactions` (
  `user_id` int unsigned NOT NULL,
  `book_copy_id` int unsigned NOT NULL,
  `loaned_on` DATETIME NOT NULL,
  `due_on` DATETIME NOT NULL,
  `returned_on` DATETIME NULL,
  PRIMARY KEY(`user_id`, `book_copy_id`),
  CONSTRAINT `fk_loan_transactions_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_loan_transactions_book_copies` FOREIGN KEY (`book_copy_id`) REFERENCES `book_copies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- books
insert into books (id, name) values (1, 'Out of Africa');
insert into books (id, name) values (2, 'Anecdotes of Destiny ');
insert into books (id, name) values (3, 'Winter Tales ');
insert into books (id, name) values (4, 'Repetition');
insert into books (id, name) values (5, 'Either/Or');
insert into books (id, name) values (6, 'The Little Mermaid');
insert into books (id, name) values (7, 'The Snow Queen');
insert into books (id, name) values (8, 'The Ugly Duckling');

-- book_copies
insert into book_copies (id, edition, book_id, purchased_on, price) values (1, 'Nov1999', 8, '2000-09-29 13:38:42', 300);
insert into book_copies (id, edition, book_id, purchased_on, price) values (2, 'Jan2009', 1, '2000-09-29 23:38:42', 250);
insert into book_copies (id, edition, book_id, purchased_on, price) values (3, 'Oct1998', 4, '2000-09-29 23:38:42', 480);
insert into book_copies (id, edition, book_id, purchased_on, price) values (4, 'Dec2006', 7, '2000-09-29 23:38:42', 360);
insert into book_copies (id, edition, book_id, purchased_on, price) values (5, 'Nov2018', 2, '2000-09-29 23:38:42', 500);
insert into book_copies (id, edition, book_id, purchased_on, price) values (6, 'May2003', 6, '2000-09-29 23:38:42', 200);
insert into book_copies (id, edition, book_id, purchased_on, price) values (7, 'Feb2015', 3, '2000-09-29 23:38:42', 250);
insert into book_copies (id, edition, book_id, purchased_on, price) values (8, 'Jul2013', 5, '2000-09-29 23:38:42', 320);

-- users
insert into users (id, name, email, phone) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795');
insert into users (id, name, email, phone) values (2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467');
insert into users (id, name, email, phone) values (3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683');
insert into users (id, name, email, phone) values (4, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191');
insert into users (id, name, email, phone) values (5, 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931');
insert into users (id, name, email, phone) values (6, 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594');
insert into users (id, name, email, phone) values (7, 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640');
insert into users (id, name, email, phone) values (8, 'Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579');

-- loan_transactions
insert into loan_transactions (user_id, book_copy_id, loaned_on, due_on, returned_on ) values (4, 3, '2018-09-29 10:38:42', '2018-10-29 16:00:00','2018-10-19 14:28:12');
insert into loan_transactions (user_id, book_copy_id, loaned_on, due_on, returned_on ) values (4, 8, '2019-01-12 14:18:15', '2019-2-12 16:00:00','2019-2-05 09:19:25');
insert into loan_transactions (user_id, book_copy_id, loaned_on, due_on, returned_on ) values (6, 3, '2019-01-17 10:38:42', '2019-02-17 16:00:00','2018-10-19 14:28:12');
insert into loan_transactions (user_id, book_copy_id, loaned_on, due_on, returned_on ) values (2, 7, '2018-11-25 08:40:25', '2018-12-25 16:00:00','2018-12-10 09:36:14');
insert into loan_transactions (user_id, book_copy_id, loaned_on, due_on, returned_on ) values (1, 4, '2019-04-11 11:38:42', '2019-05-11 16:00:00',NULL);
insert into loan_transactions (user_id, book_copy_id, loaned_on, due_on, returned_on ) values (3, 1, '2019-05-14 08:18:25', '2019-06-14 16:00:00','2019-06-14 11:38:42');
insert into loan_transactions (user_id, book_copy_id, loaned_on, due_on, returned_on ) values (3, 2, '2019-06-16 11:38:42', '2019-07-16 16:00:00', NULL);

