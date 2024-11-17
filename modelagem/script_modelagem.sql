
USE patronum;

CREATE TABLE casa (
	id_casa INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	fundador varchar(45)
);

CREATE TABLE pessoa (
	id_pessoa INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	dt_nasc date,
	senha VARCHAR(50),
	fk_casa INT,
	FOREIGN KEY (fk_casa) REFERENCES casa(id_casa)
);

CREATE TABLE interacoes (
	id INT PRIMARY KEY AUTO_INCREMENT,
	numero int,
	dt_hora datetime default now(),
	fk_pessoa INT,
	FOREIGN KEY (fk_pessoa) REFERENCES pessoa(id_pessoa)
);

select * from interacoes;


create table quizzes (
	id_quizz INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45), -- nome do quizz
    dt_hora datetime default now(),
	pontuacao float,
	fk_pessoa1 INT,
	FOREIGN KEY (fk_pessoa1) REFERENCES pessoa(id_pessoa)
);

select * from pessoa;


select count(id) as quantidade,
	case 
	WHEN numero = 1 THEN 'Pedra Filosofal'
    WHEN numero = 2 THEN 'Câmara Secreta'
    WHEN numero = 3 THEN 'Prisioneiro de Azkaban'
    WHEN numero = 4 THEN 'Cálice de Fogo'
    WHEN numero = 5 THEN 'Ordem da Fênix'
    WHEN numero = 6 THEN 'Enigma do Principe'
    WHEN numero = 7 THEN 'Relíquias da Morte'
    WHEN numero = 8 THEN 'Criança Amaldiçoada'
    ELSE ''
    END AS 'nome'
	from interacoes 
    where numero = 1 or numero = 2 or numero = 3 or numero = 4 or numero = 5 or numero = 6 or numero = 7 or numero = 8 
    group by numero 
    order by numero;

select count(id_casa) as votos, casa.nome as casa 
	from casa 
		join pessoa on pessoa.fk_casa = casa.id_casa
        group by casa.nome;

SELECT count(id_pessoa) as usuarios FROM pessoa;

INSERT INTO casa (nome, fundador)
VALUES 
    ('Grifinória', 'Godric Gryffindor'),
    ('Lufa-Lufa', 'Helga Hufflepuff'),
    ('Corvinal', 'Rowena Ravenclaw'),
    ('Sonserina', 'Salazar Slytherin');
    
select * from pessoa;
