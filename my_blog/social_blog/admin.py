from django.contrib import admin
from models import UserProfile
from .models import Blog
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from models import UserProfile

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title',)

admin.site.register(Blog,BlogAdmin)

class UserProfileInline(admin.StackedInline):
    model=UserProfile
    can_delete=False

class UserProfileAdmin(UserAdmin):
    inlines=(UserProfileInline,)


admin.site.register(UserProfile)
admin.site.unregister(get_user_model())
admin.site.register(get_user_model(),UserProfileAdmin)
