var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMvc();
             

var app = builder.Build();
app.UseFileServer();


app.Run();
