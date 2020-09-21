using Hart.Data.Access;
using Hart.Domain;
using Hart.Domain.EntityModels;
using Hart.Domain.Interfaces.Repositories;
using Hart.Domain.Interfaces.Services;
using Hart.Domain.Services;
using Hart.Infrastructure.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace HartWeb
{
    public class Startup
    {
        private readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            /*
             REMINDER: DON'T ADD DI CODE FOR GETTING APP-SETTINGS.JSON THIS WILL RESULT IN 
             THIS MISLEADING ERROR - "HTTP Error 502.5 - ANCM Out-Of-Process Startup Failure"
            */


            services.AddScoped<IFormsService, FormsService>();
            services.AddSingleton<IEmailService, EmailService>();
            services.AddScoped<IContactFormRepository, ContactFormRepository>();
                        
            services.AddControllersWithViews(c =>
            {
                c.Filters.Add(new ProducesAttribute("application/json"));
            });

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            // Allows redirect separate port for backend api
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder => builder
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin()
                );
            });

            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));
            services.AddDbContext<HartAppsDbContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("AppDbContext")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(MyAllowSpecificOrigins);

            //app.UseHttpsRedirection();
           
            app.UseSpaStaticFiles();
            app.UseStaticFiles();          
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "api/{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }    
}
