from django.db import models
import datetime


class CardCollection(models.Model):
    title = models.CharField(max_length=50)
    date_created = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["date_created"]

class Card(models.Model):
    front_text = models.CharField(max_length=255)
    back_text = models.CharField(max_length=255)
    date_created = models.DateTimeField(blank=True, null=True)
    card_collection = models.ForeignKey(CardCollection, on_delete=models.CASCADE, related_name="cards")

    def __str__(self):
        return self.front_text

    class Meta:
        ordering = ["date_created"]
