namespace HartWeb.Models
{
    public class Logging
    {
        public bool Log { get; set; }
        public bool Error { get; set; }
        public bool Trace { get; set; }
        public bool Debug { get; set; }
        public bool Console { get; set; }
        public bool ApplicationInsights { get; set; }
        public string ApplicationInsightsInstrumentationKey { get; set; }
    }
}