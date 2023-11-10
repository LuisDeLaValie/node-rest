
# use biblioteca;


/*create table autores(
    id_usuario integer not null auto_increment,
    nombre varchar(128) not null,
    apellidos varchar(255) not null,
    primary key (id_usuario)
);*/

create table editoriales(
    id_editorial integer not null auto_increment,
    nombre varchar(255) not null,
    primary key (id_editorial)
);

create table temas(
    id_tema integer not null auto_increment,
    nombre varchar(255) not null,
    primary key (id_tema)
);

create TABLE libros(
    id_libro integer not null auto_increment,
    titulo varchar(255) not null,
    edicion varchar(32) not null,
    fk_id_autor integer not null,
    fk_id_editorial integer not null,
    fk_id_tema integer not null,
    primary key (id_libro),
    foreign key (fk_id_autor) references autores(id_usuario),
    foreign key (fk_id_editorial) references editoriales(id_editorial),
    foreign key (fk_id_tema) references temas(id_tema)
);