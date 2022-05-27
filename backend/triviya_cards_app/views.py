from django.shortcuts import render
from .serializers import CardSerializer, CardCollectionSerializer
from rest_framework import viewsets
from .models import Card, CardCollection


# Create your views here.
class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class CardCollectionViewSet(viewsets.ModelViewSet):
    queryset = CardCollection.objects.all()
    serializer_class = CardCollectionSerializer