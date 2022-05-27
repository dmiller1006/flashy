from rest_framework import serializers
from .models import Card, CardCollection


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'front_text', 'back_text', 'date_created', 'card_collection']

class CardCollectionSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True, read_only=True)

    class Meta:
        model = CardCollection
        fields = ['id', 'title', 'date_created', 'cards']
