DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    diary_id  INT GENERATED ALWAYS AS IDENTITY,
    PRIMARY KEY (diary_id)
)