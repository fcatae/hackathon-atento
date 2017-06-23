using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace Timeline
{
    public class Repository
    {
        SqlConnection _connection;

        public Repository()
        {
            _connection = new SqlConnection("Server=sqlcobranca.database.windows.net;User=teste;Password=segredo.2017;Database=dbtime");            
        }

        public IEnumerable<Evento> ListEventos()
        {
            string CMDTEXT = "SELECT id, datahora, pessoa, idCanal, titulo, texto FROM tbTimeline ORDER BY id";
            var listaEventos = new List<Evento>();

            using (_connection)
            {
                _connection.Open();

                SqlCommand cmd = new SqlCommand(CMDTEXT, _connection);

                var reader = cmd.ExecuteReader();

                while(reader.Read())
                {
                    var evento = new Evento()
                    {
                        Id = (int)reader["id"],
                        DataHora = (DateTime)reader["datahora"],
                        Pessoa = (string)reader["pessoa"],
                        IdCanal = (int)reader["idCanal"],
                        Titulo = (string)reader["titulo"],
                        Texto = (string)reader["texto"]
                    };

                    listaEventos.Add(evento);
                }
            }

            return listaEventos;
        }
    }
}
