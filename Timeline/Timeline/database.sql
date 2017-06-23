DROP TABLE tbTimeline

CREATE TABLE tbTimeline
(
	id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	datahora DATETIME NOT NULL DEFAULT GETDATE(),
	pessoa NVARCHAR(100) NOT NULL,
	idCanal INT NOT NULL,
	titulo NVARCHAR(200) NOT NULL,
	texto NVARCHAR(2000) NULL
)
SELECT id, datahora, pessoa, pessoa, idCanal, titulo, texto FROM tbTimeline ORDER BY id

create user teste with password='segredo.007'
alter user teste with password='segredo.2017'

alter role db_datareader add member teste
alter role db_datawriter add member teste

select * from sys.database_principals

insert tbTimeline(pessoa, idCanal, titulo, texto) VALUES ('fabricio', 1, 'chamada nao atendida', 'bla bla bla')
