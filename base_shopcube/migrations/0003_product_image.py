# Generated by Django 4.0 on 2022-01-01 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base_shopcube', '0002_order_shippingaddress_review_orderitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
