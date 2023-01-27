using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pokemon.Services.Entities
{
    public class CadastroRequest
    {
        public string login { get; set; }
        public string password { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        public string usuario { get; set; }
        public DateTime dataNascimento { get; set; }
        public int telefone { get; set; }
    }
}
