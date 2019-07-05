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