from django.shortcuts import render
from .serializers import CardSerializer, FlashSetSerializer
from rest_framework import viewsets
from .models import Card, FlashSet


# Create your views here.
class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class FlashSetViewSet(viewsets.ModelViewSet):
    queryset = FlashSet.objects.all()
    serializer_class = FlashSetSerializer