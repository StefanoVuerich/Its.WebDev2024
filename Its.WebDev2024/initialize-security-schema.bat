dotnet ef migrations add ApplicationDbContextMigration --context ApplicationDbContext
dotnet ef database update
del Migrations /q