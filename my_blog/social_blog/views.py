from django.shortcuts import render,redirect,render_to_response,redirect
from django.contrib.sitemaps import Sitemap
import datetime
from .models import Blog
from  django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout,get_user_model
from forms import SignUpForm
from models import UserProfile
from django.views.generic import DetailView
from django.contrib.auth.decorators import login_required
from django.template import RequestContext
from forms import UserProfileForm
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.conf import settings


def blog_request(request,blog_id):
    article=Blog.objects.get(pk=blog_id)
    return render(request,'blog.html',{'article':article})


def home(request):
    user=request.user
    return render_to_response('user_profile/timeline.html',{'user':user },context_instance=RequestContext(request))

def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')

def custom_500(request):
    return render(request,'500.html')

def custom_404(request):
    return render(request,'404.html')

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if not form.is_valid():
            return render(request, 'signup.html', {'form': form})
        else:
            username = form.cleaned_data.get('username')
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            User.objects.create_user(username=username, password=password, email=email)
            user = authenticate(username=username, password=password)
            login(request, user)
            subject="registration"
            message="%s %s" % (username,email)
            emailFrom=email
            emailTo=[settings.EMAIL_HOST_USER]

            send_mail(subject, message, emailFrom,emailTo, fail_silently=False)
            return redirect('/login/')
    else:
        return render(request, 'signup.html', {'form': SignUpForm()})
@login_required
def update_profile(request):
    user_profile=UserProfile.objects.get(user=request.user)
    form=UserProfileForm(initial={'bio':user_profile.bio})
    return render_to_response('user_profile/update.html',{'form':form},context_instance=RequestContext(request))

@login_required
def your_profile(request):
    if request.method=='POST':
        form= UserProfileForm(request.POST)
        if form.is_valid():
            user_profile=UserProfile.objects.get(user=request.user)
            bio=form.cleaned_data['bio']
            user_profile.bio=bio
            user_profile.save()
            return redirect('/user/profile/' + str(user_profile.id))
    else:
        form=UserProfileForm()
    return redirect('/user/update_profile')

def profile(request,profile_id):
    if profile_id=='0':
        if request.user.is_authenticated():
            user_profile=UserProfile.objects.get(user=request.user)
    else:
         user_profile=UserProfile.objects.get(pk=profile_id)

    return render_to_response('user_profile/profile.html',{'user_profile':user_profile},context_instance=RequestContext(request))



class blog_sitemap(Sitemap):
    changefreq="daily"
    priority=1.0
    lastmod=datetime.datetime.now()

    def items(self):
        return Blog.objects.all()


class UserProfileDetail(DetailView):
    model=get_user_model()
    slug_field="username"
    template_name="user_detail.html"

    def get_object(self,queryset=None):
        user=super(UserProfileDetail,self).get_object(queryset)
        UserProfile.objects.get_or_create(user=user)
        return user


def user_all(request):
    users=UserProfile.objects.all()
    return render_to_response('user_profile/member.html',{'users':users},context_instance=RequestContext(request))


