# Generated by Django 4.0.4 on 2022-05-24 23:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('triviya_cards_app', '0002_remove_card_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='card_collection',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cards', to='triviya_cards_app.cardcollection'),
        ),
    ]
