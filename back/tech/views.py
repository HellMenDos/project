from django.shortcuts import render
from rest_framework import generics
from .models import MainCarousel, Products,Files,OurWork,OurService,Support
from .serializers import MainCarouselSerializer, OurServiceSerializer, OurWorkSerializer, ProductsSerializer,FilesSerializer, SupportSerializer

#Carousel
class getMainCarousel(generics.RetrieveAPIView):
    queryset = MainCarousel.objects.all()
    serializer_class = MainCarouselSerializer

class getMainCarousels(generics.ListAPIView):
    queryset = MainCarousel.objects.all()
    serializer_class = MainCarouselSerializer


#Products
class getProduct(generics.RetrieveAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
 
class getProducts(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

#Files
class getFile(generics.RetrieveAPIView):
    queryset = Files.objects.all()
    serializer_class = FilesSerializer



#OurWork
class getOurWork(generics.RetrieveAPIView):
    queryset = OurWork.objects.all()
    serializer_class = OurWorkSerializer
 
class getOurWorks(generics.ListAPIView):
    queryset = OurWork.objects.all()
    serializer_class = OurWorkSerializer


#OurService
class getOurService(generics.RetrieveAPIView):
    queryset = OurService.objects.all()
    serializer_class = OurServiceSerializer
 
class getOurServices(generics.ListAPIView):
    queryset = OurService.objects.all()
    serializer_class = OurServiceSerializer

#Support
class createProposal(generics.CreateAPIView):
    queryset = Support.objects.all()
    serializer_class = SupportSerializer