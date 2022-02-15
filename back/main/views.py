from django.shortcuts import render
from rest_framework import generics
from .models import Products,Files,MainCarousel,OurWork,OurService,Support,Page
from .serializers import OurServiceSerializer, OurWorkSerializer, ProductsSerializer,FilesSerializer,MainCarouselSerializer, SupportSerializer,PageSerializer

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

#MainCarousel
class getMainCarousel(generics.RetrieveAPIView):
    queryset = MainCarousel.objects.all()
    serializer_class = MainCarouselSerializer

class getMainCarousels(generics.ListAPIView):
    queryset = MainCarousel.objects.all()
    serializer_class = MainCarouselSerializer
 

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

#Page
class getOurPage(generics.RetrieveAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
 
class getOurPages(generics.ListAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer


#Support
class createProposal(generics.CreateAPIView):
    queryset = Support.objects.all()
    serializer_class = SupportSerializer
    authentication_classes = []


