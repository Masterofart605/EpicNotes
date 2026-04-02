var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(c => 
c.AddDefaultPolicy (p=> p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
var app = builder.Build();

app.UseCors();

app.MapGet("/", () => "Hello World!");
app.MapGet("/somedata", () => new{status = "OK"});

app.MapPost(
    "/profilePicture", 
    (IFormFile file)=>
    {
    Console.WriteLine($"filename: {file.FileName}");

    using (var stream = new FileStream("uploads/"+ file.FileName, FileMode.Create)){
        file.CopyTo(stream);
    }
    }
).DisableAntiforgery();


app.Run();
