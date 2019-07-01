CREATE TABLE authors (
  id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE articles (
id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
title varchar(255) NOT NULL,
content TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tags (
id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(255) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE article_authors (
article_id int unsigned NOT NULL,
author_id int unsigned NOT NULL,
PRIMARY KEY (article_id, author_id),
CONSTRAINT fk_author_article_id FOREIGN KEY (article_id) REFERENCES articles (id) ON DELETE CASCADE,
CONSTRAINT fk_article_author_id FOREIGN KEY (author_id) REFERENCES authors (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE article_tags (
article_id int unsigned NOT NULL,
tag_id int unsigned NOT NULL,
PRIMARY KEY (article_id, tag_id),
CONSTRAINT fk_tag_article_id FOREIGN KEY (article_id) REFERENCES articles (id) ON DELETE CASCADE,
CONSTRAINT fk_article_tag_id FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- articles
-- SELECT * FROM articles;
INSERT INTO articles (id, title, content) VALUES (1, 'BREAKING NEWS: Water is wet!', 'Scientists have discovered that water is wet, it is amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
INSERT INTO articles (id, title, content) VALUES (2, 'BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!', 'Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ');

UPDATE articles
SET title = 'Heavy Snowfall Expected this Weekend', content= 'Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
WHERE id = 2;

INSERT INTO articles (id, title, content) VALUES (3, 'BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!', 'Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ');

-- authors
-- SELECT * FROM authors;
INSERT INTO authors (id, name) VALUES (5, 'Aliya Awad');
INSERT INTO authors (id, name) VALUES (12, 'Igor Vladimir');
INSERT INTO authors (id, name) VALUES (17, 'Jane Jones');
INSERT INTO authors (id, name) VALUES (3, 'Kim Jensen');

-- tags
-- SELECT * FROM tags;
INSERT INTO tags (id, name) VALUES (1, 'science');
INSERT INTO tags (id, name) VALUES (2, 'breaking');
INSERT INTO tags (id, name) VALUES (3, 'weather');
INSERT INTO tags (id, name) VALUES (NULL, 'winter');
INSERT INTO tags (id, name) VALUES (NULL, 'clickbait');