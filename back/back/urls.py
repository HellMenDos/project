from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi



urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/main/', include('main.urls')),
]
