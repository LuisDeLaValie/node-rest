CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE autores(
    id_autor      INTEGER         NOT NULL     AUTO_INCREMENT,
    nombre       VARCHAR(128)    NOT NULL,
    apellidos     VARCHAR(255)    NOT NULL,
    PRIMARY KEY(id_autor)
);

CREATE TABLE editoriales(
    id_editorial      INTEGER         NOT NULL     AUTO_INCREMENT,
    nombre           VARCHAR(255)    NOT NULL,
    PRIMARY KEY(id_editorial)
);

CREATE TABLE temas(
    id_tema      INTEGER         NOT NULL     AUTO_INCREMENT,
    nombre       VARCHAR(255)    NOT NULL,
    PRIMARY KEY(id_tema)
);

CREATE TABLE libros(
    id_libro         INTEGER         NOT NULL     AUTO_INCREMENT,
    titulo           VARCHAR(255)    NOT NULL,
    edicion          VARCHAR(32)     NOT NULL,
    fk_id_autor      INTEGER         NOT NULL,
    fk_id_editorial  INTEGER         NOT NULL,
    fk_id_tema       INTEGER         NOT NULL
    PRIMARY KEY (id_libro),
    FOREIGN KEY (fk_id_autor)     REFERENCES autores(id_autor),
    FOREIGN KEY (fk_id_editorial) REFERENCES editoriales(id_editorial),
    FOREIGN KEY (fk_id_tema)      REFERENCES temas(id_tema)
);


INSERT INTO biblioteca.autores
(nombre, apellidos)
VALUES('autor 1', 'autor'),
('autor 2', 'autor'),
('autor 3', 'autor'),
('autor 4', 'autor');

INSERT INTO biblioteca.editoriales
( nombre)
VALUES('editorail11'),('editorail12'),('editorail13'),('editorail14');


INSERT INTO biblioteca.temas
( nombre)
VALUES( 'tema1'),( 'tema2'),( 'tema3'),( 'tema4');


INSERT INTO biblioteca.libros
( titulo, edicion, fk_id_autor, fk_id_editorial, fk_id_tema)
VALUES
( 'libro1', 'pos', 1, 1, 1),
( 'libro2', 'pos', 2, 2, 2),
( 'libro3', 'pos', 3, 3, 3),
( 'libro4', 'pos', 4, 4, 4);