-- create database landfill_review;
use landfill_review;


-- CREATE USER 'reviewapp'@'localhost' IDENTIFIED BY 'password';

-- GRANT ALL PRIVILEGES ON landfill_review.* TO 'reviewapp'@'localhost';

-- CREATE TABLE users (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     password VARCHAR(200) NULL,
--     _created DATETIME DEFAULT CURRENT_TIMESTAMP
-- );


CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    content VARCHAR(200) NOT NULL,
    landfill VARCHAR(200) NOT NULL,
    _created DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE mentions (
--     userid INT NOT NULL,
--     chirpid INT NOT NULL,
--     PRIMARY KEY (userid , chirpid),
--     FOREIGN KEY (userid) REFERENCES users (id),
--     FOREIGN KEY (chirpid) REFERENCES chirps (id)
-- );
use landfill_review;

ALTER TABLE review 
ADD CONSTRAINT fk_users_id
FOREIGN KEY (userid)
REFERENCES users(id);


