from django.contrib import admin
from .models import Card, FlashSet

# Register your models here.
admin.site.register([Card, FlashSet])