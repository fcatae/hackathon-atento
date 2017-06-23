CREATE TABLE tbTimeline
(
	id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
	datahora DATETIME NOT NULL DEFAULT GETDATE(),
	pessoa NVARCHAR(100) NOT NULL,
	idCanal INT NOT NULL,
	titulo NVARCHAR(200) NOT NULL,
	texto NVARCHAR(2000) NULL
)