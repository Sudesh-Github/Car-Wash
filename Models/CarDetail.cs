using System;
using System.Collections.Generic;

namespace Myproject.Models
{
    public partial class CarDetail
    {
        public string Name { get; set; } = null!;
        public string Emailid { get; set; } = null!;
        public string ContactNumber { get; set; } = null!;
        public string CarModel { get; set; } = null!;
        public string ServiceType { get; set; } = null!;
        public string PreferredTime { get; set; } = null!;
        public string Message { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string Subscription { get; set; } = null!;
    }
}
