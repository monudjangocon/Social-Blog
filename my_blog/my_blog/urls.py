from django.conf.urls import patterns, include, url
from django.http import  HttpResponse
from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'my_blog.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$','social_blog.views.home',name="home"),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^user/',include('social_blog.urls')),
     url(r'^robots\.txt$',lambda  r:HttpResponse("User-agent : *\nDisallow:",mimetype="text/plain")),
    url(r'^login', 'django.contrib.auth.views.login', {'template_name': 'login.html'}, name='login'),
    url(r'^register/$','social_blog.views.signup'),
   #(r'^accounts/', include('registration.backends.default.urls')),
    url(r'^members/$','social_blog.views.user_all'),

)


