from django.conf.urls import url,patterns,include
from views import blog_sitemap,UserProfileDetail

sitemaps={
    'blogs': blog_sitemap
}

urlpatterns=patterns('',
                   #url(r'^(?P<blog_id>\d+)/$','social_blog.views.blog_request'),
                   url(r'^about/$','social_blog.views.about'),

                   url(r'^contact/$','social_blog.views.contact'),
                   #(r'^sitemap\.xml$','django.contrib.sitemaps.views.sitemap',{'sitemaps':sitemaps}),
                  url(r'^update_profile/$','social_blog.views.update_profile'),
                  url(r'^profile/(?P<profile_id>\d+)/$','social_blog.views.profile'),
                  url(r'^your_profile/$','social_blog.views.your_profile'),

                     )

handler404='views.custom_404'
handler500='views.custom_500'

