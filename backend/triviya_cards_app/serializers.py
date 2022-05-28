from rest_framework import serializers
from .models import Card, FlashSet


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'front_text', 'back_text', 'date_created', 'flashset']

class FlashSetSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True, read_only=True)

    class Meta:
        model = FlashSet
        fields = ['id', 'title', 'date_created', 'cards']
