from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )
    r1 = models.ForeignKey(
        "home.CustomText",
        on_delete=models.SET_DEFAULT,
        default="123",
        null=True,
        blank=True,
        related_name="customtext_r1",
    )
    r2 = models.ForeignKey(
        "users.User",
        on_delete=models.SET_DEFAULT,
        default="GGGG",
        null=True,
        blank=True,
        related_name="customtext_r2",
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Ghhh(models.Model):
    "Generated Model"
    r1 = models.ForeignKey(
        "home.CustomText",
        on_delete=models.SET_DEFAULT,
        default="ede",
        null=True,
        blank=True,
        related_name="ghhh_r1",
    )


class VBG1(models.Model):
    "Generated Model"
    r1 = models.BigIntegerField()
