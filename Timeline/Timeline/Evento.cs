using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Timeline
{
    public class Evento
    {
        public int Id { get; set; }
        public DateTime DataHora { get; set; }
        public string Pessoa { get; set; }
        public int IdCanal { get; set; }
        public string Titulo { get; set; }
        public string Texto { get; set; }
    }
}
