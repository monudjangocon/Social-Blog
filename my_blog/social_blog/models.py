from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
import datetime
class Blog(models.Model):
    title=models.CharField(max_length=200,unique=True)
    date_added=models.DateTimeField(default=datetime.datetime.now())
    article=models.TextField(max_length=500,null=True,blank=True)
    image=models.TextField(max_length=500,null=True,blank=True)
    tags=models.TextField(max_length=200,null=True,blank=True)
    author=models.CharField(max_length=100,null=True,blank=True)


    def get_absoute_url(self):
        return '/blog/%i' % self.pk

class UserProfile(models.Model):
    user=models.OneToOneField(User,unique=True)
    bio=models.TextField(blank=True,null=True)
    #image1=models.ImageField(upload_to="images")

    def __unicode__(self):
        return self.user.username

def create_profile(sender,instance,created,**kwargs):
    if created:
        profile,created=UserProfile.objects.get_or_create(user=instance)

post_save.connect(create_profile,sender=User)


