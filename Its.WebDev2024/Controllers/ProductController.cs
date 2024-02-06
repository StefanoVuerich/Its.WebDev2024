namespace Its.WebDev2024.Controllers
{
    using Its.WebDev2024.Persistence.Repository;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("/[controller]/[action]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repository;

        public ProductController(IProductRepository repository)
        {
            _repository = repository;
        }
    }
}
