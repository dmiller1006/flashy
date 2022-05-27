from django.contrib import admin
from .models import Card, CardCollection

# Register your models here.
admin.site.register([Card, CardCollection])