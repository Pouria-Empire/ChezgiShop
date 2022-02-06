# Generated by Django 3.2.6 on 2021-08-20 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_project_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(upload_to='assets/pro_images/'),
        ),
        migrations.AlterField(
            model_name='project',
            name='url',
            field=models.URLField(null=True),
        ),
    ]
