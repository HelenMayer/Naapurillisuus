using Microsoft.EntityFrameworkCore; 
//нужны dotnet add package Microsoft.EntityFrameworkCore.Design;  dotnet add package Microsoft.EntityFrameworkCore.SqlServer
// сделай dotnet tool install --global dotnet-ef        (ef=entityframework)

namespace Naapurillisuus.Data{
    public class DataContext : DbContext {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Client> Clients => Set<Client>(); //запись в базу в виде таблицы
    }
}