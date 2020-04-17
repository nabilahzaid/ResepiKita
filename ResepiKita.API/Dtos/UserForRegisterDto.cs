using System.ComponentModel.DataAnnotations;

namespace ResepiKita.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(12, MinimumLength = 4, ErrorMessage = "You must specify password between 4 to 12 characters")]
        public string Password { get; set; }
    }
}