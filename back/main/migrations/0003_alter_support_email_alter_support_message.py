# Generated by Django 4.0 on 2022-01-16 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_products_describe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='support',
            name='email',
            field=models.CharField(max_length=200, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='support',
            name='message',
            field=models.TextField(max_length=200, verbose_name='Сообщение'),
        ),
    ]
