var builder = WebApplication.CreateBuilder(args);
builder.Services.AddMvc();


var app = builder.Build();

var options = new DefaultFilesOptions();
options.DefaultFileNames.Clear(); 
options.DefaultFileNames.Add("public/index.html"); 
app.UseDefaultFiles(options); 

app.UseFileServer();


app.Run();
