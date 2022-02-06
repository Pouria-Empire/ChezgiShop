from django.db import models


class Project(models.Model):
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    price = models.IntegerField()
    image = models.ImageField(upload_to='assets/pro_images/')
    url = models.URLField(blank=True)

    def __str__(self):
        return self.title