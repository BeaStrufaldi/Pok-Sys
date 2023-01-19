using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pokemon.Services.Entities
{
    public class LoginRequest
    {
        public string? login { get; set; }
        public string? password { get; set; }
    }
}
