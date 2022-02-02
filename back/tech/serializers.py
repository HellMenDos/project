from rest_framework import serializers
from .models import MainCarousel, Products,Files,OurWork,OurService,Support

class ProductsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = '__all__'
        depth = 1

class MainCarouselSerializer(serializers.ModelSerializer):

    class Meta:
        model = MainCarousel
        fields = '__all__'

class OurWorkSerializer(serializers.ModelSerializer):

    class Meta:
        model = OurWork
        fields = '__all__'
        depth = 1

class OurServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = OurService
        fields = '__all__'
        depth = 1

class FilesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Files
        fields = '__all__'



class SupportSerializer(serializers.ModelSerializer):

    class Meta:
        model = Support
        fields = '__all__'
