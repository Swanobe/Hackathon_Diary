DROP TABLE IF EXISTS diary;
DROP TABLE IF EXISTS user_account;

CREATE TABLE diary (
    diary_id  INT GENERATED ALWAYS AS IDENTITY,
    user_name VARCHAR (30),
    pit VARCHAR(160),
    peak VARCHAR(160),
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (diary_id)
);

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

INSERT INTO diary (user_name, pit, peak)
VALUES
('Joao', 'Debug assignment', 'Hackathon')