from django.contrib import admin
from .models import Products,Files,OurWork,OurService,Support
# Register your models here.
admin.site.site_header = 'СК СТРОЙ ПРОЕКТ'


@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ('id','title')
    search_fields = ("title__startswith", )
    filter_horizontal = ('files',)


@admin.register(Files)
class FilesAdmin(admin.ModelAdmin):
    list_display = ('id','title')
    search_fields = ("title__startswith",)


@admin.register(OurWork)
class OurWorkAdmin(admin.ModelAdmin):
    list_display = ('id','title')
    search_fields = ("title__startswith",)
    filter_horizontal = ('files',)


@admin.register(OurService)
class OurServiceAdmin(admin.ModelAdmin):
    list_display = ('id','title')
    search_fields = ("title__startswith",)
    filter_horizontal = ('files',)


@admin.register(Support)
class SupportAdmin(admin.ModelAdmin):
    list_display = ('id','name','phone','date')
    search_fields = ("name__startswith",)
    list_filter = ('phone','name','date' )
    readonly_fields = ('date',)
