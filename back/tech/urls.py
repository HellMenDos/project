from .views import *
from django.conf.urls import include
from django.contrib import admin
from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="INTERVIEW API",
      default_version='v1',
      description="INTERVIEW API",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('products/all/',getProducts.as_view(),name='all_products'),
    path('products/one/<int:pk>/',getProduct.as_view(),name='one_products'),
    path('work/all/',getOurWorks.as_view(),name='all_work'),
    path('work/one/<int:pk>/',getOurWork.as_view(),name='one_work'),
    path('service/all/',getOurServices.as_view(),name='all_service'),
    path('service/one/<int:pk>/',getOurService.as_view(),name='one_service'),
    path('proposal/',createProposal.as_view(),name='proposal'),
    path('file/<int:pk>/',getFile.as_view(),name='file'),
    path('carousel/all/',getMainCarousels.as_view(),name='all_carousel'),
    path('carousel/one/<int:pk>/',getMainCarousel.as_view(),name='one_carousel'),
    path('swagger(?P<format>\.json|\.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]