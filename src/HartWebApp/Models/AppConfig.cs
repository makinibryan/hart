using System.Collections.Generic;

namespace HartWebApp.Models
{
    public class AppConfig
    {
        public AppConfig()
        {
            Logging = new Logging();
            Features = new List<string>();
        }

        public Logging Logging { get; set; }
        public List<string> Features { get; set; }
    }
}